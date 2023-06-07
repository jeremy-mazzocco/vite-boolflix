<script>
import { store } from "../store";
import Card from './Card.vue';

export default {
    name: "List",
    components: {
        Card
    },
    data() {
        return {
            store,
        }
    }
}
</script>


<template>
    <div class="row">

        <Card v-for=" (movie, idx) in store.dataMovies" :details="movie" />
    </div>
</template>