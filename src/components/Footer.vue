<script>
export default {
    data() {
        return {
            title: 'Footer'
        };
    }
};
</script>

<template>
    <footer>
        <div class="container">
            <router-link to="/" class="custom-link">
                <h2>{{ title }}</h2>
            </router-link>
            <ul>
                <li><b>Link utili: </b>link alle pagine principali del sito</li>
                <li><b>Social Media: </b>icone che rimandano ai profili social dell'azienda</li>
                <li><b>Informazioni legali: </b>Privacy policy, termini di servizio.</li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    margin-top: auto;
    padding: 0.5rem;
    width: 100%;
    background-color: #e0922a;
    z-index: 1;

    .container {
        display: flex;
        justify-content: space-between;
    }

    .custom-link {
        text-decoration: none;
        color: inherit;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: smaller;
        text-align: center;
    }
}
</style>