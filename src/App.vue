<template>
  <v-app>
    <v-app-bar
      app
      elevation="12"
      color="#114B5F"
      dark
    >
      <div>Logo</div>

      <v-spacer></v-spacer>

      <div>
        <v-btn class="mr-4 nav-link" color="#F45B69">
          Login Token
        </v-btn>
        <v-btn class="mr-4 nav-link" color="#F45B69">
          Login Junta/Ayuntamiento
        </v-btn>
      </div>
    </v-app-bar>

    <v-main class="mt-6">
      <mycomponent/>
    </v-main>
  </v-app>
</template>

<script>
import mycomponent from './components/mycomponent.vue';

export default {
  name: 'App',

  components: {
    mycomponent
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
body {
  height: 100vh;
}

.nav-link {
  text-transform: unset;
}
</style>