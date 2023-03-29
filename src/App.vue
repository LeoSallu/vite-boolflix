<!-- My Js -->
<script>
import axios from 'axios';
import { store } from './store';
export default {
    data() {
        return {
            store,
            url: 'https://api.themoviedb.org/3/search/movie?api_key=5c9194b00bb5ab97cca5858e87b81858',
            title: '',
            originalTitle: '',
            language: '',
            score: 0,
            movies: []
        }
    },
    methods: {
        searchMovies() {
            axios.get(this.url, {
                params: {
                    api_key: this.api_key,
                    query: this.title,
                    language:this.language
                },
            })
                .then(response => {
                    this.movies = response.data.results;
                })
        }
    },
    created() {
    }
}
</script>
<!-- My Html -->
<template>
    <form @submit.prevent="searchMovies">
        <input type="text" v-model="title">
        <button type="submit">Search</button>
    </form>
    <div v-if="movies.length">
        <p>{{ movies[0].original_title }}</p>
    </div>
    <div v-else>
        <p>Nessun Risultato</p>
        <p>Prova a cercare quaclos'altro</p>
    </div>
</template>
<!-- My Scss -->
<style lang="scss" scoped>
form {
    display: flex;
}
</style>