<script>
import { store } from '../store';
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
    },
    emits: ['newSearch'],
}
</script>

<template>
    <div class="container">

        <h2 v-if="store.dataMovies.length !== 0">
            Movdddddddddies
        </h2>

        <!-- Jumbotron -->
        <div v-else class="container-logo">
            <div class="logo">
                <img src="../../src/assets/Netflix-logo.png" alt="logo">
            </div>
            <h2>Search your favorite Movie and TV series</h2>
            <div class="search-bar">
                <div>
                    <input v-on:keyup.enter="$emit('newSearch')" type="text" v-model="store.contentInput">
                    <button @click.prevent="$emit('newSearch')">Search</button>
                </div>
            </div>
        </div>
        <div class="row">
            <CardMovies v-for=" (movie, idx) in store.dataMovies" :detailsmovies="movie" :key="idx" />
        </div>
    </div>
    <div class="container">

        <h2 v-if="store.dataSeries.length !== 0">
            TV Series
        </h2>

        <div class="row">
            <CardSeries v-for=" (serie, idx) in store.dataSeries" :detailsseries="serie" :key="idx" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {

    h2 {
        color: white;
        text-align: center;
        font-size: 3rem;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .row {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 1rem 1rem;
        margin-bottom: 6rem;
    }
}

.container-logo {
    width: 50%;
    margin: 5% auto;

    .logo {
        margin-top: -7rem;
        margin-bottom: -4rem;
    }

    h2 {
        color: white;
        text-align: center;
        font-size: 3rem;
    }

    .search-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;

        input {
            margin-right: 1rem;
            padding: 0.5rem 1rem;
        }
    }
}

// Responsive tablet
@media (max-width: 820px) {
    .container-logo {

        width: 90%;

        margin-top: 11rem;
        margin-bottom: 4rem;

        h2 {
            font-size: 3rem;
            margin-bottom: 6rem;
        }
    }
}

// Responsive mobile
@media (max-width: 480px) {
    .container-logo {

        width: 90%;
n
        h2 {
            font-size: 2rem;
        }
    }
}
</style>