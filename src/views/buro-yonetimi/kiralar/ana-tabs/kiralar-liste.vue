<template>
  <tablo :table_name="'kira_yonetimi'" :visible="visible"/>
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
        }
      }
    },
}
</script>

<style>

</style>