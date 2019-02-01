import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      redirect: '/welcome',
      name: 'home',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '/welcome',
          component: () => import('./pages/Welcome.vue')
        },
        {
          path: '/product-list',
          component: () => import('./pages/ProductList.vue')
        },
        {
          path: '/upload-data',
          component: () => import('./pages/UploadData.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
