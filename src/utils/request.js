/**
 * 基于Axios 封装的请求模块
 */
import axios from 'axios'

// 创建一个 axios 实例，复制一个axios实例 通过这个实例发请求 把需要的配置配置给这个实例来发请求
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 请求的基础路径
})

// 请求拦截器

// 响应拦截器

export default request
// 谁使用谁加载request模块
// import request from 'request.js'
// request.xxx
