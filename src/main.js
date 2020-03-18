import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueJsonp from 'vue-jsonp'
import VueCookie from 'vue-cookie'

Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(VueJsonp)
Vue.use(VueCookie)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
