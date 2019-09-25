import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import component from './components';
import filter from './filter';

//http
import './http/axios'

Vue.config.productionTip = false

component(Vue)
filter(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
