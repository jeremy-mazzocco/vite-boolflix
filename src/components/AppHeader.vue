<script >
import { store } from "../store";

export default {
    name: "AppHeader",
    components: {

    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <h3 v-if="store.dataMovies.length !== 0">
        Back to search
    </h3>
</template>

<style lang="scss" scoped>

h3 {
    color: white;
}

</style>