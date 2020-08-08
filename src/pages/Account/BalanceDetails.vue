<template>
    <div>
        <ion-list>
            <ion-item>Account balance: {{balance.account_balance}}</ion-item>
            <ion-item>Month to date usage: {{balance.month_to_date_usage}}</ion-item>
            <ion-item>Month to date balance: {{balance.month_to_date_balance}}</ion-item>
            <ion-item>Generated at: {{new Date(balance.generated_at).toLocaleDateString()}}</ion-item>
        </ion-list>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'BalanceDetails',
    data() {
        return {
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