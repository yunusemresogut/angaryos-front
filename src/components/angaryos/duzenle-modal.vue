<template>
    <div class="modal fade modal-right" :id="'duzenle-modal'+table_name" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalRight" aria-hidden="true" @click="modalKapat">
        <div class="modal-dialog" role="document">
        <div v-if="loading" class="spinner-border loading-spinner text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-primary">{{data?.table_info?.display_name}} Düzenle</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div v-for="txt in data?.column_set?.column_arrays[0]?.columns" :key="txt"
                            class="form-group text-left font-weight-bold">
                            <div v-if="filters && Object.keys(filters)==txt.name ">
                                <div class="d-none">
                                    {{data.record[txt.name]=filters[txt.name].filter[0]}}
                                </div>
                            </div>
                            <div v-else>
                                <label
                                    :class="inputVisible[txt.name]?.visible==false?'d-none':''">{{ txt.display_name }}:</label>
                                <div v-if="txt.gui_type_name=='string'">
                                    <input :type="txt.gui_type_name=='string'?'text':''" class="form-control"
                                        v-model="data.record[txt.name]">
                                </div>

                                <div v-if="txt.gui_type_name=='numeric'">
                                    <input type="number" v-model="data.record[txt.name]" class="form-control">
                                </div>



                                <input :type="txt.gui_type_name=='phone'?'tel':''" v-model="data.record[txt.name]"
                                    :class="txt.gui_type_name!='phone'?'d-none':''" class="form-control">


                                <input :type="txt.gui_type_name=='date'?'date':''" v-model="data.record[txt.name]"
                                    :class="txt.gui_type_name!='date'?'d-none':''" class="form-control">

                                <div v-if="txt.gui_type_name=='text'">
                                    <input :type="txt.gui_type_name=='text'?'text':''" v-model="data.record[txt.name]"
                                        :class="txt.gui_type_name!='text'?'d-none':''" class="form-control">
                                </div>

                                <div v-if="txt.gui_type_name=='select' || txt.gui_type_name=='select:static'">
                                    <select v-if="txt.name=='amortisman_listesi_id'" class="form-control " v-model="data.record[txt.name]" @change="getColumn"
                                        :class="inputVisible[txt.name]?.visible==false?'d-none':''">
                                        <option v-for="c in column[txt.name]" :key="c"
                                            :value="[{'source':c.id,'display':c.text}]" :title="c.text">{{parcala(c.text)}}</option>
                                    </select>
                                    <select v-else class="form-control " v-model="data.record[txt.name]" @change="getColumn"
                                        :class="inputVisible[txt.name]?.visible==false?'d-none':''">
                                        <option v-for="c in column[txt.name]" :key="c"
                                            :value="[{'source':c.id,'display':c.text}]" :title="c.text">{{c.text}}</option>
                                    </select>
                                </div>

                                <div class="custom-switch custom-switch-primary  custom-switch-small "
                                    v-if="txt.gui_type_name=='boolean:fastchange'">
                                    <input class="custom-switch-input" :id="'switchu'+txt.id" type="checkbox"
                                        v-model="data.record[txt.name]">
                                    <label class="custom-switch-btn" :for="'switchu'+txt.id"></label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary" ref="modalClose"
                        data-dismiss="modal">Kapat</button>
                    <button type="button" class="btn btn-primary" @click="setUpdate">Düzenle</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Swal from "sweetalert2";
    export default {
        props: {
            table_name: String,
            id: Number,
            filters: Object,
            
            input_visible: {
                type: Object,
                default: function () {
                    return {};
                }
            }
        },
        data() {
            return {
                data: {},
                column: {},
                inputVisible: this.input_visible,
                loading:false,
            }
        },
        methods: {
            modalKapat($event) {
                if ($event.path[0].className == "modal fade modal-right show")
                    this.$refs.modalClose.click();
            },
            parcala(text){
                return text.split(" ").slice(0,5).join(" ")+'...';
            },
            getData() {
                this.loading = true;
                axios.post(this.$store.getters.getToken + '/tables/' + this.table_name + '/' + this.id + '/edit', {
                        "params": "{\"column_set_id\":\"0\"}"
                    })
                    .then(res => {
                        if (res.status == 200) {
                            this.data = res.data.data;
                        }
                    }).catch(err => {
                        Swal.fire({
                            icon: 'error',
                            position: 'top-start',
                            title: 'Hata',
                            text: err.data.data.message,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        console.log(err);

                    }).finally(() => {
                        this.loading = false;
                    });
            },
            getColumn() {
                var set = setInterval(() => {
                    for (let v of Object.values(this.inputVisible)) {
                            if (v.id == this.params?.islem_tipi_id) {
                                this.inputVisible[v.name].visible = true;
                            } else {
                                this.inputVisible[v.name].visible = false;
                            }
                        }
                    if (this?.data?.column_set?.column_arrays[0]?.columns) {
                        console.log('data',this.data)
                        for (const [k, v] of Object.entries(this?.data?.column_set?.column_arrays[0]?.columns)) {
                            if (v.gui_type_name == 'select' || v.gui_type_name == 'select:static') {
                                var params = {
                                    search: '***',
                                    editRecordId: this.id,
                                    limit: 1000,
                                }
                                if (v?.up_column_name && this.data?.record[v?.up_column_name]) {
                                    params['upColumnData'] = this.data?.record[v?.up_column_name][0]?.source;
                                    params['upColumnName'] = v.up_column_name;
                                }
                                console.log(k,v);
                                axios.post(this.$store.getters.getToken + '/tables/' + this.table_name +
                                        '/getSelectColumnData/' + k, params)
                                    .then(res => {
                                        if (res.status == 200) {
                                            this.column[k] = res.data.results;
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

                        }

                        clearInterval(set);
                    }
                }, 100);
            },
            setUpdate() {
                var params = {}
                params.column_set_id = 0

                for (const [k, v] of Object.entries(this.data.record)) {
                    params[k] = v;
                    if (typeof (v) == 'object' && v != null && v != '' && v.length > 0) {
                        params[k] = v[0]['source'];
                    } else if (typeof (v) == 'object') {
                        params[k] = undefined
                    }
                }
                axios.post(this.$store.getters.getToken + '/tables/' + this.table_name + '/' + this.id + '/update',
                        params)
                    .then(res => {
                        if (res.status == 200) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı',
                                showConfirmButton: false,
                                timer: 700,
                                position: 'top-start',
                            });
                            this.$refs.modalClose.click();
                            this.$emit('update')
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
            },
        },
        watch: {
            id(newVal, oldVal) {
                if (newVal != oldVal) {
                    this.getData();
                    this.getColumn();
                }


            },
        },
    }
</script>

<style>

</style>