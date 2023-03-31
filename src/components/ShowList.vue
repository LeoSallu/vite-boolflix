<script>
import { store } from '../store';
import CardShow from './CardShow.vue';
export default {
    data() {
        return {
            store
        }
    },
    components: {
        CardShow
    }
}
</script>
<template>
    <!-- Lista degli show presi dal API  -->
    <div class="container">
        <div v-if="store.moviesAndSeries.length">
            <div class="card" style="width: 18rem;" v-for="show in store.moviesAndSeries">
                <CardShow :info="show" />
            </div>
        </div>
        <!-- Messaggio in caso di nessun risultato  -->
        <div v-else class="d-flex justify-content-center mt-5">
            <div class="alert alert-warning w-25 text-center" role="alert">
                Nessun risultato... prova a cercare di nuovo!
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
ul {
    list-style: none;
}
</style>