<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Billing: Status</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> BILLING STATUS </h1>
    </ion-content>
    <BottomNav />
  </ion-page>
</template>

<script>
import BottomNav from '../../components/BottomNav'

export default {
    name: "BillingStatus",
    components: { BottomNav },
    data() {
        return {
        
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>