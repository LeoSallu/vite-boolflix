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
    <div class="container justify-content-center">
        <div v-if="store.moviesAndSeries.length" class="row">
            <div class="col-12 col-md-6 col-lg-3 card-group mt-3" v-for="show in store.moviesAndSeries">
                <CardShow :info="show" />
            </div>
        </div>
        <!-- Messaggio in caso di nessun risultato  -->
        <div v-else class="d-flex justify-content-center mt-5 row">
            <div class="col-6 alert alert-warning text-center" role="alert">
                Nessun risultato o non hai ancora cercato... prova a cercare qualcosa da vedere!
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets-styles/_partials/variable.scss' as *;
</style>