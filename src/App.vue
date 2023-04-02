<!-- My Js -->
<script>
import { store } from './store';
import Title from './components/Title.vue';
import Search from './components/Search.vue';
import ShowList from './components/ShowList.vue';
import { createApp } from 'vue';
export default {
    components: {
        ShowList,
        Title,
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
        <header class="d-flex justify-content-between container rounded mt-4">
            <Title />
            <!-- Form per far digitare il film da cercare  -->
            <Search />
        </header>
        <main>
            <!-- Lista dei film e serie  -->
            <ShowList />
        </main>
</template>
<!-- My Scss -->
<style lang="scss" scoped>
@use './assets-styles/_partials/variable.scss' as *;
    header {
        background-color:$primary;
       }
    main{
        overflow-y: auto;
        background-color: #343E3D;
       }
</style>