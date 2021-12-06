<template>
  <div>
    <div v-if="loading" class="spinner-border loading-spinner text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    <div v-else class="row show-spinner">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h1>{{data[table_name]?.table_info?.display_name}}</h1>
            <div class="row mt-2 buton-rowu">
              <div class="col-12 buton-alt-rowu" style="display: flex; justify-content: space-between;">
                <div class="form-group">
                  <div class="btn-group dropright">
                    <a class="btn btn-outline-secondary collapsed" data-toggle="collapse" href="#collapseExample"
                      :style="{'border-radius':radius}" role="button" aria-expanded="false"
                      aria-controls="collapseExample" @click="getColumn">
                      <i class="iconsminds-magnifi-glass mx-1"></i>Ara
                    </a>
                  </div>
                  <div class="dropdown d-inline-block ">

                    <a class="btn btn-outline-secondary dropdown-toggle mx-1" href="#" role="button"
                      id="dropdownMenuLink" :style="{'border-radius':radius}" data-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false">
                      {{limit}}
                    </a>
                    <div class="dropdown-menu text-dark" aria-labelledby="dropdownMenuLink">
                      <a class="dropdown-item" :class="limit==5?'active text-light':''" @click="changeLimit(5)">5</a>
                      <a class="dropdown-item" :class="limit==10?'active text-light':''" @click="changeLimit(10)">10</a>
                      <a class="dropdown-item" :class="limit==25?'active text-light':''" @click="changeLimit(25)">25</a>
                      <a class="dropdown-item" :class="limit==50?'active text-light':''" @click="changeLimit(50)">50</a>
                      <a class="dropdown-item" :class="limit==100?'active text-light':''"
                        @click="changeLimit(100)">100</a>
                      <a class="dropdown-item" :class="limit==200?'active text-light':''"
                        @click="changeLimit(200)">200</a>
                    </div>
                  </div><!-- Limit seçimi -->
                  <button class="btn btn-outline-secondary mx-1 ciktiBtn" @click="ciktiAl" :style="{'border-radius':radius}">
                    <i class="simple-icon-printer"></i>Çıktı
                  </button><!-- Çıktı butonu -->


                </div><!-- Butonlar -->
                <div class="form-group">
                  <button class="btn btn-secondary mx-1" data-toggle="modal" data-backdrop="static"
                    :style="{'border-radius':radius}" :data-target="'#silinmis-modal'+table_name">
                    <i class="simple-icon-trash"></i>Silinmiş Kayıtlar
                  </button>
                  <button :class="buttonVisible?.ekle==false?'d-none':''" class="btn btn-primary mx-1" data-toggle="modal" data-backdrop="static"
                    :style="{'border-radius':radius}" :data-target="'#ekle-modal'+table_name">
                    Ekle
                  </button>
                </div><!-- Ekle butonu -->
              </div>
            </div><!-- Butonların rowu -->


            <div class="row collapse border my-2 pt-3 mx-2 px-2" id="collapseExample">
              <div class="col-12 col-md-4">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Kolon</label>
                  <select class="form-control" v-model="filter_column">
                    <option v-for="d in data[table_name]?.columns" :key="d" :value="d">
                      {{d.display_name}}
                    </option>
                  </select>
                </div>
              </div><!-- Filtre Kolonu seçimi -->
              <div class="col-12 col-md-4">
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Tip</label>
                  <select class="form-control" v-model="filter_type"
                    :disabled="filter_column?.gui_type_name=='select' || filter_column?.gui_type_name=='select:static'">
                    <option value="1">Seçiniz</option>
                    <option value="1">Eşittir</option>
                    <option value="2">Eşit Değildir</option>
                    <option value="4">Büyüktür</option>
                    <option value="3">Küçüktür</option>
                  </select>
                </div>
              </div><!-- Filtre Tipi seçimi -->
              <div class="col-12 col-md-4">
                <label for="exampleFormControlSelect1">Değer</label>

                <div v-if="filter_column?.gui_type_name=='select' || filter_column?.gui_type_name=='select:static'">
                  <select class="form-control" v-model="filter_value">
                    <option v-for="c in column[filter_column.name]" :key="c" :value="c.id">
                      {{c.text}}
                    </option>
                  </select>
                </div>

                <div v-if="filter_column?.gui_type_name=='text' || filter_column?.gui_type_name=='string'">
                  <input type="text" class="form-control" v-model="filter_value">
                </div>

                <div v-if="filter_column?.gui_type_name=='date'">
                  <input type="date" class="form-control" v-model="filter_value">
                </div>

                <div v-if="filter_column?.gui_type_name=='numeric'">
                  <input type="number" class="form-control" v-model="filter_value">
                </div>

                <div
                  v-if="filter_column?.gui_type_name=='boolean' || filter_column?.gui_type_name=='boolean:fastchange'">
                  <select class="form-control" v-model="filter_value">
                    <option value="true">Evet</option>
                    <option value="false">Hayır</option>
                  </select>
                </div>



              </div><!-- Filtre Değeri seçimi -->
              <div class="col-12">
                <div class="form-group float-right">
                  <button class="btn btn-secondary mx-1" @click="filtre_temizle">Temizle</button>
                  <button class="btn btn-primary mx-1" @click="filtrele">Filtrele</button>
                </div>
              </div>
            </div><!-- Filtreleme butonu -->
            <div style="overflow-x:auto; overflow-y:hidden;" :style="{'border-radius':radius}">
              <table class="table table-hover" :id="table_name" style="min-height: 10rem;">
                <caption class="tableexport-caption d-none">
                  <button class="btn btn-outline-primary btn-sm mx-1" @click="ciktiAlPdf()">PDF</button>
                </caption>
                <thead class="tablo-baslik">
                  <tr>
                    <th style="width:50px !important">#</th>
                    <th v-for="td in data[table_name]?.columns" :key="td"  style="cursor:pointer" class="thsay"
                      :class="visible[td.name]==false?'d-none':''">
                      <div @click="sirala(td)">
                        <i class="iconsminds-go-bottom" v-if="sorts[td.name] == true"></i>
                        <i class="iconsminds-go-top" v-if="sorts[td.name] == false"></i>
                        {{td.display_name}}
                      </div>
                    </th>
                  </tr>
                </thead>
                <!--Tablo başlığı-->
                <tbody>
                  <tr v-for="tr in data[table_name]?.records" :key="tr"><!--Tablo Sütunları-->
                    <td style="width:50px !important">

                      <div class="btn-group dropright">
                        <button type="button" class="btn btn-outline-primary btn-sm tdicibuton"
                          style="padding:5px; padding-left:8px; border:none" data-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <i class="iconsminds-pen-2 i-2" style="color:var(--theme-color-1);"></i>
                        </button>
                        <div class="dropdown-menu" x-placement="right-start"
                          style="position: absolute; z-index:1; will-change: transform; top: 0px; left: 0px; transform: translate3d(108px, 0px, 0px);">
                          <router-link :to="detay_link+tr.id" class="dropdown-item  text-secondary" v-if="detay_link">
                            Detay
                          </router-link>
                          <a class="dropdown-item text-secondary" v-if="!detay_link" @click="detailId=tr.id"
                            data-toggle="modal" data-backdrop="static"
                            :data-target="'#detay-modal'+table_name">Detay</a>
                          <a class="dropdown-item  text-secondary" data-toggle="modal" data-backdrop="static" :class="buttonVisible?.duzenle==false?'d-none':''"
                            :data-target="'#duzenle-modal'+table_name" @click="updateId=tr.id">
                            Düzenle
                          </a>
                          <a class="dropdown-item text-secondary" data-toggle="modal" :data-target="'#gecmis-modal'+table_name+tr.id" :class="buttonVisible?.gecmisKayitlar==false?'d-none':''"
                            @click="gecmisId=tr.id">
                            Geçmiş Kayıtlar
                          </a>
                          <a class="dropdown-item text-secondary" @click="sil(tr.id)" :class="buttonVisible?.sil==false?'d-none':''">Sil</a>
                        </div>
                      </div>
                    </td><!-- Detay Düzenle Sil butonu -->

                    <td v-for="td in data[table_name]?.columns" :key="td"
                      :class="visible[td.name]==false?'d-none':'baslikSayi'"> <!--Tablo Satırları-->
                      <span v-if="td.name=='state'" class="d-flex justify-content-center">
                        <i class="simple-icon-check text-success" v-if="tr[td.name]==true"></i>
                        <i class="simple-icon-close text-danger" v-else></i>
                      </span>
                      <span v-else>{{tr[td.name]}}</span>
                      
                      
                    </td><!-- Tablo içeriği -->
                    <!--div class="row collapse border my-2 pt-3" :id="'#gizliTablo'+tr.id"> sa</div-->
                  </tr>

                </tbody>
              </table>
            </div><!-- Tablo içeriği -->
            <div class="row ">
              <div class="col-12 tablo-footer" style="display: flex; justify-content: space-between; align-items: center;">
                Toplam {{data[table_name]?.all_records_count}} adet kayıt bulundu
                <nav class="my-2">
                  <ul class="pagination pagination-sm mb-0">
                    <li class="page-item" @click="ilk" :class="page==1?'d-none':''">
                      <a class="page-link first" href="#">
                        <i class="simple-icon-control-start"></i>
                      </a>
                    </li>
                    <li class="page-item " @click="onceki" :class="page-1<1?'d-none':''">
                      <a class="page-link prev" href="#">
                        <i class="simple-icon-arrow-left"></i>
                      </a>
                    </li>
                    <li class="page-item" v-for="pg in data[table_name]?.pages" :key="pg" @click="sayfa(pg)"
                      :class="pg==page?'active':'' || pg<page-3?'d-none':'' || pg>page+3?'d-none':''">
                      <a class="page-link" v-if="pg==page-3">...</a>
                      <a class="page-link" :class="pg==page-3?'d-none':'' || pg==page+3?'d-none':''">{{pg}}</a>
                      <a class="page-link" v-if="pg==page+3">...</a>
                    </li>
                    <li class="page-item " @click="sonraki" :class="page+1>data[table_name]?.pages?'d-none':''">
                      <a class="page-link next" href="#" aria-label="Next">
                        <i class="simple-icon-arrow-right"></i>
                      </a>
                    </li>
                    <li class="page-item " @click="son" :class="data[table_name]?.pages==page?'d-none':''">
                      <a class="page-link last" href="#">
                        <i class="simple-icon-control-end"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
                {{(limit*(page-1))}}-{{limit*page}} arasındaki kayıtlar gösteriliyor
              </div>
            </div><!-- Sayfalama -->
          </div>
        </div>
      </div>
    </div>
    <ekleModal :table_name="table_name" @refresh="getTable" :filters="filters" :input_visible="input_visible"/>
    <duzenleModal :table_name="table_name" :id="updateId" @update="getTable" :input_visible="input_visible" :filters="filters"/>
    <detayModal :table_name="table_name" :id="detailId" />
    <gecmisModal :table_name="table_name" :id="gecmisId" />
    <silinmisModal :table_name="table_name" />
  </div>
</template>

<script>
  import Swal from 'sweetalert2';
  import axios from 'axios'
  import TableExport from 'tableexport'
  import $ from 'jquery'

  import('@/assets/css/angaryos-front.css')

  import duzenleModal from '@/components/angaryos/duzenle-modal.vue'
  import ekleModal from '@/components/angaryos/ekle-modal.vue'
  import detayModal from '@/components/angaryos/detay-modal.vue'
  import gecmisModal from '@/components/angaryos/gecmis-modal'
  import silinmisModal from '@/components/angaryos/silinmis-modal'
  export default {
    props: {
      table_name: String,//Tablonun ismi
      detay_link: String,//Detay sayfasına gidecek link
      filters: Object,//Filtreleme (Carinin alt sayfasındaki adresler gibi)
      visible: {
        type: Object,
        default: function () {
          return {
            id: false,
            created_at: false,
            updated_at: false,
            own_id: false,
            user_id: false
          }
        }
      },//Gizlenecek kolonlar
      buttonVisible:Object,//Gizlenecek butonlar(ekle, düzenle)
      input_visible:Object,//Gizlenecek inputlar(ekleme sayfasında state butonu gibi,isim inputu gibi)
    },
    data() {
      return {
        params: {},
        page: 1,
        limit: 10,
        sorts: [],
        filter: {},
        updateId: 0,
        detailId: 0,
        gecmisId: 0,
        data: {},
        filter_column: null,
        filter_value: null,
        filter_type: 1,
        column: {},
        ciktiCheck: false,
        baslikSay: document.getElementsByClassName('tablorow'),
        bos: null,
        radius: 0,
        loading: false,
      }
    },
    methods: {
      filtrele() {
        console.log(this.filter_column, this.filter_value, this.filter_type)
        if (this.filter_value) {
          this.filter[this.filter_column.name] = {
            "type": this.filter_type,
            "filter": [this.filter_value]
          }
        } else {
          delete this.filter[this.filter_column]
        }

        this.getTable()
      },
      filtre_temizle() {
        this.filter = {}
        this.getTable()
      },
      ilk() {
        this.page = 1;
        this.getTable();
      },
      onceki() {
        this.page--;
        this.getTable();
      },
      sonraki() {
        this.page++;
        this.getTable();
      },
      son() {
        this.page = this.data[this.table_name].pages;
        this.getTable();
      },
      sayfa(pg) {
        this.page = pg;
        this.getTable();
      },
      changeLimit(limit) {
        this.limit = limit;
        this.page = 1;
        this.getTable();
      },
      sirala(td) {
        if (this.sorts[td.name] == true) {
          var deger2 = JSON.parse('{"' + td.name + '":false}');
          this.sorts = deger2;
        } else if (this.sorts[td.name] == false) {
          delete this.sorts[td.name];
        } else {
          var deger3 = JSON.parse('{"' + td.name + '":true}');
          this.sorts = deger3;
        }
        this.getTable();
      },
      getTable() {
        this.loading = true;
        var filtre = {};
        if (this.filters) {
          filtre = this.filters;
        } else {
          filtre = this.filter;
        }
        this.params = {//payload'ın içi
          page: this.page,
          limit: this.limit,
          column_array_id: "0",
          column_array_id_query: "0",
          sorts: this.sorts,
          filters: filtre,
          editMode: false,
          liveDataMode: false,
          columnNames: [],
          filterColumnNames: [],
        };
        axios.post(this.$store.getters.getToken + '/tables/' + this.table_name, {
          'params': JSON.stringify(this.params)
        }).then(res => {
          if (res.status == 200) {

            this.data[this.table_name] = res.data.data;
            setTimeout(() => {
                this.tabloDuzenle();
                
            }, 300);
          }
        }).catch(err => {
          Swal.fire({
            icon: 'error',
            position: 'top-start',
            title: 'Hata',
            text: err,
            showConfirmButton: false,
            timer: 1500
          });
          console.log(err);

        }).finally(() => {
          this.loading = false;
        });
      },
      getColumn() {
        var seti = setInterval(() => {
          if (this.data[this.table_name]) {
            for (const [k, v] of Object.entries(this.data[this.table_name]?.columns)) {
              if (v.gui_type_name == 'select' || v.gui_type_name == 'select:static') {
                var params = {
                  search: '***',
                  editRecordId: this.id,
                  limit: 1000,
                }
                if (v?.up_column_name) {
                  params['upColumnData'] = this.data.record[k][0].source;
                  params['upColumnName'] = v.up_column_name;
                }

                axios.post(this.$store.getters.getToken + '/tables/' + this.table_name +
                    '/getSelectColumnData/' + k, params)
                  .then(res => {
                    if (res.status == 200) {
                      this.column[k] = res.data.results;
                    }
                  }).catch(err => {
                    Swal.fire({
                      icon: 'error',
                      position: 'top-start',
                      title: 'Hata',
                      text: err,
                      showConfirmButton: false,
                      timer: 1500
                    });
                    console.log(err);

                  })
              }

            }
            
            clearInterval(seti);
          }
        }, 5000);
        
      },
      sil(id) {
        Swal.fire({
          title: 'Emin Misiniz',
          text: this.data[this.table_name].table_info.display_name + ' tablosundan bir veri siliniyor!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Evet, Sil',
          cancelButtonText: 'İptal'
        }).then((result) => {
          if (result.isConfirmed) {
            axios.post(this.$store.getters.getToken + '/tables/' + this.table_name + '/' + id + '/delete', {})
              .then(res => {
                if (res.data.data.message == 'success') {
                  Swal.fire(
                    'Silindi',
                    'Silme işlemi başarıyla gerçekleşti!',
                    'success'
                  )
                }
                this.getTable();
              }).catch(err => {
                Swal.fire({
                  icon: 'error',
                  title: 'Hata',
                  text: err,
                  showConfirmButton: false,
                  timer: 1500
                });
                console.log(err);

              })

          }
        })
        
      },
      ciktiAl() {
        if (this.ciktiCheck == false) {
          TableExport(document.getElementsByTagName("table"));
          $('.tableexport-caption').css({
            display: 'table-header-group'
          })
          $('.tableexport-caption').addClass('p-4 border')
          $('.button-default').addClass('btn btn-outline-primary btn-sm my-4 mx-1');
          $('.tableexport-caption').removeClass('d-none');
          $('.tableexport-caption .xlsx').text('XLSX')
          $('.tableexport-caption .csv').text('CSV')
          $('.tableexport-caption .txt').text('TXT')
          this.ciktiCheck = true;
        } else {
          $(".tableexport-caption").addClass('d-none');
          $('.button-default').remove();
          this.ciktiCheck = false;
        }



      },
      ciktiAlPdf() {
        var sTable = document.getElementsByTagName("table")[0].outerHTML;
        var style = "<style>";
        style = style + "table {width: 100vw;font: 17px Calibri;}";
        style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "th{ background-color:grey}";
        style = style + "button{display:none}";
        style = style + ".dropdown-menu{display:none}";
        style = style + "</style>";

        // CREATE A WINDOW OBJECT.
        var win = window.open('', '', 'height=700,width=700');

        win.document.write('<html><head>');
        win.document.write('<title>' + this.data[this.table_name]?.table_info?.display_name +
          '</title>'); // <title> FOR PDF HEADER.
        win.document.write(style); // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write(sTable); // THE TABLE CONTENTS INSIDE THE BODY TAG.
        win.document.write('</body></html>');

        win.document.close(); // CLOSE THE CURRENT WINDOW.

        win.print(); // PRINT THE CONTENTS.*/ 
      },
      tabloDuzenle() {
        var table = document.getElementById(this.table_name);
        /*for (const [key, value] of Object.entries(table)) {
          console.log(value, key)
          resizableGrid(value,key);  
        }*/
        resizableGrid(table);
        function resizableGrid(table) {
          var row = table.getElementsByTagName('tr')[0],
          cols = row ? row.children : undefined;
          if (!cols) return;

          for (var i=0;i<cols.length;i++){
            var div = createDiv(table.offsetHeight);
            cols[i].appendChild(div);
            cols[i].style.position = 'relative';
            setListeners(div);
          }
        }
        function createDiv(height){
          var div = document.createElement('div');
          div.style.top = 0;
          div.style.right = 0;
          div.style.width = '8px';
          div.style.position = 'absolute';
          div.style.cursor = 'col-resize';
          /* remove backGroundColor later */
          div.style.backgroundColor = 'transparent';
          div.style.userSelect = 'none';
          /* table height */
          div.style.height = height+'px';
          return div;
        }
        function setListeners(div){
          var pageX,curCol,nxtCol,curColWidth,nxtColWidth;
          div.addEventListener('mousedown', function (e) {
            curCol = e.target.parentElement;
            nxtCol = curCol.nextElementSibling;
            pageX = e.pageX;
            curColWidth = curCol.offsetWidth
            if (nxtCol)
            nxtColWidth = nxtCol.offsetWidth
          });

          document.addEventListener('mousemove', function (e) {
            if (curCol) {
            var diffX = e.pageX - pageX;
          
            if (nxtCol)
              nxtCol.style.width = (nxtColWidth - (diffX))+'px';

            curCol.style.width = (curColWidth + diffX)+'px';
            }
          });

          document.addEventListener('mouseup', function () { 
          curCol = undefined;
          nxtCol = undefined;
          pageX = undefined;
          nxtColWidth = undefined;
          curColWidth = undefined;
          });
        }
        
      }
    },
    mounted() {
      if (localStorage.getItem('dore-radius') == 'rounded') {
        this.radius = '12px';
      }
      
    },
    created() {
      this.getTable();
      setTimeout(() => {
        this.sayfa(this.page)
      }, 2000);
    },
    watch: {
      table_name() {
        this.getTable();
        this.getColumn();
        
      },
      data(){
        this.tabloDuzenle();
        this.getTable();   
       
      }
    },
    components: {
      duzenleModal,
      ekleModal,
      detayModal,
      gecmisModal,
      silinmisModal
    }
  }
</script>

<style>
.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
}
/*
  .ciktiBtn{
  transition: all 0.5s ease-in-out;
  }
  */
</style>