import BillingHistory from '../pages/Billing/BillingHistory'
import BillingStatus from '../pages/Billing/BillingStatus'

const billingRoutes = [
    {
        path: '/billing/history',
        name: 'billingHistory',
        component: BillingHistory
    },
    {
        path: '/billing/status',
        name: 'billingStatus',
        component: BillingStatus
    }
]

export default billingRoutes