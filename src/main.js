// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.min.css'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './bus'
import currencyFilter from './filter/currency'
// import VeeValidate from 'vee-validate';
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.filter('currency',currencyFilter);


//  Vue.use(VeeValidate);

///全域元件
Vue.component('loading',Loading);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to,from,next)=>{

  console.log("to: "+to+"from: "+ from+ "next: "+ next);
  if(to.meta.requiresAuth){

    console.log("need 驗證");
    const api=`${process.env.APIPATH}/api/user/check`;
    const vm= this;
    ///這裡是router 底下
    axios.post(api).then((response) =>{

                     console.log(response.data);
                     if(response.data.success){

                        // vm.$router.push('/');
                         next();
                     }else{

                       // vm.$router.push('/login');
                        next({

                          path: '/login'
                        });
                     }

      });



  }else{

    next();
  }
  
});