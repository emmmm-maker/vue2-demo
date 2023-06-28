import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/styles/global.scss'
import dataV from '@jiaminghi/data-view'

Vue.config.productionTip = false

// 将自动注册所有组件为全局组件

Vue.use(dataV)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
