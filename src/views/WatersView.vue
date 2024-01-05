<script setup>
// Imports Components
  import HeaderComponent from 'layout/HeaderComponent/HeaderComponent.vue';
  import WatersHeroComponent from 'pages/waters/WatersHeroComponent.vue';
  import WatersSearchComponent from '../pages/waters/partials/WatersSearchComponent.vue';
  import PopularWaterComponent from '../pages/waters/partials/PopularWaterComponent.vue';

  
  import FooterComponent from 'layout/Footer/FooterComponent.vue';
</script>

<template>
  <HeaderComponent />
  <WatersHeroComponent />
  <WatersSearchComponent />
  <PopularWaterComponent />
  <FooterComponent />
</template>

<style lang="scss" scoped>

</style>