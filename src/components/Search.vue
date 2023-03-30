<script>
import axios from 'axios';
import { store } from '../store';
export default{
    data(){
        return{
            store
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
                    this.store.moviesAndSeries = response.data.results,
                    this.searchTv()
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
                    response.data.results.forEach(element => {
                        this.store.moviesAndSeries.push(element)
                    });
                })
        },
        searchAll() {
            this.searchMovie();
        }
    }
}
</script>
<template>
    <!-- Form per far digitare il film da cercare  -->
    <form @submit.prevent="searchAll">
        <input type="text" v-model="store.searchKey">
        <button type="submit">Search</button>
    </form>
</template>
