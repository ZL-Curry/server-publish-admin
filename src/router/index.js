import Vue from 'vue'
import VueRouter from 'vue-router'
// 在VueCli创建的项目中 @表示 src 目录 是srl目录的路径别名  好处不受当前文件路径影响  后面要有 / 斜杠
// 建议：如果加载资源路径就在当前目录下，那就正常写
// 如果需要进行父级路径查找的都使用@
import Login from '@/views/login/index.vue'
import Layout from '@/views/layout/'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    // 命名路由 layout 有一个默认子路由，这个名字没有意义，所以警告
    // 正确做法：如果有默认子路由，就不要给父路由起名字
    // name: 'layout',
    component: Layout,
    children: [
      // 通常会把/设置为网站的首页
      {
        path: '', // path 为空，会作为默认子路由渲染
        name: 'home',
        component: () => import('@/views/home')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
