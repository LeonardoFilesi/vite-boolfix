<script>
import {store} from "../store";
import AppCard from "./AppCard.vue";
import AppCardSeries from "./AppCardSeries.vue"
export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    components: {
    AppCard,
    AppCardSeries
    }
}
</script>

<template>
    <div class="movies-bar d-flex ms_container">
        <div v-for="(movie, index) in store.movies" :key="index" class="ms_card card text-bg-dark me-4 w-50">
            <AppCard :movie="movie"/>
        </div>
    </div>
    <div class="series-bar d-flex ms_container">
        <div v-for="(serie, index) in store.series" :key="index" class="ms_card card text-bg-dark">
            <AppCardSeries :serie="serie"/>
        </div>
    </div>
</template>

<style scoped lang="scss">
.movies-bar {
    overflow-x: auto;
    overflow-y: hidden;
}
.series-bar {
    overflow-x: auto;
    overflow-y: hidden;
}
.ms_container {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
    height: 500px;
}
.ms_card {
    min-width: 300px;
    color: black;
    margin-bottom: 30px;
    /* height: 100%; */
}
</style>