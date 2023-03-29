<!-- My Js -->
<script>
import axios from 'axios';
import { store } from './store';
export default {
    data() {
        return {
            store,
            movieUrl: 'https://api.themoviedb.org/3/search/movie?api_key=5c9194b00bb5ab97cca5858e87b81858',
            title: '',
            originalTitle: '',
            language:'' ,
            score: 0,
            movies: []
        }
    },
    methods: {
        searchMovies() {
            axios.get(this.movieUrl, {
                params: {
                    api_key: this.api_key,
                    query: this.title,
                    language:this.language
                },
            })
                .then(response => {
                    this.movies = response.data.results;
                })
        },
        flag(element){
            if(element==="en"){
                return console.log('Bandiera inglese')
            }
            else if (element==="it"){
                return console.log('Bandiera italiana')
            }
            else {
                console.log('Altro')
            }
        }
    },
    created() {
        this.searchMovies()
    }
}
</script>
<!-- My Html -->
<template>
    <!-- Form per far digitare il film da cercare  -->
    <form @submit.prevent="searchMovies">
        <input type="text" v-model="title">
        <button type="submit">Search</button>
    </form>
    <!-- /Form per far digitare il film da cercare  -->
    <div v-if="movies.length">
        <!-- Ciclo V-for per stampare a schermo le info del film  -->
        <div v-for="movie in movies">
            <h3>Il Titolo del film è : <span>{{title }}</span> .</h3>
            <ul>
                <li>Il titolo originale del film è : {{ movie.original_title }}</li>
                <li>La lingua originale del film è : {{flag(movie.original_language)}}</li>
                <li>Il voto della critica del film è : {{ movie.vote_average }}</li>
            </ul>
        </div>
        <!-- /Ciclo V-for per stampare a schermo le info del film  -->
    </div>
    <!-- Messaggio in caso di nessun risultato  -->
    <div v-else>
        <p>Nessun Risultato... prova a cercare qualcos'altro</p>
    </div>
    <!-- /Messaggio in caso di nessun risultato  -->
</template>
<!-- My Scss -->
<style lang="scss" scoped>
form {
    display: flex;
}
div{
    span{
        color: pink;
    }
    ul{
        list-style: none;
    }
}
</style>