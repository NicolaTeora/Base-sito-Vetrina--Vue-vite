<script>
export default {
    data() {
        return {
            title: 'Logo',
            isMobileMenuOpen: false // Stato per gestire l'apertura del menu mobile
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
        closeMobileMenu() {
            this.isMobileMenuOpen = false;
        }
    }
};
</script>

<template>
    <nav>
        <div class="container">
            <router-link to="/" class="custom-link" @click="closeMobileMenu">
                <h2>{{ title }}</h2>
            </router-link>

            <!-- Bottone per il menu mobile -->
            <button @click="toggleMobileMenu" class="mobile-menu-btn">
                ☰
            </button>

            <!-- Menu normale per desktop e menu a tendina per mobile -->
            <ul :class="{ 'mobile-menu': isMobileMenuOpen }">
                <li>
                    <router-link to="/" class="custom-link" @click="closeMobileMenu">Home</router-link>
                </li>
                <li>
                    <router-link to="/about" class="custom-link" @click="closeMobileMenu">About</router-link>
                </li>
                <li>
                    <router-link to="/service-product" class="custom-link" @click="closeMobileMenu">Service /
                        Products</router-link>
                </li>
                <li>
                    <router-link to="/portfolio-case-studies" class="custom-link" @click="closeMobileMenu">Portfolio /
                        Case Studies</router-link>
                </li>
                <li>
                    <router-link to="/contacts" class="custom-link" @click="closeMobileMenu">Contacts</router-link>
                </li>
                <li>
                    <router-link to="/blog-news" class="custom-link" @click="closeMobileMenu">Blog / News</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
@use '../assets/general.scss';

nav {
    padding: 1rem 0;
    background-color: rgb(74, 182, 74);
    position: sticky;
    top: 0;
    z-index: 1;
    overflow: hidden;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
    }

    .custom-link {
        text-decoration: none;
        color: inherit;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: small;
        text-align: center;
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            .custom-link:hover {
                color: rgb(233, 203, 68);
            }

            .selected {
                color: rgb(233, 203, 68);
                text-decoration: underline;
            }
        }
    }

    .mobile-menu-btn {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: inherit;
        z-index: 3;
        /* Assicurati che il bottone del menu sia sopra il menu */
    }

    @media (max-width: 768px) {
        .mobile-menu-btn {
            display: block;
        }

        ul {
            position: fixed;
            /* Usa fixed per il menu a tendina */
            top: 80px;
            right: 0;
            background-color: rgb(74, 182, 74);
            width: 100%;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
            z-index: 2;
            flex-direction: column;
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .mobile-menu {
            max-height: 100%;
            padding: 10px;
            /* Assicurati che questo valore sia sufficiente per mostrare tutto il menu */
        }
    }
}
</style>
