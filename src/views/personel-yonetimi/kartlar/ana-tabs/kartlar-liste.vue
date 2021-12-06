<template>
  <tablo :table_name="'personel_kartlari'" :visible="visible"/>
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
          'personel_sosyal_guvenlik_numarasi':false,
          'personel_dogum_numarasi':false,
          'cinsiyet':false,
          'personel_gorev':false,
          'personel_telefon':false,
          'personel_e_mail':false,
          'personel_adres':false,
          'personel_not':false,
          'etiket':false,
          'kategori_id':false,
        }
      }
    },
}
</script>

<style>

</style>