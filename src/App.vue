<template>
  <v-app>
    <v-app-bar
      app
      elevation="12"
      color="#114B5F"
      dark
    >
      <router-link to="/">
        <v-btn fab elevation="0" class="pa-1 d-flex justify-center align-center" style="height: 50px; width: 50px; background-color: white; border-radius: 50%;">
          <v-img src="@/assets/imagenes/ktLogo.jpg" max-height="" max-width="2.5em"></v-img>
        </v-btn>
      </router-link>

      <v-spacer></v-spacer>

      <div>
        <v-btn class="mr-4 nav-link" color="#F45B69">
          Login Token
        </v-btn>
        <router-link to="/loginUser">
          <v-btn class="mr-4 nav-link" color="#F45B69">
            Login Junta/Ayuntamiento
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>

    <v-main class="mt-6" style="height: 100%;">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>
html {
  height: 100vh;
  overflow: hidden;
}

body {
  height: 100%;
}

#app {
  height: 100%;
}
</style>

<style scoped>
.nav-link {
  text-transform: unset;
}
</style>