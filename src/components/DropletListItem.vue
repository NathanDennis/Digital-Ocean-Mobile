<template>
    <ion-item 


    >
        <ion-button @click="openModal">{{dropletName}}</ion-button>

        <ion-button>Reboot</ion-button>

    </ion-item>
</template>

<script>
import DropletModal from '../components/DropletModal'

export default {
    name: "DropletListItem",
    props: ["dropletName", "dropletID", "status", "image", "regionName"],
    methods: {
        openModal() {
            return this.$ionic.modalController
                .create({
                    component: DropletModal,
                    componentProps: {
                        propsData: {
                            dropletName: this.dropletName,
                            status: this.status,
                            dropletID: this.dropletID,
                            image: this.image,
                            regionName: this.regionName
                        }
                    }
                })
                .then(modal => modal.present())
        }
    }
}
</script>

<style scoped>
ion-card {
  height: fit-content;
  width: fit-content;
}

ion-label {
    max-width: fit-content;
    border: blue dotted 2px;
    margin-right: 0.5em;
}
</style>