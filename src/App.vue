<script>
import AppHeader from "./components/AppHeader.vue";
import AppSearchbar from "./components/AppSearchbar.vue";
import AppMain from "./components/AppMain.vue";
import AppCard from "./components/AppCard.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";

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

    }
  },
  methods: {

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

<style scoped lang="scss">
@use "./style/general.scss"
</style>
