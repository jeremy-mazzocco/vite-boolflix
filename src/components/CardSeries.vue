<script>
import { store } from '../store';

export default {
    name: "CardSeries",
    props: {
        detailsseries: Object,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        starRating() {
            let stars = '';
            for (let i = 0; i < this.detailsseries.voteSeries; i++) {
                stars += '<font-awesome-icon icon="fa-solid fa-star" /> ';
            }
            return stars;
        }
    }
}

</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="`https://image.tmdb.org/t/p/w342${detailsseries.poster_path}`" alt="#">
            </div>
            <div class="flip-card-back">
                <div>
                    {{ detailsseries.original_name }}
                </div>
                <div>
                    {{ detailsseries.name }}
                </div>
                <!-- flags -->
                <div class="flag-container">
                    <div v-if="detailsseries.original_language === 'it'">
                        <div class="flag italy"></div>
                    </div>
                    <div v-if="detailsseries.original_language === 'cn'">
                        <div class="flag china">
                            <div class="china__star"></div>
                            <div class="china__small_star"></div>
                            <div class="china__small_star"></div>
                            <div class="china__small_star"></div>
                        <div class="china__small_star"></div>
                    </div>
                </div>
                <div v-if="detailsseries.original_language === 'es'">
                    <div class="flag spain">
                        <img src="https://imgur.com/g1E7616.png" width="73" alt="" />
                    </div>
                </div>
                <div v-if="detailsseries.original_language === 'fr'">
                    <div class="flag france"></div>
                </div>
                <div v-if="detailsseries.original_language === 'ja'">
                    <div class="flag japan"></div>
                </div>
                <div v-if="detailsseries.original_language === 'ru'">
                    <div class="flag russia"></div>
                </div>
                <div v-if="detailsseries.original_language === 'en'">
                    EN
                </div>
            </div>
            <!-- stars -->
            <div class="stars">
                {{ starRating() }}
                </div>
                <!-- <div class="star">
                            <div v-if="detailsseries.voteSeries === 0">

                            </div>
                            <div v-if="detailsseries.voteSeries === 1">
                                <font-awesome-icon icon="fa-solid fa-star" />
                            </div>
                            <div v-if="detailsseries.voteSeries === 2">
                                <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" />
                            </div>
                            <div v-if="detailsseries.voteSeries === 3">
                                <font-awesome-icon icon="fa-solid fa-star" /> <font-awesome-icon icon="fa-solid fa-star" />
                                <font-awesome-icon icon="fa-solid fa-star" />
                            </div>
                            <div v-if="detailsseries.voteSeries === 4">
                                <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                                    icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                                    icon="fa-solid fa-star" />
                            </div>
                            <div v-if="detailsseries.voteSeries === 5">
                                <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                                    icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
                                    icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" />
                            </div>
                        </div> -->
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