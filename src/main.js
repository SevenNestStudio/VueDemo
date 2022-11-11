/*
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:07:33
 * @LastEditTime: 2022-11-11 18:27:23
 * @FilePath: \Workspace\vuedemo\src\main.js
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
 */
import { createApp } from 'vue'
import ViewUIPlus from 'view-ui-plus'// 引入ViewUIPlus
import App from './App.vue'
import router from './router/index'
import store from './store'
import 'view-ui-plus/dist/styles/viewuiplus.css'// 引入ViewUIPlus.css
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
// 引入echarts
import * as echarts from 'echarts'


// 模拟数据
require('./mock');

//定义全局变量
// Vue.prototype.GLOBAl = {
// };

// http防盗链 拦截未登陆
router.beforeEach((to, from, next) => {
    store.commit('setRouteToPath', to);
    const level = window.sessionStorage.getItem('userName');
    if (level) {
        setTimeout(function () {
            next();
        }, 0)
    } else {
        if (to.path === '/login') { //这就是跳出循环的关键
            setTimeout(function () {
                next();
            }, 0)
        } else {
            next('/login')
        }
    }
});

const app = createApp(App)
app.config.globalProperties.$echarts = echarts
app.use(VXETable)
app.use(store)
    .use(router)
    .use(ViewUIPlus)
    .mount('#app')

// createApp(App).use(store).use(router).use(ViewUIPlus).mount('#app')