<template>
  <div class="card">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs " role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first"
            aria-selected="true">Çekler</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second"
            aria-selected="false">Bordrolar</a>
        </li>
        
      </ul>
    </div>
    <div class="card-body">
      <div class="tab-content">
        <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
          <tablo table_name="musteri_cek" :visible="visible"/>
        </div>
        <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
          <tablo table_name="musteri_cek_bodro" :visible="visible"/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import tablo from '@/components/angaryos/tablo'
  export default {
    components: {
      tablo
    },
    data() {
      return {
        visible: {
          id:false,
          own_id:false,
          user_id:false,
          created_at:false,
          updated_at:false,
          state:false,
          doviz_kuru_aciklamasi:false,
          doviz_kuru_tarihi:false,
          doviz_tipi_id:false,
          doviz_kuru_kaynagi:false,
          banka_adi:false,
          banka_sube_adi:false,
          ceki_duzenleyen:false,
          etiket:false,
          hesap_ayarlari_id:false,
          kasa_hesap_eslestirme_id:false,
          kefil:false,
          kur_tarihi:false,
          muhasebelestirme_id:false,
          sehirler_id:false,
          hesap_no:false,
          cek_kategori_id:false,
        }
      }
  }
  }
</script>

<style>

</style>