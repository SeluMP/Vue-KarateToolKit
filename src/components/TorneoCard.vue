<template>
  <v-card
    class="ml-0 mr-16 d-flex align-center card"
    elevation="6"
  >
    <div class="tickets"> 
      <v-img src="@/assets/imagenes/ticket.png" max-height="100%" max-width="100%"> 
      </v-img> 
    </div>
    <v-img class="ml-6 img-polideportivo" src="@/assets/imagenes/polideportivo.png" 
      max-height="70%" max-width="30%" :aspect-ratio="1"> 
    </v-img>
    <div class="info">
      <div class="fila1">
        <span>La flota </span> 
        <span> 12/12/2021 </span>
      </div>
      <div class="fila2">
        Calle Revolución 34
      </div>
      <div class="fila3">

      </div>
    </div>
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
  padding: 0.4em 0.4em 0.6em 0.4em;

  display: flex;
  justify-items: center;
  align-items: center;
}

body #app .card .img-polideportivo{
  border-radius: 15px;
}

/*.info{
  height: 100%;
  width: 100%;
}*/
</style>