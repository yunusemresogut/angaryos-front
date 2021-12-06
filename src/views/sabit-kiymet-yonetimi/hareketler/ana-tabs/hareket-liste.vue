<template>
  <tablo :table_name="'sabit_kiymet_hareket'" :visible="visible"/>
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
          belge_tipi_id:false,
          devreden_birikmis_amortisman_tutari:false,
        }
      }
    },
}
</script>

<style>

</style>