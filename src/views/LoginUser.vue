<template>
    <v-container class="d-flex justify-center align-center">
     <v-card class="ma-auto py-6 px-12 card">
      <v-row class="align-center mb-4">
        <v-col
          cols="12"
        >
            <h1 class="title"> Login </h1>
        </v-col>
      </v-row>
      <v-row class="align-center">
        <v-col
          cols="12"
        >
        <label >Nombre de usuario </label>
        <v-text-field class="mt-2"
            solo
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-n8">
        <v-col
          cols="12"
        >
        <label>Contraseña </label>
        <v-text-field class="mt-2"
            type="password"
            solo
            dense
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mt-n8">
        <v-col
          cols="12"
        >
         <label>Tipo de usuario </label>
         <v-select class="mt-2"
          :items="items"
          solo
          dense
        ></v-select>
        </v-col>
      </v-row>
      <v-row class="mt-n8">
        <v-col
          cols="12"
          style="text-align: right;"
        >
          <router-link to="/forgotPassword">
            <span style="color: white; font-size:12px;"> Has olvidado tu contraseña?</span>
          </router-link>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col
          cols="12"
          class="d-flex justify-center"
        >
        <v-btn style="color: white; width: 100%;" color="#F45B69">
          Login
        </v-btn>
        </v-col>
      </v-row>
      </v-card>
    </v-container>
</template>

<script>
export default {
    data: () => ({
      items: ['', 'Junta Vecinal', 'Ayuntamiento'],
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

body #app .card a {
  text-decoration: none;
}
</style>
