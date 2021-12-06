<template>
  <div class="card">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs " role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab" aria-controls="first"
            aria-selected="true">Gelen</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab" aria-controls="second"
            aria-selected="false">Giden</a>
        </li>
        
      </ul>
    </div>
    <div class="card-body">
      <div class="tab-content">
        <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
          <tablo table_name="alis_fatura" detay_link="/alis-satis-yonetimi/fatura/fatura-alis-detay/"/>
        </div>
        <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
          <tablo table_name="satis_fatura" detay_link="/alis-satis-yonetimi/fatura/fatura-satis-detay/"/>
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
  }
</script>

<style>

</style>