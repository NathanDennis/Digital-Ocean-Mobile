import dashboardRoutes from './dashboardRoutes'
import accountRoutes from './accountRoutes'
import billingRoutes from './billingRoutes'
import dropletRoutes from './dropletsRoutes'

const allRoutes = [
    ...dashboardRoutes, 
    ...accountRoutes,
    ...billingRoutes,
    ...dropletRoutes,
]

export default allRoutes