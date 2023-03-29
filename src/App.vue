<!-- My Js -->
<script>
import axios from 'axios';
import { store } from './store';
export default {
    data() {
        return {
            store,
            title: '',
            originalTitle: '',
            language: '',
            score: 0
        }
    },
    created() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=5c9194b00bb5ab97cca5858e87b81858&query=ritorno+al+futuro')
                .then((response) => {
                    this.title = response.data;
                    console.log(response)
                })
    }
}
</script>
<!-- My Html -->
<template>
    <form>
        <input type="text">
        <input type="button" value="Search">
    </form>
</template>
<!-- My Scss -->
<style lang="scss" scoped>
form {
    display: flex;
}
</style>