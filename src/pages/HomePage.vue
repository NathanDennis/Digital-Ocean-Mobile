<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h2>Hello Nathan</h2>
        <ion-button href="#">Log In</ion-button>
        <ion-button href="/#/dashboard">Dashboard</ion-button>
    </ion-content>
    <BottomNav />
  </ion-page>
</template>

<script>
import BottomNav from '../components/BottomNav'

export default {
  name: "HomePage",
  components: { BottomNav },
  data() {
      return {
        APIKey: process.env.VUE_APP_DO_API_KEY,
        accountName: 'waiting'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    height: 100%;
}
</style>