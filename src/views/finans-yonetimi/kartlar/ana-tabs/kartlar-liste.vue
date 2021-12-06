<template>
    <div class="card">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs " role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab"
                        aria-controls="first" aria-selected="true">Kasa</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab"
                        aria-controls="second" aria-selected="false">Banka</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                    <tablo :table_name="'kasa_karti'" :detay_link="'/finans-yonetimi/kartlar/kasa-detay/'" :visible="visible"/>
                </div>
                <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                    <tablo :table_name="'banka_karti'" :detay_link="'/finans-yonetimi/kartlar/banka-detay/'" :visible="visible"/>
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
                visible: {
                    'id': false,
                    'user_id': false,
                    'own_id': false,
                    'updated_at': false,
                    'created_at': false,
                    'kategori_id': false,
                    'etiket': false,
                    'segment': false,
                    'swift': false,
                    'hesap_niteligi_id': false,
                    'hesap_numarasi': false,
                    'hesap_tipi_id': false,
                    'iban_no': false,
                    'kredi_karti_limiti': false,
                    'kredi_karti_numarasi': false,
                    'musteri_numarasi': false,
                    'son_kullanma_tarihi': false,
                }
            }
        }
    }
</script>

<style>

</style>