
<template>
    <ion-item>
        <ion-button @click="openModal">{{ modalName }}</ion-button>
    </ion-item>
</template>

<script>
import AccountDetailsModal from './AccountDetailsModal'

export default {
    name: "AccountDetailsButton",
    props: ["modalName", "email", "dropletLimit", "accountStatus"],
    methods: {
        openModal() {
            return this.$ionic.modalController
                .create({
                    component: AccountDetailsModal,
                    componentProps: {
                        propsData: {
                            email: this.email,
                            dropletLimit: this.droplet_limit,
                            accountStatus: this.status
                        }
                    }
                })
                .then(modal => modal.present())
        }
    }
}
</script>