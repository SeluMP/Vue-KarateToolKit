<template>
  <v-card
    class="px-4 py-4 d-flex align-center card"
    elevation="6"
  >
    <div class="user-container">
      <v-img src="@/assets/imagenes/person_black_24dp.svg" max-width="80px"></v-img>
    </div>
    <div class="content" style="text-align: left;">
      <p style="font-weight: bold; margin-top: 0; margin-bottom: 5px;">Maria</p>
      <p style="height: 100%; margin-bottom: 0;">Mi hijo se lo pasó muy bien</p>
    </div>
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped>
body #app .card {
  width: 100%;
  height: 100px;
  background-color: #f8f8f8;
  border-radius: 10px;
  position: relative;
  margin-bottom: 1.4em;
  display: flex;
}

body #app .user-container {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 68px;
  height: 68px;
  padding: .5em;
  margin-right: 20px;
  background-color: #f8f8f8;
  border-radius: 50%;
  border: 2px solid black;
}

@media only screen and (max-width: 850px) {
  body #app .card .content {
    flex-direction: column;
  }
}
</style>