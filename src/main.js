// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'            //elementUI
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'


import store from './store'

import Icon from 'vue-svg-icon/Icon.vue'; //图标
Vue.component('icon', Icon);

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
