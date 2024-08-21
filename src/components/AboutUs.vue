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
            <h4>Informazioni su chi siete</h4>
            <p class="lorem">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt unde veniam natus ab.
                Doloremque
                veritatis perferendis delectus eius impedit corporis, perspiciatis explicabo repellat officia, deserunt
                quaerat laborum voluptates maiores aliquam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident tempore repellendus culpa eius quam, vel animi sit magnam voluptas consequuntur ullam
                dignissimos minus, reiciendis, nostrum quia totam? Ullam, labore omnis.
            </p>
            <h4>La vostra missione</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam error dignissimos aspernatur impedit
                quibusdam ratione reprehenderit ullam ad distinctio? Corrupti alias dicta quam facilis. Delectus
                mollitia ab dicta praesentium atque.
            </p>
            <h4>I vostri valori.</h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam error dignissimos aspernatur impedit
                quibusdam ratione reprehenderit ullam ad distinctio? Corrupti alias dicta quam facilis. Delectus
                mollitia ab dicta praesentium atque.
            </p>
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

p {
    margin: 0 0 1rem 0;
}

ul {

    li {
        margin: 10px 0;
    }
}
</style>