<script setup>
// Imports Components
  import HeaderComponent from 'layout/HeaderComponent/HeaderComponent.vue';
  import LakesHeroComponent from 'pages/lakes/LakesHeroComponent.vue';
  import LakesSearchComponent from '../pages/lakes/partials/LakesSearchComponent.vue';

  
  import FooterComponent from 'layout/Footer/FooterComponent.vue';
</script>

<template>
  <HeaderComponent />
  <LakesHeroComponent />
  <LakesSearchComponent />

  <FooterComponent />
</template>

<style lang="scss" scoped>

</style>