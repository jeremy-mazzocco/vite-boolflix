<script >
import { store } from "../store";
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
    name: "CardMovies",
    props: {
        detailsmovies: Object,
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
}

</script>

<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img
                    :src="detailsmovies.poster_path ? `https://image.tmdb.org/t/p/w342${detailsmovies.poster_path}` : `${logoSrc}`">
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
                    <div v-if="detailsmovies.original_language === 'ch'">
                        <img :src="iconCh">
                    </div>
                    <div v-if="detailsmovies.original_language === 'fr'">
                        <img :src="iconFr">
                    </div>
                    <div v-if="detailsmovies.original_language === 'it'">
                        <img :src="iconIt">
                    </div>
                    <div v-if="detailsmovies.original_language === 'ja'">
                        <img :src="iconJa">
                    </div>
                    <div v-if="detailsmovies.original_language === 'pt'">
                        <img :src="iconPt">
                    </div>
                    <div v-if="detailsmovies.original_language === 'ru'">
                        <img :src="iconRu">
                    </div>
                    <div v-if="detailsmovies.original_language === 'sp'">
                        <img :src="iconSp">
                    </div>
                    <div v-if="detailsmovies.original_language === 'uk'">
                        <img :src="iconUk">
                    </div>
                    <div v-else>
                        <img :src="iconSrc">
                    </div>
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