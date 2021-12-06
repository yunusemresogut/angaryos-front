import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/components/Main.vue'),
    meta: {
      title: 'Ana sayfa'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login.vue'),
    meta: {
      title: 'Giriş'
    }
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import('@/views/hesap/profile.vue'),
    meta: {
      title: 'Profil'
    }
  },
  //Cari Hesap Başlangıç
  {
    path: '/cari-hesaplar/liste',
    name: 'CariHesaplarListe',
    component: () => import('@/views/cari/ana-tabs/cari-liste.vue'),
    meta: {
      title: 'Cari Hesaplar'
    }
  },
  {
    path: '/cari-hesaplar/detay/:id',
    name: 'CariHesaplarDetay',
    component: () => import('@/views/cari/alt-tabs/cari-detay.vue'),
    meta: {
      title: 'Cari Hesap Detay'
    }
  },
  {
    path: '/cari-hesaplar/ekstre',
    name: 'CariHesaplarEkstre',
    component: () => import('@/views/cari/ana-tabs/cari-ekstre.vue'),
    meta: {
      title: 'Cari Hesap Ekstre'
    }
  },
  //Cari Hesap Bitiş
  //Finans Yönetimi Kartlar Başlangıç
  {
    path: '/finans-yonetimi/kartlar/liste',
    name: 'FinansYonetimiKartlarListe',
    component: () => import('@/views/finans-yonetimi/kartlar/ana-tabs/kartlar-liste.vue'),
    meta: {
      title: 'Kartlar'
    }
  },
  {
    path: '/finans-yonetimi/kartlar/kasa-detay/:id',
    name: 'FinansYonetimiKartlarDetay',
    component: () => import('@/views/finans-yonetimi/kartlar/alt-tabs/kasa-detay.vue'),
    meta: {
      title: 'Kasa Detay'
    }
  },
  {
    path: '/finans-yonetimi/kartlar/banka-detay/:id',
    name: 'FinansYonetimiKartlarBankaDetay',
    component: () => import('@/views/finans-yonetimi/kartlar/alt-tabs/banka-detay.vue'),
    meta: {
      title: 'Banka Detay'
    }
  },
  //Finans Yönetimi Kartlar Bitiş
  //Finans Yönetimi Kasa Başlangıç
  {
    path: '/finans-yonetimi/kasa/liste',
    name: 'FinansYonetimiKasaListe',
    component: () => import('@/views/finans-yonetimi/kasa/ana-tabs/kasa-liste.vue'),
    meta: {
      title: 'Kasa'
    }
  },
  {
    path: '/finans-yonetimi/kasa/tahsilat-detay/:id',
    name: 'FinansYonetimiKasaDetay',
    component: () => import('@/views/finans-yonetimi/kasa/alt-tabs/tahsilat-detay.vue'),
    meta: {
      title: 'Tahsilat Detay'
    }
  },
  {
    path: '/finans-yonetimi/kasa/odeme-detay/:id',
    name: 'FinansYonetimiKasaOdemeDetay',
    component: () => import('@/views/finans-yonetimi/kasa/alt-tabs/odeme-detay.vue'),
    meta: {
      title: 'Ödeme Detay'
    }
  },
  //Finans Yönetimi Kasa Bitiş
  //Finans Yönetimi Banka Başlangıç
  {
    path: '/finans-yonetimi/banka/liste',
    name: 'FinansYonetimiBankaListe',
    component: () => import('@/views/finans-yonetimi/banka/ana-tabs/banka-liste.vue'),
    meta: {
      title: 'Banka'
    }
  },
  {
    path: '/finans-yonetimi/banka/gelen-detay/:id',
    name: 'FinansYonetimiBankaGelenDetay',
    component: () => import('@/views/finans-yonetimi/banka/alt-tabs/gelen-detay.vue'),
    meta: {
      title: 'Gelen Detay'
    }
  },
  {
    path: '/finans-yonetimi/banka/giden-detay/:id',
    name: 'FinansYonetimiBankaGidenDetay',
    component: () => import('@/views/finans-yonetimi/banka/alt-tabs/giden-detay.vue'),
    meta: {
      title: 'Giden Detay'
    }
  },
  //Finans Yönetimi Banka Bitiş
  //Finans Yönetimi Çek Senet Başlangıç
  {
    path: '/finans-yonetimi/cek-senet/cek/musteri-cek/liste',
    name: 'FinansYonetimiCekSenetMusteriCekListe',
    component: () => import('@/views/finans-yonetimi/cek-senet/cek/ana-tabs/musteri-cek-liste.vue'),
    meta: {
      title: 'Müşteri Çek Listesi'
    }
  },
  {
    path: '/finans-yonetimi/cek-senet/cek/musteri-cek/detay/:id',
    name: 'FinansYonetimiCekSenetMusteriCekDetay',
    component: () => import('@/views/finans-yonetimi/cek-senet/cek/alt-tabs/musteri-cek-detay.vue'),
    meta: {
      title: 'Müşteri Çek Detay'
    }
  },
  {
    path: '/finans-yonetimi/cek-senet/cek/firma-cek/liste',
    name: 'FinansYonetimiCekSenetFirmaCekListe',
    component: () => import('@/views/finans-yonetimi/cek-senet/cek/ana-tabs/firma-cek-liste.vue'),
    meta: {
      title: 'Firma Çek Listesi'
    }
  },
  {
    path: '/finans-yonetimi/cek-senet/cek/firma-cek/detay/:id',
    name: 'FinansYonetimiCekSenetFirmaCekDetay',
    component: () => import('@/views/finans-yonetimi/cek-senet/cek/alt-tabs/firma-cek-detay.vue'),
    meta: {
      title: 'Firma Çek Detay'
    }
  },
  {
    path: '/finans-yonetimi/cek-senet/senet/musteri-senet/liste',
    name: 'FinansYonetimiCekSenetMusteriSenetListe',
    component: () => import('@/views/finans-yonetimi/cek-senet/senet/ana-tabs/musteri-senet-liste.vue'),
    meta: {
      title: 'Müşteri Senet Listesi'
    }
  },
  {
    path: '/finans-yonetimi/cek-senet/senet/musteri-senet/detay/:id',
    name: 'FinansYonetimiCekSenetMusteriSenetDetay',
    component: () => import('@/views/finans-yonetimi/cek-senet/senet/alt-tabs/musteri-senet-detay.vue'),
    meta: {
      title: 'Müşteri Senet Detay'
    }
  },
  {
    path: '/finans-yonetimi/cek-senet/senet/firma-senet/liste',
    name: 'FinansYonetimiCekSenetFirmaSenetListe',
    component: () => import('@/views/finans-yonetimi/cek-senet/senet/ana-tabs/firma-senet-liste.vue'),
    meta: {
      title: 'Firma Senet Listesi'
    }
  },
  {
    path: '/finans-yonetimi/cek-senet/senet/firma-senet/detay/:id',
    name: 'FinansYonetimiCekSenetFirmaSenetDetay',
    component: () => import('@/views/finans-yonetimi/cek-senet/senet/alt-tabs/firma-senet-detay.vue'),
    meta: {
      title: 'Firma Senet Detay'
    }
  },
  //Finans Yönetimi Çek Senet Bitiş
  //Alış-Satış Yönetimi Başlangıç
  {
    path: '/alis-satis-yonetimi/fatura/liste',
    name: 'AlisSatisYonetimiFaturaListe',
    component: () => import('@/views/alis-satis-yonetimi/fatura/ana-tabs/fatura-liste.vue'),
    meta: {
      title: 'Fatura'
    }
  },
  {
    path: '/alis-satis-yonetimi/fatura/fatura-alis-detay/:id',
    name: 'AlisSatisYonetimiFaturaAlisDetay',
    component: () => import('@/views/alis-satis-yonetimi/fatura/alt-tabs/fatura-alis-detay.vue'),
    meta: {
      title: 'Fatura Alış Detay'
    }
  },
  {
    path: '/alis-satis-yonetimi/fatura/fatura-satis-detay/:id',
    name: 'AlisSatisYonetimiFaturaSatisDetay',
    component: () => import('@/views/alis-satis-yonetimi/fatura/alt-tabs/fatura-satis-detay.vue'),
    meta: {
      title: 'Fatura Satış Detay'
    }
  },
  {
    path: '/alis-satis-yonetimi/irsaliye/liste',
    name: 'AlisSatisYonetimiIrsaliyeListe',
    component: () => import('@/views/alis-satis-yonetimi/irsaliye/ana-tabs/irsaliye-liste.vue'),
    meta: {
      title: 'İrsaliye'
    }
  },
  {
    path: '/alis-satis-yonetimi/irsaliye/irsaliye-alis-detay/:id',
    name: 'AlisSatisYonetimiIrsaliyeAlisDetay',
    component: () => import('@/views/alis-satis-yonetimi/irsaliye/alt-tabs/irsaliye-alis-detay.vue'),
    meta: {
      title: 'İrsaliye Alış Detay'
    }
  },
  {
    path: '/alis-satis-yonetimi/irsaliye/irsaliye-satis-detay/:id',
    name: 'AlisSatisYonetimiIrsaliyeSatisDetay',
    component: () => import('@/views/alis-satis-yonetimi/irsaliye/alt-tabs/irsaliye-satis-detay.vue'),
    meta: {
      title: 'İrsaliye Satış Detay'
    }
  },
  {
    path: '/alis-satis-yonetimi/siparis/liste',
    name: 'AlisSatisYonetimiSiparisListe',
    component: () => import('@/views/alis-satis-yonetimi/siparis/ana-tabs/siparis-liste.vue'),
    meta: {
      title: 'Sipariş'
    }
  },
  {
    path: '/alis-satis-yonetimi/siparis/siparis-alis-detay/:id',
    name: 'AlisSatisYonetimiSiparisAlisDetay',
    component: () => import('@/views/alis-satis-yonetimi/siparis/alt-tabs/siparis-alis-detay.vue'),
    meta: {
      title: 'Sipariş Alış Detay'
    }
  },
  {
    path: '/alis-satis-yonetimi/siparis/siparis-satis-detay/:id',
    name: 'AlisSatisYonetimiSiparisSatisDetay',
    component: () => import('@/views/alis-satis-yonetimi/siparis/alt-tabs/siparis-satis-detay.vue'),
    meta: {
      title: 'Sipariş Satış Detay'
    }
  },
  //Alış-Satış Yönetimi Bitiş
  //Stok-Hizmet Yönetimi Başlangıç
  {
    path: '/stok-hizmet-yonetimi/stoklar/liste',
    name: 'StokHizmetYonetimiStoklarListe',
    component: () => import('@/views/stok-hizmet-yonetimi/stoklar/ana-tabs/stoklar-liste.vue'),
    meta: {
      title: 'Stoklar'
    }
  },
  {
    path: '/stok-hizmet-yonetimi/stok-kartlari/liste',
    name: 'StokHizmetYonetimiStokKartlariListe',
    component: () => import('@/views/stok-hizmet-yonetimi/stok-kartlari/ana-tabs/stok-kartlari-liste.vue'),
    meta: {
      title: 'Stok Kartları'
    }
  },
  {
    path: '/stok-hizmet-yonetimi/stok-hareketleri/liste',
    name: 'StokHizmetYonetimiStokHareketleriListe',
    component: () => import('@/views/stok-hizmet-yonetimi/stok-hareketleri/ana-tabs/stok-hareketleri-liste.vue'),
    meta: {
      title: 'Stok Hareketleri'
    }
  },
  {
    path: '/stok-hizmet-yonetimi/hizmet-masraf-kartlari/liste',
    name: 'StokHizmetYonetimiHizmetMasrafKartlariListe',
    component: () => import('@/views/stok-hizmet-yonetimi/hizmet-masraf-kartlari/ana-tabs/hizmet-masraf-kartlari-liste.vue'),
    meta: {
      title: 'Hizmet Masraf Kartları'
    }
  },
  {
    path: '/stok-hizmet-yonetimi/depo-kartlari/liste',
    name: 'StokHizmetYonetimiDepoKartlariListe',
    component: () => import('@/views/stok-hizmet-yonetimi/depo-kartlari/ana-tabs/depo-kartlari-liste.vue'),
    meta: {
      title: 'Depo Kartları'
    }
  },
  //Stok-Hizmet Yönetimi Bitiş
  //Sabit Kıymet Yönetimi Başlangıç
  {
    path: '/sabit-kiymet-yonetimi/kart/liste',
    name: 'SabitKiymetYonetimiKartListe',
    component: () => import('@/views/sabit-kiymet-yonetimi/kartlar/ana-tabs/kart-liste.vue'),
    meta: {
      title: 'Kartlar'
    }
  },
  {
    path: '/sabit-kiymet-yonetimi/hareket/liste',
    name: 'SabitKiymetYonetimiHareketListe',
    component: () => import('@/views/sabit-kiymet-yonetimi/hareketler/ana-tabs/hareket-liste.vue'),
    meta: {
      title: 'Hareketler'
    }
  },
  //Sabit Kıymet Yönetimi Bitiş
  //Personel Yönetimi Başlangıç
  {
    path: '/personel-yonetimi/kartlar/liste',
    name: 'PersonelYonetimiKartlarListe',
    component: () => import('@/views/personel-yonetimi/kartlar/ana-tabs/kartlar-liste.vue'),
    meta: {
      title: 'Kartlar'
    }
  },
  //Personel Yönetimi Bitiş
  //Büro Yönetimi Başlangıç
  {
    path: '/buro-yonetimi/kiralar/liste',
    name: 'BuroYonetimiKiralarListe',
    component: () => import('@/views/buro-yonetimi/kiralar/ana-tabs/kiralar-liste.vue'),
    meta: {
      title: 'Kiralar'
    }
  },
  //Büro Yönetimi Bitiş
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
}); 

export default router
