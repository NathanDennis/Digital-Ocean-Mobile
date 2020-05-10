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
  </ion-page>
</template>

<script>
import { add } from "ionicons/icons";
import { addIcons } from "ionicons";
addIcons({
  "ios-add": add.ios,
  "md-add": add.md
});
export default {
  name: "replace-this",
  props: {
    msg: String
  },
  components: {
      
  },
  data() {
      return {
          buttonDestination: '/#/support/createticket'
      }
  }
};
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