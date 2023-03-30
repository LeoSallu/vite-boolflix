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
    methods:{
        vote(element){
            return Math.ceil( element/ 2);
        }
    },
    computed: {
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
    <div v-if="store.moviesAndSeries.length">
        <!-- Ciclo V-for per stampare a schermo le info del film e delle serie -->
        <div v-for="item in store.moviesAndSeries">
            <!-- Lista Film  -->   
            <div v-if="item.title">
                <h3>Hai cercato : <span>{{item.title}}</span> .</h3>
                <ul>
                    <li>Il titolo originale del film è : {{ item.original_title }}</li>
                    <li>La lingua originale del film è : <country-flag :country=flag(item.original_language) size='small' /></li>
                    <li>Il voto della critica del film è : 
                        <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote(item.vote_average)"/>
                        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-vote(item.vote_average)"/>
                    </li>
                </ul>  
            </div> 
            <!-- Lista Serie  -->
            <div v-else-if="item.name">
                <h3>Hai cercato : <span>{{item.name}}</span> .</h3>
                <ul>
                    <li>Il titolo originale della serie è : {{ item.original_name }}</li>
                    <li>La lingua originale della serie è : <country-flag :country=flag(item.original_language) size='small' /></li>
                    <li>Il voto della critica della serie è : 
                        <font-awesome-icon icon="fa-solid fa-star" v-for="n in vote(item.vote_average)"/>
                        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5-vote(item.vote_average)"/>
                    </li>
                </ul>  
            </div>                               
        </div>
        <!-- /Ciclo V-for per stampare a schermo le info del film e delle serie -->
    </div>
    <!-- Messaggio in caso di nessun risultato  -->
    <div v-else>
        <p>Nessun Risultato... prova a cercare qualcos'altro</p>
    </div>
    <!-- /Messaggio in caso di nessun risultato  -->
</template>
<style lang="scss" scoped>
div {
    span {
        color: pink;
    }

    ul {
        list-style: none;
    }
}
</style>