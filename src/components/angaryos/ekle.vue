<template>
    <main>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div v-for="txt in data.column_set.column_arrays[0].columns" :key="txt" class="row py-1">
                            <label class="col-4 pt-1 text-right">{{ txt.display_name }} :</label>
                            <div class="col-8">
                                <input :type="txt.gui_type_name=='string'?'text':''" v-model="params[txt.name]"
                                    :class="txt.gui_type_name!='string'?'d-none':''" class="form-control">
                                <input :type="txt.gui_type_name=='numeric'?'number':''" v-model="params[txt.name]"
                                    :class="txt.gui_type_name!='numeric'?'d-none':''" class="form-control">
                                <input :type="txt.gui_type_name=='phone'?'tel':''" v-model="params[txt.name]"
                                    :class="txt.gui_type_name!='phone'?'d-none':''" class="form-control">
                                     <input :type="txt.gui_type_name=='date'?'date':''" v-model="params[txt.name]"
                                :class="txt.gui_type_name!='date'?'d-none':''" class="form-control">
                            <textarea :class="txt.gui_type_name!='text'?'d-none':''" class="form-control" v-model="params[txt.name]"></textarea>
                                <select
                                    :class="txt.gui_type_name=='select' || txt.gui_type_name=='select:static'?'':'d-none'"
                                    class="form-control " @change="getColumn" v-model="params[txt.name]">
                                    <option v-for="c in column[txt.name]" :key="c" :value="c.id">{{c.text}}</option>
                                </select>
                                <div class="custom-switch custom-switch-primary mb-2 custom-switch-small float-start" v-if="txt.gui_type_name=='boolean:fastchange'"
                                    >
                                    <input class="custom-switch-input" id="switchS" type="checkbox" v-model="params[txt.name]">
                                    <label class="custom-switch-btn" for="switchS"></label>
                                </div>

                            </div>
                        </div>
                        <button class="btn btn-primary btn-sm float-end" @click="add">Ekle</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
import store from '../../store';
    export default {
        data() {
            return {
                params:{}
            }
        },
        methods: {
            getCreateData() {
                this.$store.dispatch('apiCreateData', {
                    table_name: this.$route.params.table_name
                });
            },
            getColumn() {
                var set=setInterval(()=>{
                    if(this.data){
                        for (const [k, v] of Object.entries(this.data.column_set.column_arrays[0].columns)) {
                            if(v.gui_type_name=='select' || v.gui_type_name=='select:static'){
                                var params={
                                    search:'***',
                                    limit:1000,
                                    table_name: this.$route.params.table_name,
                                    column_name:k,
                                }
                                if(v.up_column_name){
                                    console.log(this.params[v.up_column_name])
                                    params['upColumnName']=v.up_column_name;
                                    params['upColumnData']=this.params[v.up_column_name];
                                }
                                
                                
                                this.$store.dispatch('apiGetColumn',params);
                            }
                        }

                        clearInterval(set);
                    }

                },1000)
                
            
                

            },
            add(){
                this.params['column_set_id']=0;
                this.params['table_name']=this.$route.params.table_name;
                store.dispatch('apiAdd', this.params);
            },
        },
        created() {
            this.getCreateData();
            this.getColumn();
        },
        computed: {
            ...mapGetters({
                data: 'getCreateData',
                column: 'getColumns'
            })
        }
    }
</script>

<style>

</style>