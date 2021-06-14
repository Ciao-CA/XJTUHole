import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.css'
import router from "@/router";
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'


Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

const store= new Vuex.Store({

})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
