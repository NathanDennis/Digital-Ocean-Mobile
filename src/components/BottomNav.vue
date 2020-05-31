<template>
    <ion-tab-bar>
        <ion-tab-button name="dasboard" href="/#/dashboard">
            <ion-icon name="build-outline"></ion-icon>
            <ion-label>Dashboard</ion-label>
        </ion-tab-button>
    </ion-tab-bar>
</template>

<script>
export default {
    name: 'BottomNav',
    methods: {
        log() {
            console.log('Clicked')
        }
    }
}
</script>

<style scoped>
</style>