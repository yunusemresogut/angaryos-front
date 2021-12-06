<template>
  <div class="menu">
    <div class="main-menu">
      <div class="scroll">
        <ul class="list-unstyled">
          <li class="">
            <a href="#guncel-durum">
              <i class="iconsminds-dashboard"></i>
              <span>Göstergeler</span>
            </a>
          </li>
          <li>
            <a href="#cari-hesaplar">
              <i class="iconsminds-calculator"></i> Ön Muhasebe
            </a>
          </li>
          <li>
            <a href="#finans-yonetimi">
              <i class="iconsminds-cash-register-2"></i> Muhasebe
            </a>
          </li>

          <li>
            <a href="#raporlar">
              <i class="iconsminds-box-with-folders"></i> Raporlar
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="sub-menu">
      <div class="scroll">
        <ul class="list-unstyled aling-left p-0" style="text-align: left" data-link="cari-hesaplar">
          <li class="m-0 ml-3 p-0 w-100">
            <a href="#" data-toggle="collapse" data-target="#collapseAuthorization" aria-expanded="false"
              aria-controls="collapseAuthorization" class="rotate-arrow-icon opacity-50">
              <i class="simple-icon-arrow-down"></i>
              <span class="d-inline-block">Cari Hesap Yönetimi</span>
            </a>
            <div id="collapseAuthorization" class="collapse show active" style="">
              <ul class="list-unstyled inner-level-menu">
                <li :class="
                    this.$route.path.split('/')[1] == 'cari-hesaplar' &&
                    this.$route.path.split('/')[2] == 'liste'
                      ? 'active'
                      : ''
                  ">
                  <router-link :to="'/cari-hesaplar/liste'">
                    <i class="iconsminds-monitor-analytics i-2"></i>
                    <span class="d-inline-block">Cari Hesaplar</span>
                  </router-link>
                </li>
                <li :class="
                    this.$route.path.split('/')[1] == 'cari-hesaplar' &&
                    this.$route.path.split('/')[2] == 'ekstre'
                      ? 'active'
                      : ''
                  ">
                  <router-link :to="'/cari-hesaplar/ekstre'">
                    <i class="iconsminds-billing i-2"></i>
                    <span class="d-inline-block">Cari Hesap Ekstresi</span>
                  </router-link>
                </li>

              </ul>
            </div>
          </li>
          <li class="m-0 ml-3 p-0 w-100">
            <a href="#" data-toggle="collapse" data-target="#finans" aria-expanded="false" aria-controls="finans"
              class="rotate-arrow-icon opacity-50">
              <i class="simple-icon-arrow-down"></i>
              <span class="d-inline-block">Finans Yönetimi</span>
            </a>
            <div id="finans" class="collapse" style="">
              <ul class="list-unstyled inner-level-menu">
                <li :class="
                    this.$route.path.split('/')[1] == 'finans-yonetimi' &&
                    this.$route.path.split('/')[2] == 'kartlar' &&
                    this.$route.path.split('/')[3] == 'liste'
                      ? 'active'
                      : ''
                  ">
                  <router-link :to="'/finans-yonetimi/kartlar/liste'">
                    <i class="iconsminds-credit-card i-2"></i>
                    <span class="d-inline-block">Kartlar</span>
                  </router-link>
                </li>
                <li :class="
                    this.$route.path.split('/')[1] == 'finans-yonetimi' &&
                    this.$route.path.split('/')[2] == 'kasa' &&
                    this.$route.path.split('/')[3] == 'liste'
                      ? 'active'
                      : ''
                  ">
                  <router-link :to="'/finans-yonetimi/kasa/liste'">
                    <i class="iconsminds-safe-box i-2"></i>
                    <span class="d-inline-block">Kasa</span>
                  </router-link>
                </li>
                <li :class="
                    this.$route.path.split('/')[1] == 'finans-yonetimi' &&
                    this.$route.path.split('/')[2] == 'banka' &&
                    this.$route.path.split('/')[3] == 'liste'
                      ? 'active'
                      : ''
                  ">
                  <router-link :to="'/finans-yonetimi/banka/liste'">
                    <i class="iconsminds-bank i-2"></i>
                    <span class="d-inline-block">Banka</span>
                  </router-link>
                </li>
                <li class="m-0 ml-3 p-0 w-100">
                  <a href="#" data-toggle="collapse" data-target="#ceksenet" aria-expanded="false"
                    aria-controls="ceksenet" class="rotate-arrow-icon opacity-50 collapsed">
                    <i class="simple-icon-arrow-down"></i>
                    <span class="d-inline-block">Çek - Senet</span>
                  </a>
                  <div id="ceksenet" class="collapse" style="">
                    <ul class="list-unstyled inner-level-menu">
                      <li :class="
                          this.$route.path.split('/')[1] == 'finans-yonetimi' &&
                          this.$route.path.split('/')[2] == 'cek-senet' &&
                          this.$route.path.split('/')[3] == 'cek' &&
                          this.$route.path.split('/')[4] == 'musteri-cek' &&
                          this.$route.path.split('/')[5] == 'liste'
                            ? 'active'
                            : ''
                        ">
                        <router-link to="/finans-yonetimi/cek-senet/cek/musteri-cek/liste" class="my-0">
                          <i class="iconsminds-project i-2"></i>
                          <span class="d-inline-block">Müşteri Çek İşlemleri</span>
                        </router-link>
                      </li>
                      <li :class="
                          this.$route.path.split('/')[1] == 'finans-yonetimi' &&
                          this.$route.path.split('/')[2] == 'cek-senet' &&
                          this.$route.path.split('/')[3] == 'cek' &&
                          this.$route.path.split('/')[4] == 'firma-cek' &&
                          this.$route.path.split('/')[5] == 'liste'
                            ? 'active'
                            : ''
                        ">
                        <router-link to="/finans-yonetimi/cek-senet/cek/firma-cek/liste" class="my-0">
                          <i class="iconsminds-project i-2"></i>
                          <span class="d-inline-block">Kendi Çeklerim</span>
                        </router-link>
                      </li>
                      <li :class="
                          this.$route.path.split('/')[1] == 'finans-yonetimi' &&
                          this.$route.path.split('/')[2] == 'cek-senet' &&
                          this.$route.path.split('/')[3] == 'senet' &&
                          this.$route.path.split('/')[4] == 'musteri-senet' &&
                          this.$route.path.split('/')[5] == 'liste'
                            ? 'active'
                            : ''
                        ">
                        <router-link to="/finans-yonetimi/cek-senet/senet/musteri-senet/liste" class="my-0">
                          <i class="iconsminds-project i-2"></i>
                          <span class="d-inline-block">Müşteri Senet İşlemleri</span>
                        </router-link>
                      </li>
                      <li :class="
                          this.$route.path.split('/')[1] == 'finans-yonetimi' &&
                          this.$route.path.split('/')[2] == 'cek-senet' &&
                          this.$route.path.split('/')[3] == 'senet' &&
                          this.$route.path.split('/')[4] == 'firma-senet' &&
                          this.$route.path.split('/')[5] == 'liste'
                            ? 'active'
                            : ''
                        ">
                        <router-link to="/finans-yonetimi/cek-senet/senet/firma-senet/liste" class="my-0">
                          <i class="iconsminds-project i-2"></i>
                          <span class="d-inline-block">Kendi Senetlerim</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="m-0 ml-3 p-0 w-100">
            <a href="#" data-toggle="collapse" data-target="#alisatis" aria-expanded="false" aria-controls="alisatis"
              class="rotate-arrow-icon opacity-50">
              <i class="simple-icon-arrow-down"></i>
              <span class="d-inline-block">Alış / Satış Yönetimi</span>
            </a>
            <div id="alisatis" class="collapse" style="">
              <ul class="list-unstyled inner-level-menu">
                <li :class="
                          this.$route.path.split('/')[1] == 'alis-satis-yonetimi' &&
                          this.$route.path.split('/')[2] == 'fatura' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/alis-satis-yonetimi/fatura/liste" class="my-0">
                    <i class="iconsminds-newspaper i-2"></i>
                    <span class="d-inline-block">Fatura</span>
                  </router-link>
                </li>
                <li :class="
                          this.$route.path.split('/')[1] == 'alis-satis-yonetimi' &&
                          this.$route.path.split('/')[2] == 'irsaliye' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/alis-satis-yonetimi/irsaliye/liste" class="my-0">
                    <i class="simple-icon-doc i-2"></i>
                    <span class="d-inline-block">İrsaliye</span>
                  </router-link>
                </li>
                <li :class="
                          this.$route.path.split('/')[1] == 'alis-satis-yonetimi' &&
                          this.$route.path.split('/')[2] == 'siparis' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/alis-satis-yonetimi/siparis/liste" class="my-0">
                    <i class="iconsminds-add-cart i-2"></i>
                    <span class="d-inline-block">Sipariş</span>
                  </router-link>
                </li>

              </ul>
            </div>
          </li>
          <li class="m-0 ml-3 p-0 w-100">
            <a href="#" data-toggle="collapse" data-target="#stokhizmet" aria-expanded="false" aria-controls="stokhizmet"
              class="rotate-arrow-icon opacity-50">
              <i class="simple-icon-arrow-down"></i>
              <span class="d-inline-block">Stok-Hizmet Yönetimi</span>
            </a>
            <div id="stokhizmet" class="collapse" style="">
              <ul class="list-unstyled inner-level-menu">
                <li :class="
                          this.$route.path.split('/')[1] == 'stok-hizmet-yonetimi' &&
                          this.$route.path.split('/')[2] == 'stoklar-kartlari' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/stok-hizmet-yonetimi/stok-kartlari/liste" class="my-0">
                    <i class="iconsminds-credit-card i-2"></i>
                    <span class="d-inline-block">Stok Kartları</span>
                  </router-link>
                </li>
                <li :class="
                          this.$route.path.split('/')[1] == 'stok-hizmet-yonetimi' &&
                          this.$route.path.split('/')[2] == 'stoklar' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/stok-hizmet-yonetimi/stoklar/liste" class="my-0">
                    <i class="iconsminds-box-close i-2"></i>
                    <span class="d-inline-block">Stoklar</span>
                  </router-link>
                </li>
                <li :class="
                          this.$route.path.split('/')[1] == 'stok-hizmet-yonetimi' &&
                          this.$route.path.split('/')[2] == 'stok-hareketleri' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/stok-hizmet-yonetimi/stok-hareketleri/liste" class="my-0">
                    <i class="iconsminds-box-with-folders i-2"></i>
                    <span class="d-inline-block">Stok Hareketleri</span>
                  </router-link>
                </li>
                <li :class="
                          this.$route.path.split('/')[1] == 'stok-hizmet-yonetimi' &&
                          this.$route.path.split('/')[2] == 'hizmet-masraf-kartlari' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/stok-hizmet-yonetimi/hizmet-masraf-kartlari/liste" class="my-0">
                    <i class="iconsminds-credit-card i-2"></i>
                    <span class="d-inline-block">Hizmet/Masraf Kartları</span>
                  </router-link>
                </li>
                <li :class="
                          this.$route.path.split('/')[1] == 'stok-hizmet-yonetimi' &&
                          this.$route.path.split('/')[2] == 'depo-kartlari' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/stok-hizmet-yonetimi/depo-kartlari/liste" class="my-0">
                    <i class="iconsminds-credit-card i-2"></i>
                    <span class="d-inline-block">Depo Kartları</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="m-0 ml-3 p-0 w-100">
            <a href="#" data-toggle="collapse" data-target="#sabitkiymet" aria-expanded="false" aria-controls="sabitkiymet"
              class="rotate-arrow-icon opacity-50">
              <i class="simple-icon-arrow-down"></i>
              <span class="d-inline-block">Sabit Kıymet Yönetimi</span>
            </a>
            <div id="sabitkiymet" class="collapse" style="">
              <ul class="list-unstyled inner-level-menu">
              <li :class="
                          this.$route.path.split('/')[1] == 'sabit-kiymet-yonetimi' &&
                          this.$route.path.split('/')[2] == 'kart' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/sabit-kiymet-yonetimi/kart/liste" class="my-0">
                    <i class="iconsminds-credit-card i-2"></i>
                    <span class="d-inline-block">Sabit Kıymet Kartları</span>
                  </router-link>
                </li>
                <li :class="
                          this.$route.path.split('/')[1] == 'sabit-kiymet-yonetimi' &&
                          this.$route.path.split('/')[2] == 'hareket' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/sabit-kiymet-yonetimi/hareket/liste" class="my-0">
                    <i class="iconsminds-laptop-3 i-2"></i>
                    <span class="d-inline-block">Sabit Kıymet Hareketleri</span>
                  </router-link>
                </li>
                <li>
                    <i class="iconsminds-server-2 i-2"></i>
                    <span class="d-inline-block">Durum Raporu</span>
                </li>
                <li>
                    <i class="iconsminds-notepad i-2"></i>
                    <span class="d-inline-block">Amortisman Hesaplama</span>
                </li>
                <li>
                    <i class="iconsminds-radio i-2"></i>
                    <span class="d-inline-block">Amortisman Raporu</span>
                </li>
              </ul>
            </div>
          </li>
          <li class="m-0 ml-3 p-0 w-100">
            <a href="#" data-toggle="collapse" data-target="#personel" aria-expanded="false" aria-controls="personel"
              class="rotate-arrow-icon opacity-50">
              <i class="simple-icon-arrow-down"></i>
              <span class="d-inline-block">Personel Yönetimi</span>
            </a>
            <div id="personel" class="collapse" style="">
              <ul class="list-unstyled inner-level-menu">
                <li :class="
                          this.$route.path.split('/')[1] == 'personel-yonetimi' &&
                          this.$route.path.split('/')[2] == 'kartlar' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/personel-yonetimi/kartlar/liste" class="my-0">
                    <i class="iconsminds-credit-card i-2"></i>
                    <span class="d-inline-block">Kartlar</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li class="m-0 ml-3 p-0 w-100">
            <a href="#" data-toggle="collapse" data-target="#buro" aria-expanded="false" aria-controls="buro"
              class="rotate-arrow-icon opacity-50">
              <i class="simple-icon-arrow-down"></i>
              <span class="d-inline-block">Büro Yönetimi</span>
            </a>
            <div id="buro" class="collapse" style="">
              <ul class="list-unstyled inner-level-menu">
                <li :class="
                          this.$route.path.split('/')[1] == 'buro-yonetimi' &&
                          this.$route.path.split('/')[2] == 'kiralar' &&
                          this.$route.path.split('/')[3] == 'liste'
                            ? 'active'
                            : ''
                        ">
                  <router-link to="/buro-yonetimi/kiralar/liste" class="my-0">
                    <i class="iconsminds-calendar-4 i-2"></i>
                    <span class="d-inline-block">Kiralar</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul class="list-unstyled" data-link="guncel-durum">
          <li class="">
            AnaSayfa
          </li>
        </ul>
        <ul class="list-unstyled" data-link="finans-yonetimi">
          <li>
            <a href="" class="text-primary h5">Finans Yönetimi</a>
          </li>
        </ul>
        <ul class="list-unstyled" data-link="alis-satis-yonetimi">
          <li>
            <a href="" class="h5 text-primary">Alış Satış Yönetimi</a>
          </li>
        </ul>

        <ul class="list-unstyled" data-link="stok-hizmet-yonetimi">
          <li>
            <a href="" class="text-primary h5">Stok Hizmet Yönetimi</a>
          </li>
        </ul>
        <ul class="list-unstyled" data-link="muhasebe-yonetimi">
          <li>
            <a href="" class="text-primary h6">Muhasebe Yönetimi</a>
          </li>
        </ul>
        <ul class="list-unstyled" data-link="personel-yonetimi">
          <li>
            <a href="" class="text-primary h5">Personel Yönetimi</a>
          </li>
        </ul>
        <ul class="list-unstyled" data-link="sabit-kiymet-yonetimi">
          <li>
            <a href="" class="text-primary h5">Sabit kıymet Yönetimi</a>
          </li>
        </ul>
        <ul class="list-unstyled" data-link="raporlar">
          <li>
            <a href="" class="text-primary h5">{{}}</a>
          </li>
        </ul>
      </div>
    </div>
    {{}}
  </div>
</template>

<script>
  import $ from "jquery";

  export default {

    name: "Menu",
    created() {

    },
    mounted() {},
  };
  $(".router-link-active").ready(function () {
    $(this).addClass("active");
  });
</script>

<style>
  .i-2 {
    font-size: 1.4rem !important;
    margin: 0;
  }

  .sub-menu {
    width: fit-content !important;
    padding-right: 20px !important;
  }
</style>