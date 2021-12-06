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
            aria-selected="false">Hizmet</a>
        </li>
        
      </ul>
    </div>
    <div class="card-body">
      <div class="tab-content">
        <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
        <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb pt-0">
              <li class="breadcrumb-item">
                <router-link to="/alis-satis-yonetimi/siparis/liste">Alış Sipariş</router-link>
              </li>
              <li class="breadcrumb-item">
                <a>Düzenle</a>
              </li>
            </ol>
          </nav>
          <duzenle table_name="alis_siparis" :id="this.$route.params.id"/>
        </div>
        <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
        <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
            <ol class="breadcrumb pt-0">
              <li class="breadcrumb-item">
                <router-link to="/alis-satis-yonetimi/siparis/liste">Alış Sipariş</router-link>
              </li>
              <li class="breadcrumb-item">
                <a>Alış Sipariş Hizmet</a>
              </li>
            </ol>
          </nav>
          <tablo table_name="alis_siparis_hizmet"/>
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
  }
</script>

<style>

</style>