<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Droplets: List</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <h1> Droplet List </h1>
            <ion-button @click="consoleLogDropletList">click</ion-button>
            <ion-list>
                <ion-item v-if="dropletList.length === 0 || !dropletList">You currently have no droplets</ion-item>
                <ion-item v-if="dropletList.length > 0">You currently have {{meta.total > 1 ? `${meta.total} droplets` : `${meta.total} droplet`}}</ion-item>
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
    </ion-page>
</template>

<script>
import { add } from "ionicons/icons";
import { addIcons } from "ionicons";

// import axios from 'axios'

import DropletListItem from '../../components/DropletListItem'

addIcons({
    "ios-add": add.ios,
    "md-add": add.md
})

export default {
    name: "replace-this",
    props: {
        msg: String
    },
    components: {
        DropletListItem
    },
    methods: {
        consoleLogDropletList() {
            this.dropletList.forEach(item => console.log(item))
        }
    },
    data() {
          return {
              dropletList: [
                  {
                    "id": 3164444,
                    "name": "example.com",
                    "memory": 1024,
                    "vcpus": 1,
                    "disk": 25,
                    "locked": false,
                    "status": "active",
                    "kernel": {
                        "id": 2233,
                        "name": "Ubuntu 14.04 x64 vmlinuz-3.13.0-37-generic",
                        "version": "3.13.0-37-generic"
                    },
                    "created_at": "2014-11-14T16:29:21Z",
                    "features": [
                        "backups",
                        "ipv6",
                        "virtio"
                    ],
                    "backup_ids": [
                        7938002
                    ],
                    "snapshot_ids": [

                    ],
                    "image": {
                        "id": 6918990,
                        "name": "14.04 x64",
                        "distribution": "Ubuntu",
                        "slug": "ubuntu-16-04-x64",
                        "public": true,
                        "regions": [
                        "nyc1",
                        "ams1",
                        "sfo1",
                        "nyc2",
                        "ams2",
                        "sgp1",
                        "lon1",
                        "nyc3",
                        "ams3",
                        "nyc3"
                        ],
                        "created_at": "2014-10-17T20:24:33Z",
                        "type": "snapshot",
                        "min_disk_size": 20,
                        "size_gigabytes": 2.34
                    },
                    "volume_ids": [

                    ],
                    "size": {
                    },
                    "size_slug": "s-1vcpu-1gb",
                    "networks": {
                        "v4": [
                        {
                            "ip_address": "104.236.32.182",
                            "netmask": "255.255.192.0",
                            "gateway": "104.236.0.1",
                            "type": "public"
                        }
                        ],
                        "v6": [
                        {
                            "ip_address": "2604:A880:0800:0010:0000:0000:02DD:4001",
                            "netmask": 64,
                            "gateway": "2604:A880:0800:0010:0000:0000:0000:0001",
                            "type": "public"
                        }
                        ]
                    },
                    "region": {
                        "name": "New York 3",
                        "slug": "nyc3",
                        "sizes": [

                        ],
                        "features": [
                        "virtio",
                        "private_networking",
                        "backups",
                        "ipv6",
                        "metadata"
                        ],
                        "available": null
                    },
                    "tags": [

                    ],
                    "vpc_uuid": "f9b0769c-e118-42fb-a0c4-fed15ef69662"
                    },
{
                    "id": 3164443,
                    "name": "Example Droplet 2",
                    "memory": 1024,
                    "vcpus": 1,
                    "disk": 25,
                    "locked": false,
                    "status": "active",
                    "kernel": {
                        "id": 2233,
                        "name": "Ubuntu 14.04 x64 vmlinuz-3.13.0-37-generic",
                        "version": "3.13.0-37-generic"
                    },
                    "created_at": "2014-11-14T16:29:21Z",
                    "features": [
                        "backups",
                        "ipv6",
                        "virtio"
                    ],
                    "backup_ids": [
                        7938002
                    ],
                    "snapshot_ids": [

                    ],
                    "image": {
                        "id": 6918990,
                        "name": "14.04 x64",
                        "distribution": "Ubuntu",
                        "slug": "ubuntu-16-04-x64",
                        "public": true,
                        "regions": [
                        "nyc1",
                        "ams1",
                        "sfo1",
                        "nyc2",
                        "ams2",
                        "sgp1",
                        "lon1",
                        "nyc3",
                        "ams3",
                        "nyc3"
                        ],
                        "created_at": "2014-10-17T20:24:33Z",
                        "type": "snapshot",
                        "min_disk_size": 20,
                        "size_gigabytes": 2.34
                    },
                    "volume_ids": [

                    ],
                    "size": {
                    },
                    "size_slug": "s-1vcpu-1gb",
                    "networks": {
                        "v4": [
                        {
                            "ip_address": "104.236.32.182",
                            "netmask": "255.255.192.0",
                            "gateway": "104.236.0.1",
                            "type": "public"
                        }
                        ],
                        "v6": [
                        {
                            "ip_address": "2604:A880:0800:0010:0000:0000:02DD:4001",
                            "netmask": 64,
                            "gateway": "2604:A880:0800:0010:0000:0000:0000:0001",
                            "type": "public"
                        }
                        ]
                    },
                    "region": {
                        "name": "UK 3",
                        "slug": "nyc3",
                        "sizes": [

                        ],
                        "features": [
                        "virtio",
                        "private_networking",
                        "backups",
                        "ipv6",
                        "metadata"
                        ],
                        "available": null
                    },
                    "tags": [

                    ],
                    "vpc_uuid": "f9b0769c-e118-42fb-a0c4-fed15ef69662"
                    }
                ],
        meta: {
            total: 3
            }
        }
    }
//   mounted() {
//       axios
//         .get("https://api.digitalocean.com/v2/droplets", {headers: { 'Authorization': `Bearer ${this.APIKey}`}})
//         .then(response => {
//             this.dropletList = response.droplets
//             console.log(response)
//         })
//         .catch(error => {
//             console.log(error)
//         })
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>