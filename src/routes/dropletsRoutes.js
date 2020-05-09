import DropletStatus from '../pages/Droplets/DropletStatus'
import Logs from '../pages/Droplets/Logs'

const dropletsRoutes = [
    {
        path: '/dropletStatus',
        name: 'dropletStatus',
        component: DropletStatus
    },
    {
        path: '/logs',
        name: 'logs',
        component: Logs
    }
]

export default dropletsRoutes