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
						!dropletList 
					"
				>
					Loading your droplets...
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
import DropletListItem from "../../components/droplets/DropletListItem"
import getAPIData from '../../componentMethods/getAPIData'

export default {
	name: "DropletList",
	components: {
		DropletListItem,
	},
	data() {
		return {
			dropletList: []
		}
	},
	beforeMount() {
		getAPIData('droplets/list')
			.then(response => this.dropletList = response.data)
			.catch(error => console.error(error))
    },
	methods: {
		doRefresh(event) {
            getAPIData('droplets/list').then(() => {
                console.log('Refresh complete')
                event.target.complete()
            })
		},
	},
}
</script>
