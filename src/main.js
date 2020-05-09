import Vue from 'vue'
import App from './App.vue'

import Ionic from "@ionic/vue"
import "@ionic/core/css/core.css"
import "@ionic/core/css/ionic.bundle.css"


Vue.config.productionTip = false;
Vue.use(Ionic);

import { IonicVueRouter } from "@ionic/vue"
Vue.use(IonicVueRouter)

// ROUTES
import dashboardRoutes from './routes/dashboardRoutes'
import accountRoutes from './routes/accountRoutes'
import billingRoutes from './routes/billingRoutes'
import dropletRoutes from './routes/dropletsRoutes'
import monitoringRoutes from './routes/monitoringRoutes'
import supportRoutes from './routes/supportRoutes'

const router = new IonicVueRouter({
    routes: [
        ...dashboardRoutes, 
        ...accountRoutes,
        ...billingRoutes,
        ...dropletRoutes,
        ...monitoringRoutes,
        ...supportRoutes,
    ]
})

new Vue({
    router,
     render: h => h(App),
}).$mount('#app')