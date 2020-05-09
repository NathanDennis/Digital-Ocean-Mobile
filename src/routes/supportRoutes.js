import Faq from '../pages/Support/Faq'
import Resources from '../pages/Support/Resources'
import CreateSupportTicket from '../pages/Support/CreateSupportTicket'

const supportRoutes = [
    {
        path: '/faq',
        name: 'faq',
        component: Faq 
    },
    {
        path: '/resources',
        name: 'resources',
        component: Resources
    },
    {
        path: '/createsupportticket',
        name: 'createSupportTicket',
        component: CreateSupportTicket
    }
]

export default supportRoutes