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
            <div class="col-3 card-group mt-3" v-for="show in store.moviesAndSeries">
                <CardShow :info="show" />
            </div>
        </div>
        <!-- Messaggio in caso di nessun risultato  -->
        <div v-else class="d-flex mt-5">
            <div class="alert alert-warning text-center" role="alert">
                Nessun risultato... prova a cercare di nuovo!
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
</style>