<template>
    <div class="card">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs " role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab"
                        aria-controls="first" aria-selected="true">Bakiye Listesi</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab"
                        aria-controls="second" aria-selected="false">Gelen</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="third-tab" data-toggle="tab" href="#third" role="tab" aria-controls="third"
                        aria-selected="false">Giden</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                    
                    <tablo table_name="banka_bakiye_listesi" :buttonVisible="buttonVisible"/>
                </div>
                <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                    <tablo table_name="banka_gelen_havale" detay_link="/finans-yonetimi/banka/gelen-detay/" :visible="visible"/>
                </div>
                <div class="tab-pane fade" id="third" role="tabpanel" aria-labelledby="third-tab">
                    <tablo table_name="bankadan_giden_havale" detay_link="/finans-yonetimi/banka/giden-detay/" :visible="visible"/>
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
        data() {
            return {
                buttonVisible: {
                    ekle:false,
                    duzenle:false,
                    gecmisKayitlar:false,
                    sil:false
                },
                visible: {
                    id:false,
                    state: false,
                    own_id:false,
                    user_id:false,
                    created_at:false,
                    updated_at:false,
                    belge_aciklamasi:false,
                    doviz_tipi_id:false,
                    doviz_kuru_tarihi:false,
                    doviz_kuru_aciklamasi:false,
                    doviz_kuru_kaynagi:false,
                    banka_karti_id:false,
                    banka_sube_id:false,
                }
            }
        },
    }
</script>

<style>

</style>