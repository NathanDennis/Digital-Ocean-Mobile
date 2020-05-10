import AlertPolicies from '../pages/Monitoring/AlertPolicies'
import CreateAlert from '../pages/Monitoring/CreateAlert'

const monitoringRoutes = [
    {
        path: '/monitoring/alertpolicies',
        name: 'alertPolicies',
        component: AlertPolicies
    },
    {
        path: '/monitoring/createalert',
        name: 'createAlert',
        component: CreateAlert
    }
]

export default monitoringRoutes