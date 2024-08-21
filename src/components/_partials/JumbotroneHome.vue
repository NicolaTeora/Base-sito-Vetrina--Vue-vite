<script>
export default {
    data() {
        return {
            title: 'Jumbotrone'
        };
    }
};
</script>

<template>
    <main>

        <div>
            <h3>{{ title }}</h3>
            <b>Immagine o video di benvenuto:</b> Un elemento visivo accattivante che catturi l'attenzione.
        </div>

    </main>
    <div class="container">
        <div class="title">
            <h1>Titolo e sottotitolo:</h1>
        </div>
        <ul>
            <li>
                <b>Call to Action (CTA):</b> Un invito all'azione visibile e persuasivo (es. "Contattaci", "Scopri di
                più").
            </li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
@use '../../assets/general.scss';

ul {
    li {
        margin: 1rem 0;
    }
}

.title {
    text-align: center;
    padding: 1rem 0;
    border: 1px dotted rgb(4, 0, 255); //debug layout
}
</style>