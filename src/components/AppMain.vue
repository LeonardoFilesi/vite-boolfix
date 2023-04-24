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
    <div class="d-flex">
        <h3>Movies list:</h3>
        <div class="ms_movies-bar d-flex ms_container">
            <div v-for="(movie, index) in store.movies" :key="index" class="ms_card-container card text-bg-dark me-4 w-50">
                <AppCard :movie="movie"/>
            </div>
        </div>
    </div>
    <div class="d-flex">
        <h3>Series list:</h3>
        <div class="ms_series-bar d-flex ms_container">
            <div v-for="(serie, index) in store.series" :key="index" class="ms_card-container card text-bg-dark">
                <AppCardSeries :serie="serie"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.ms_movies-bar {
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 30px;
    width: 100%;
}
.ms_series-bar {
    overflow-x: auto;
    overflow-y: hidden;
    margin-bottom: 30px;
    width: 100%;
}
.ms_container {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 30px;
    height: 500px;
}
.ms_card-container {
    min-width: 300px;
    color: black;
    margin-bottom: 30px;
    /* height: 100%; */
}

h3 {
    color: white;
}
</style>