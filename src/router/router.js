import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'
import Home from '@/views/Home.vue'
import { objectKeyValues } from '@/utils/myUtils'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      menu: true,
      mate:{
        title: '首页',
        icon: 'home'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "signup" */ '../views/SignUp.vue'),
      menu: true,
      mate:{
        title: '培训报名',
        icon: 'signup'
      }
    },
    {
      path: '/login',
      name: 'logiin',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
      mate:{
        title: '登录',
        icon: 'login'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  const routes = router.options.routes
  const routesName = objectKeyValues(routes,'name')

  console.log(routesName)
  store.commit('updateDirection',{direction: 'back'})
  next()
})

export default router
