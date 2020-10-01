<template>
	<div v-if="email">
		<ion-list>
			<ion-item>{{ email }}</ion-item>
			<ion-item>Droplet Limit: {{ dropletLimit }}</ion-item>
			<ion-item>Account Status: {{ accountStatus }}</ion-item>
		</ion-list>
	</div>
	<div v-else>
		<h3>Fetching account details...</h3>
	</div>
</template>

<script>
export default {
    name: "AccountDetailsModal",
	props: {
        title: { type: String, default: "Title" },
		email: { type: String, default: "Fetching account details..." },
		dropletLimit: { type: Number, default: null },
		accountStatus: { type: String, default: "Fetching account details..." }
	},
	methods: {
		dismiss() {
			this.$ionic.modalController.dismiss()
		},
	},
}
</script>
