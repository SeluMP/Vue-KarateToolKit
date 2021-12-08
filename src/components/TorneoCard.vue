<template>
  <v-card
    class="ml-0 mr-16 card"
    elevation="6"
  >
    <div class="tickets"></div>
  </v-card>
</template>

<script>
export default {
  
}
</script>

<style scoped>
body #app .card {
  width: 400px;
  height: 150px;
  max-width: 400px;
  max-height: 150px;
  background-color: #f8f8f8;
  border-radius: 20px;
}

body #app .card .tickets {
  width: 3em;
  height: 3em;
  background-color: #F45B69;
  border-radius: 50%;

  position: absolute;
  top: -1.5em;
  left: -1.5em;
}
</style>