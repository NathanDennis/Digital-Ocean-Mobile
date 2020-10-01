<template>
    <ion-page>
        <ion-content padding>
            <BillingHistoryListItem
                v-for="bill in billingHistory"
                :key="bill.date"
                :description="bill.description"
                :amount="bill.amount"
                :type="bill.type"
                :date="bill.date"
                :invoice_id="bill.invoice_id"
                :invoice_uuid="bill.invoice_uuid"
            />
        </ion-content>
    </ion-page>
</template>

<script>
import axios from 'axios'
import BillingHistoryListItem from '../../components/billing/BillingHistoryListItem'

export default {
    name: 'BillingHistory',
    components: {
        BillingHistoryListItem,
    },
    data() {
        return {
            billingHistory: [],
        }
    },
    mounted() {
        axios
            .get(
                'https://api.digitalocean.com/v2/customers/my/billing_history',
                {
                    headers: {
                        Authorization: `Bearer ${process.env.VUE_APP_DO_API_KEY}`,
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then((response) => {
				this.billingHistory = response.data.billing_history
			})
            .catch((error) => console.error(error))
    },
}
</script>
