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
    <input type="text" v-model="store.contentInput">
    <button @click.prevent="$emit('newsearch')">Search</button>
</template>

<style scoped></style>