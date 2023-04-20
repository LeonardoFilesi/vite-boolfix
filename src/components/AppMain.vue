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
    <div class="movies-bar d-flex container">
        <div v-for="(movie, index) in store.movies" :key="index">
            <AppCard :movie="movie"/>
        </div>
    </div>
    <div class="series-bar d-flex container">
        <div v-for="(serie, index) in store.series" :key="index">
            <AppCardSeries :serie="serie"/>
        </div>
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