<template>
    <div class="card">
        <div class="card-header">
            <ul class="nav nav-tabs card-header-tabs " role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="first-tab" data-toggle="tab" href="#first" role="tab"
                        aria-controls="first" aria-selected="true">Düzenle</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="second-tab" data-toggle="tab" href="#second" role="tab"
                        aria-controls="second" aria-selected="false">Hesap Eşleştirme</a>
                </li>
            </ul>
        </div>
        <div class="card-body">
            <div class="tab-content">
                <div class="tab-pane fade show active" id="first" role="tabpanel" aria-labelledby="first-tab">
                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item">
                                <router-link to="/finans-yonetimi/kartlar/liste">Banka Kartı</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <a>Düzenle</a>
                            </li>
                        </ol>
                    </nav>
                    <duzenle :table_name="'banka_karti'" :id="this.$route.params.id" />
                </div>
                <div class="tab-pane fade" id="second" role="tabpanel" aria-labelledby="second-tab">
                    <nav class="breadcrumb-container d-none d-sm-block d-lg-inline-block" aria-label="breadcrumb">
                        <ol class="breadcrumb pt-0">
                            <li class="breadcrumb-item">
                                <router-link to="/finans-yonetimi/kartlar/liste">Banka Kartı</router-link>
                            </li>
                            <li class="breadcrumb-item">
                                <a>Banka Hesap Eşleştirme</a>
                            </li>
                        </ol>
                    </nav>
                    <tablo :table_name="'hesap_eslestirme'" :filters="filters" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import tablo from '@/components/angaryos/tablo'
    import duzenle from '@/components/angaryos/duzenle'
    export default {
        components: {
            tablo,
            duzenle
        },
        data() {
            return {
                filters: {
                    "banka_karti_id": {
                        "type": 1,
                        "guiType": "select",
                        "filter": [this.$route.params.id],
                        "columnName": "banka_karti_id",
                        "json": ""
                    }
                }
            }
        }
    }
</script>

<style>

</style>