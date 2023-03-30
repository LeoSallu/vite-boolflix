import {reactive} from 'vue'
export const store = reactive({
    searchKey:'',
    moviesAndSeries: [],
    config:{
        movieUrl: 'https://api.themoviedb.org/3/search/movie',
        tvUrl:'https://api.themoviedb.org/3/search/tv',
        api_key:'5c9194b00bb5ab97cca5858e87b81858',
        default_language:'it-IT'
    },
    img_url:'https://image.tmdb.org/t/p/w342'
})