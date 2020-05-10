<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Billing</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> BILLING </h1>
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
                cardTitle: 'History',
                cardHeader: 'Billing History Tab',
                cardDescription: 'Billing History',
                destination: '/#/billing/history'
            },
            {
                id: 2,
                cardTitle: 'Status',
                cardHeader: 'Billing Status Tab',
                cardDescription: 'Current Billing Status',
                destination: '/#/billing/status'
            },
        ]
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>