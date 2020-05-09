<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>{{title}}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> Page title </h1>
        <DashboardGrid />
    </ion-content>
  </ion-page>
</template>

<script>
import DashboardGrid from '../components/DashboardGrid'

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
      DashboardGrid
  },
  data() {
      return {
        title: 'Dashboard'
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>