<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> Page title </h1>
        <DashboardGrid 
            :cards=this.cards
        />
    </ion-content>
  </ion-page>
</template>

<script>
import DashboardGrid from '../components/DashboardGrid'
export default {
  name: "Dashboard",
  components: {
      DashboardGrid
  },
  data() {
      return {
        title: 'Dashboard',
        cards: [
              {
                  id: 1,
                  cardTitle: 'Account',
                  cardHeader: 'Account Tab',
                  cardDescription: 'Profile, Team Management and more',
                  destination: '/#/account'
              },
              {
                  id: 2,
                  cardTitle: 'Droplets',
                  cardHeader: 'Droplets Tab',
                  cardDescription: 'Manage droplets',
                  destination: '/#/droplets'
              },
              {
                  id: 3,
                  cardTitle: 'Billing',
                  cardHeader: 'Billing Tab',
                  cardDescription: 'Billing details and history',
                  destination: '/#/billing'
              },
          ]
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>