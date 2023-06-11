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
    <div class="container">
        <h3 v-if="store.dataMovies.length !== 0">
            Movie
        </h3>
        <div class="row">
            <CardMovies v-for=" (movie, idx) in store.dataMovies" :detailsmovies="movie" />
        </div>
    </div>
    <div class="container">
        <h3 v-if="store.dataSeries.length !== 0">
            TV Series
        </h3>
        <div class="row">
            <CardSeries v-for=" (serie, idx) in store.dataSeries" :detailsseries="serie" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px 0px;
}
</style>