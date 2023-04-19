import { reactive } from "vue";

export const store = reactive({
    movies:[],
    series:[],
    moviesURL:"https://api.themoviedb.org/3/search/movie",
    seriesURL:"https://api.themoviedb.org/3/search/tv",
    key:"PMAK-6440058d919a6d310767cdc8-ab73e77a5272838c1b10181103fa415f3e"
})