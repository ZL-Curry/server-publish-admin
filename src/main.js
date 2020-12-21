// 项目启动入口文件
// 所有的import 必须在所有代码最上面 中间不许出现其他代码
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局css样式
import './styles/index.less'

// 引入Element-ui 组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 关闭生产环境提示
Vue.config.productionTip = false
// 全局注册Element 组件库
Vue.use(ElementUI)

/**
 * 创建VUE根实例
 * 把router 配置都跟实例中
 * 通过render 方法把App 根组件渲染到#app 入口节点
 */
new Vue({
  router,
  render: h => h(App)
  // el:'#app'  //等价于  $mount('#app')
}).$mount('#app')
