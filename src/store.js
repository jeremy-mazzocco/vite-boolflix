import { reactive } from "vue";

export const store = reactive({
    movieURL: 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    seriesURL: 'https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&query=',
    contentInput: '',
    dataMovies: [],
    dataSeries: [],
})