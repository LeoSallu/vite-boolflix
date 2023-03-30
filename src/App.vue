<!-- My Js -->
<script>
import axios from 'axios';
import { store } from './store';
import MovieList from './components/MovieList.vue';
export default {
    components:{
        MovieList
    },
    data() {
        return {
            store,
            movieUrl: 'https://api.themoviedb.org/3/search/movie?api_key=5c9194b00bb5ab97cca5858e87b81858',
            tvUrl:'https://api.themoviedb.org/3/search/tv?api_key=5c9194b00bb5ab97cca5858e87b81858'          
        }
    },
    methods: {
        search(){
            axios.get(this.store.config.movieUrl,{
                params:{
                    api_key:this.store.config.api_key,
                    query:this.store.searchKey
                }
            })
            .then((response)=>{
                this.store.moviesAndSeries =response.data.results
            }),
            axios.get(this.store.config.tvUrl,{
                params:{
                    api_key:this.store.config.api_key,
                    query:this.store.searchKey
                }
            })
            .then((response)=>{
                this.store.moviesAndSeries =response.data.results
            })
        },
        flag(element){
            if(element==="en"){
                return './public/img/uk_flag.jpeg'
            }
            else if (element==="it"){
                return './public/img/ita_flag.jpeg'
            }
            else {
                console.log('Altro')
            }
        }
    },
    created() {
        this.searchMovies()
        this.searchTv()
    }
}
</script>
<!-- My Html -->
<template>
    <!-- Form per far digitare il film da cercare  -->
    <form @submit.prevent="searchMovies">
        <input type="text" v-model="title">
        <button type="submit">Search</button>
    </form>
    <MovieList />
</template>
<!-- My Scss -->
<style lang="scss" scoped>
form {
    display: flex;
}
div{
    span{
        color: pink;
    }
    ul{
        list-style: none;
    }
    #img{
        width: 150px;
        height: 150px;
        img{
            width: 100%;
            display: block;
        }
    }
}
</style>