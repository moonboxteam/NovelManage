'use strict'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/Login'
import HomePage from 'components/homePage'
import Frontdesk from './frontdesk'
import Home from './home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: HomePage,
    children: [
      Frontdesk, Home
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/404')
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const router = new VueRouter({
  // 如果服务器没有设置重定向,那么下面2句必须注掉
  // mode: process.env.NODE_ENV === 'development' ? 'hash' : 'history',
  // base: process.env.BASE_ROUTER,
  routes: routes
})

router.beforeEach((to, from, next) => {
  const app = router.app
  if (to.path === '/login') {
    app.publicMethods.removeUserSession()
  }
  const isLogin = app.publicMethods.getUserSession()
  if (!isLogin && to.path !== '/login') {
    next({
      path: '/login'
    })
  } else {
    next()
  }
})

router.afterEach(to => {
  // if (to.fullPath && to.fullPath !== '/login' && to.fullPath !== '/404') {}
})

export default router
