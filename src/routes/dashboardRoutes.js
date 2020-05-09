import HomePage from '../pages/HomePage'
import Account from '../pages/Account/Account'
import Droplets from '../pages/Droplets/Droplets'
import Monitoring from '../pages/Monitoring/Monitoring'
import Billing from '../pages/Billing/Billing'
import Notifications from '../pages/Notifications'
import Support from '../pages/Support/Support'
import Dashboard from '../pages/Dashboard'

let dashboardRoutes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/account',
        name: 'account',
        component: Account
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/droplets',
        name: 'droplets',
        component: Droplets
    },
    {
        path: '/monitoring',
        name: 'monitoring',
        component: Monitoring
    },
    {
        path: '/billing',
        name: 'billing',
        component: Billing
    },
    {
        path: '/support',
        name: 'support',
        component: Support
    },
    {
        path: '/notifications',
        name: 'notifications',
        component: Notifications
    },
]

export default dashboardRoutes