import { reactive } from "vue";

export const store = reactive({
    movies:[],
    series:[],
    moviesURL:"https://api.themoviedb.org/3/search/movie",
    seriesURL:"https://api.themoviedb.org/3/search/tv",
    key:"7ad59fd8d79eee467353dc1f54773f2c",
    loading: false,
    searchKey: "",
})