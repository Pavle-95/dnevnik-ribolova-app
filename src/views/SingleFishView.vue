<script setup>
  import { onMounted } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';
  import { useAuthStore } from 'stores/authStore';
  import { useFishesStore } from 'stores/fishesStore';

  // Componente
  import HeaderComponent from 'layout/HeaderComponent/HeaderComponent.vue';
  import SingleFishHero from '../pages/fishes/partials/SingleFishHero.vue'
  import SingleFishContent from '../pages/fishes/partials/SingleFishContent.vue'
  import FooterComponent from '../layout/Footer/FooterComponent.vue'



  // // Variables
  const authStore = useAuthStore();
  const fishStore = useFishesStore();

  const route = useRoute();

   onMounted(() => {
    authStore.isUserLogin();
    fishStore.getSingleFish(route.params.fish_name, authStore.userToken);
   })

</script>

<template>
  <section class="single-fish-page">
    <HeaderComponent />
    <section v-if="!fishStore.isLoading">
      <SingleFishHero 
        :fish="fishStore.singleFish"
      />
      <SingleFishContent 
        :fish="fishStore.singleFish"
      />

    </section>


      <!-- Just Loading Animation -->
      <section v-else class="loading-home-page"> 
        <h2>Ucitavanje . . .</h2>
        <img src="../assets/images/loading.png" alt="Loading">
        <RouterLink to="/location">Vrati se nazad</RouterLink>
      </section>
    <FooterComponent />
  </section>
</template>

<style lang="scss" scoped>
  .loading-home-page {
    padding: 80px 0px;
    width: 80%;
    margin: 0px auto;
    h2 {
      text-align: center;
      color: #FBE2B7;
      text-shadow: 4px 2px 10px rgba(255, 255, 255, 0.48);
      font-family: 'Inter', sans-serif;
      font-size: 44px;
      font-style: normal;
      font-weight: 800;
      line-height: 140%; /* 89.6px */
    }
    img {
      margin: 40px auto;
      display: block;
      max-width: 100%;
      height: auto;
      animation: shake 1s infinite;
    }
    a {
      width: fit-content;
      display: block;
      margin: 0px auto;
      text-align: center;
      padding: 15px 34px;
      border-radius: 8px;
      background: var(--FirstLinear, linear-gradient(90deg, #94A03C 0%, #1E2913 103.55%));
      overflow: hidden;
      color: var(--White, #FFF);
      font-family: 'Jost', sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 100% */
      letter-spacing: 0.5px;
    }
  }

  @keyframes shake {
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-2deg); }
    20% { transform: translate(-3px, 0px) rotate(2deg); }
    30% { transform: translate(3px, 2px) rotate(0deg); }
    40% { transform: translate(1px, -1px) rotate(2deg); }
    50% { transform: translate(-1px, 2px) rotate(-2deg); }
    60% { transform: translate(-3px, 1px) rotate(0deg); }
    70% { transform: translate(3px, 1px) rotate(-2deg); }
    80% { transform: translate(-1px, -1px) rotate(2deg); }
    90% { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-2deg); }
  }
</style>