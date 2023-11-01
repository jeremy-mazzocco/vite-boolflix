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
                stars += `<font-awesome-icon icon="fa-solid fa-star" />`;
            }
            return stars;
        },
        findFlag() {
            let lang = '';
            for (let j = 0; j < store.flags.length; j++) {
                if (store.flags[j].nation === this.detailsseries.original_language) {
                    lang = store.flags[j].html;
                }
            }
            return lang;
        }
    }
}
</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img
                    :src="detailsseries.poster_path ? `https://image.tmdb.org/t/p/w342${detailsseries.poster_path}` : '../src/assets/Netflix-logo.png'">
            </div>
            <div class="flip-card-back">

                <!-- titles -->
                <div>
                    <h3>
                        {{ detailsseries.original_name }}
                    </h3>
                    <div v-if="detailsseries.original_title !== detailsseries.title">
                        {{ detailsseries.name }}
                    </div>
                </div>

                <!-- flags -->
                <div class="flag-container">
                    <img :src="detailsseries.flag ? `${detailsseries.flag}` : '../src/assets/Netflix-icon.png'">
                </div>

                <!-- stars -->
                <div class="stars">
                    {{ detailsseries.stars }}
                </div>

                <div class="description">
                    {{ detailsseries.overview }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './styles/flip-card.scss' as*;
</style>