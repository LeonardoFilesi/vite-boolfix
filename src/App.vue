<script>
import AppHeader from "./components/AppHeader.vue";
import AppSearchbar from "./components/AppSearchbar.vue";
import AppMain from "./components/AppMain.vue";
import AppCard from "./components/AppCard.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";
import { store } from "../src/store";

export default {
  components: {
    AppHeader,
    AppSearchbar,
    AppMain,
    AppCard,
    AppFooter,
  },
  data() {
    return {
      store
    }
  },
  mounted() {
    this.apiClaim();
  },
  methods: {
    performSearch() {
      this.apiClaim()
    },
    apiClaim() {
      const params={
        api_key : this.store.key,
        query: "a"
      };
    /* axios.get(store.moviesURL,{params}).then((resp)=>{
        this.store.movies = resp.data.results
        console.log(resp.data.results)
        console.log("movies")
        }); */
      /* CORREZIONE */
      axios.get(`${this.store.moviesURL}/search/movie`, {
        params: {
          api_key: this.store.key,
          query: this.store.searchKey
        }
      }).then((resp)=> {
          console.log(resp);
      })

     /*  axios.get(store.seriesURL,{params}).then((resp)=>{
        this.store.series = resp.data.results
        console.log(resp.data.results)
        console.log("series")
      }); */
      /* CORREZIONE */
      axios.get(`${this.store.seriesURL}/search/tv`, {
        params: {
          api_key: this.store.key,
          query: this.store.searchKey
        }
      }).then((resp)=> {
        console.log(resp);
      })
    } /* apiClaim END */
  }
}
</script>

<template>
<AppHeader @search="performSearch"/>
<AppSearchbar />
<AppMain />
<!-- <AppCard :movie="in movie" /> -->
<AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss"
</style>
