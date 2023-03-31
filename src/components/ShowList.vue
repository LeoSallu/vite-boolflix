<script>
import { store } from '../store';
import CardShow from './CardShow.vue';
export default {
    data() {
        return {
            store
        }
    },
    components:{
        CardShow
    }
}
</script>
<template>
    <!-- Lista degli show presi dal API  -->
    <div v-if="store.moviesAndSeries.length">
        <ul>
            <li v-for="show in store.moviesAndSeries">
                <CardShow :info="show" />
            </li>
        </ul>
    </div>
    <!-- Messaggio in caso di nessun risultato  -->
    <div v-else>
        <p>Nessun Risultato... prova a cercare qualcos'altro</p>
    </div>
</template>
<style lang="scss" scoped>
ul {
    list-style: none;
}
</style>