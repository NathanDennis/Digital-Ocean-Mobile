<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <!-- <h2>{{ accountName === 'waiting' ? 'Fetching data...' : `Hello ${accountName}`}}</h2> -->
        <h2>Hello Nathan</h2>
        <ion-button href="#">Log In</ion-button>
        <ion-button href="/#/dashboard">Dashboard</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
// import axios from 'axios'

import { add } from "ionicons/icons";
import { addIcons } from "ionicons";
addIcons({
  "ios-add": add.ios,
  "md-add": add.md
})
export default {
  name: "HomePage",
  props: {
    msg: String
  },
  data() {
      return {
        APIKey: process.env.VUE_APP_DO_API_KEY,
        accountName: 'waiting'
      }
  },
//   mounted() {
//       axios
//         .get("https://api.digitalocean.com/v2/customers/my/balance", {headers: { 'Authorization': `Bearer ${this.APIKey}`}})
//         .then(response => {
//             // 
//             console.log(response)
//         })
//         .catch(error => {
//             console.log(error)
//         })
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
    height: 100%;
}
</style>