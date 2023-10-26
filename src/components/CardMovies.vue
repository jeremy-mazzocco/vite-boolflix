<script >
import { store } from "../store";

export default {
    name: "CardMovies",
    props: {
        detailsmovies: Object,
    },
    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="`https://image.tmdb.org/t/p/w342${detailsmovies.poster_path}`" :alt="store.noPoster">
            </div>
            <div class="flip-card-back">
                <!-- titles -->
                <div>
                    <h2>
                        {{ detailsmovies.original_title }}
                    </h2>
                    <div class="title" v-if="detailsmovies.original_title !== detailsmovies.title">
                        {{ detailsmovies.title }}
                    </div>
                </div>
                <!-- flags -->
                <div class="flag-container">
                    <img :src="detailsmovies.flag" alt="none">
                </div>
                <!-- stars -->
                <div class="star">
                    {{ detailsmovies.stars }}
                </div>
                <div class="description">
                    {{ detailsmovies.overview }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './styles/flip-card.scss' as*;

h2,
.title,
.flag-container {
    margin-bottom: 12px;

    img {
        width: 20px;
        height: 20px;
    }
}

.description {
    width: 70%;
    margin: 50px auto;
}
</style>