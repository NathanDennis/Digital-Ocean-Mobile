<template>
    <div id="app">
        <ion-app>
            <ion-vue-router />            
        </ion-app>

        <ion-footer>
            <BottomNav />
        </ion-footer>
     </div>
</template>

<script>
import BottomNav from './components/BottomNav'
import * as allIcons from 'ionicons/icons'
export default {
    name: "app",
    components: {
        BottomNav
    },
    data() {
        return {
            i: allIcons
        }
    }
}
</script>

<style>
</style>