<template>
  <div class="modal fade" :id="'gecmis-modal'+table_name+id" tabindex="-1" role="dialog" aria-hidden="true"
    style="display: none;">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header pb-0">
          <div class="row">
            <h3 class1="modal-title text-primary">{{data[table_name]?.table_info?.display_name}} Geçmiş Kayıtları</h3>
            <button type="button" class="close float-right" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="row buton-rowu mt-3">
            <div class="form-group float-right">
              <div class="btn-group dropright">
                <a class="btn btn-outline-primary collapsed" data-toggle="collapse" href="#gecmisArama" role="button"
                  aria-expanded="false" aria-controls="collapseExample" @click="getColumn">
                  <i class="iconsminds-magnifi-glass"></i>
                </a>
              </div>
              <div class="dropdown d-inline-block">

                <a class="btn btn-outline-primary dropdown-toggle mx-1" href="#" role="button" id="dropdownMenuLink"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{limit}}
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item" :class="limit==5?'active':''" @click="changeLimit(5)">5</a>
                  <a class="dropdown-item" :class="limit==10?'active':''" @click="changeLimit(10)">10</a>
                  <a class="dropdown-item" :class="limit==25?'active':''" @click="changeLimit(25)">25</a>
                  <a class="dropdown-item" :class="limit==50?'active':''" @click="changeLimit(50)">50</a>
                  <a class="dropdown-item" :class="limit==100?'active':''" @click="changeLimit(100)">100</a>
                  <a class="dropdown-item" :class="limit==200?'active':''" @click="changeLimit(200)">200</a>
                </div>
              </div><!-- Limit seçimi -->
              <button class="btn btn-outline-primary mx-1" @click="ciktiAl">
                Çıktı
              </button><!-- Çıktı butonu -->


            </div><!-- Butonlar -->
            <!-- <div class="form-group">
              <button class="btn btn-primary mx-1" data-toggle="modal" data-backdrop="static"
                :data-target="'#ekle-modal'+table_name">
                Ekle
              </button>
            </div> -->
            <!-- Ekle butonu -->
          </div><!-- Butonların rowu -->
          <div class="row collapse border pt-3" id="gecmisArama">
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

              <div v-if="filter_column?.gui_type_name=='boolean' || filter_column?.gui_type_name=='boolean:fastchange'">
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
        </div>
        <div class="modal-body pt-0">
          <div class="row">
            <table class="table table-responsive table-hover">
              <caption class="tableexport-caption d-none">
                <button class="btn btn-outline-primary btn-sm mx-1" @click="ciktiAlPdf()">PDF</button>
              </caption>
              <thead class="tablo-baslik">
                <tr>
                  <th v-for="td in data[table_name]?.columns" :key="td" @click="sirala(td)">
                    <i class="iconsminds-go-bottom" v-if="sorts[td.name] == true"></i>
                    <i class="iconsminds-go-top" v-if="sorts[td.name] == false"></i>
                    {{td.display_name}}
                  </th>
                </tr>
              </thead>
              <!--Tablo başlığı-->
              <tbody>
                <tr v-for="tr in data[table_name]?.records" :key="tr">
                  

                  <td v-for="td in data[table_name]?.columns" :key="td">
                    <span>{{tr[td.name]}}</span>
                  </td><!-- Tablo içeriği -->

                </tr>
              </tbody>
            </table>
          </div><!-- Tablo içeriği -->
        </div>
        <div class="modal-footer">
          <div class="row" style="display: flex; justify-content: space-between;">
            
            <nav>
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

          </div><!-- Sayfalama -->
          <div>
            Toplam {{data[table_name]?.all_records_count}} adet kayıt bulundu
          </div>
          <button type="button" class="btn btn-outline-primary" ref="modalClose" data-dismiss="modal">Kapat</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import TableExport from 'tableexport'
  import $ from 'jquery'
  import Swal from 'sweetalert2';
  export default {
    props: {
      table_name: {
        type: String,
        required: true
      },
      id: {
        type: Number,
        required: true
      }
    },
    data() {
      return {
        params: {},
        page: 1,
        limit: 10,
        sorts: [],
        filter: {},
        updateId: null,
        detailId: null,
        gecmisId: null,
        data: {},
        filter_column: null,
        filter_value: null,
        filter_type: 1,
        column: {},
        ciktiCheck: false,
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
        var params = {
          "page": this.page,
          "limit": this.limit,
          "column_array_id": "0",
          "column_array_id_query": "0",
          "sorts": this.sorts,
          "filters": this.filter,
          "editMode": false,
          "liveDataMode": false,
          "columnNames": ["id", "cari_hesap_adi", "tc", "surname", "vergi_dairesi", "vade", "mersis_no",
            "ticaret_sicil_no", "meslek_odasi", "oda_sicil_no", "sube", "segment", "etiket", "kategori_id", "state",
            "own_id", "user_id", "created_at", "updated_at", "record_id"
          ],
          "filterColumnNames": []
        }
        axios.post(this.$store.getters.getToken + '/tables/' + this.table_name + '/' + this.id + '/archive', {
          'params': JSON.stringify(params)
        }).then(response => {
          this.data[this.table_name] = response.data.data
        })
      },
      getColumn() {
        var set = setInterval(() => {
          if (this.data[this.table_name]) {
            for (const [k, v] of Object.entries(this.data[this.table_name].columns)) {
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

            clearInterval(set);
          }
        }, 5000);
      },
      ciktiAl() {
        if (this.ciktiCheck == false) {
          TableExport(document.getElementsByTagName("table"));
          $('.button-default').addClass('btn btn-outline-primary btn-sm mx-1');
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
      
    },
    watch: {
      id(newVal, oldVal) {
        if (newVal != oldVal) {
          this.getTable()
        }
      }
    },
  }
</script>

<style>
  .modal-header {
    flex-direction: column;
    align-items: stretch;
  }
  .modal-footer{
        display: flex;
    justify-content: space-between;
  }
</style>