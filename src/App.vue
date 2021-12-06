<template>
    <div>
      <div v-if="this.$route.path=='/login'">
        <Login/>
      </div>
      <div v-else>
          <Nav/>
          <Menu/>
          <main>
          <main>
            <router-view/>
          </main>
          </main>
          <Footer/>
      </div>
    </div>
</template>
<script>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
import Menu from '@/components/Menu'
import Login from '@/components/Login'
import store from '@/store'
export default {
  created() {
    store.dispatch('userDataApi');
    store.dispatch('borsaDataApi');
    
  },
    components: {
        Nav,
        Footer,
        Menu,
        Login
    },
}
import $ from 'jquery';
$(document).ready(function () {
  console.log($(window).width());
  if(localStorage.getItem('dore-radius')=='rounded'){
    $('button').css('border-radius','17px !important');
    $('input').css('border-radius','17px !important');
  }else{
    $('button').css('border-radius','0 !important');
    $('input').css('border-radius','0 !important');
    $('.btn').css('border-radius','0 !important');
  }
})


</script>
<style>
/*@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');*/
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  /*font-family: 'Roboto Condensed', sans-serif;*/
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--gray);
  max-width: 100% !important;
}
h1, h2, h3, h4, h5, h6 {
  color: var(--theme-color-4);
}
.float-right {
  float: right !important;
}
.float-left {
  float: left !important;
}
main{
  margin-right: 15px;
  margin-left: 175px!important;
  margin-top:115px;
}

/*
* {
  box-sizing: border-box;
  transition: all 0.3s ease-in-out !important;
}
*/

</style>
