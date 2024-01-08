<script setup>
// Imports
  import { ref } from 'vue'
  // import { RouterLink } from 'vue-router';
  import { useAuthStore } from 'stores/authStore';
  
  import HeaderComponent from '../layout/HeaderComponent/HeaderComponent.vue';
  import FishingHero from '../pages/startFishing/FishingHero.vue';
  import FishingList from '../pages/startFishing/FishingList.vue'
  import FooterComponent from '../layout/Footer/FooterComponent.vue'


  

</script>

<template>
  <section class="home-page"> 
    <HeaderComponent />
    <FishingHero />
    <FishingList />
    <FooterComponent />
  </section>
</template>

<style scoped lang="scss">
  .home-page {
    background: #21221C;
  }
</style>
