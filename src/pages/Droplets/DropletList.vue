<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Droplets: List</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <h1> Droplet List </h1>
            <ion-list>
                <ion-item v-if="dropletList.length === 0 || !dropletList || !dropletList.meta.total">You currently have no droplets</ion-item>
                <ion-item v-else-if="dropletList.length > 0">You currently have {{dropletList.meta.total > 1 ? `${dropletList.meta.total} droplets` : `${dropletList.meta.total} droplet`}}</ion-item>
                <DropletListItem
                    v-for="droplet in dropletList" 
                    :key=droplet.id
                    :dropletName=droplet.name
                    :dropletID=droplet.id
                    :status=droplet.status
                    :image=droplet.image.slug
                    :regionName=droplet.region.name
                />
            </ion-list>
        </ion-content>
        <BottomNav />
    </ion-page>
</template>

<script>
import axios from 'axios'
import DropletListItem from '../../components/droplets/DropletListItem'
import BottomNav from '../../components/BottomNav'

export default {
    name: "DropletList",
    components: {
        DropletListItem,
        BottomNav
    },
    data() {
          return {
        dropletList: [],
        }
    },
  mounted() {
      axios
        .get("http://localhost:3000/droplets/listdroplets")
        .then(response => {
            this.dropletList = response.data            
        })
        .then(console.log(this.dropletList))
        .catch(error => {
            console.log(error)
        })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>