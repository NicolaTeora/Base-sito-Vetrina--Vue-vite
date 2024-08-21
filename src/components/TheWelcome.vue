<script>
import JumbotroneHome from './_partials/JumbotroneHome.vue';
export default {
  data() {
    return {
      title: 'WelcHome'
    };
  },
  components: { JumbotroneHome }
};
</script>

<template>
  <jumbotrone-home />
</template>

<style lang="scss" scoped>
@use '../assets/general.scss';
</style>