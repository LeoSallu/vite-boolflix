<script>
import { store } from '../store';
import CountryFlag from 'vue-country-flag-next';
export default {
    components: {
        CountryFlag
    },
    data() {
        return {
            store
        }
    },
    props: {
        info: Object
    },
    methods: {
        // Funzione per arrotondare il voto a 5 
        vote(element) {
            return Math.ceil(element / 2);
        },
        // Funzione per ottenere la path del img dal api e comunicarla al template 
        getPath(element) {
            if(element){
                return element = store.img_url + element;
            }
            else{
                return 'https://www.ecreativeim.com/blog/wp-content/uploads/2011/05/image-not-found.jpg'
            }
        }
    },
    computed: {
        // Funzione per correggere le path delle flag 
        flag() {
            return (element) => {
                switch (element) {
                    case 'en':
                        return 'gb';
                    case 'ja':
                        return 'jp';
                    case 'he':
                        return 'il'
                    case 'ko':
                        return 'kr'
                    default:
                        return element;
                }
            }
        }
    }
}
</script>
<template>
    <div class="card flip-card my-2">
        <div class="flip-card-inner">
            <img class="card-img-top flip-card-front" :src=getPath(info.poster_path) :alt="info.title + '.png'">
            <div class="card-body flip-card-back">
                <h5 class="card-title"><span>{{ info.title || info.name }}</span></h5>
                <div class="card-text text-light">
                    <h6>Il titolo in lingua originale è : <span>{{ info.original_title || info.original_name }}</span></h6>
                    <p>La lingua originale è : <country-flag :country=flag(info.original_language) size='small' /></p>
                    <p>Il voto della critica è :
                        <span>
                            <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote(info.vote_average)" />
                            <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - vote(info.vote_average)" />
                        </span>
                    </p>
                    <p>Trama: <br><span>{{ info.overview }}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets-styles/_partials/variable.scss' as *;
.scroll{
    overflow: auto;
}
span{
    color: $secondary;
}
// FLIP CARD 
.flip-card {
    background-color: transparent;
    width: 100%;
    height: 400px;
    border: 1px solid $primary;
    overflow: hidden;
}
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 1.5s;
    transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}
.flip-card-back {
    background-color: $primary;
    transform: rotateY(180deg);
}
</style>
