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
                <img
                    :src="detailsmovies.poster_path ? `https://image.tmdb.org/t/p/w342${detailsmovies.poster_path}` : '../src/assets/Netflix-logo.png'">
            </div>
            <div class="flip-card-back">

                <!-- titles -->
                <div>
                    <h3>
                        {{ detailsmovies.original_title }}
                    </h3>
                    <div class="title" v-if="detailsmovies.original_title !== detailsmovies.title">
                        {{ detailsmovies.title }}
                    </div>
                </div>

                <!-- flags -->
                <div class="flag-container">
                    <img :src="detailsmovies.flag">
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
</style>