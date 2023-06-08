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
    }
}

</script>

<template>
    <div>
        <img :src="`https://image.tmdb.org/t/p/w300${detailsseries.poster_path}`" alt="">
    </div>
    <div>
        Titolo originale: {{ detailsseries.original_name }}
    </div>
    <div>
        Titolo: {{ detailsseries.name }}
    </div>

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


    <div v-if="detailsseries.voteSeries === 0">
        Zero stelle
    </div>
    <div v-if="detailsseries.voteSeries === 1">
        <font-awesome-icon icon="fa-solid fa-star" />
    </div>
    <div v-if="detailsseries.voteSeries === 2">
        <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" />
    </div>
    <div v-if="detailsseries.voteSeries === 3">
        <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
            icon="fa-solid fa-star" />
    </div>
    <div v-if="detailsseries.voteSeries === 4">
        <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
            icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" />
    </div>
    <div v-if="detailsseries.voteSeries === 5">
        <font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
            icon="fa-solid fa-star" /><font-awesome-icon icon="fa-solid fa-star" /><font-awesome-icon
            icon="fa-solid fa-star" />
    </div>
</template>

<style scoped>
.flag {
    position: relative;
    width: 30px;
    height: 20px;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

.italy {
    background: linear-gradient(to right,
            #009343 33%,
            #fff 33%,
            #fff 66%,
            #cf2734 0);
}

.china {
    background: #dd2d26;
}

.china__star,
.china__small_star {
    position: absolute;
    margin: 20px;
    width: 50px;
    height: 50px;
    background-color: #fddd00;
    clip-path: polygon(50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%);
}

.china__small_star {
    width: 20px;
    height: 20px;
    margin: 0;
}

.china__small_star:nth-child(2) {
    left: 82px;
    top: 10px;
    transform: rotate(30deg);
}

.china__small_star:nth-child(3) {
    left: 100px;
    top: 27px;
    transform: rotate(45deg);
}

.china__small_star:nth-child(4) {
    left: 102px;
    top: 55px;
}

.china__small_star:nth-child(5) {
    left: 82px;
    top: 75px;
    transform: rotate(30deg);
}

.spain {
    background: linear-gradient(#ad1519 25%, #fabd00 25%, #fabd00 75%, #ad1519 0);
}

.spain>img {
    position: absolute;
    left: 21%;
    top: 30%;
}

.france {
    background: linear-gradient(to right,
            #192f8e 33%,
            #fff 33%,
            #fff 67%,
            #e01414 0);
}

.japan {
    background: radial-gradient(circle at 50%, #bc002d 35%, #fff 0);
}

.russia {
    background: linear-gradient(#fff 33%, #0136a8 33%, #0136a8 66%, #d72718 0);
}</style>