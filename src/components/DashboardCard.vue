<template>
        <ion-card v-bind:href="destination">
            <ion-card-header>{{header}}</ion-card-header>
            <ion-card-title>{{title}}</ion-card-title>
            <ion-card-content>
                <p>{{description}}</p>
            </ion-card-content>
        </ion-card>
    
</template>

<script>
export default {
    name: 'DashboardCard',
    props: ['cardImage', 'title', 'header', 'description', 'destination']
}
</script>