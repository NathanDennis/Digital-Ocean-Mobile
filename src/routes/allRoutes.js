import dashboardRoutes from './dashboardRoutes'
import accountRoutes from './accountRoutes'
import billingRoutes from './billingRoutes'
import dropletRoutes from './dropletsRoutes'
import monitoringRoutes from './monitoringRoutes'
import supportRoutes from './supportRoutes'

const allRoutes = [
    ...dashboardRoutes, 
    ...accountRoutes,
    ...billingRoutes,
    ...dropletRoutes,
    ...monitoringRoutes,
    ...supportRoutes,
]

export default allRoutes