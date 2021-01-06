<template>
  <div class="login-container">
  <!--
    el-form 表单组件
    配置表单验证
    1、必须给el-form 组件绑定 model 为表单数据对象
    每个表单项都必须使用 el-form-item 组件包裹
    2、给需要验证的表单项el-form-item绑定prop属性
    注意：prop属性需要指定表单对象中的数据名称
    3、通过el-form组件的rules配置验证规则
    手动触发表单验证：
    1、给el-form 设置 ref 起个名字 不重复即可
    2、通过ref获取el-form组件 ，调用组件的validate方法 进行验证
  -->
  <el-form class="login-form"
   ref="login-form"
   :model="user"
   :rules="formRules">
    <div class="login-head">
      <h2>后台管理系统</h2>
    </div>
    <el-form-item prop="mobile">
      <el-input
        v-model="user.mobile"
        placeholder="请输入手机号"
      ></el-input>
    </el-form-item>
    <el-form-item prop="code">
      <el-input
        v-model="user.code"
        placeholder="请输入验证码"
      ></el-input>
    </el-form-item>
    <el-form-item prop="agree">
      <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
    </el-form-item>
    <el-form-item>
      <el-button
        class="login-btn"
        type="primary"
        @click="onLogin"
        :loading="loginLoading"
      >登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
// import request from '@/utils/request.js'
import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13911111111', // 手机号
        code: '246810', // 验证码
        agree: false // 请求协议
      },
      // checked: false, // 同意协议是否选中
      loginLoading: false, // 登录的loading状态
      formRules: { // 表单验证规则配置
        // 要验证的数据名称： 规则列表
        mobile: [
          {
            required: true, // 必填项
            message: '手机号不能为空',
            trigger: 'blur' // 验证机制 -- 失去焦点进行验证
          },
          {
            pattern: /^1[3|5|7|8|9]\d{9}$/,
            message: '请输入正确的号码格式',
            trigger: 'change'
          }
        ],
        code: [
          {
            required: true, // 必填项
            message: '验证码不能为空',
            trigger: 'change' // 验证机制 -- 失去焦点进行验证
          },
          {
            pattern: /^\d{6}$/,
            message: '请输入正确的验证码格式',
            trigger: 'change'
          }
        ],
        agree: [
          {
            // 自定义校验规则
            // 验证通过：callback()
            // 验证失败：callback(new Error('错误消息))
            // validator 验证函数不是你来调用的，而是当elelment表单触发验证的时候他会自己触发
            // 所以只需要提供数据校验的处理逻辑
            // 通过：callback()
            validator: (rule, value, callback) => {
              // console.log(rule, value)
              if (value) {
                // 通过
                callback()
              } else {
                // 失败
                callback(new Error('请勾选用户协议'))
              }
            },
            // message: '请勾选用户协议',
            trigger: 'change'
          }
        ]
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    onLogin () {
      /**
       * 获取表单数据 (根据节后要求绑定数据)
       * 表单验证
       * 验证通过，提交登录
       * 处理后端响应结果
       *   成功：xxx
       *   失败：xxx
       */
      // const user = this.user
      // 表单验证
      // console.log(this.$refs['login-form'])
      this.$refs['login-form'].validate((valid, err) => {
        // console.log(valid)
        // console.log(err)
        // 如果验证失败，停止请求提交
        if (!valid) {
          return
        }
        // 验证通过，请求登录
        this.login()
      })
    },
    login () {
      // 开启登录中的旋转状态
      this.loginLoading = true
      // 代码请求操作
      // 1、接口请求可能重用
      // 2、接口容易变动，修改麻烦
      // 建议将所有的请求都封装成函数，然后统一组织到模块中进行管理
      // 好处：管理维护方便，重用性更高
      login(this.user).then(res => {
        // 跳转到首页
        // this.$router.push('/')
        this.$router.push({
          name: 'home'
        })
        console.log(res)
        // 关闭loading 作用：交互反馈，防止网络请求慢出现用户多次点击触发登录请求 也可使用disabeld
        this.loginLoading = false
        // 将从接口返回的用户相关苏剧放在本地存储，方便应用数据共享
        // 本地存储只能存字符串 如果要存储对象，数组类型的数据需要转成json数据字符串
        // window.localStorage.setItem('user', JSON.stringify(res.data.data))
        // window.localStorage.setItem('user', JSON.stringify({ token: '111' }))
      }).catch(err => {
        this.loginLoading = false
        console.log('登录错误', err)
        this.$message({
          message: '登录失败',
          type: 'error'
        })
      })
    }
  }
}
</script>

<style scoped lang="less">
.login-container{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('./bg.jpg') no-repeat;
  background-size: cover;
  // background-size: contain;
  .login-form{
    background: #fff;
    padding: 50px;
    min-width: 300px;
    .login-head{
      height: 57px;
      text-align: center;
    }
    .login-btn{
      width: 100%;
    }
  }
}
</style>
