<script>
export default {
    data() {
        return {
            title: 'Portfolio/Case Studies'
        };
    }
};
</script>

<template>
    <div class="container">

        <h2>{{ title }}</h2>
        <ul>
            <li><b>Esempi di lavori precedenti: </b>Progetti completati con descrizioni e immagini.</li>
            <li><b>Testimonianze: </b>Feedback positivi da parte dei clienti.</li>
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