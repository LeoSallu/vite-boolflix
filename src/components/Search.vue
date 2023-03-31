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
        // Chiamata al API Generica
        search() {
            axios.get(this.store.config.movieUrl, {
                params: {
                    api_key: this.store.config.api_key,
                    query: this.store.searchKey,
                    language:this.store.config.default_language
                }
            })
                .then((response) => {
                    this.store.moviesAndSeries = response.data.results,
                    this.tvApi()
                })
        },
        tvApi() {
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
        }
    }
}
</script>
<template>
    <!-- Form per far digitare il film da cercare  -->
    <form @submit.prevent="search">
        <input type="text" v-model="store.searchKey">
        <button type="submit">Search</button>
    </form>
</template>
<style lang="scss" scoped>
    form {
    display: flex;
}
</style>
