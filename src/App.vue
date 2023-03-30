<!-- My Js -->
<script>
import { store } from './store';
import Search from './components/Search.vue';
import MovieList from './components/MovieList.vue';
import { createApp } from 'vue';
export default {
    components: {
        MovieList,
        Search
    },
    data() {
        return {
            store,
        }
    }
}
</script>
<!-- My Html -->
<template>
    <!-- Form per far digitare il film da cercare  -->
    <Search />
    <MovieList />
</template>
<!-- My Scss -->
<style lang="scss" scoped>
form {
    display: flex;
}
</style>