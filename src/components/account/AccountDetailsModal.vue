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

    <!-- <div>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ title }}</ion-title>
                <ion-button @click="dismiss" slot="end">Close</ion-button>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list class="ion-padding">
                <ion-item>Email: {{ email }}</ion-item>
            </ion-list>
        </ion-content>
    </div> -->
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
