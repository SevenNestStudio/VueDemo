/*
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:10:01
 * @LastEditTime: 2022-11-11 21:13:15
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
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
          path: '/subassembly',
          name: 'subassembly',
          meta: {
              title: '组件'
          },
          component: () => import ('@/components/subassembly.vue'),
          children: [
            {
                path: '/basicstables',
                name: 'basicstables',
                meta: {
                    title: '基础表格'
                },
                component: () => import ('@/components/BasicsTables.vue')
            },]
      },]
  },
  // {
  //   path: '/basicstables',
  //   name: 'basicstables',
  //   component: () => import ('@/components/BasicsTables.vue')
  // },
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
