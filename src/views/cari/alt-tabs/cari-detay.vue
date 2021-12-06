<template>
  <div>
    
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs " role="tablist">
          <li class="nav-item">
            <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first"
              aria-selected="true">Cari Hesap Düzenle</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second"
              aria-selected="false">Hesap Ayarı</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third"
              aria-selected="false">Adres Ayarı</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="fourth-tab" data-toggle="tab" href="#fourth" role="tab" aria-controls="fourth"
              aria-selected="false">Banka Ayarı</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="fifth-tab" data-toggle="tab" href="#fifth" role="tab" aria-controls="fifth"
              aria-selected="false">İletişim Ayarı</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="sixth-tab" data-toggle="tab" href="#sixth" role="tab" aria-controls="sixth"
              aria-selected="false">Hesap Bakiye Özeti</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content">
          <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
            <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
              <ol class="breadcrumb pt-0">
                  <li class="breadcrumb-item">
                      <router-link to="/cari-hesaplar/liste">Cari Hesaplar</router-link>
                  </li>
                  <li class="breadcrumb-item">
                      <a >Düzenle</a>
                  </li>
              </ol>
          </nav>
            <duzenle :table_name="'cari_hesap'" :id="this.$route.params.id" />
          </div>
          <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
            <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                <ol class="breadcrumb pt-0">
                    <li class="breadcrumb-item">
                        <router-link to="/cari-hesaplar/liste">Cari Hesaplar</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <a >Hesap Ayarları</a>
                    </li>
                </ol>
            </nav>
            <tablo :table_name="'hesap_ayarlari'" :filters="filters" :visible="visible"/>
          </div>
          <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
              <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                <ol class="breadcrumb pt-0">
                    <li class="breadcrumb-item">
                        <router-link to="/cari-hesaplar/liste">Cari Hesaplar</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <a >Adres Ayarları</a>
                    </li>
                </ol>
            </nav>
            <tablo :table_name="'adres'" :filters="filters" :visible="visible"/>
          </div>
          <div class="tab-pane fade" id="fourth" role="tabpanel" aria-labelledby="fourth-tab">
            <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                <ol class="breadcrumb pt-0">
                    <li class="breadcrumb-item">
                        <router-link to="/cari-hesaplar/liste">Cari Hesaplar</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <a >Banka Ayarları</a>
                    </li>
                </ol>
            </nav>
            <tablo :table_name="'banka'" :filters="filters" :visible="visible"/>
          </div>
          <div class="tab-pane fade" id="fifth" role="tabpanel" aria-labelledby="fifth-tab">
            <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                <ol class="breadcrumb pt-0">
                    <li class="breadcrumb-item">
                        <router-link to="/cari-hesaplar/liste">Cari Hesaplar</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <a >İletişim Ayarları</a>
                    </li>
                </ol>
            </nav>
            <tablo :table_name="'iletisim'" :filters="filters" :visible="visible"/>
          </div>
          <div class="tab-pane fade" id="sixth" role="tabpanel" aria-labelledby="sixth-tab">
            <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                <ol class="breadcrumb pt-0">
                    <li class="breadcrumb-item">
                        <router-link to="/cari-hesaplar/liste">Cari Hesaplar</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <a >Hesap Bakiye Özeti</a>
                    </li>
                </ol>
            </nav>
            <tablo :table_name="'hesap_bakiye_ozeti'" :filters="filters" :visible="visible"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import duzenle from '@/components/angaryos/duzenle'
  import tablo from '@/components/angaryos/tablo'
  export default {
    components: {
      duzenle,
      tablo
    },
    data() {
      return {
        filters: {
          "cari_hesap_id": {
            "type": 1,
            "guiType": "select",
            "filter": [this.$route.params.id],
            "columnName": "cari_hesap_id",
            "json": ""
          }
        },
        visible: {
          'id':false,
          'state':false,
          'user_id':false,
          'own_id':false,
          'updated_at':false,
          'created_at':false,
        }
      }
    }
  }
</script>

<style>

</style>