/*
 * @Author: 杨宏业 hunchenmoke@163.com
 * @Date: 2022-11-11 10:29:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-11 10:59:28
 * @FilePath: \Workspace\vuedemo\src\mock\index.js
 */
const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
//登录数据模拟
Mock.mock('/userLogin', 'post', require('./json/userLogin.json'));