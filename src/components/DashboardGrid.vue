<template>
      <div class="card-grid">
        <DashboardCard
          class="dashboard-card ui cards"
          v-for="card in cards"
          :key="card.id"
          :title="card.cardTitle"
          :description="card.cardDescription"
          :destination="card.destination"
        />
      </div>
</template>

<script>
import DashboardCard from "./DashboardCard";
export default {
  name: "DashboardGrid",
  props: {
    cards: Array
  },
  components: {
    DashboardCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-grid {
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    justify-content: center;
    margin-bottom: 3.5rem;
}

.dashboard-card {
    text-align: center;
}
</style>