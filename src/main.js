import Vue from 'vue';
import App from './App.vue';
import VueLogger from 'vuejs-logger';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import router from './router'

Vue.use(VueLogger);
Vue.use(Vuetify)


new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

fetch(__dirname + "public/config.json")
  .then((response) => response.json())
  .then((config) => {
    Vue.prototype.$config = config
    new Vue({
      router,
      store,
      render: (h) => h(App)
    }).$mount("#app")
  }).catch(() => {
    Vue.$log.error('Failed to load config');
  })


