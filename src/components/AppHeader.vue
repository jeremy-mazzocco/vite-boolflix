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
    <div class="container" id="flex-header">
        <h1>
            BoolFlix
        </h1>
        <div>
            <input type="text" v-model="store.contentInput">
            <button @click.prevent="$emit('newsearch')">Search</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#flex-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h1 {
    color: red;
    font-weight: lighter;
}
</style>