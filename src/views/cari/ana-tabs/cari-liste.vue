<template>
  <tablo :table_name="'cari_hesap'" :detay_link="'/cari-hesaplar/detay/'" :visible="visible"/>
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
          'kategori_id':false,
          'etiket':false,
          'segment':false,
          'sube':false,
          'oda_sicil_no':false,
          'meslek_odasi':false,
          'ticaret_sicil_no':false,
          'mersis_no':false,
          'vade':false,
          'vergi_dairesi':false,
          'surname':false,
        }
      }
    },
}
</script>

<style>

</style>