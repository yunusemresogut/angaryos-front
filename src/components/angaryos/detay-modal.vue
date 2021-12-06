<template>
    <div class="modal fade modal-right" :id="'detay-modal'+table_name" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalRight" aria-hidden="true" @click="modalKapat">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-primary">{{data?.table_info?.display_name}} Detayları</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <h1>{{}}</h1>
                    <div v-for="txt in data?.column_set?.column_arrays[0]?.columns" :key="txt" class="row " style="display: flex; align-items: center;">
                        <label class="col-4 text-right">{{ txt.display_name }} :</label>
                        <div class="col-8 border mb-2 h6 p-1" style="min-height:30px;">{{data.record[txt.name]}}</div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary" ref="modalClose"
                        data-dismiss="modal">Kapat</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
    export default {
        props:{
            table_name:String,
            id:Number
        },
        data() {
            return {
                data: {},
            }
        },
        methods: {
            modalKapat($event) {
                if ($event.path[0].className == "modal fade modal-right show")
                    this.$refs.modalClose.click();
            },
            getDetail() {
                axios.post(this.$store.getters.getToken + '/tables/' + this.table_name + '/' + this.id, {
                    "params": "{\"column_set_id\":\"0\"}"
                })
                .then(res => {
                    if (res.status == 200) {
                      
                        this.data= res.data.data
                    }
                }).catch(err => {
                    Swal.fire({
                        icon: 'error',
                        position: 'top-start',
                        title: 'Hata',
                        text: err,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    console.log(err);

                })
            }
        },
        watch: {
            id(newVal, oldVal) {
                if (newVal != oldVal) {
                    this.getDetail();
                }
            }
        },
    }
</script>

<style>

</style>