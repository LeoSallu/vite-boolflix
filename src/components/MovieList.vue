<script>
export default {

}

</script>
<template>
    <div v-if="moviesAndSeries.length">
        <!-- Ciclo V-for per stampare a schermo le info del film  -->
        <div v-for="movie in moviesAndSeries">
            <h3>Il Titolo del film è : <span>{{ movie.title }}</span> .</h3>
            <ul>
                <li>Il titolo originale del film è : {{ movie.original_title }}</li>
                <li>La lingua originale del film è : <div id="img"><img :src="flag(movie.original_language)" alt=""></div>
                </li>
                <li>Il voto della critica del film è : {{ movie.vote_average }}</li>
            </ul>
        </div>
        <!-- /Ciclo V-for per stampare a schermo le info del film  -->
    </div>
    <!-- Messaggio in caso di nessun risultato  -->
    <div v-else>
        <p>Nessun Risultato... prova a cercare qualcos'altro</p>
    </div>
    <!-- /Messaggio in caso di nessun risultato  -->
</template>