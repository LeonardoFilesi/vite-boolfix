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
    apiClaim() {
      const params={
        api_key : this.store.key,
        query: "a"
      }
      axios.get(store.moviesURL,{params}).then((resp)=>{
        this.store.movies = resp.data.results
        console.log(resp.data.results)
        console.log("movies")
      });
      axios.get(store.seriesURL,{params}).then((resp)=>{
        this.store.series = resp.data.results
        console.log(resp.data.results)
        console.log("series")
      });
    }
  }
}
</script>

<template>
<AppHeader />
<AppSearchbar />
<AppMain />
<AppCard />
<AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss"
</style>
