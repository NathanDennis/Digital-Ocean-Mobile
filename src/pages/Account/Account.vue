<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>ACCOUNT</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> ACCOUNT </h1>
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
                  cardTitle: 'Profile',
                  cardHeader: 'Profile Tab',
                  cardDescription: 'Your profile',
                  destination: '/#/account/profile'
                },
                {
                  id: 2,
                  cardTitle: 'Security',
                  cardHeader: 'Security Tab',
                  cardDescription: 'Account Security',
                  destination: '/#/account/security'
                },
                {
                  id: 3,
                  cardTitle: 'Team Management',
                  cardHeader: 'Team Management Tab',
                  cardDescription: 'Team Management',
                  destination: '/#/account/teams'
                },
          ]
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>