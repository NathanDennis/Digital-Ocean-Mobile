<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
          <!-- <svg class="DO-svg" slot="start" height="50" width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 -3.954 53.927 53.954"><g fill="#0080ff" fill-rule="evenodd"><path d="M24.915 50v-9.661c10.226 0 18.164-10.141 14.237-20.904a14.438 14.438 0 0 0-8.615-8.616C19.774 6.921 9.633 14.83 9.633 25.056H0C0 8.758 15.763-3.954 32.853 1.384 40.311 3.73 46.271 9.661 48.588 17.12 53.927 34.237 41.243 50 24.915 50"/><path d="M15.339 40.367h9.604v-9.604H15.34zm-7.401 7.401h7.4v-7.4h-7.4zm-6.187-7.4h6.187V34.18H1.751z"/></g></svg> -->
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
          ],
          balance: {}
      }
  },
  mounted() {
      axios
        .get(`${process.env.VUE_APP_LOCAL_DEV_SERVER_IP}/billing/balance`)
        .then(response => {
            this.balance = response.data
        })
        .catch(error => {
            console.log(error)
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.DO-svg {
    margin: 0.5em 0.5em;
}
</style>