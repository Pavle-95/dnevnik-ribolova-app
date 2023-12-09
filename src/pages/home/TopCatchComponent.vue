<script setup>
  import { onMounted, ref } from 'vue';
  import { topThreeCatches } from '../../services/Api'; 
  import { useAuthStore } from 'stores/authStore';

  // Get the store instance
  const authStore = useAuthStore();
  const bearerToken = ref(null);
  const topThree = ref([]);


  async function topTreeHandler(bearerToken) {
    try {
      const response = await topThreeCatches(bearerToken);
      topThree.value = response;
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(() => {
    authStore.isUserLogin();
    bearerToken.value = authStore.userToken;
    topTreeHandler(bearerToken.value)
  });
</script>

<template>
  <section class="top-catch-section">
    <h2>Tvojih Top Tri Ulova</h2>
    <ul>
      <li v-for="fish in topThree" :key="fish._id">
        <p>{{ fish.fishType }}</p>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>

</style>