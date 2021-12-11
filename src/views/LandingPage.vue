<template>
    <v-container class="cards-wrap">
        <v-row class="cards-row">
            <v-col class="pl-6 pt-6 left-side" cols="7">
                <TorneoCard v-for="i in 8" :key="i" />
            </v-col>

            <v-col class="mt-6 right-side" cols="5">
                <div class="contact-card">
                    <p>¿Eres una Junta Vecinal y quieres organizar un campeonato?</p>
                    <v-btn class="contact-btn" color="#F45B69" style="color: white;" width="100%">
                        Contáctanos
                    </v-btn>
                </div>
                <h2 style="color: white; margin-bottom: 1em;">Opiniones recientes</h2>
                <ComentarioCard v-for="i in 4" :key="i" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import TorneoCard from '@/components/TorneoCard.vue'
import ComentarioCard from '@/components/ComentarioCard.vue'

export default {
    components: {
        TorneoCard,
        ComentarioCard,
    }
    
}
</script>

<style scoped>
body #app .container {
    width: 100%;
    height: 100%;
}

body #app .cards-row {
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

body #app .container .left-side {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    flex: 1;
    height: 100%;
    width: 100%;

    gap: 2em;
    overflow-y: scroll;
    scrollbar-color: transparent transparent;
}

.right-side {
    height: 97%;
    background-color: #114B5F;
    border-radius: 10px;
    padding: 1.5em 1.5em;
    text-align: center;
    max-width: 500px;
}

.contact-card {
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 1.5em 1.5em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 3em;
}

@media only screen and (max-width: 850px) {
    body #app .cards-row {
        flex-direction: column;
        height: auto;
    }

    body #app .container .left-side {
        display: flex;
        justify-content: center;
        max-width: 100%;
    }

    body #app .container .left-side .card {
        margin-right: 0;
        margin: 1em;
    }

    body #app .container .right-side {
        display: flex;
        justify-content: center;
        align-self: center;
        flex-direction: column;
        max-width: 70%;
    }
}
</style>