<script>
import {store} from "../store";

export default {
    props: {
        movie :Object
    },  
    name: "AppCard",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
        <img src="" class="card-img" alt="">
        <div class="card-img-overlay">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.original_title }}</p>
            <p class="card-text"><small>{{ movie.original_language }}</small></p>
            <p class="card-text"><small>{{ movie.vote_average }}</small></p>
        </div>
</template>

<style scoped lang="scss">

</style>