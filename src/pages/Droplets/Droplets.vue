<template>
  <ion-page>
    <ion-content padding>
        <DashboardGrid 
            :cards=this.cards 
        />
    </ion-content>
  </ion-page>
</template>

<script>
import DashboardGrid from '../../components/DashboardGrid'

export default {
  name: "Droplets",
  components: {
      DashboardGrid,
  },
  data() {
      return {
          cards: [
            {
                id: 1,
                cardTitle: 'Droplet List',
                cardHeader: 'Droplet List Tab',
                cardDescription: 'Show / Manage all droplets',
                destination: '/#/droplets/list'
            }
          ]
      }
  }
}
</script>