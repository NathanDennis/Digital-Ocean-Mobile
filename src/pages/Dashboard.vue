<template>
    <ion-page>
        <ion-content padding>
            <DashboardGrid :cards="this.cards" />
        </ion-content>
    </ion-page>
</template>

<script>
import DashboardGrid from '../components/DashboardGrid'
export default {
    name: 'Dashboard',
    components: {
        DashboardGrid,
    },
    data() {
        return {
            title: 'Dashboard',
            cards: [
                {
                    id: 1,
                    cardTitle: 'Account',
                    cardHeader: 'Account Tab',
                    cardDescription: 'Your profile',
                    destination: '/#/account',
                },
                {
                    id: 2,
                    cardTitle: 'Droplets',
                    cardHeader: 'Droplets Tab',
                    cardDescription: 'Manage droplets',
                    destination: '/#/droplets',
                },
                {
                    id: 3,
                    cardTitle: 'Billing',
                    cardHeader: 'Billing Tab',
                    cardDescription: 'Billing details and history',
                    destination: '/#/billing',
                },
            ],
        }
    },
}
</script>
