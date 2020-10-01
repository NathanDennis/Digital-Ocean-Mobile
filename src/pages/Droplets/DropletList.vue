<template>
    <ion-page>
        <ion-content padding>
            <ion-list>
                <h3 v-if="!dropletList">
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
import axios from 'axios'
import DropletListItem from '../../components/droplets/DropletListItem'

export default {
    name: 'DropletList',
    components: {
        DropletListItem,
    },
    data() {
        return {
            dropletList: [],
        }
    },
    mounted() {
		axios.get('https://api.digitalocean.com/v2/droplets', {
            headers: {
                Authorization: `Bearer ${process.env.VUE_APP_DO_API_KEY}`,
                "Content-Type": "application/json"
            }
        })
        .then(response => this.dropletList = response.data.droplets)
        .catch(err => console.error(err))
    }
}
</script>
