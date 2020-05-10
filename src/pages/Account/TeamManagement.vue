<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Team Management</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> TEAM MANAGEMENT </h1>
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
  data() {
      return {
        
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>