<script setup>
// Imports
  import { onMounted } from 'vue'; 
  import { ref } from 'vue'
  // import { RouterLink } from 'vue-router';
  import { useAuthStore } from 'stores/authStore';
  
  import HeaderComponent from '../layout/HeaderComponent/HeaderComponent.vue';
  import HomeHeroComponent from '../pages/home/HomeHeroComponent.vue';
  import TopCatchComponent from '../pages/home/TopCatchComponent.vue';
  import AboutAppComponent from '../pages/home/AboutAppComponent.vue';
  import FooterComponent from '../layout/Footer/FooterComponent.vue'



  // Get the store instance
  const authStore = useAuthStore();
  const userName = ref(null);

  onMounted(() => {
    authStore.isUserLogin();
    userName.value = authStore.userName.split(' ')[0];
    console.log(userName.value);
  });

</script>

<template>
  <section class="home-page"> 
    <HeaderComponent />
    <HomeHeroComponent 
      :userName="userName"
    />
    <TopCatchComponent />
    <AboutAppComponent />
    <FooterComponent />
  </section>
</template>

<style scoped lang="scss">
  .home-page {
    background: #21221C;
  }
</style>
