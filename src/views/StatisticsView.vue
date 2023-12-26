<script setup>
// Imports Components
  import HeaderComponent from 'layout/HeaderComponent/HeaderComponent.vue';
  import FooterComponent from 'layout/Footer/FooterComponent.vue';
  import StatisticsHeroComponent from 'pages/statistics/StatisticsHeroComponent.vue'
  import QuickStatsComponent from 'pages/statistics/QuickStatsComponent.vue'
</script>

<template>
  <section class="home-page"> 
    <HeaderComponent />
    <StatisticsHeroComponent />
    <QuickStatsComponent />
    <FooterComponent />
  </section>
</template>

<style lang="scss" scoped>

</style>