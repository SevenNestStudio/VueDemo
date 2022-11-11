/*
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:20:25
 * @LastEditTime: 2022-11-11 16:00:50
 * @FilePath: \Workspace\vuedemo\src\store\index.js
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
 */
import { createStore } from 'vuex'
export default createStore({
  state: {
    // 当前路由路径
    routeToPath: null,
  },
  getters: {
    routeToPath: state => state.routeToPath,
  },
  mutations: {
    // 更新当前路由路径
    setRouteToPath(state, routeToPath) {
      state.routeToPath = routeToPath;
    },
  },
  actions: {
  },
  modules: {
  }
})
