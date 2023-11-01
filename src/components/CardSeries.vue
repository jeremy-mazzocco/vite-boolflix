<script>
import { store } from '../store';
import logo from "../assets/Netflix-logo.png";
import icon from "../assets/Netflix-icon.png";
import ch from "../assets/china.png";
import fr from "../assets/france.png";
import it from "../assets/italy.png";
import ja from "../assets/japan.png";
import pt from "../assets/portugal.png";
import ru from "../assets/russia.png";
import sp from "../assets/spain.png";
import uk from "../assets/united-kingdom.png";

export default {
    name: "CardSeries",
    props: {
        detailsseries: Object,
    },
    data() {
        return {
            store,
            logoSrc: logo,
            iconSrc: icon,
            iconCh: ch,
            iconFr: fr,
            iconIt: it,
            iconJa: ja,
            iconPt: pt,
            iconRu: ru,
            iconSp: sp,
            iconUk: uk,
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
                    :src="detailsseries.poster_path ? `https://image.tmdb.org/t/p/w342${detailsseries.poster_path}` : `${logoSrc}`">
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
                    <div v-if="detailsseries.original_language === 'ch'">
                        <img :src="iconCh">
                    </div>
                    <div v-else-if="detailsseries.original_language === 'fr'">
                        <img :src="iconFr">
                    </div>
                    <div v-else-if="detailsseries.original_language === 'it'">
                        <img :src="iconIt">
                    </div>
                    <div v-else-if="detailsseries.original_language === 'ja'">
                        <img :src="iconJa">
                    </div>
                    <div v-else-if="detailsseries.original_language === 'pt'">
                        <img :src="iconPt">
                    </div>
                    <div v-else-if="detailsseries.original_language === 'ru'">
                        <img :src="iconRu">
                    </div>
                    <div v-else-if="detailsseries.original_language === 'sp'">
                        <img :src="iconSp">
                    </div>
                    <div v-else-if="detailsseries.original_language === 'uk'">
                        <img :src="iconUk">
                    </div>
                    <div v-else>
                        <img :src="iconSrc">
                    </div>
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