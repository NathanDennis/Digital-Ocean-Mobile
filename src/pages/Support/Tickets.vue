<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Support</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
        <h1> SUPPORT </h1>
        <div class="ticket-list">
            <p>Your tickets</p>
            <ul>
                <li>ticket 1</li>
                <li>ticket 2</li>
            </ul>
        </div>
        <ion-button :href=buttonDestination>Create New Ticket</ion-button>
    </ion-content>
    <BottomNav />
  </ion-page>
</template>

<script>
import BottomNav from '../../components/BottomNav'

export default {
    name: "Tickets",
    components: { BottomNav },
    data() {
        return {
            buttonDestination: '/#/support/createticket'
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ion-content {
    display: flex;
    text-align: center;
}

.ticket-list {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ticket-list ul {
    /* border: dotted blue 2px; */
    list-style: none;
    padding: 0;
}
</style>