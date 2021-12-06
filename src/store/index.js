
import Vuex from "vuex"
import Swal from "sweetalert2"
import axios from "axios"
import router from "@/router"
export const store = new Vuex.Store({
    state: {//değişkenlerin tutulacağı alan
        token: '',
        isLoggedIn: false,
        userData: {},
        borsaData: [],
        dolarData: [],
        euroData: [],
        btcData: [],
    },
    mutations: {//değişkenlerin değiştirilmesi için kullanılan fonksiyonlar
        setToken(state, token) {
            state.token = token
            state.isLoggedIn = true
            localStorage.setItem("token", token)
            router.push("/")
        },
        setUserData(state, userData) {
            state.userData = userData
        },
        setBorsaData(state, borsaData) {
            state.borsaData = borsaData
        },
        setDolarData(state, dolarData) {
            state.dolarData = dolarData
        },
        setEuroData(state, euroData) {
            state.euroData = euroData
        },
        setBtcData(state, btcData) {
            state.btcData = btcData
        },
    },
    actions: {
        login(store, authData) {
                axios.post("login", authData)
                .then(response => {
                    if (response.data.status ) {
                        store.commit("setToken", response.data.data.token)
                        Swal.fire({
                            position: 'top-start',
                            icon: 'success',
                            title: 'Başarılı',
                            text: 'Giriş Yapıyorsunuz',
                            timer: 1500,
                            showConfirmButton: false,
                        });
                    }else{
                        Swal.fire({
                            position: 'top-start',
                            icon: 'error',
                            title: 'Hata',
                            text: 'Eposta veya şifre hatalı',
                            timer: 1500,
                            showConfirmButton: false,
                        });
                    }
                }).catch(e => {
                    if (e.response.data) {
                        Swal.fire({
                            position: 'top-start',
                            icon: 'error',
                            title: 'Hata',
                            text: 'Eposta veya şifre hatalı',
                            timer: 1500,
                            showConfirmButton: false,
                        });
                    } 
                })
        },
        logOut(store) {
            store.commit("setToken", "")
            localStorage.removeItem("token")
            router.push("/login")
        },
        tokenControl(store) {
            axios.post(store.getters.getToken+'/tables/adres/getSelectColumnData/sehirler_id?search=***')
            .then(() => {
            })
            .catch(() => {
                store.commit("setToken", "")
                localStorage.removeItem("token")
                router.push("/login")
            })
        },
        userDataApi(store){
            axios.post(store.getters.getToken + '/getLoggedInUserInfo' )
            .then(res => {
                store.commit("setUserData", res.data.data)
            }).catch(res => {
                console.log(res);
                router.push("/login")
            })
        },
        borsaDataApi(){
            axios.get('https://api.bigpara.hurriyet.com.tr/doviz/headerlist/anasayfa')
            .then(response => {
                store.commit("setBorsaData", response.data.data)
            }).catch(error => {
                console.log(error)
            })
        },
        dolarDataApi(){
            axios.get('https://www.coinbase.com/api/v2/assets/prices/b26327c1-9a34-51d9-b982-9b29e6012648?base=TRY')
            .then(response => {
                store.commit("setDolarData", response.data.data)
            }).catch(error => {
                console.log(error)
            })
        },
        euroDataApi(){
            axios.get('https://www.coinbase.com/api/v2/assets/prices/151520ca-64f2-5705-9a4b-2dc9baa8319d?base=TRY')
            .then(response => {
                store.commit("setEuroData", response.data.data)
            }).catch(error => {
                console.log(error)
            })
        },
        btcDataApi(){
            axios.get('https://www.coinbase.com/api/v2/assets/prices/5b71fc48-3dd3-540c-809b-f8c94d0e68b5?base=USD')
            .then(response => {
                store.commit("setBtcData", response.data.data)
            }).catch(error => {
                console.log(error)
            })
        },
    },
    getters: {
        getToken(state) {
            if (state.token) {
                return state.token
            } else {
                if(localStorage.getItem("token")){
                    state.token = localStorage.getItem("token")
                    return state.token  
                
                }else{
                    return null;
                }
                
            }
        },
        getUserData(state) {
            return state.userData
        },
        getBorsaData(state) {
            return state.borsaData
        },
        getDolarData(state) {
            return state.dolarData
        },
        getEuroData(state) {
            return state.euroData
        },
        getBtcData(state) {
            return state.btcData
        },
    }
})
export default store
