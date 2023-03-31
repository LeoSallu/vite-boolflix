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
            return element = store.img_url + element;
        }
    },
    computed: {
        // Funzione per correggere le path delle flag 
        flag() {
            return (element) => {
                switch (element) {
                    case 'en':
                        return 'gb';
                    case 'it':
                        return 'it';
                    default:
                        return element;
                }
            }
        }
    }
}
</script>
<template>
    <article>
        <img class="card-img-top" :src=getPath(info.poster_path) :alt="info.title + '.png'">
        <div class="card-body">
            <h5 class="card-title">Hai cercato : <span>{{ info.title || info.name }}</span></h5>
            <div class="card-text">
                <h6>Il titolo originale è : <span>{{ info.original_title || info.original_name }}</span></h6>
                <p>La lingua originale è : <country-flag :country=flag(info.original_language) size='small' /></p>
                <p>Il voto della critica è
                    <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote(info.vote_average)" />
                    <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - vote(info.vote_average)" />
                </p>
            </div>
        </div>
    </article>
</template>
<style lang="scss" scoped>

</style>