<template>
  <v-card
    class="ml-0 mr-16 pa-6 d-flex align-center card"
    elevation="6"
  >
    <v-btn elevation="2" fab dark color="#F45B69" class="tickets" @click="printHolaMundo"> 
      <v-img src="@/assets/imagenes/ticket.png" max-height="1.7em" max-width="1.7em"> 
      </v-img> 
    </v-btn>
    <v-img
      class="img-polideportivo"
      src="@/assets/imagenes/polideportivo.png" 
      max-height="100%"
      :aspect-ratio="1"
    > 
    </v-img>
    <div class="pl-6 d-flex flex-column contents">
      <div class="d-flex justify-space-between align-center fila1">
        <span style="font-size: 20px; font-weight: bold;">La flota</span> 
        <span style="font-size: 14px;">12/12/2021</span>
      </div>
      <div class="fila2" style="font-size: 14px;">
        Calle Revolución 34
      </div>
      <div class="d-flex justify-space-between align-end fila3">
        <v-btn class="subscribe-btn" color="#F45B69" style="color: white;" width="45%">
          <v-img class="mr-1" src="@/assets/imagenes/receipt_long_white_24dp.svg"></v-img>
          Equipo
        </v-btn>
        <v-btn class="subscribe-btn" color="#F45B69" style="color: white;" width="45%">
          <v-img class="mr-1" src="@/assets/imagenes/receipt_long_white_24dp.svg"></v-img>
          Sensei
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  methods: {
    printHolaMundo() {
      console.log("Hola mundo");
    }
  }
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
  position: relative;
}

body #app .card .tickets {
  width: 3em;
  height: 3em;

  position: absolute;
  top: -1.5em;
  left: -1.5em;
  padding: 0.4em 0.4em 0.6em 0.4em;

  display: flex;
  justify-items: center;
  align-items: center;
}

body #app .card .img-polideportivo {
  border-radius: 15px;
  max-width: 30%;
}

body #app .card .contents {
  height: 100%;
  width: 70%;
  border-radius: 0;
}

body #app .card .contents .fila3 {
  flex: 1;
}

body #app .card .contents .fila3 .subscribe-btn {
  text-transform: unset;
}
</style>
