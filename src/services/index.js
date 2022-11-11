/*
 * @Author: 杨宏业
 * @Date: 2022-11-11 11:43:42
 * @LastEditTime: 2022-11-11 11:44:28
 * @FilePath: \Workspace\vuedemo\src\services\home.js
 * Copyright: 2022 Qi's Nest Studio. All Rights Reserved.
 */
import {
    postJson,
    postForm,
    jsonp,
    get
} from '../utils/request'

// /**
//  * 登录
//  * @param {*} param 
//  */
export function getLogin(param) {
    return postJson('userLogin', param);
}
// /**
//  * 查询用户
//  */
export function xuserLogin(param) {
    return postJson('xuserLogin', param);
}