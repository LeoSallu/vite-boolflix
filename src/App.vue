<!-- My Js -->
<script>
import axios from 'axios';
import { store } from './store';
import MovieList from './components/MovieList.vue';
import { createApp } from 'vue';
export default {
    components: {
        MovieList
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        searchMovie() {
            axios.get(this.store.config.movieUrl, {
                params: {
                    api_key: this.store.config.api_key,
                    query: this.store.searchKey,
                    language:this.store.config.default_language
                }
            })
                .then((response) => {
                    this.store.moviesAndSeries = response.data.results
                })
        },
        searchTv() {
            axios.get(this.store.config.tvUrl, {
                params: {
                    api_key: this.store.config.api_key,
                    query: this.store.searchKey,
                    language:this.store.config.default_language
                }
            })
                .then((response) => {
                    this.store.moviesAndSeries = response.data.results
                })
        },
        searchAll() {
            this.searchMovie();
            this.searchTv();
        }
    }
}

</script>
<!-- My Html -->
<template>
    <!-- Form per far digitare il film da cercare  -->
    <form @submit.prevent="searchMovie">
        <input type="text" v-model="store.searchKey">
        <button type="submit">Search</button>
    </form>
    <MovieList />
</template>
<!-- My Scss -->
<style lang="scss" scoped>
form {
    display: flex;
}
</style>