<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next';
export default {
    components: {
        CountryFlag
    },
    data() {
        return {
            store
        }
    },
    computed: {
        flag() {
            return (element) => {
                switch (element) {
                    case 'en':
                        return 'gb';
                    case 'it':
                        return 'it';
                    default:
                        return element;
                }
            }
        }
    }
}

</script>
<template>
    <div v-if="store.moviesAndSeries.length">
        <!-- Ciclo V-for per stampare a schermo le info del film  -->
        <div v-for="movie in store.moviesAndSeries">
            <div v-if="movie.title">
                <h3>Hai cercato : <span>{{movie.title}}</span> .</h3>
                <ul>
                    <li>Il titolo originale del film è : {{ movie.original_title }}</li>
                    <li>La lingua originale del film è : <country-flag :country=flag(movie.original_language) size='small' /></li>
                    <li>Il voto della critica del film è : {{ movie.vote_average }}</li>
                </ul>  
            </div> 
            <div v-else-if="movie.name">
                <h3>Hai cercato : <span>{{movie.name}}</span> .</h3>
                <ul>
                    <li>Il titolo originale della serie è : {{ movie.original_name }}</li>
                    <li>La lingua originale della serie è : <country-flag :country=flag(movie.original_language) size='small' /></li>
                    <li>Il voto della critica della serie è : {{ movie.vote_average }}</li>
                </ul>  
            </div>                               
        </div>
        <!-- /Ciclo V-for per stampare a schermo le info del film  -->
    </div>
    <!-- Messaggio in caso di nessun risultato  -->
    <div v-else>
        <p>Nessun Risultato... prova a cercare qualcos'altro</p>
    </div>
    <!-- /Messaggio in caso di nessun risultato  -->
</template>
<style lang="scss" scoped>
div {
    span {
        color: pink;
    }

    ul {
        list-style: none;
    }
}
</style>