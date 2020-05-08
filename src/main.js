import Vue from 'vue'
import App from './App.vue'

import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"


Vue.config.productionTip = false;
Vue.use(Ionic);

import { IonicVueRouter } from "@ionic/vue"
Vue.use(IonicVueRouter)

import HomePage from './components/HomePage'
import Dashboard from './components/Dashboard'

const router = new IonicVueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard
        }
    ]
  })

new Vue({
    router,
     render: h => h(App),
}).$mount('#app')