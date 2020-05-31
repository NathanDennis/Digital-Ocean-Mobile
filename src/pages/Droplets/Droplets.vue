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
        <BottomNav />
    </ion-content>
  </ion-page>
</template>

<script>
import DashboardGrid from '../../components/DashboardGrid'
import BottomNav from '../../components/BottomNav'

export default {
  name: "Droplets",
  props: {
    msg: String
  },
  components: {
      DashboardGrid,
      BottomNav
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>