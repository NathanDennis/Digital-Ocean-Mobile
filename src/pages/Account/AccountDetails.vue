<template>
	<!-- <AccountDetailsButton 
			modalName="Account"
			:email=account.email
			:dropletLimit=account.droplet_limit
			:accountStatus=account.status
		/>
		<AccountDetailsButton modalName="Balance" /> -->
	<div v-if="account.email">
		<ion-list>
			<ion-item>{{ account.email }}</ion-item>
			<ion-item v-if="account.email_verified">Email verified</ion-item>
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
// import AccountDetailsButton from '../../components/account/AccountDetailsButton'

export default {
	name: "AccountDetails",
	// components: { AccountDetailsButton },
	data() {
		return {
			account: {},
		}
	},
	beforeMount() {
		axios
			.get(`${process.env.VUE_APP_API_URL}/account`, {
				headers: {
					Authorization: `Bearer ${process.env.VUE_APP_DO_API_KEY}`,
				},
			})
			.then((response) => {
				this.account = response.data.account
			})
			.catch((error) => console.log(error))
	},
}
</script>
