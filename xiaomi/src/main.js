import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';
import store from './store/index';

Vue.config.productionTip = false

/* 导入公共样式 */
import './assets/css/reset.min.css';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
