<template>
        <div class="">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h1>AnaSayfa</h1>

                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="icon-cards-row mb-4">
                        <div class="col-md-12 mb-4 pl-0 pr-0 px-2">
                            <div class="glide center glide--ltr glide--carousel glide--swipeable">
                                <div class="glide__track pb-3" data-glide-el="track">
                                    <div class="glide__slides"
                                        style="transition: transform 400ms cubic-bezier(0.165, 0.84, 0.44, 1) 0s; width: 1968px; transform: translate3d(0px, 0px, 0px);">
                                        <div class="glide__slide glide__slide--active"
                                            style="width: 328px; margin-right: 0px;">
                                            <div class="card flex-row">
                                                <div class="card-body text-center font-weight-bold">
                                                    <i class="iconsminds-euro-sign-2"></i>
                                                    <p class="card-text mb-0">{{borsaData[3]?.ACIKLAMA}}</p>

                                                    <div class="borsaDiv">
                                                        <div>
                                                            {{borsaData[3]?.SEMBOL}}<br>
                                                            {{Number(borsaData[3]?.KAPANIS).toFixed(3)}}
                                                        </div>
                                                        <div v-if="borsaData[3]?.KAPANIS>borsaData[3]?.ACILIS">
                                                            <i class="iconsminds-go-top text-success"
                                                                style="font-size: larger;"></i>
                                                        </div>
                                                        <div v-if="borsaData[3]?.ACILIS>borsaData[3]?.KAPANIS">
                                                            <i class="iconsminds-go-bottom text-danger"
                                                                style="font-size: larger;"></i>
                                                        </div>
                                                        <div v-if="borsaData[3]?.ACILIS==borsaData[3]?.KAPANIS">
                                                            <i class="iconsminds-sync text-warning"
                                                                style="font-size: larger;"></i>
                                                        </div>
                                                        <div>
                                                            %{{Number(borsaData[3]?.YUZDEDEGISIM).toFixed(3)}}<br>
                                                            {{Number(borsaData[3]?.NET).toFixed(3)}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="glide__slide"
                                            style="width: 328px; margin-left: 0px; margin-right: 0px;">
                                            <div class="card flex-row">
                                                <div class="card-body text-center font-weight-bold">
                                                    <i class="iconsminds-dollar-sign-2"></i>
                                                    <p class="card-text mb-0">{{borsaData[6]?.ACIKLAMA}}</p>

                                                    <div class="borsaDiv">
                                                        <div>
                                                            {{borsaData[6]?.SEMBOL}}<br>
                                                            {{Number(borsaData[6]?.KAPANIS).toFixed(3)}}
                                                        </div>
                                                        <div v-if="borsaData[6]?.KAPANIS>borsaData[6]?.ACILIS">
                                                            <i class="iconsminds-go-top text-success"
                                                                style="font-size: larger;"></i>
                                                        </div>
                                                        <div v-if="borsaData[6]?.ACILIS>borsaData[6]?.KAPANIS">
                                                            <i class="iconsminds-go-bottom text-danger"
                                                                style="font-size: larger;"></i>
                                                        </div>
                                                        <div v-if="borsaData[6]?.ACILIS==borsaData[6]?.KAPANIS">
                                                            <i class="iconsminds-sync text-warning"
                                                                style="font-size: larger;"></i>
                                                        </div>
                                                        <div>
                                                            %{{Number(borsaData[6]?.YUZDEDEGISIM).toFixed(3)}}<br>
                                                            {{Number(borsaData[6]?.NET).toFixed(3)}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="glide__slide"
                                            style="width: 328px; margin-left: 0px; margin-right: 0px;">
                                            <div class="card flex-row">
                                                <div class="card-body text-center font-weight-bold">
                                                    <i class="iconsminds-coins"></i>
                                                    <p class="card-text mb-0">{{borsaData[5]?.ACIKLAMA}}</p>

                                                    <div class="borsaDiv">
                                                        <div>
                                                            {{borsaData[5]?.SEMBOL}}<br>
                                                            {{Number(borsaData[5]?.KAPANIS).toFixed(3)}}
                                                        </div>
                                                        <div v-if="borsaData[5]?.KAPANIS>borsaData[5]?.ACILIS">
                                                            <i class="iconsminds-go-top text-success"
                                                                style="font-size: larger;"></i>
                                                        </div>
                                                        <div v-if="borsaData[5]?.ACILIS>borsaData[5]?.KAPANIS">
                                                            <i class="iconsminds-go-bottom text-danger"
                                                                style="font-size: larger;"></i>
                                                        </div>
                                                        <div v-if="borsaData[5]?.ACILIS==borsaData[5]?.KAPANIS">
                                                            <i class="iconsminds-sync text-warning"
                                                                style="font-size: larger;"></i>
                                                        </div>
                                                        <div>
                                                            %{{Number(borsaData[5]?.YUZDEDEGISIM).toFixed(3)}}<br>
                                                            {{Number(borsaData[5]?.NET).toFixed(3)}}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="glide__slide"
                                            style="width: 328px; margin-left: 0px; margin-right: 0px;">
                                            <div class="card flex-row">
                                                <div class="card-body text-center font-weight-bold">
                                                    <i class="iconsminds-dollar-sign-2"></i>
                                                    <p class="card-text mb-0">USD / TRY</p>
                                                    <div class="borsaDiv">
                                                        <div>
                                                            {{Number(dolarData.prices.latest_price.amount?.amount).toFixed(3)}}
                                                        </div>
                                                        <div>
                                                            %{{Number(dolarData.prices.latest_price.percent_change?.hour).toFixed(3)}}
                                                        </div>
                                                    </div>
                                                    <div class="text-muted"><a class="text-primary"
                                                            href="https://www.coinbase.com/" target="_blank"
                                                            rel="noreferrer">coinbase</a></div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="glide__slide"
                                            style="width: 328px; margin-left: 0px; margin-right: 0px;">
                                            <div class="card flex-row">
                                                <div class="card-body text-center font-weight-bold">
                                                    <i class="iconsminds-coins-2"></i>
                                                    <p class="card-text mb-0">BTC</p>
                                                    <div class="borsaDiv">
                                                        <div>
                                                            {{Number(btcData.prices.latest_price.amount?.amount).toFixed(3)}}
                                                        </div>
                                                        <div>
                                                            %{{Number(btcData.prices.latest_price.percent_change?.day).toFixed(3)}}
                                                        </div>
                                                    </div>
                                                    <div class="text-muted"><a class="text-primary"
                                                            href="https://www.coinbase.com/" target="_blank"
                                                            rel="noreferrer">coinbase</a></div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="glide__slide"
                                            style="width: 328px; margin-left: 0px; margin-right: 0px;">
                                            <div class="card flex-row">
                                                <div class="card-body text-center font-weight-bold">
                                                    <i class="iconsminds-euro-sign-2"></i>
                                                    <p class="card-text mb-0">EUR / TRY</p>
                                                    <div class="borsaDiv">
                                                        <div>
                                                            {{Number(euroData.prices.latest_price.amount?.amount).toFixed(3)}}
                                                        </div>
                                                        <div>
                                                            %{{Number(euroData.prices.latest_price.percent_change?.hour).toFixed(3)}}
                                                        </div>
                                                    </div>
                                                    <div class="text-muted"><a class="text-primary"
                                                            href="https://www.coinbase.com/" target="_blank"
                                                            rel="noreferrer">coinbase</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="glide__arrows" data-glide-el="controls">
                                    <button class="glide__arrow glide__arrow--left left-arrow btn btn-link"
                                        data-glide-dir="<"><i class="simple-icon-arrow-left"></i></button>
                                    <button class="glide__arrow glide__arrow--right right-arrow btn btn-link"
                                        data-glide-dir=">"><i class="simple-icon-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 col-xl-6">


                    <div class="row">
                        <div class="col-md-12 mb-4">
                            <div class="card">
                                <div class="position-absolute card-top-buttons">

                                    <button class="btn btn-header-light icon-button" type="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="simple-icon-refresh"></i>
                                    </button>

                                    <div class="dropdown-menu dropdown-menu-right mt-3">
                                        <a class="dropdown-item" href="#">Sales</a>
                                        <a class="dropdown-item" href="#">Orders</a>
                                        <a class="dropdown-item" href="#">Refunds</a>
                                    </div>

                                </div>

                                <div class="card-body">
                                    <h5 class="card-title">Grafik</h5>
                                    <div class="dashboard-line-chart chart">
                                        <canvas id="salesChart"></canvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-12 mb-4">
                    <div class="card">
                        <div class="position-absolute card-top-buttons">
                            <button class="btn btn-header-light icon-button">
                                <i class="simple-icon-refresh"></i>
                            </button>
                        </div>

                        <div class="card-body">
                            <h5 class="card-title">Recent Orders</h5>
                            <div class="scroll dashboard-list-with-thumbs">
                                <div class="d-flex flex-row mb-3">
                                    <a class="d-block position-relative" href="#">
                                        <img src="img/products/marble-cake-thumb.jpg" alt="Marble Cake"
                                            class="list-thumbnail border-0" />
                                        <span
                                            class="badge badge-pill badge-theme-2 position-absolute badge-top-right">NEW</span>
                                    </a>
                                    <div class="pl-3 pt-2 pr-2 pb-2">
                                        <a href="#">
                                            <p class="list-item-heading">Marble Cake</p>
                                            <div class="pr-4 d-none d-sm-block">
                                                <p class="text-muted mb-1 text-small">Latashia Nagy - 100-148 Warwick
                                                    Trfy, Kansas City, USA</p>
                                            </div>
                                            <div class="text-primary text-small font-weight-medium d-none d-sm-block">
                                                09.04.2018</div>
                                        </a>
                                    </div>
                                </div>

                                <div class="d-flex flex-row mb-3">
                                    <a class="d-block position-relative" href="#">
                                        <img src="img/products/fruitcake-thumb.jpg" alt="Fruitcake"
                                            class="list-thumbnail border-0" />
                                        <span
                                            class="badge badge-pill badge-theme-2 position-absolute badge-top-right">NEW</span>
                                    </a>
                                    <div class="pl-3 pt-2 pr-2 pb-2">
                                        <a href="#">
                                            <p class="list-item-heading">Fruitcake</p>
                                            <div class="pr-4 d-none d-sm-block">
                                                <p class="text-muted mb-1 text-small">Marty Otte - 166-156 Rue de
                                                    Varennes, Gatineau, QC J8T 8G4, Canada</p>
                                            </div>
                                            <div class="text-primary text-small font-weight-medium d-none d-sm-block">
                                                09.04.2018</div>
                                        </a>
                                    </div>
                                </div>

                                <div class="d-flex flex-row mb-3">
                                    <a class="d-block position-relative" href="#">
                                        <img src="img/products/chocolate-cake-thumb.jpg" alt="Chocolate Cake"
                                            class="list-thumbnail border-0" />
                                        <span
                                            class="badge badge-pill badge-theme-1 position-absolute badge-top-right">PROCESS</span>
                                    </a>
                                    <div class="pl-3 pt-2 pr-2 pb-2">
                                        <a href="#">
                                            <p class="list-item-heading">Chocolate Cake</p>
                                            <div class="pr-4 d-none d-sm-block">
                                                <p class="text-muted mb-1 text-small">Linn Ronning - Rasen 2-14, 98547
                                                    Kühndorf, Germany</p>
                                            </div>
                                            <div class="text-primary text-small font-weight-medium d-none d-sm-block">
                                                09.04.2018</div>
                                        </a>
                                    </div>
                                </div>

                                <div class="d-flex flex-row mb-3">
                                    <a class="d-block position-relative" href="#">
                                        <img src="img/products/fat-rascal-thumb.jpg" alt="Fat Rascal"
                                            class="list-thumbnail border-0" />
                                        <span
                                            class="badge badge-pill badge-theme-3 position-absolute badge-top-right">DONE</span>
                                    </a>
                                    <div class="pl-3 pt-2 pr-2 pb-2">
                                        <a href="#">
                                            <p class="list-item-heading">Fat Rascal</p>
                                            <div class="pr-4 d-none d-sm-block">
                                                <p class="text-muted mb-1 text-small">Rasheeda Vaquera - 37 Rue des
                                                    Grands Prés, 03100 Montluçon, France</p>
                                            </div>
                                            <div class="text-primary text-small font-weight-medium d-none d-sm-block">
                                                09.04.2018</div>
                                        </a>
                                    </div>
                                </div>

                                <div class="d-flex flex-row mb-3">
                                    <a class="d-block position-relative" href="#">
                                        <img src="img/products/streuselkuchen-thumb.jpg" alt="Streuselkuchen"
                                            class="list-thumbnail border-0" />
                                        <span
                                            class="badge badge-pill badge-theme-3 position-absolute badge-top-right">DONE</span>
                                    </a>
                                    <div class="pl-3 pt-2 pr-2 pb-2">
                                        <a href="#">
                                            <p class="list-item-heading">Streuselkuchen</p>
                                            <div class="pr-4 d-none d-sm-block">
                                                <p class="text-muted mb-1 text-small">Mimi Carreira - 36-71 Victoria
                                                    St, Birmingham, UK</p>
                                            </div>
                                            <div class="text-primary text-small font-weight-medium d-none d-sm-block">
                                                09.04.2018</div>
                                        </a>
                                    </div>
                                </div>

                                <div class="d-flex flex-row mb-3">
                                    <a class="d-block position-relative" href="#">
                                        <img src="img/products/cremeschnitte-thumb.jpg" alt="Cremeschnitte"
                                            class="list-thumbnail border-0" />
                                        <span
                                            class="badge badge-pill badge-theme-3 position-absolute badge-top-right">DONE</span>
                                    </a>
                                    <div class="pl-3 pt-2 pr-2 pb-2">
                                        <a href="#">
                                            <p class="list-item-heading">Cremeschnitte</p>
                                            <div class="pr-4 d-none d-sm-block">
                                                <p class="text-muted mb-1 text-small">Lenna Majeed - 6 Hertford St
                                                    Mayfair, London, UK</p>
                                            </div>
                                            <div class="text-primary text-small font-weight-medium d-none d-sm-block">
                                                09.04.2018</div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
   
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    export default {
        created() {
            this.$store.dispatch('borsaDataApi')
            this.$store.dispatch('dolarDataApi')
            this.$store.dispatch('euroDataApi')
            this.$store.dispatch('btcDataApi')
        },
        mounted() {
            (function () {
                if (window.localStorage) {
                    if (!localStorage.getItem('firstLoad')) {
                        localStorage['firstLoad'] = true;
                        window.location.reload();
                    } else
                        localStorage.removeItem('firstLoad');
                }
            })();
            // useScript(process.env.BASE_URL+"_assets/js/vendor/jquery-3.3.1.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/bootstrap.bundle.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/Chart.bundle.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/chartjs-plugin-datalabels.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/moment.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/fullcalendar.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/datatables.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/perfect-scrollbar.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/progressbar.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/jquery.barrating.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/select2.full.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/nouislider.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/bootstrap-datepicker.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/Sortable.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/mousetrap.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/vendor/glide.min.js");
            // useScript(process.env.BASE_URL+"_assets/js/dore.script.js");
            // useScript(process.env.BASE_URL+"_assets/js/scripts.js");
            setInterval(() => {
                this.$store.dispatch('borsaDataApi')
                this.$store.dispatch('dolarDataApi')
                this.$store.dispatch('euroDataApi')
                this.$store.dispatch('btcDataApi')
            }, 10000)

        },
        computed: {
            ...mapGetters({
                userData: 'getUserData',
                borsaData: 'getBorsaData',
                dolarData: 'getDolarData',
                euroData: 'getEuroData',
                btcData: 'getBtcData',
            })
        }
    }
</script>

<style>
    .borsaDiv {
        display: flex;
        justify-content: center;
        align-items: stretch;
        flex-direction: row;
        padding: 5px;
    }

    .glide__arrow--left {
        left: -2em !important;
        border: none !important;
    }

    .glide__arrow--right {
        right: -2em !important;
        border: none !important;
    }
</style>