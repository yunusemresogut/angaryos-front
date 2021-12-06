<template>
  <div class="card">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs " role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first"
            aria-selected="true">Düzenle</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second"
            aria-selected="false">Havale İşlemi</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third"
            aria-selected="false">Ödeme İşlemi</a>
        </li>
      </ul>
    </div>
    <div class="card-body">
      <div class="tab-content">
        <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
          <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb pt-0">
              <li class="breadcrumb-item">
                <router-link to="/finans-yonetimi/banka/liste">Banka Giden Havale Listesi</router-link>
              </li>
              <li class="breadcrumb-item">
                <a>Bankadan Giden Havale</a>
              </li>
            </ol>
          </nav>
          <duzenle table_name="bankadan_giden_havale" :id="this.$route.params.id" />
        </div>
        <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
        <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb pt-0">
              <li class="breadcrumb-item">
                <router-link to="/finans-yonetimi/banka/liste">Banka Giden Havale Listesi</router-link>
              </li>
              <li class="breadcrumb-item">
                <a>Banka Giden Havale İşlemi</a>
              </li>
            </ol>
          </nav>
          <tablo table_name="banka_giden_havale_islem" :filters="filters" :visible="visible" :input_visible="input_visible" />
        </div>
        <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
        <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb pt-0">
              <li class="breadcrumb-item">
                <router-link to="/finans-yonetimi/banka/liste">Banka Giden Havale Listesi</router-link>
              </li>
              <li class="breadcrumb-item">
                <a>Kredi Kartı Ödeme İşlemi</a>
              </li>
            </ol>
          </nav>
          <tablo table_name="kredi_karti_odeme_islemi" :filters="filters" :visible="visible" />
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
          "bankadan_giden_havale_id": {
            "type": 1,
            "guiType": "select",
            "filter": [this.$route.params.id],
            "columnName": "bankadan_giden_havale_id"
          }
        },
        input_visible: {
          banka_karti_id: {
            id: 2,
            name: 'banka_karti_id',
            visible: false
          },
          cari_hesap_id: {
            id: 4,
            name: 'cari_hesap_id',
            visible: false
          },
          hizmet_ve_masraf_kartlari_id: {
            id: 3,
            name: 'hizmet_ve_masraf_kartlari_id',
            visible: false
          },
          kasa_karti_id: {
            id: 1,
            name: 'kasa_karti_id',
            visible: false
          },

        },
        visible: {
          id: false,
          own_id: false,
          user_id: false,
          updated_at: false,
          created_at: false,
          segment: false,
          state: false,
          cari_hesap_id: false,
          banka_karti_id: false,
          kasa_karti_id: false,
          hizmet_ve_masraf_kartlari_id: false,
          kdv_id: false,
          döviz_kuru: false,
          dovizli_tutar: false,
          vergi_aciklamasi_id: false,
        }
      }
    }
  }
</script>

<style>

</style>