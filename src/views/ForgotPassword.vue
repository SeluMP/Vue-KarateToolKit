<template>
    <v-container class="d-flex justify-center align-center">
     <v-card class="ma-auto py-6 px-12 card">
      <v-row class="align-center mb-4">
        <v-col
          cols="12"
        >
            <h1 class="title"> Cambiar contraseña </h1>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col
          cols="12"
        >
        <label > E-mail </label>
        <v-text-field class="mt-2"
            solo
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-6">
        <v-col
          cols="12"
          class="d-flex justify-center"
        >
        <router-link style="width: 100%;" to="/loginUser">
          <v-btn style="color: white; width: 100%;" color="#F45B69">
            Enviar
          </v-btn>
        </router-link>
        </v-col>
      </v-row>
      </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({
      items: ['', 'Equipo de artes marciales', 'Sensei', 'Asistente', 'Miembro tribunal'],
    }),
  }
</script>

<style scoped>
body #app .card{
    background-color: #114B5F;
}
label {
    color: white;
    font-size: 14px;
}
body #app .card .title{
    color: #114B5F;
    text-align: center;
    width: 100%;
    background-color: #E4FDE1;
    border-radius: 5px;
}
</style>