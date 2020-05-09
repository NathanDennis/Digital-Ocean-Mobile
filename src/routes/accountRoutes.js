import Profile from '../pages/Account/Profile'
import Security from '../pages/Account/Security'
import TeamManagement from '../pages/Account/TeamManagement'

let accountRoutes = [
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/security',
        name: 'security',
        component: Security
    },
    {
        path: '/teams',
        name: 'teams',
        component: TeamManagement
    },
]

export default accountRoutes