<script>
export default {
    data() {
        return {
            title: 'Service / Product'
        };
    }
};
</script>

<template>
    <div class="container">

        <h2>{{ title }}</h2>
        <ul>
            <li><b>Descrizioni dettagliate: </b>Informazioni su ciò che offrite, suddivise in categorie se necessario.
            </li>
            <li><b>Immagini e video: </b>Visuali di alta qualità per illustrare i servizi o i prodotti.</li>
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