<script>
import { faBuildingFlag } from '@fortawesome/free-solid-svg-icons';
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
                <img :src="`https://image.tmdb.org/t/p/w342${detailsseries.poster_path}`" :alt="store.noPoster">
            </div>
            <div class="flip-card-back">
                <!-- titles -->
                <div>
                    <div>
                        {{ detailsseries.original_name }}
                    </div>
                    <div v-if="detailsmovies.original_title !== detailsmovies.title">
                        {{ detailsseries.name }}
                    </div>
                </div>
                <!-- flags -->
                <div class="flag-container">
                    <img :src="detailsseries.flag">
                </div>
                <div class="stars">
                    {{ detailsseries.stars }}
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
    margin-top: 12px;

    img {
        width: 20px;
        height: 20px;
    }
}
</style>