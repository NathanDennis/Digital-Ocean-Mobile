<template>
	<ion-page>
		<ion-header>
			<ion-toolbar color="primary">
				<ion-title>Droplets: List</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content padding>
			<ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
				<ion-refresher-content></ion-refresher-content>
			</ion-refresher>
			<ion-list>
				<h3
					v-if="
						dropletList.length === 0 ||
							!dropletList ||
							!dropletList.meta.total
					"
				>
					Loading your droplets...
				</h3>
				<h3 v-else-if="dropletList.length > 0">
					You currently have
					{{
						dropletList.meta.total > 1
							? `${dropletList.meta.total} droplets`
							: `${dropletList.meta.total} droplet`
					}}
				</h3>
				<hr />
				<DropletListItem
					v-for="droplet in dropletList"
					:key="droplet.id"
					:dropletName="droplet.name"
					:dropletID="droplet.id"
					:status="droplet.status"
					:image="droplet.image.slug"
					:regionName="droplet.region.name"
				/>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script>
import axios from "axios"
import DropletListItem from "../../components/droplets/DropletListItem"

export default {
	name: "DropletList",
	components: {
		DropletListItem,
	},
	data() {
		return {
			dropletList: [],
		}
	},
	mounted() {
        this.getAPIData()
    },
	methods: {
		async getAPIData() {
			await axios
				.get(`${process.env.VUE_APP_API_URL}/droplets`, {
					headers: {
						Authorization: `Bearer ${process.env.VUE_APP_DO_API_KEY}`,
					},
				})
				.then((response) => {
					console.log(response.data)
					this.dropletList = response.data.droplets
					this.dropletList.meta = response.data.meta
				})
				.catch((error) => {
					console.log(error)
				})
		},
		doRefresh(event) {
            this.getAPIData().then(() => {
                console.log('Refresh complete')
                event.target.complete()
            })
		},
	},
}
</script>
