<template>
    <div>
        <ion-header>
            <ion-toolbar>
                <ion-title>{{ dropletName }}</ion-title>
                <ion-button @click="dismiss" slot="end">Close</ion-button>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <ion-list class="ion-padding">
                <ion-item>ID: {{ dropletID }}</ion-item>
                <ion-item>Status: {{ status }}</ion-item>
                <ion-item>Image: {{ image }}</ion-item>
                <ion-item>Region: {{ regionName }}</ion-item>
            </ion-list>
            <ion-button @click="restart" color="warning"
                >Restart Droplet</ion-button
            >
        </ion-content>
    </div>
</template>

<script>
import axios from 'axios'
const options = {
    data: {
        type: 'reboot',
    },
    headers: {
        Authorization: `Bearer ${process.env.VUE_APP_DO_API_KEY}`,
    },
}

export default {
    name: 'Modal',
    props: {
        dropletName: { type: String, default: 'Droplet Name' },
        dropletID: { type: Number || String, default: null },
        status: { type: String, default: 'Droplet Status' },
        image: { type: String, default: 'Droplet Image Slug' },
        regionName: { type: String, default: 'Droplet Region' },
    },
    methods: {
        dismiss() {
            this.$ionic.modalController.dismiss()
        },
        restart() {
            if (
                confirm(
                    'Are you sure you want to restart? This may mean you need to manually restart your application through the terminal.'
                )
            ) {
                axios
                    .post(
                        `https://api.digitalocean.com/v2/droplets/${this.dropletID}/actions`,
                        options
                    )
                    .then((response) => {
                        console.log('Rebooting...')
                        console.log(response)
                    })
                    .catch(error => console.log(error))
            } else {
                return
            }
        },
    },
}
</script>
