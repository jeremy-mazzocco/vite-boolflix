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

      let myMovieURL = `${store.movieURL}${store.contentInput}`;
      let mySeriesURL = `${store.seriesURL}${store.contentInput}`;

      // runAxios(myMovieURL, store.dataMovies, 'voteMovies');
      // runAxios(mySeriesURL, store.dataSeries, 'voteSeries');


      axios.get(myMovieURL)
        .then(responseMovie => {
          store.dataMovies = responseMovie.data.results;
          for (let i = 0; i < store.dataMovies.length; i++) {
            store.dataMovies[i].voteMovies = Math.ceil(((store.dataMovies[i].vote_average) / 2));
          }
          console.log(store.dataMovies);
        })
        .catch(err => {
          console.log(err);
        });

      axios.get(mySeriesURL)
        .then(responseSerie => {
          store.dataSeries = responseSerie.data.results;
          for (let j = 0; j < store.dataSeries.length; j++) {
            store.dataSeries[j].voteSeries = Math.ceil((store.dataSeries[j].vote_average) / 2);
          }
          console.log(store.dataSeries);
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

// function runAxios(url, arr, voteName) {
//   axios.get(url)
//     .then(response => {
//       arr = response.data.results;
//       for (let i = 0; i < arr.length; i++) {
//         arr[i][voteName] = Math.ceil((arr[i].vote_average) / 2);
//       }
//       console.log(arr);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }


</script>

<template>
  <header>
    <AppHeader @newsearch="getApiData" />
  </header>
  <main>
    <List />
  </main>
</template>

<style lang="scss">
@use './components/styles/general.scss' as*;
</style>
