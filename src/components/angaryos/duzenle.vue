<template>
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <h1>{{data?.table_info?.display_name}}</h1>
                            <div class="row">
                                <div v-for="txt in data?.column_set?.column_arrays[0]?.columns" :key="txt"
                                    class="form-group text-left col-12 col-md-6 col-lg-4 col-xl-3 show-spinner">
                                    <label class="">{{ txt.display_name }} :</label>
                                    <div v-if="txt.gui_type_name=='string'">
                                        <input :type="txt.gui_type_name=='string'?'text':''" class="form-control"
                                            v-model="data.record[txt.name]">
                                    </div>
                                   

                                    <div v-if="txt.gui_type_name=='numeric'">
                                        <input :type="txt.gui_type_name=='numeric'?'number':''"
                                            v-model="data.record[txt.name]" class="form-control">
                                    </div>



                                    <input :type="txt.gui_type_name=='phone'?'tel':''" v-model="data.record[txt.name]"
                                        :class="txt.gui_type_name!='phone'?'d-none':''" class="form-control">


                                    <input :type="txt.gui_type_name=='date'?'date':''" v-model="data.record[txt.name]"
                                        :class="txt.gui_type_name!='date'?'d-none':''" class="form-control">

                                    <div v-if="txt.gui_type_name=='text'">
                                        <input :type="txt.gui_type_name=='text'?'text':''"
                                            v-model="data.record[txt.name]"
                                            :class="txt.gui_type_name!='text'?'d-none':''" class="form-control">
                                    </div>

                                    <div v-if="txt.gui_type_name=='select' || txt.gui_type_name=='select:static'">
                                        <select class="form-control " v-model="data.record[txt.name]">
                                            <option v-for="c in column[txt.name]" :key="c"
                                                :value="[{'source':c.id,'display':c.text}]">{{c.text}}</option>
                                        </select>
                                    </div>

                                    <div class="custom-switch custom-switch-primary  custom-switch-small "
                                        v-if="txt.gui_type_name=='boolean:fastchange'"
                                        :class="txt.gui_type_name=='boolean:fastchange'?'':'d-none'">
                                        <input class="custom-switch-input" id="switch" type="checkbox"
                                            v-model="data.record[txt.name]">
                                        <label class="custom-switch-btn" for="switch"></label>
                                    </div>

                                </div>
                            </div>
                            <button class="btn btn-primary btn-sm float-right" @click="setUpdate">Düzenle</button>
                        </div>
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
            id: Number
        },
        data() {
            return {
                data: {},
                column: {}
            }
        },
        methods: {
            getData() {
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
                            text: err,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        console.log(err);

                    })
            },
            getColumn() {
                var set = setInterval(() => {
                    if (this?.data?.column_set?.column_arrays[0]?.columns) {
                        for (const [k, v] of Object.entries(this?.data?.column_set?.column_arrays[0]?.columns)) {
                            if (v.gui_type_name == 'select' || v.gui_type_name == 'select:static') {
                                var params = {
                                    search: '***',
                                    editRecordId: this.id,
                                    limit: 1000,
                                }
                                if (v?.up_column_name) {
                                    params['upColumnData'] = this.data.record[k][0].source;
                                    params['upColumnName'] = v.up_column_name;
                                }

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
                }, 500);
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
        mounted() {
            this.getData();
            this.getColumn();
        },
    }
</script>

<style>

</style>