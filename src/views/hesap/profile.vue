<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">

                <div class="mb-2">
                    <h1>{{userData?.user?.name_basic}} {{userData?.user?.surname}}</h1>


                </div>



                <div class="row">
                    <div class="col-12 col-lg-5 col-xl-4 col-left">
                        <div class="card mb-4">
                            <div class="position-absolute card-top-buttons">
                                <button class="btn btn-outline-white icon-button ">
                                    <i class="simple-icon-pencil"></i>
                                </button>
                            </div>
                            <div v-if="userData.user.profile_picture!='[]'">
                                <img :src="publicPath+'_assets/img/profiles/1.jpg'" alt="Detail Picture"  class="card-img-top" />
                            </div>
                            <div v-else>
                                <img src="@/assets/img/default-user.png" alt="Detail Picture"  class="card-img-top" />
                            </div>
                            
                            {{publicPath}}
                            <div class="card-body">
                                <p class="text-muted text-small mb-2">About</p>
                                <p class="mb-3">
                                    I’m a web developer. I spend my whole day, practically every day,
                                    experimenting with HTML, CSS, and JavaScript; dabbling with Python and
                                    Ruby; and inhaling a wide variety of potentially useless information
                                    through a few hundred RSS feeds. I build websites that delight and
                                    inform. I do it well.
                                </p>

                                <p class="text-muted text-small mb-2">Location</p>
                                <p class="mb-3">Nairobi, Kenya</p>

                                <p class="text-muted text-small mb-2">Responsibilities</p>
                                <p class="mb-3">
                                    <a href="#">
                                        <span class="badge badge-pill badge-outline-theme-2 mb-1">FRONTEND</span>
                                    </a>
                                    <a href="#">
                                        <span class="badge badge-pill badge-outline-theme-2 mb-1">JAVASCRIPT</span>
                                    </a>
                                    <a href="#">
                                        <span class="badge badge-pill badge-outline-theme-2 mb-1">SECURITY</span>
                                    </a>
                                    <a href="#">
                                        <span class="badge badge-pill badge-outline-theme-2 mb-1">DESIGN</span>
                                    </a>
                                </p>
                                <p class="text-muted text-small mb-2">Contact</p>
                                <div class="social-icons">
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item">
                                            <a href="#"><i class="simple-icon-social-facebook"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#"><i class="simple-icon-social-twitter"></i></a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a href="#"><i class="simple-icon-social-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4 d-none d-lg-block">
                            <div class="position-absolute card-top-buttons">
                                <button class="btn btn-header-light icon-button">
                                    <i class="simple-icon-refresh"></i>
                                </button>
                            </div>

                            
                        </div>
                        
                    </div>
                    <div class="col-12 col-lg-7 col-xl-8 col-right">
                        <div class="card">
                            <div class="card-body">
                                <div class="form-group">
                                    <label for="isim">İsim:</label>
                                    <input type="text" class="form-control" v-model="userData.user.name_basic">
                                </div>
                                <div class="form-group">
                                    <label for="isim">Soyisim:</label>
                                    <input type="text" class="form-control" v-model="userData.user.surname">
                                </div>
                                <div class="form-group">
                                    <label for="isim">TCKN/VKN:</label>
                                    <input type="number" class="form-control" v-model="userData.user.tc">
                                </div>
                                <div class="form-group">
                                    <label for="isim">Telefon:</label>
                                    <input type="tel" class="form-control" v-model="userData.user.phone">
                                </div>
                                <div class="form-group">
                                    <label for="isim">Müdürlük:</label>
                                    <select type="text" class="form-control" v-model="userData.user.department_id">
                                        <option v-for="d in department" :key="d" :value="d.id">{{d.text}}</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="isim">Mail:</label>
                                    <input type="mail" class="form-control" v-model="userData.user.email">
                                </div>
                                <button class="btn btn-primary btn-sm float-right">Düzenle</button>
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
    import axios from 'axios'
    export default {
        data() {
            return {
                publicPath: process.env.BASE_URL,
                department: [],
            }
        },
        created() {
            this.getDepartment()
        },
        methods: {
            getDepartment() {
                axios.post(this.$store.getters.getToken+'/tables/users/getSelectColumnData/department_id?search=***&page=1&limit=500&editRecordId=4')
                .then(response => {
                    this.department = response.data.results;
                })
            },
        },
        computed: {
            ...mapGetters({
                userData: 'getUserData',
            })
        },
    }
</script>

<style>

</style>