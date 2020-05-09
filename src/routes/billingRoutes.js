import BillingHistory from '../pages/Billing/BillingHistory'
import BillingStatus from '../pages/Billing/BillingStatus'

const billingRoutes = [
    {
        path: '/billinghistory',
        name: 'billingHistory',
        component: BillingHistory
    },
    {
        path: '/billingstatus',
        name: 'billingStatus',
        component: BillingStatus
    }
]

export default billingRoutes