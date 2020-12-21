import Vue from 'vue'
import VueRouter from 'vue-router'
// 在VueCli创建的项目中 @表示 src 目录 是srl目录的路径别名  好处不受当前文件路径影响  后面要有 / 斜杠
import Login from '@/views/login/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
