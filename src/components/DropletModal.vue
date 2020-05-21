<template>
  <div>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ dropletName }}</ion-title>
        <ion-button @click="dismiss" slot="end">Close</ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list class="ion-padding">
        <ion-item>ID: {{dropletID}}</ion-item>
        <ion-item>Status: {{status}}</ion-item>
        <ion-item>Slug: {{slug}}</ion-item>
        <ion-item>Region: {{regionName}}</ion-item>
      </ion-list>
    </ion-content>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
      dropletName: { type: String, default: 'Droplet Name'},
      dropletID: { type: String, default: 'Droplet ID'},
      status: { type: String, default: 'Droplet Status'},
      slug: { type: String, default: 'Droplet Slug'},
      regionName: { type: String, default: 'Droplet Region'}
  },
  methods: {
    dismiss() {
      this.$ionic.modalController.dismiss();
    }
  }
}
</script>