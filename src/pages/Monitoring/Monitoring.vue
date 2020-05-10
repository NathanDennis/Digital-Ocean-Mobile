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