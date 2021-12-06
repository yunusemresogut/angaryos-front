<template>
    <nav class="navbar fixed-top">
        <div class="d-flex align-items-center navbar-left">
            <a href="#" class="menu-button d-none d-md-block">
                <svg class="main" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 17">
                    <rect x="0.48" y="0.5" width="7" height="1" />
                    <rect x="0.48" y="7.5" width="7" height="1" />
                    <rect x="0.48" y="15.5" width="7" height="1" />
                </svg>
                <svg class="sub" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17">
                    <rect x="1.56" y="0.5" width="16" height="1" />
                    <rect x="1.56" y="7.5" width="16" height="1" />
                    <rect x="1.56" y="15.5" width="16" height="1" />
                </svg>
            </a>

            <a href="#" class="menu-button-mobile d-xs-block d-sm-block d-md-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 17">
                    <rect x="0.5" y="0.5" width="25" height="1" />
                    <rect x="0.5" y="7.5" width="25" height="1" />
                    <rect x="0.5" y="15.5" width="25" height="1" />
                </svg>
            </a>
            <!--div class="search" style="display:flex">
                <div class="dropdown d-inline-block">
                    <button class="btn btn-outline-primary araDropdown dropdown-toggle mb-1" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Sayfa
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 37px, 0px);">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <input style="border:none!important" placeholder="Ara...">
                <span class="search-icon">
                    <i class="simple-icon-magnifier"></i>
                </span>
            </div-->

        </div>


        <a class="navbar-logo" href="/">
        <span></span>
            <span class="logo d-none d-xs-block" style="background:transparent">
                Dijital Kuvarssoft Yapay Zeka
                <img :src="`${publicPath}_assets/logos/blackk.png`" :style="{height:'100%',filter:primaryColor}" alt="">
            </span>
            <span class="logo-mobile d-block d-xs-none " style="background:transparent">
                Dijital KuvarsSoft Yapay Zeka
                 <img :src="`${publicPath}_assets/logos/mobilee.png`" :style="{height:'100%',filter:primaryColor}" alt="">
            </span>
        </a>

        <div class="navbar-right">
            <div class="header-icons d-inline-block align-middle">
                
                <div class="position-relative d-none d-sm-inline-block">
                    <button class="header-icon btn btn-empty" type="button" id="iconMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" @click="getBorsa">
                        <i class="iconsminds-coins-2" style="font-size: larger;"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right mt-3  position-absolute" style="width:180px">
                        <div class="my-1" >
                            <div class="borsaDiv m-2" v-for="bd in borsaData" :key="bd" style="color:var(--theme-color-3)">
                                <div>
                                    {{bd.SEMBOL}}<br>
                                    {{Number(bd.KAPANIS).toFixed(3)}}
                                </div>
                                <div v-if="bd.KAPANIS>bd.ACILIS">
                                    <i class="iconsminds-go-top text-success" style="font-size: larger;"></i>
                                </div>
                                <div v-if="bd.ACILIS>bd.KAPANIS">
                                    <i class="iconsminds-go-bottom text-danger" style="font-size: larger;"></i>
                                </div>
                                <div v-if="bd.ACILIS==bd.KAPANIS">
                                    <i class="iconsminds-sync text-warning" style="font-size: larger;"></i>
                                </div>
                                <div>
                                    %{{Number(bd.YUZDEDEGISIM).toFixed(3)}}<br>
                                    {{Number(bd.NET).toFixed(3)}}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="position-relative d-none d-sm-inline-block">
                    <button class="header-icon btn btn-empty" type="button" id="iconMenuButton" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="simple-icon-grid"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right mt-3  position-absolute" id="iconMenuDropdown">
                        <a href="/#" class="icon-menu-item">
                            <i class="iconsminds-equalizer d-block"></i>
                            <span></span>
                        </a>

                        <a href="/#" class="icon-menu-item">
                            <i class="iconsminds-male-female d-block"></i>
                            <span>Kullanıcılar</span>
                        </a>

                        <a href="/#" class="icon-menu-item">
                            <i class="iconsminds-puzzle d-block"></i>
                            <span>Eklentiler</span>
                        </a>

                        <a href="/#" class="icon-menu-item">
                            <i class="iconsminds-bar-chart-4 d-block"></i>
                            <span>Grafikler</span>
                        </a>

                        <a href="/#" class="icon-menu-item">
                            <i class="iconsminds-file d-block"></i>
                            <span>Dökümanlar</span>
                        </a>

                        <a href="/#" class="icon-menu-item">
                            <i class="iconsminds-suitcase d-block"></i>
                            <span>Yapılacaklar</span>
                        </a>

                    </div>
                </div>

                <div class="position-relative d-inline-block">
                    <button class="header-icon btn btn-empty" type="button" id="notificationButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="simple-icon-bell"></i>
                        <span class="count">3</span>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right mt-3 position-absolute" id="notificationDropdown">
                        <div class="scroll">
                            <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                                <a href="#">
                                    <img :src="`${publicPath}_assets/img/profiles/l-2.jpg`" alt="Notification Image"
                                        class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                </a>
                                <div class="pl-3">
                                    <a href="#">
                                        <p class="font-weight-medium mb-1">Bildirim!</p>
                                        <p class="text-muted mb-0 text-small">01.11.2021 - 12:45</p>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                                <a href="#">
                                    <img :src="`${publicPath}_assets/img/notifications/1.jpg`" alt="Notification Image"
                                        class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                </a>
                                <div class="pl-3">
                                    <a href="#">
                                        <p class="font-weight-medium mb-1">Bildirim!</p>
                                        <p class="text-muted mb-0 text-small">01.11.2021 - 12:45</p>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex flex-row mb-3 pb-3 border-bottom">
                                <a href="#">
                                    <img :src="`${publicPath}_assets/img/notifications/2.jpg`" alt="Notification Image"
                                        class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                </a>
                                <div class="pl-3">
                                    <a href="#">
                                        <p class="font-weight-medium mb-1">Bildirim!</p>
                                        <p class="text-muted mb-0 text-small">01.11.2021 - 12:45</p>
                                    </a>
                                </div>
                            </div>
                            <div class="d-flex flex-row mb-3 pb-3 ">
                                <a href="#">
                                    <img :src="`${publicPath}_assets/img/notifications/3.jpg`" alt="Notification Image"
                                        class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle" />
                                </a>
                                <div class="pl-3">
                                    <a href="#">
                                        <p class="font-weight-medium mb-1">Bildirim!</p>
                                        <p class="text-muted mb-0 text-small">01.11.2021 - 12:45</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="header-icon btn btn-empty d-none d-sm-inline-block" type="button" id="fullScreenButton">
                    <i class="simple-icon-size-fullscreen"></i>
                    <i class="simple-icon-size-actual"></i>
                </button>

            </div>

            <div class="user d-inline-block">
                <button class="btn btn-empty p-0" type="button" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                    <span class="name">{{userData?.user?.name_basic}} {{userData?.user?.surname}}</span>
                            <span v-if="userData.user?.profile_picture!='[]'">
                                <img :src="publicPath+'_assets/img/profiles/1.jpg'" alt="Detail Picture"  class="card-img-top" />
                            </span>
                            <span v-else>
                                <img src="@/assets/img/default-user.png" alt="Detail Picture" :style="{height:'100%',filter:primaryColor}"  class="card-img-top" />
                            </span>
                </button>

                <div class="dropdown-menu dropdown-menu-right mt-3">
                    <router-link to="/profil" class="dropdown-item">Profil</router-link>
                    <a class="dropdown-item" href="#">Hesap</a>
                    <a class="dropdown-item" href="#">Özellikler</a>
                    <a class="dropdown-item" href="#">Geçmiş</a>
                    <a class="dropdown-item" href="#">Destek</a>
                    <a class="dropdown-item" href="#" @click="logOut()">Çıkış yap</a>
                </div>
            </div>
        </div>
    </nav>
    
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        name:"Nav",
        data(){
            return{
                publicPath: process.env.BASE_URL,
                primaryColor:'',
            }
        },
        methods:{
            logOut(){
                this.$store.dispatch('logOut')
            },
            getBorsa(){
                this.$store.dispatch('borsaDataApi')
            },
        },
        mounted() {
            let themeStr = localStorage.getItem("dore-theme-color");
            const themeArray = themeStr.split(".");
            switch (themeArray[2]) {
                case "redruby":
                    this.primaryColor='hue-rotate(305deg)';
                    break;
                case "blueolympic":
                    this.primaryColor='hue-rotate(140deg)';
                    break;
                case "bluenavy":
                    this.primaryColor='hue-rotate(170deg)';
                    break;
                case "blueyale":
                    this.primaryColor='hue-rotate(155deg)';
                    break;
                case "greenmoss":
                    this.primaryColor='hue-rotate(65deg)';
                    break;
                case "greenlime":
                    this.primaryColor='hue-rotate(65deg)';
                    break;
                case "purplemonster":
                    this.primaryColor='hue-rotate(225deg)';
                    break;
                case "greysteel":
                    this.primaryColor='grayscale(90%)';
                    break;
                default:
                    break;
            }
        },
        computed:{
            ...mapGetters({
                userData:'getUserData',
                borsaData:'getBorsaData'
                })
        }
    }
</script>


<style>
.borsaDiv{
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: row;
    padding: 5px;
}
.araDropdown{
    border: none;
    border-left: 1px solid var(--theme-color-1);
    border-right: 1px solid var(--theme-color-1);
    }
</style>