/**
 * 基于Axios 封装的请求模块
 */
import axios from 'axios'
// 另一种方法配值baseurl
// axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/' // 请求的基础路径

// 可能有多个不同路径的请求接口
// 127.1.1.1
// 127.1.1.2
// 复制了一个axios， 实例 不同的实例可以有不同的配置，而且相互之间不会冲突
// 复制出来的axios和axios本身的功能一样
// const req1 = axios.create()
// req1.defaults.baseURL = 'http://ttapi.research.itcast.cn/' // 请求的基础路径
// const req2 = axios.create()
// req1.defaults.baseURL = 'http://ttapi.research.itcast.cn/' // 请求的基础路径
// req1({
//   method: 'GET',
//   url: 'xxx'
// })
// req1.get('xxx') //req1路径
// req2.post('xxx') //req2路径

// 创建一个 axios 实例，就是复制一个axios实例 通过这个实例发请求 把需要的配置配置给这个实例来发请求
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径
})

// 请求拦截器
request.interceptors.request.use(function (config) {
  // config 是当前请求相关配置信息
  // config 是可以修改的 在return config之前请求不会真正发过去
  const user = JSON.parse(window.localStorage.getItem('user'))
  // 如果有登录用户信息，则统一设置 token
  if (user) {
    config.headers.Authorization = `Bearer ${user.token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  return Promise.reject(error)
})

export default request
// 谁使用谁加载request模块
// import request from 'request.js'
// request.xxx
/* request({
  method: ,
  url: ''
}) */
