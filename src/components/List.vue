<script>
import { store } from "../store";
import CardMovies from './CardMovies.vue';
import CardSeries from './CardSeries.vue';

export default {
    name: "List",
    components: {
        CardMovies,
        CardSeries
    },
    data() {
        return {
            store,
        }
    }
}
</script>


<template>
    <h3>
        Movie
    </h3>
    <div class="row">
        <CardMovies v-for=" (movie, idx) in store.dataMovies" :detailsmovies="movie" />
    </div>
    <h3>
        TV Series
    </h3>
    <div class="row">
        <CardSeries v-for=" (serie, idx) in store.dataSeries" :detailsseries="serie" />
    </div>
</template>