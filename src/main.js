import Vue from "vue";
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from "./App.vue";
import router from "./router";
import "./scss/main.scss";
import store from './store/store'
import VModal from 'vue-js-modal'
import Notifications from 'vue-notification'

import 'vue2-animate/dist/vue2-animate.min.css'

Vue.use(VModal)
Vue.use(Notifications)

Vue.use(VueAxios, axios)
//Create New Directive for scroll
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");