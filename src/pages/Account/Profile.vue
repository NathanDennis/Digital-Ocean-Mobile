<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">  
        <ion-title>Profile</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content padding>
        <h1> PROFILE </h1>
        <h3>Account Details</h3>
        <ion-grid>
            <div v-if="account.email">
                <p>Email: {{account.email}}</p>
                <p>Email verified: {{account.email_verified}}</p>
                <p>Droplet limit: {{account.droplet_limit}}</p>
                <p>Account status: {{account.status}}</p>
            </div>
            <div v-else>
                <h1>NO ACCOUNT DETAILS</h1>
            </div>
        </ion-grid>
    </ion-content>
    <BottomNav />
  </ion-page>
</template>

<script>
import axios from 'axios'
import BottomNav from '../../components/BottomNav'

export default {
  name: "Profile",
  components: { BottomNav },
  data() {
      return {
          account: {}
      }
  },
  mounted() {
      axios
        .get("http://localhost:3000/account/profile")
        .then(response => {
            this.account = response.data
        })
        .catch(error => {
            console.log(error)
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>