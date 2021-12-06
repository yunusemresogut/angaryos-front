<template>
  <tablo table_name="stok_kartlari" :visible="visible"/>
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
          id:false,
          state:false,
          user_id:false,
          own_id:false,
          updated_at:false,
          created_at:false,
          agirlik:false,
          agirlik_turu_id:false,
          alan:false,
          alan_turu_id:false,
          askeri_stok:false,
          azemi_stok:false,
          derinlik:false,
          derinlik_turu_id:false,
          genislik:false,
          genislik_turu_id:false,
          hacim:false,
          hacim_turu_id:false,
          yukseklik:false,
          yukseklik_turu_id:false,
          segment:false,
          fire_orani:false,
          kafile_adeti:false,
          temin_suresi:false,
          giris_birimi_id:false,
          cikis_birimi_id:false,
          description:false,
        }
      }
    },
}
</script>

<style>

</style>