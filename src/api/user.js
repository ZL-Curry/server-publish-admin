/**
 * 用户相关模块
 */
// 用户登录
import request from '@/utils/request'
export const login = data => {
  return request({
    methods: 'POST',
    url: '/mp/v1_0/authorizations',
    data
  })
}
// 获取用户信息
export const getUserProfile = () => {
  // const user = JSON.parse(window.localStorage.getItem('user'))
  // console.log(user)
  // const token = user.token
  return request({
    methods: 'GET',
    url: '/mp/v1_0/user/profile',
    // 后端要求把需要授权的用户身份放到请求头中
    // axios可以通过headers 选项设置请求头
    headers: {
      // 属性名和值都要根据接口要求
      // 属性名：Authorization
      // 属性值：Bearer空格token数据
      // Bearer 持票人
      // Authorization: 'Bearer '
      // Authorization: 'Bearer ' + token
      // Authorization: `Bearer ${token}`
    }
  })
}
