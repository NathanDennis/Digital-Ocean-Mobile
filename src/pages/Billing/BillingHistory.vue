<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Billing: History</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> BILLING HISTORY </h1>
        <BillingHistoryListItem 
            v-for="bill in billingHistory"
            :key=bill.date
            :description=bill.description
            :amount=bill.amount
            :type=bill.type
            :date=bill.date
            :invoice_id=bill.invoice_id
            :invoice_uuid=bill.invoice_uuid            
        />
    </ion-content>
    <BottomNav />
  </ion-page>
</template>

<script>
import axios from 'axios'
import BillingHistoryListItem from '../../components/billing/BillingHistoryListItem'
import BottomNav from '../../components/BottomNav'

export default {
  name: "BillingHistory",
  components: {
      BillingHistoryListItem,
      BottomNav
  },
  data() {
      return {
          billingHistory: []
      }
  },
  mounted(){
      axios
        .get(`${process.env.VUE_APP_LOCAL_DEV_SERVER_IP}/billing/history`)
        .then(response => {
            this.billingHistory = response.data.billing_history
        })
        .catch(error => {
            console.log(error)
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>