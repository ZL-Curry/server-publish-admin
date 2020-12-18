// 项目启动入口文件

import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入全局css样式
import './styles/index.less'

// 关闭生产环境提示
Vue.config.productionTip = false

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
