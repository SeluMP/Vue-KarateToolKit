<template>
    <v-container>
        <v-row style="height: 100%;">
            <v-col class="left-side" cols="8"></v-col>
            <v-col class="right-side" cols="4"></v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
}

.left-side {
    height: 100%;
    background-color: red;
}

.right-side {
    height: 100%;
    background-color: green;
}
</style>