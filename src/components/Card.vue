<script >
import { store } from "../store";

export default {
    name: "Card",
    props: {
        details: Object,
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
        Titolo originale: {{ details.original_title }}
    </div>
    <div>
        Titolo: {{ details.title }}
    </div>
    <div>
        Lingua: {{ details.original_language }}
    </div>
    <div>
        Voto: {{ details.vote_average }}
    </div>
</template>

<style scoped></style>