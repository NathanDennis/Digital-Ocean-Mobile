<template>
	<ion-page>
		<ion-header>
			<ion-toolbar color="primary">
				<ion-title>Profile</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content padding>
			<h1>PROFILE</h1>
			<h3>Account Details</h3>
			<ion-grid>
				<div v-if="account.email">
					<p>Email: {{ account.email }}</p>
					<p>Email verified: {{ account.email_verified }}</p>
					<p>Droplet limit: {{ account.droplet_limit }}</p>
					<p>Account status: {{ account.status }}</p>
				</div>
				<div v-else>
					<h3>Fetching account details...</h3>
				</div>
			</ion-grid>
		</ion-content>
	</ion-page>
</template>

<script>
import axios from "axios";

export default {
	name: "Profile",
	data() {
		return {
			account: {},
		};
	},
	beforeMount() {
        axios.get(`${process.env.VUE_APP_API_URL}/account`, { headers: {
            Authorization: `Bearer ${process.env.VUE_APP_DO_API_KEY}`

        }})
        .then((response) => {
            this.account = response.data.account
        })
        .catch(error => console.log(error))
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
