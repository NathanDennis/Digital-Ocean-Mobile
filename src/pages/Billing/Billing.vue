<template>
	<ion-page>
		<ion-content padding>
			<DashboardGrid :cards="this.cards" />
		</ion-content>
	</ion-page>
</template>

<script>
import DashboardGrid from "../../components/DashboardGrid"

export default {
	name: "Billing",
	components: {
		DashboardGrid,
	},
	data() {
		return {
			cards: [
				{
					id: 1,
					cardTitle: "History",
					cardHeader: "Billing History Tab",
					cardDescription: "Billing History",
					destination: "/#/billing/history",
				},
			],
		}
	},
}
</script>
