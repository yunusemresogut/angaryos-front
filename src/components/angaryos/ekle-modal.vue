<template>
    <div class="modal fade modal-right" :id="'ekle-modal'+table_name" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalRight" aria-hidden="true" @click="modalKapat">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-primary">{{data?.table_info?.display_name}} Ekle</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group text-left font-weight-bold"
                            v-for="txt in data?.column_set?.column_arrays[0]?.columns" :key="txt">
                            
                            <div v-if="filters && Object.keys(filters)==txt.name ">
                                <div class="d-none">
                                    {{params[txt.name]=filters[txt.name].filter[0]}}
                                </div>

                            </div>
                            
                            <div v-else>
                                <label :class="inputVisible[txt.name]?.visible==false?'d-none':''">{{ txt.display_name }}:</label>
                                

                                <div v-if="txt.gui_type_name=='string'">
                                    <input v-if="txt.name=='tc'" maxlength="11" type="text" v-model="params[txt.name]"
                                        class="form-control">
                                    <input v-else type="text" v-model="params[txt.name]" class="form-control">
                                </div>
                                <div v-else-if="txt.gui_type_name=='numeric'">
                                    <input v-if="txt.name=='mersis_no'"
                                        oninput="this.value = this.value.slice(0, this.maxLength);" maxlength="16"
                                        type="number" v-model="params[txt.name]" class="form-control">

                                    <input ref="inputNumber" v-else type="number" v-model="params[txt.name]" class="form-control">
                                </div>
                                <div v-else-if="txt.gui_type_name=='phone'">
                                    <input ref="inputTel" type="tel" v-model="params[txt.name]" class="form-control">
                                </div>
                                <div v-else-if="txt.gui_type_name=='date'">
                                    <input ref="inputDate" type="date" v-model="params[txt.name]" class="form-control">
                                </div>
                                <div v-else-if="txt.gui_type_name=='text'">
                                    <input ref="inputText" type="text" v-model="params[txt.name]" class="form-control">
                                </div>
                                <div v-else-if="txt.gui_type_name=='select' || txt.gui_type_name=='select:static'">
                                    <select v-if="txt.name=='amortisman_listesi_id'" ref="inputSelect" class="form-control-lg selectElipsis" @change="getColumn" v-model="params[txt.name]" :class="inputVisible[txt.name]?.visible==false?'d-none':''">
                                        <option v-for="c in column[txt.name]" :key="c" :value="c.id" :title="c.text">
                                            {{parcala(c.text)}}
                                        </option>
                                    </select>
                                    <select v-else ref="inputSelect" class="form-control-lg selectElipsis" @change="getColumn" v-model="params[txt.name]" :class="inputVisible[txt.name]?.visible==false?'d-none':''">
                                        <option v-for="c in column[txt.name]" :key="c" :value="c.id" :title="c.text">
                                            {{c.text}}
                                        </option>
                                    </select>

                                   
                                    
                                </div>
                                <div v-if="txt.gui_type_name=='boolean:fastchange'" 
                                    class="custom-switch custom-switch-primary  custom-switch-small">
                                    <input class="custom-switch-input" :id="'switche'+txt.id" type="checkbox"
                                        v-model="params[txt.name]">
                                    <label class="custom-switch-btn" :for="'switche'+txt.id"></label>
                                </div>

                            </div>

                        </div>
                            <Select2 v-model="myValue" :options="myOptions" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)"/>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-primary" ref="modalClose"
                        data-dismiss="modal">Kapat</button>
                        <button type="button" class="btn btn-info" @click="temizle()">Temizle</button>
                    <button type="button" class="btn btn-primary" @click="add">Ekle</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Swal from "sweetalert2";
    // import '@/assets/css/select2.min.css';
    // import '@/assets/css/select2-bootstrap.min.css';
    // import useScript from '@/hooks/useScript'
    import Select2 from 'vue3-select2-component';
   
    export default {
        props: {
            table_name: String,
            filters: Object,
            input_visible:{
                type:Object,
                default:function(){
                    return {};
                }
            }
        },
        data() {
            return {
                params: {},
                data: [],
                column: [],
                inputVisible:this.input_visible,
                columnArray:[],
                myValue: '',
            myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]
            }
        },
        methods: {
            myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        },

            modalKapat($event) {
                if ($event.path[0].className == "modal fade modal-right show")
                    this.$refs.modalClose.click();
                   
            },
            parcala(text){
                return text.split(" ").slice(0,5).join(" ")+'...';
            },
            temizle(){
                this.params={};
            },
            getCreateData() {
                axios.post(this.$store.getters.getToken + '/tables/' + this.table_name + '/create', {
                        "params": "{\"column_set_id\":\"0\"}"
                    })
                    .then(res => {
                        if (res.status == 200) {
                            this.data = res.data.data
                            this.getColumn();
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
                    for (let v of Object.values(this.inputVisible)) {
                        if(v.id==this.params?.islem_tipi_id){
                            this.inputVisible[v.name].visible=true;
                        }
                        else{
                            this.inputVisible[v.name].visible=false;
                        }
                    }
                    if (this.data) {
                        for (const [k, v] of Object.entries(this.data.column_set.column_arrays[0].columns)) {
                            if (v.gui_type_name == 'select' || v.gui_type_name == 'select:static') {
                                var params = {
                                    search: '***',
                                    limit: 1000,
                                }
                                if (v?.up_column_name ) {
                                    params['upColumnData'] = this.params[v.up_column_name];
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
                }, 100);

            },
            add() {
                this.params['column_set_id'] = 0;
                this.params['table_name'] = this.table_name;
                axios.post(this.$store.getters.getToken + '/tables/' + this.table_name + '/store', this.params)
                    .then(res => {
                        if (res.data.data.message == 'success') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Başarılı',
                                showConfirmButton: false,
                                timer: 700,
                                position: 'top-start',
                            });
                            this.$refs.modalClose.click();
                            this.$emit('refresh');
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
            checkBox(txt) {
                if (txt.gui_type_name == 'boolean:fastchange') {
                    this.params[txt.name] = !this.params[txt.name];
                }
            }
        },
        mounted() {
            this.getCreateData();
        },
        components: {
            Select2,
        }
    }

    
</script>

<style>

.selectElipsis {
    width: 100%;
    appearance: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.select2-container {
    width: 100% !important;
}
.select2-dropdown {
    width: 100% !important;
}

</style>