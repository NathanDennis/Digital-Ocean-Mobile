<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ description }}</ion-title>
        <ion-button @click="dismiss" slot="end">Close</ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list class="ion-padding">
        <ion-item>Description: {{description}}</ion-item>
        <ion-item>Date: {{new Date(date).toLocaleDateString()}}</ion-item>
        <ion-item>Amount: ${{amount}}</ion-item>
        <ion-item>Type: {{type}}</ion-item>
        <ion-item v-if="type='Invoice'">Invoice UUID: {{invoice_uuid}}</ion-item>
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "BillingHistoryModal",
  props: {
      description: { type: String, default: 'Billing Item Description'},
      amount: { type: String, default: null},
      type: { type: String, default: 'Bill type'},
      date: { type: String, default: 'Date'},
      invoice_id: { type: String, default: 'Invoice ID'},
      invoice_uuid: { type: String, default: 'No UUID given'}
  },
  methods: {
    dismiss() {
      this.$ionic.modalController.dismiss();
    }
  }
}
</script>