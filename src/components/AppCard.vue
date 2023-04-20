<script>
import {store} from "../store";

export default {
    name: "AppCard",
    /* emits: ["search"], */
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="card text-bg-dark">
        <img src="" class="card-img" alt="">
        <div class="card-img-overlay">
        <h5 class="card-title">{{ movies.title }}</h5>
        <p class="card-text">{{ movies.original_title }}</p>
        <p class="card-text"><small>{{ movies.original_language }}</small></p>
        <p class="card-text"><small>{{ movies.vote_average }}</small></p>
  </div>
    </div>
</template>

<style scoped lang="scss">

</style>