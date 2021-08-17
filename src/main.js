import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import VueCarousel from 'vue-carousel';
import axios from 'axios';

Vue.use(VueCarousel);
Vue.use(VueRouter)
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
