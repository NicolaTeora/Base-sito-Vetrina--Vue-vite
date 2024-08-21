<script>
export default {
    data() {
        return {
            title: 'Blog / News'
        };
    }
};
</script>

<template>
    <div class="container">

        <h2>{{ title }}</h2>
        <ul>
            <li><b>Articoli informativi: </b>Contenuti rilevanti per il vostro settore che possono attrarre visitatori e
                migliorare la SEO.</li>
            <li><b>Aggiornamenti: </b>Notizie aziendali o eventi importanti.</li>
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