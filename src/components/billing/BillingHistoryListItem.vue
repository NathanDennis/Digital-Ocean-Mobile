<template>
    <ion-item>
        <p>{{description}}</p>
        <ion-button @click="openModal">Details</ion-button>
    </ion-item>
</template>

<script>
import BillingHistoryModal from './BillingHistoryModal'

export default {
    name: "BillingHistoryListItem",
    props: ["description", "amount", "type", "date", "invoice_id", "invoice_uuid"],
    methods: {
        openModal() {
            return this.$ionic.modalController
                .create({
                    component: BillingHistoryModal,
                    componentProps: {
                        propsData: {
                            description: this.description,
                            amount: this.amount,
                            type: this.type,
                            date: this.date,
                            invoice_id: this.invoice_id,
                            invoice_uuid: this.invoice_uuid
                        }
                    }
                })
                .then(modal => modal.present())
        }
    }
}
</script>

<style scoped>
ion-card {
  height: fit-content;
  width: fit-content;
}

ion-label {
    max-width: fit-content;
    border: blue dotted 2px;
    margin-right: 0.5em;
}
</style>