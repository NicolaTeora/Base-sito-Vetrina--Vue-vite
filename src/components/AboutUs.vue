<script>
export default {
    data() {
        return {
            title: 'About us'
        };
    }
};
</script>

<template>
    <div class="container">

        <h2>{{ title }}</h2>
        <div id="history">

            <h3>Storia dell'azienda:</h3>
            <p>Informazioni su chi siete, la vostra missione e i vostri valori.</p>

        </div>

        <div id="team">

            <h3>Team:</h3>
            <ul>
                <li>Brevi biografie e foto dei membri chiave del team.</li>
            </ul>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../assets/general.scss';

#history {
    margin-bottom: 2rem;
}

h2,
h3 {
    padding: 1rem 0;
}

ul {

    li {
        margin: 10px 0;
    }
}
</style>