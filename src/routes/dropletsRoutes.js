// import DropletStatus from '../pages/Droplets/DropletStatus'
import Logs from '../pages/Droplets/Logs'
import DropletList from '../pages/Droplets/DropletList'

const dropletsRoutes = [
    {
        path: '/droplets/list',
        name: 'dropletList',
        component: DropletList
    },
    // {
    //     path: '/droplets/:id/status',
    //     name: 'dropletStatus',
    //     component: DropletStatus
    // },
    {
        path: '/droplets/logs',
        name: 'logs',
        component: Logs
    }
]

export default dropletsRoutes