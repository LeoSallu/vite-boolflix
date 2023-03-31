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
        <header class="d-flex justify-content-between">
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
.container{
    background-color: #343E3D;
    height: 100vh;
    header{
        background-color: red;
    }
}
</style>