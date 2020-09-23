<template>
    <div id="app">
        <ion-page>
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-title>{{`${this.$route.name.charAt(0).toUpperCase()}${this.$route.name.slice(1)}`}}</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-content>
                <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                    <ion-refresher-content></ion-refresher-content>
                </ion-refresher>
                    <ion-vue-router />
                <ion-footer>
                    <BottomNav />
                </ion-footer>
            </ion-content>
        </ion-page>
    </div>
</template>

<script>
import BottomNav from './components/BottomNav'
import * as allIcons from 'ionicons/icons'
export default {
    name: 'app',
    components: {
        BottomNav,
    },
    data() {
        return {
            i: allIcons
        }
    },
    methods: {
        doRefresh(event) {
            console.log('Refreshing...')
            event.target.complete()
            console.log('Refresh complete')
        },
    },
}
</script>

<style></style>
