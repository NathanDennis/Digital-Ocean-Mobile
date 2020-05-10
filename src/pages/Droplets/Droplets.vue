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
        <button href="https://www.google.com">Logs</button>
    </ion-content>
  </ion-page>
</template>

<script>
import DashboardGrid from '../../components/DashboardGrid'
import { add } from "ionicons/icons";
import { addIcons } from "ionicons";
addIcons({
  "ios-add": add.ios,
  "md-add": add.md
});
export default {
  name: "replace-this",
  props: {
    msg: String
  },
  components: {
      DashboardGrid
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