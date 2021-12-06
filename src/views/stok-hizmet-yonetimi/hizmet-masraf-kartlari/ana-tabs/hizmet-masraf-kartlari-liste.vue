<template>
  <tablo table_name="hizmet_ve_masraf_kartlari" :visible="visible"/>
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
          kategori:false,
          etiket:false,
          segment:false,
          kafile_adeti:false,
          giris_birimi:false,
          cikis_birimi:false,
          description:false,
        }
      }
    },
}
</script>

<style>

</style>