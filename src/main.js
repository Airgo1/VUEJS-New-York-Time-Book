import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as VueGoogleMaps from "vue2-google-maps" // Import package

import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Default from '@/layouts/Default.vue'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDIcPfL0W4Yyn37TCdwbDl9AgQZNi4Aa0o",
    libraries: "places"
  }
})

Vue.component('default-layout', Default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
