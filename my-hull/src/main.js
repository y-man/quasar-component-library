import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from './store'
import router from './router'
import './quasar'

// import our own component library
import MyQuasarPackage, { RegisterRoutes } from "my-quasar-package/"
Vue.use(MyQuasarPackage)
RegisterRoutes(router)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
