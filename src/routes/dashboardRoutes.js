import HomePage from '../pages/HomePage'
import Account from '../pages/Account/Account'
import Droplets from '../pages/Droplets/Droplets'
import Billing from '../pages/Billing/Billing'
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
        path: '/billing',
        name: 'billing',
        component: Billing
    },
]

export default dashboardRoutes