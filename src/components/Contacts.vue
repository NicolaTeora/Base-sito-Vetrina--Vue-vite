<script>
export default {
    data() {
        return {
            title: 'Contacts'
        };
    }
};
</script>

<template>
    <div class="container">

        <h2>{{ title }}</h2>
        <ul>
            <li><b>Modulo di contatto: </b>Un modulo semplice per permettere agli utenti di inviarvi messaggi.</li>
            <li><b>Informazioni di contatto: </b>Indirizzo email, numero di telefono, indirizzo fisico.</li>
            <li><b>Mappa: </b>Una mappa interattiva per mostrare la vostra posizione.</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/general.scss';

h2,
h3 {
    padding: 1rem 0;
}

ul {
    list-style: circle;

    li {
        margin: 10px 0;
    }
}
</style>