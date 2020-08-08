<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>ACCOUNT</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <DashboardGrid 
            :cards=this.cards
        />
        <ion-list>
            <ion-item>Account balance: {{balance.account_balance}}</ion-item>
            <ion-item>Month to date usage: {{balance.month_to_date_usage}}</ion-item>
            <ion-item>Month to date balance: {{balance.month_to_date_balance}}</ion-item>
            <ion-item>Generated at: {{new Date(balance.generated_at).toLocaleDateString()}}</ion-item>
        </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import DashboardGrid from '../../components/DashboardGrid'
import axios from 'axios'

export default {
  name: "Account",
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
                }
          ],
          balance: {}
      }
  },
  beforeMount() {
      axios
        .get(`${process.env.VUE_APP_API_URL}/customers/my/balance`, { headers: {
            Authorization: `Bearer ${process.env.VUE_APP_DO_API_KEY}`
        }})
        .then(response => {
            this.balance = response.data
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
  }
}
</script>