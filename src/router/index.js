import Vue from 'vue'
import Router from 'vue-router'
import Axios from 'axios'
import VueAxios from 'vue-axios'

import Main from '@/components/pages/main'
import MainHome from '@/components/pages/main-home'
import MainDesserts from '@/components/pages/main-desserts'
import MainDessert from '@/components/pages/main-dessert'
import MainCart from '@/components/pages/main-cart'
import MainCheckout from '@/components/pages/main-checkout'
import Admin from '@/components/pages/admin'
import AdminProducts from '@/components/pages/admin-products'
import AdminOrders from '@/components/pages/admin-orders'
import Login from '@/components/pages/login'

Vue.use(Router, Axios, VueAxios)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/main'
    },
    {
      path: '/main',
      name: '',
      component: Main,
      children: [
        {
          path: '',
          name: 'MainHome',
          component: MainHome
        },
        {
          path: 'desserts',
          name: 'MainDesserts',
          component: MainDesserts
        },
        {
          path: 'dessert/:dessert_id',
          name: 'MainDessert',
          component: MainDessert
        },
        {
          path: 'cart',
          name: 'MainCart',
          component: MainCart
        },
        {
          path: 'checkout',
          name: 'MainCheckout',
          component: MainCheckout
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: '',
      component: Admin,
      children: [
        {
          path: '',
          neme: 'AdminOrders',
          component: AdminOrders
        },
        {
          path: 'products',
          neme: 'AdminProducts',
          component: AdminProducts
        }
      ],
      beforeEnter: (to, from, next) => {
        const api = `${process.env.APIPATH}/api/user/check`
        Axios.post(api).then((response) => {
          if (response.data.success) {
            next()
          } else {
            next({
              path: '/login'
            })
          }
        })
      }
    }
  ]
})
