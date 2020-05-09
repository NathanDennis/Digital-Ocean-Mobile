<template>
  <ion-page>
    <ion-content>
        <div class="grid">
                <DashboardCard 
                    class="dashboard-card"
                    v-for="card in cards"
                    :key="card.id"
                    :title="card.cardTitle"
                    :header="card.cardHeader"
                    :description="card.cardDescription"
                    :destination="card.destination"
                />
        </div>
    </ion-content>
  </ion-page>
</template>

<script>
import DashboardCard from './DashboardCard'

import { add } from "ionicons/icons"
import { addIcons } from "ionicons"
addIcons({
  "ios-add": add.ios,
  "md-add": add.md
});
export default {
  name: "DashboardGrid",
  props: {
    msg: String
  },
  components: {
      DashboardCard
  },
  data() {
      return {
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
.dashboard-card {
    text-align: center;
    flex: 1 40%;

}

.grid {
    display: flex;
    flex-flow: row wrap;
    padding: 0.5rem;
    margin: 1rem;
}

</style>