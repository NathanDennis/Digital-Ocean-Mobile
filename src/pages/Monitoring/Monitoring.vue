<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Monitoring</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> MONITORING </h1>
        <DashboardGrid 
            :cards=this.cards
        />
    </ion-content>
  </ion-page>
</template>

<script>
import DashboardGrid from '../../components/DashboardGrid'

export default {
  name: "Monitoring",
  components: {
      DashboardGrid
  },
  data() {
      return {
          cards: [
            {
                id: 1,
                cardTitle: 'Alert Policies',
                cardHeader: 'Alert Policies Tab',
                cardDescription: 'List all current Alert Policies',
                destination: '/#/monitoring/alertpolicies'
            },
            {
                id: 2,
                cardTitle: 'Create Alert Policy',
                cardHeader: 'Create Alert Tab',
                cardDescription: 'Create a new Alert Policy',
                destination: '/#/monitoring/createalert'
            },
          ]
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>