<script>
import {store} from "../store";

export default {
    name: "AppCardSeries",
    data() {
        return {
            store
        }
    },
    props: {
        serie :Object
    }
}
</script>

<template>
    <div class="card text-bg-dark">
        <img :src="'https://image.tmdb.org/t/p/w342' + serie.poster_path" class="card-img" alt="">
        <div class="card-img-overlay">
        <h5 class="card-title">{{ serie.name }}</h5>
        <p class="card-text">{{ serie.original_name }}</p>
        <p class="card-text"><small>{{ serie.original_language }}</small></p>
        <p class="card-text"><small>{{ serie.vote_average }}</small></p>
  </div>
    </div>
</template>

<style scoped lang="scss">

</style>