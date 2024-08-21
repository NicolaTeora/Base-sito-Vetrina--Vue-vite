<script>
import { RouterLink, RouterView } from 'vue-router';

import NavBar from '@/components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
  components: { NavBar, Footer }
};
</script>

<template>
  <nav-bar />

  <RouterView />

  <Footer />
</template>

<style lang="scss" scoped>
@use './assets/general.scss';

.container {
  margin-top: 2rem;
}
</style>
