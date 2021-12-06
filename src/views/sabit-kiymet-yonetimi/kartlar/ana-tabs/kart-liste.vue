<template>
  <tablo :table_name="'sabit_kiymet_karti'" :visible="visible"/>
</template>

<script>
import tablo from '@/components/angaryos/tablo'
export default {
    components: {
        tablo
    },
    data() {
      return {
        visible:{
          'id':false,
          'state':false,
          'user_id':false,
          'own_id':false,
          'updated_at':false,
          'created_at':false,
          'kategori':false,
          'segment':false,
          'kist':false,
          'miktar':false,
          'net_deger':false,
          'kafile_adeti':false,
          'ilave_maaliyet':false,
          'kalan_miktar':false,
          'giris_birimi_id':false,
          'cikis_birimi_id':false,
          'amortisman_listesi_id':false,
          'amortismana_tabi':false,
          'aciklama':false,
          'normal_amortisman_oran':false,
          'devreden_birikmis_amortisman_tutari':false,
          'birikmis_amortisman':false,
          'toplam_birikmis_amortisman':false,
        }
      }
    },
}
</script>

<style>

</style>