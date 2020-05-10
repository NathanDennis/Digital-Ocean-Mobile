<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Support</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <h1> SUPPORT </h1>
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
                cardTitle: 'FAQs',
                cardHeader: 'FAQ tab',
                cardDescription: 'Frequently Asked Questions',
                destination: '/#/support/faq'
            },
            {
                id: 2,
                cardTitle: 'Resources',
                cardHeader: 'Resources tab',
                cardDescription: 'Learning and support resources',
                destination: '/#/support/resources'
            },
            {
                id: 3,
                cardTitle: 'Support Tickets',
                cardHeader: 'Support Tickets tab',
                cardDescription: 'Your support tickets',
                destination: '/#/support/tickets'
            }
          ]
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ion-content {
    text-align: center;
}

</style>