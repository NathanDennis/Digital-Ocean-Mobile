<template>
    <ion-tab-bar>
        <ion-tab-button name="dasboard" href="/#/dashboard">
            <ion-icon :src="i.speedometer"></ion-icon>
            <ion-label>Dashboard</ion-label>
        </ion-tab-button>

        <ion-tab-button name="Support" href="/#/support">
            <ion-icon :src="i.build"></ion-icon>
            <ion-label>Support</ion-label>
        </ion-tab-button>
    </ion-tab-bar>
</template>

<script>
import * as allIcons from 'ionicons/icons'
export default {
    name: 'BottomNav',
    data() {
        return {
            i : allIcons
        }
    }
}
</script>

<style scoped>
</style>