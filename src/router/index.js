import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/dashboard'
import Login from '@/components/page/login';
import Product from '@/components/page/product';
import OderList from '@/components/page/oderList';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login'
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta:{
    //     requiresAuth: true,
    //   }
    // },
    { 
      path: '/login',
      name: 'Login',
      component: Login

    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      meta:{
        requiresAuth: true,
      },
      children: [
        {
          path: 'product',
          name: 'Product',
          component:Product,
          meta:{
            requiresAuth: true,
          }
        },
        {
          path: 'oderlist',
          name: 'OderList',
          component:OderList,
          meta:{
            requiresAuth: true,
          }

        }
      ]
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
})
