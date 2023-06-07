<script>
import axios from "axios";
import { store } from "./store";
import AppHeader from "./components/AppHeader.vue";
import List from "./components/List.vue";

export default {
  components: {
    AppHeader,
    List
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getApiData() {

      let myMovieURL = `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=${store.contentInput}`

      axios.get(myMovieURL)
        .then(reponse => {
          store.dataMovies = reponse.data.results;
          console.log(store.dataMovies);
        })
        .catch(err => {
          console.log(err);
        })
    },
  },
  created() {
    this.getApiData();

  }
}


</script>

<template>
  <header>
    <AppHeader @newsearch="getApiData" />
  </header>
  <main>

    <List />
  </main>
</template>

<style scoped></style>
