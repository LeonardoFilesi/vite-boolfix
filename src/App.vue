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
  /* mounted() {
    this.apiClaim();
  }, */
  methods: {
    performSearch() {
      this.apiClaim()
    },
    apiClaim() {
      const params={
        api_key : this.store.key,
        query: "a"
      }

      axios
      .get(`${this.store.moviesURL}`, {
        params: {
          api_key: this.store.key,
          query: this.store.searchKey
        }
        /* if(this.store.searchKey) { console.log(this.store.searchKey); params.search = this.store.searchKey;} */
      })
      .then((resp)=> {
        this.store.movies = resp.data.results
        console.log(this.store.movies)
      })
      axios.get(`${this.store.seriesURL}`, {
        params: {
          api_key: this.store.key,
          query: this.store.searchKey
        }
      }).then((resp)=> {
        this.store.series = resp.data.results
        console.log(this.store.series)
      })
    },
  /*   searchMovies: function(searchValue) {
            this.movies.forEach(movie => {
                if(contact.name.toLowerCase().includes(searchValue.toLowerCase())) {
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        }, */
  }
}
</script>

<template>
<AppHeader @search="performSearch"/>
<!-- <AppSearchbar /> -->
<AppMain />
<!-- <AppCard :movie="in movie" /> -->
<AppFooter />
</template>

<style lang="scss">
@use "./style/general.scss"
</style>
