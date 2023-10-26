<script >
import { store } from "../store";

export default {
    name: "AppHeader",
    data() {
        return {
            store,
        }
    },
    emits: ['backToSearch'],
}
</script>

<template>
    <div class="button">
        <button v-if="store.dataMovies.length !== 0" @click.prevent="$emit('backToSearch')">
            Back to Search
        </button>
    </div>
</template>

<style lang="scss" scoped>
.button {
    display: flex;
    justify-content: center;
    margin: 2rem 0;

    button {
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
    }
}
</style>