<script>
import axios from 'axios';
import { store } from '../store';
export default {
    data() {
        return {
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
                    language: this.store.config.default_language
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
                    language: this.store.config.default_language
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
    <nav class="navbar bg-primary">
        <div class="container-fluid">
            <form @submit.prevent="search" class="d-flex" role="search" >
                <input class="form-control me-2" type="search" placeholder="Cerca una serie tv o un film" v-model="store.searchKey">
                <button type="submit" class="btn btn-secondary">Cerca</button>            
            </form>
        </div>
    </nav>
</template>
<style lang="scss" scoped>
</style>
