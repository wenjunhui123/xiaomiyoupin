import Vue from 'vue';
import App from './App.vue';
import router from './routers/index';
import store from './store/index';
import ElementUI from 'element-ui';
import './assets/css/reset.min.css';
import './assets/css/common.less';
import 'element-ui/lib/theme-chalk/index.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import "swiper/css/swiper.css";
import VueLazyload from 'vue-lazyload';
import axios from './api/axios'


Vue.use(VueAwesomeSwiper);
Vue.use(ElementUI);
Vue.use(VueLazyload,{
  error:'./assets/images/std_shop_details_icon_close_normal.png',
  loading:'./assets/images/loading_v2.png',
  try:6,
});

Vue.prototype.$axios = axios;

Vue.config.productionTip = false

/* 导入公共样式 */
import './assets/css/reset.min.css';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
