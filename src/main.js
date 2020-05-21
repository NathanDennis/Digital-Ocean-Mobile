import Vue from 'vue'
import App from './App.vue'

import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"

Vue.config.productionTip = false;
Vue.use(Ionic);

import { IonicVueRouter } from "@ionic/vue"
Vue.use(IonicVueRouter)

import allRoutes from './routes/allRoutes'
const router = new IonicVueRouter({
    routes: allRoutes
})

new Vue({
    router,
     render: h => h(App),
}).$mount('#app')