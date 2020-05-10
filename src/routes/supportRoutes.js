import Faq from '../pages/Support/Faq'
import Resources from '../pages/Support/Resources'
import CreateSupportTicket from '../pages/Support/CreateSupportTicket'
import Tickets from '../pages/Support/Tickets'

const supportRoutes = [
    {
        path: '/support/faq',
        name: 'faq',
        component: Faq 
    },
    {
        path: '/support/resources',
        name: 'resources',
        component: Resources
    },
    {
        path: '/support/tickets',
        name: 'supportTickets',
        component: Tickets
    },
    {
        path: '/support/createTicket',
        name: 'createSupportTicket',
        component: CreateSupportTicket
    }
]

export default supportRoutes