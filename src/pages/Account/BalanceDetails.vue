<template>
    <div>
        <ion-list>
            <ion-item>Account balance: ${{ balance.account_balance }}</ion-item>
            <ion-item
                >Month to date usage: ${{
                    balance.month_to_date_usage
                }}</ion-item
            >
            <ion-item
                >Month to date balance: ${{
                    balance.month_to_date_balance
                }}</ion-item
            >
            <ion-item
                >Generated at:
                {{
                    new Date(balance.generated_at).toLocaleDateString()
                }}</ion-item
            >
        </ion-list>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'BalanceDetails',
    data() {
        return {
            balance: {},
        }
    },
    mounted() {
        axios
            .get('https://api.digitalocean.com/v2/customers/my/balance', {
                headers: {
                    Authorization: `Bearer ${process.env.VUE_APP_DO_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => (this.balance = response.data))
            .catch((error) => console.error(error))
    },
}
</script>
