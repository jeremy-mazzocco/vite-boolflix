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

      let myMovieURL = `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=${store.contentInput}`;
      let mySeriesURL = `https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&query=${store.contentInput}`;

      axios.get(myMovieURL)
        .then(reponseMovie => {
          store.dataMovies = reponseMovie.data.results;
          for (let i = 0; i < store.dataMovies.length; i++) {
            store.dataMovies[i].voteMovies = Math.ceil(((store.dataMovies[i].vote_average) / 2));
          }
        })
        .catch(err => {
          console.log(err);
        });

      axios.get(mySeriesURL)
        .then(reponseSerie => {
          store.dataSeries = reponseSerie.data.results;
          for (let j = 0; j < store.dataSeries.length; j++) {
            store.dataSeries[j].voteSeries = Math.ceil((store.dataSeries[j].vote_average) / 2);
          }
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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

header {
  background-color: black;
  height: 50px;
}

main {
  background-color: rgb(67, 67, 67);
  height: calc(100vh - 50px);
}
</style>
