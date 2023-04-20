<script>
import {store} from "../store";
import AppCard from "./AppCard.vue";

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    components: {
    AppCard
    }
}
</script>

<template>
    <div class="movies-bar container">
        <div v-for="(movie, index) in store.movies" :key="index"></div>
    </div>
    <div class="series-bar">
        <div v-for="(serie, index) in store.series" :key="index"></div>
    </div>
</template>

<style scoped lang="scss">
.movies-bar {
    overflow-x: scroll;
}
.series-bar {
    overflow-x: scroll;
}
</style>