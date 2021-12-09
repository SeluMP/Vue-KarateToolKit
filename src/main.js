import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () => import("@/components/mycomponent")
    },
    {
      path: "/loginUser",
      component: () => import("@/components/LoginCard")
    },
  ]
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
