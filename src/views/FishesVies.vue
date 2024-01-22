<script setup>
// Imports
  // import { onMounted } from 'vue'; 
  // import { ref } from 'vue'
  // import { RouterLink } from 'vue-router';
  // import { useAuthStore } from 'stores/authStore';
  
  import HeaderComponent from '../layout/HeaderComponent/HeaderComponent.vue';
  import FishesHeroComponent from 'pages/fishes/FishesHeroComponent.vue'
  import FishesSearchComponent from 'pages/fishes/partials/FishesSearchComponent.vue'
  import FooterComponent from '../layout/Footer/FooterComponent.vue'



  // Get the store instance
  // const authStore = useAuthStore();
  // const userName = ref(null);

  // onMounted(() => {
  //   authStore.isUserLogin();
  //   userName.value = authStore.user.fullName.split(' ')[0];
  // });

</script>

<template>
  <section class="home-page"> 
    <HeaderComponent />
    <FishesHeroComponent />
    <FishesSearchComponent />

    <FooterComponent />
  </section>
</template>

<style scoped lang="scss">
  .home-page {
    background: #21221C;
  }
</style>
