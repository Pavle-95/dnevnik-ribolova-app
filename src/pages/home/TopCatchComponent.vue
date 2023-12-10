<script setup>
// Imports
  import { onMounted, ref } from 'vue';
  import { topThreeCatches } from '../../services/Api'; 
  import { useAuthStore } from 'stores/authStore';
  import TopCatchCard from './partials/TopCatchCard.vue';

// Variables
  const authStore = useAuthStore();
  const bearerToken = ref(null);
  const topThree = ref([]);

// Functions
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
    <div class="container top-catch-holder">
      <h2>Tvojih Top Tri Ulova</h2>
      <ul class="top-catch-list">
        <li v-for="(fish, index) in topThree" :key="fish._id" :id="index">
          <TopCatchCard
            :fishType="index"
            :fish="fish"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .top-catch-section {
    padding: 50px 0px 120px;
    background-image: url('img/home/FlyCast.svg');
    background-position: left center;
    background-size: cover;
    background-repeat: no-repeat;
    h2 {
      color: #FBE2B7;
      font-family: 'Inter', sans-serif;
      font-size: 64px;
      font-style: normal;
      font-weight: 800;
      line-height: 140%; /* 89.6px */
    }
    .top-catch-list {
      list-style: none;
      margin-top: 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
    }
  }
</style>