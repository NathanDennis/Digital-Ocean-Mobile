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

import { add } from "ionicons/icons";
import { addIcons } from "ionicons";
addIcons({
  "ios-add": add.ios,
  "md-add": add.md
});
export default {
  name: "Dashboard",
  props: {
    msg: String
  },
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
                  cardTitle: 'Monitoring',
                  cardHeader: 'Monitoring Tab',
                  cardDescription: 'Manage alert policies',
                  destination: '/#/monitoring'
              },
              {
                  id: 4,
                  cardTitle: 'Billing',
                  cardHeader: 'Billing Tab',
                  cardDescription: 'Billing details and history',
                  destination: '/#/billing'
              },
              {
                  id: 5,
                  cardTitle: 'Support',
                  cardHeader: 'Support Tab',
                  cardDescription: 'Submit a support ticket',
                  destination: '/#/support'
              },
              {
                  id: 6,
                  cardTitle: 'Notifications',
                  cardHeader: 'Notifications Tab',
                  cardDescription: 'Notifications about your account and projects',
                  destination: '/#/notifications'
              }
          ]
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>