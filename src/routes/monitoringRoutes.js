import AlertPolicies from '../pages/Monitoring/AlertPolicies'
import CreateAlert from '../pages/Monitoring/CreateAlert'

const monitoringRoutes = [
    {
        path: '/alertpolicies',
        name: 'alertPolicies',
        component: AlertPolicies
    },
    {
        path: '/createalert',
        name: 'createAlert',
        component: CreateAlert
    }
]

export default monitoringRoutes