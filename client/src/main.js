import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker'
import VueQuagga from 'vue-quaggajs';

Vue.config.productionTip = false;
// register component 'v-quagga'
Vue.use(VueQuagga);

export const networkAddress = 'http://127.0.0.1:3000';

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
