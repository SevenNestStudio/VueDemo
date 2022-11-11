/*
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:10:01
 * @LastEditTime: 2022-11-11 15:47:06
 * @FilePath: \Workspace\vuedemo\src\router\index.js
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import ('../views/login.vue')
  },
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import ('../views/HomeView.vue')
  // },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  history: createWebHashHistory(),
  routes
})

export default router
