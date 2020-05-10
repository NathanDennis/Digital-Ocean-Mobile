<template>
      <div class="card-grid">
        <DashboardCard
          class="dashboard-card"
          v-for="card in cards"
          :key="card.id"
          :title="card.cardTitle"
          :header="card.cardHeader"
          :description="card.cardDescription"
          :destination="card.destination"
        />
      </div>
</template>

<script>
import DashboardCard from "./DashboardCard";

import { add } from "ionicons/icons";
import { addIcons } from "ionicons";
addIcons({
  "ios-add": add.ios,
  "md-add": add.md
});
export default {
  name: "DashboardGrid",
  props: {
    msg: String,
    cards: Array
  },
  components: {
    DashboardCard
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-grid {
    display: flex;
    flex-wrap: wrap;
    height: fit-content;
    /* border: dotted blue 2px; */
    justify-content: center;
}

.dashboard-card {
    text-align: center;
}
</style>