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
      // runAxios(myMovieURL, store.dataMovies, 'voteMovies');
      // runAxios(mySeriesURL, store.dataSeries, 'voteSeries');

      let myMovieURL = `${store.movieURL}${store.contentInput}`;
      let mySeriesURL = `${store.seriesURL}${store.contentInput}`;

      // Movies
      axios.get(myMovieURL)
        .then(responseMovie => {

          // put API in store.js
          store.dataMovies = responseMovie.data.results;
          store.dataMovies.forEach(movie => {

            // clean vote and put in store.js
            movie.voteMovies = Math.ceil(((movie.vote_average) / 2));

            // asign flags
            store.flags.forEach(flag => {
              if (flag.nation === movie.original_language) {
                movie.flag = flag.img;
              }
            });

            // asign stars 
            store.stars.forEach(star => {
              if (star.id === movie.voteMovies) {
                movie.stars = star.content;
              }
            });
          });
          console.log(this.store.dataMovies);

        })
        .catch(err => {
          console.log(err);
        });

      // TV Series
      axios.get(mySeriesURL)
        .then(response => {

          // put API in store.js
          store.dataSeries = response.data.results;
          store.dataSeries.forEach(serie => {

            // clean vote and put in store.js
            serie.voteSerie = Math.ceil(((serie.vote_average) / 2));

            // asign flags
            store.flags.forEach(flag => {
              if (flag.nation === serie.original_language) {
                serie.flag = flag.img;
              }
            });

            // asign stars 
            store.stars.forEach(star => {
              if (star.id === serie.voteSerie) {
                serie.stars = star.content;
              }
            });
          });
          console.log(this.store.dataSeries);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getApiData();
  }
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <List @newsearch="getApiData" />
  </main>
</template>

<style lang="scss">
@use './components/styles/general.scss' as*;
</style>
