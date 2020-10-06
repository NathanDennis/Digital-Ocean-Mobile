<template>
    <ion-page>
        <ion-content padding>
            <h2>Hello</h2>
            <ion-button href="#">Log In</ion-button>
            <ion-button href="/#/dashboard">Dashboard</ion-button>
        </ion-content>
    </ion-page>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            APIKey: process.env.VUE_APP_DO_API_KEY,
            accountName: 'waiting',
        }
    },
}
</script>
<style scoped>
body {
    height: 100%;
}
</style>
