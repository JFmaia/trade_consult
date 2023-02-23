import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.filter('currency', value => {
    return 'R$' + value.toLocaleString()
})

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
