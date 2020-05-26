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
        <ion-item>Image: {{image}}</ion-item>
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
      dropletID: { type: Number || String, default: null},
      status: { type: String, default: 'Droplet Status'},
      image: { type: String, default: 'Droplet Image Slug'},
      regionName: { type: String, default: 'Droplet Region'}
  },
  methods: {
    dismiss() {
      this.$ionic.modalController.dismiss();
    }
  }
}
</script>