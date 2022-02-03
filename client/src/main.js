import Vue from 'vue';
import store from './store'
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import './utils/GlobalComponents';
import "./styles/global.scss";
import ApiService from '@/utils/axios/api';
ApiService.init('http://localhost:8000');
import '@/utils/axios/errorHandler';
/* mixins */
import $_mixin from "./mixins/global";
Vue.mixin($_mixin);

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
