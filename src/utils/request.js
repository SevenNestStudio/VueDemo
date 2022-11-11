import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';
import QS from 'qs';

const buildUrl = 'http://' + window.location.host;
console.log(window.location.host);

// 配置axios的开发环境 和 生产环境的ip地址
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : buildUrl;

axios.interceptors.request.use(
    config => {
        // 获取 token 值，若不存在，则为空
        const token = sessionStorage.getItem('TOKEN') || '';
        // 给请求头中拼接 token 参数
        config.headers = {
            ...config.headers,
            token
        }
        return config;
    },
    error => {
        return Promise.reject(err);
    }
);
/**
 * x-www-form-urlencoded 格式 post 请求
 * @param {*} url 请求路径 
 * @param {*} param 请求参数
 */
async function postForm(url, param) {
    // 设置请求参数格式
    const config = {
        'content-type': 'application/x-www-form-urlencoded'
    };
    const paramStr = QS.stringify(param);
    return await requestHandel('post', config, url, paramStr);
}
/**
 * json 格式 post 请求
 * @param {*} url 请求路径
 * @param {*} param 请求参数
 */
async function postJson(url, param) {
    // 设置请求参数格式
    const config = {
        'content-type': 'application/json'
    };
    // 将参数由对象转换为formData格式 
    // const paramStr = QS.stringify(param);
    return await requestHandel('post', config, url, param);
}
/**
 * get 请求
 * @param {*} url  请求路径
 */
async function get(url) {
    return await requestHandel('get', {}, url, {});
}
/**
 * jsonp 请求
 * @param {*} url  请求路径
 */
async function jsonp(url, callbackParamName) {
    return await requestHandelJSONP(url, callbackParamName);
}
/**
 * 请求处理
 * @param {*} method 请求类型
 * @param {*} config 请求头内的一些默认设置
 * @param {*} url 请求路径
 * @param {*} data 请求参数
 */
async function requestHandel(method, config = {}, url, data = {}) {
    try {
        const requestJson = await axios({
            method,
            url,
            data,
            herders: {
                ...config
            }
        });
        return requestJson.data;
    } catch (error) {
        return false;
    }
}

/**
 * JSONP请求处理
 * @param {*} method 请求类型
 * @param {*} config 请求头内的一些默认设置
 * @param {*} url 请求路径
 * @param {*} data 请求参数
 */
async function requestHandelJSONP(url, callbackParamName) {
    try {
        let jsonpDatas = axios({
                url,
                adapter: jsonpAdapter,
                callbackParamName:callbackParamName
            })
        return jsonpDatas;
    } catch (error) {
        return false;
    }
}

export {
    postForm,
    postJson,
    get,
    jsonp
}