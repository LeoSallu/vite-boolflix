<!-- My Js -->
<script>
import { store } from './store';
import Search from './components/Search.vue';
import ShowList from './components/ShowList.vue';
import { createApp } from 'vue';
export default {
    components: {
        // MovieList,
        ShowList,
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
    <!-- Lista dei film e serie  -->
    <ShowList />
</template>
<!-- My Scss -->
<style lang="scss" scoped>
form {
    display: flex;
}

ul {
    list-style: none;
}
</style>