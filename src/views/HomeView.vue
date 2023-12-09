<script setup>
// Imports
  import { onMounted } from 'vue'; 
  // import { RouterLink } from 'vue-router';
  import { useAuthStore } from 'stores/authStore';
  import TopCatchComponent from '../pages/home/TopCatchComponent.vue';
  // Get the store instance
  const authStore = useAuthStore();

  onMounted(() => {
    authStore.isUserLogin();
  });

</script>

<template>
  <section>
    <TopCatchComponent />
  </section>
</template>

<style scoped lang="scss">
  section {
    padding: 50px 0px;
    width: 100%;
    height: 100vh;
    background: #21221C;
    img {
      padding-bottom: 50px;
      display: block;
      height: auto;
      max-width: 100%;
      margin: 0px auto;
    }
    .home-nav {
      padding-top: 50px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 20px;
      list-style: none;
      border-top: 2px solid var(--FirstLinear, #94A03C);
      li {
        height: auto;
      }
  }
  }
</style>
