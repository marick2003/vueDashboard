// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'
 

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
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
                         next({
                          path: '/admin'

                         });
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