import Profile from '../pages/Account/Profile'
import Security from '../pages/Account/Security'
import TeamManagement from '../pages/Account/TeamManagement'

let accountRoutes = [
    {
        path: '/account/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/account/security',
        name: 'security',
        component: Security
    },
    {
        path: '/account/teams',
        name: 'teams',
        component: TeamManagement
    },
]

export default accountRoutes