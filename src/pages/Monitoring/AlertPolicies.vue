<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Monitoring: Alert Policies</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> ALERT POLICIES </h1>
    </ion-content>
    <BottomNav />
  </ion-page>
</template>

<script>
import BottomNav from '../../components/BottomNav'
export default {
    name: "AlertPolicies",
    components: { BottomNav }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>