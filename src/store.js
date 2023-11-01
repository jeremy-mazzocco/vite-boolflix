import { reactive } from "vue";

export const store = reactive({
    movieURL: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    seriesURL: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    contentInput: '',
    noPoster: 'no poster',
    dataMovies: [],
    dataSeries: [],
    flags: [
        {
            nation: 'it',
            img: './src/assets/italy.png'
        },
        {
            nation: 'cn',
            img: './src/assets/china.png'
        },
        {
            nation: 'fr',
            img: './src/assets/france.png'
        },
        {
            nation: 'ja',
            img: './src/assets/japan.png'
        },
        {
            nation: 'ru',
            img: './src/assets/russia.png'
        },
        {
            nation: 'es',
            img: './src/assets/spain.png'
        },
        {
            nation: 'en',
            img: './src/assets/united-kingdom.png'
        },
        {
            nation: 'pt',
            img: './src/assets/portugal.png'
        }
    ],
    stars: [
        {
            id: 0,
            content: "\u2606 \u2606 \u2606 \u2606 \u2606"
        },
        {
            id: 1,
            content: "\u2605 \u2606 \u2606 \u2606 \u2606"
        },
        {
            id: 2,
            content: "\u2605 \u2605 \u2606 \u2606 \u2606"
        },
        {
            id: 3,
            content: "\u2605 \u2605 \u2605 \u2606 \u2606"
        },
        {
            id: 4,
            content: "\u2605 \u2605 \u2605 \u2605 \u2606"
        },
        {
            id: 5,
            content: "\u2605 \u2605 \u2605 \u2605 \u2605"
        }
    ]
})