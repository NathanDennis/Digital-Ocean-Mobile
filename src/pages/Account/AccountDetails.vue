<template>
	<div v-if="account.email">
		<ion-list>
			<ion-item>{{ account.email }}</ion-item>
			<ion-item v-if="account.email_verified">Email Verified</ion-item>
			<ion-item>Droplet Limit: {{ account.droplet_limit }}</ion-item>
			<ion-item>Account Status: {{ account.status }}</ion-item>
		</ion-list>
	</div>
	<div v-else>
		<h3>Fetching account details...</h3>
	</div>
</template>

<script>
import axios from "axios"

export default {
	name: "AccountDetails",
	data() {
		return {
			account: {},
		}
	},
	beforeMount() {
		axios
			.get(`${process.env.VUE_APP_API_URL}/account/details`, {
				headers: {
					Authorization: `Bearer ${process.env.VUE_APP_DO_API_KEY}`,
				},
			})
			.then((response) => {
				this.account = response.data
			})
			.catch((error) => console.log(error))
	},
}
</script>
