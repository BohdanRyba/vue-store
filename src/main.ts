import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import i18n from './i18n'
import TopInfoBar from '@/components/TopInfoBar'
import ChangeLocale from "@/components/ChangeLocale";

Vue.config.productionTip = false
Vue.component('top-info-bar', TopInfoBar);
Vue.component('change-locale', ChangeLocale);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
