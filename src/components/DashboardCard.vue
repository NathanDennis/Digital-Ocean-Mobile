<template>
        <ion-card class="ui card" v-bind:href="destination">
            <ion-card-title>{{title}}</ion-card-title>
            <ion-card-content class="meta">
                {{description}}
            </ion-card-content>
        </ion-card>
</template>

<script>
export default {
    name: 'DashboardCard',
    props: ['cardImage', 'title', 'description', 'destination']
}
</script>