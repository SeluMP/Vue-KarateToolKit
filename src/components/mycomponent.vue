<template>
    <v-container class="cards-wrap">
        <v-row class="cards-row" style="height: 100%;">
            <v-col class="d-flex flex-wrap align-center pl-6 pt-6 left-side" cols="8">
                <TorneoCard v-for="i in 8" :key="i"/>
            </v-col>

            <v-col class="mt-6 right-side" cols="4"></v-col>
        </v-row>
    </v-container>
</template>

<script>
import TorneoCard from './TorneoCard.vue'

export default {
    components: {
        TorneoCard,
    }
    
}
</script>

<style scoped>
body #app .container {
    width: 100%;
    height: 100%;
}

body #app .container .left-side {
    height: 100%;

    gap: 2em;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;
}

.right-side {
    height: 100%;
    background-color: green;
}
</style>