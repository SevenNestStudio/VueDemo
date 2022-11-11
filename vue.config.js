/*
 * @Author: 杨宏业
 * @Date: 2022-11-11 10:07:33
 * @LastEditTime: 2022-11-11 15:45:59
 * @FilePath: \Workspace\vuedemo\vue.config.js
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
 */
const { defineConfig } = require('@vue/cli-service')
const target = 'http://127.0.0.1/'
const path = require('path')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    outputDir: 'www',
    assetsDir: './',
    lintOnSave: false, //eslint 提示关闭
    //添加开关
    chainWebpack: config => {
        config.module
            .rule('vue')
        // .use('iview')
        // .loader('iview-loader')
        // .options({ prefix: false })
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: 7777, // 端口地址
        proxy: {
            '/': {
                target: target, // 设置你调用的接口域名和端口号
                ws: false, //如果要代理 websockets，配置这个参数 
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
          preProcessor: 'less',
          patterns: [
            // 全局less变量存储路径
            path.resolve(__dirname, './src/assets/css/base.less'),
          ]
        }
      }
    // css: {
    //     loaderOptions: {
    //         // 向 CSS 相关的 loader 传递选项
    //         less: {
    //             javascriptEnabled: true
    //         }
    //     }
    // }
})
