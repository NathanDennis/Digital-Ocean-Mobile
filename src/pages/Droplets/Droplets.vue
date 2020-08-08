<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Droplets</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> DROPLETS </h1>
        <DashboardGrid 
            :cards=this.cards 
        />
    </ion-content>
  </ion-page>
</template>

<script>
import DashboardGrid from '../../components/DashboardGrid'

export default {
  name: "Droplets",
  components: {
      DashboardGrid,
  },
  data() {
      return {
          cards: [
            {
                id: 1,
                cardTitle: 'Droplet List',
                cardHeader: 'Droplet List Tab',
                cardDescription: 'Show / Manage all droplets',
                destination: '/#/droplets/list'
            },
            {
                id: 2,
                cardTitle: 'Logs',
                cardHeader: 'Logs Tab',
                cardDescription: 'Show logs',
                destination: '/#/droplets/logs'
            }
          ]
      }
  }
}
</script>