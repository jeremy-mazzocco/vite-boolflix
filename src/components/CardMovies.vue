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
                <img :src="`https://image.tmdb.org/t/p/w342${detailsmovies.poster_path}`" alt="#">
            </div>
            <div class="flip-card-back">
                <h2>
                    {{ detailsmovies.original_title }}
                </h2>
                <div class="title">
                    {{ detailsmovies.title }}
                </div>
                <!-- flags -->
                <div class="flag-container">
                    <div v-if="detailsmovies.original_language === 'it'">
                        <div class="flag italy"></div>
                    </div>
                    <div v-if="detailsmovies.original_language === 'cn'">
                        <div class="flag china">
                            <div class="china__star"></div>
                            <div class="china__small_star"></div>
                            <div class="china__small_star"></div>
                            <div class="china__small_star"></div>
                            <div class="china__small_star"></div>
                        </div>
                    </div>
                    <div v-if="detailsmovies.original_language === 'es'">
                        <div class="flag spain">
                            <img src="https://imgur.com/g1E7616.png" width="73" alt="" />
                        </div>
                    </div>
                    <div v-if="detailsmovies.original_language === 'fr'">
                        <div class="flag france"></div>
                    </div>
                    <div v-if="detailsmovies.original_language === 'ja'">
                        <div class="flag japan"></div>
                    </div>
                    <div v-if="detailsmovies.original_language === 'ru'">
                        <div class="flag russia"></div>
                    </div>
                </div>
                <!-- stars -->
                <div class="star">
                    <div v-if="detailsmovies.voteMovies === 0">

                    </div>
                    <div v-if="detailsmovies.voteMovies === 1">
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </div>
                    <div v-if="detailsmovies.voteMovies === 2">
                        <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" />
                    </div>
                    <div v-if="detailsmovies.voteMovies === 3">
                        <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                    </div>
                    <div v-if="detailsmovies.voteMovies === 4">
                        <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                            icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                            icon="fa-solid fa-star" />
                    </div>
                    <div v-if="detailsmovies.voteMovies === 5">
                        <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                            icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                            icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './styles/flags.scss' as*;
@use './styles/flip-card.scss' as*;

h2,
.title,
.flag-container {
    margin-bottom: 12px;
}
</style>