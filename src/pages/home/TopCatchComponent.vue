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

      if (response.code !== 6000) {
        topThree.value = response;        
      }
      else {
        topThree.value = [];
      }
      
    } catch (error) {
      console.log('greska');
      console.log(error);
    }
  }

  onMounted( async () => {
    authStore.isUserLogin();
    bearerToken.value = authStore.userToken;
    await topTreeHandler(bearerToken.value);

  });
</script>

<template>
  <section class="top-catch-section">
    <div class="container top-catch-holder">
      <h2>Tvojih Top Tri Ulova</h2>
      <ul 
        v-if="topThree.length > 0"
        class="top-catch-list">
        <li v-for="(fish, index) in topThree" :key="fish._id" :id="index">
          <TopCatchCard
            :fishType="index"
            :fish="fish"
          />
        </li>
      </ul>
      <div v-else class="results-card-holder-dummy">
        <article class="dummy-card">
          <h3 class="gold">GOLD</h3>
          <p>Trenutno nema nijednog ulova</p>
        </article>
        
        <article class="dummy-card">
          <h3 class="silver">SILVER</h3>
          <p>Trenutno nema nijednog ulova</p>
        </article>

        <article class="dummy-card">
          <h3 class="bronze">BRONZE</h3>
          <p>Trenutno nema nijednog ulova</p>
        </article>
      </div>
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
      align-items: stretch;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 16px;
    }
    .results-card-holder-dummy {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 25px;
      padding-bottom: 25px;
      .dummy-card {
        min-width: 350px;
        height: 430px;
        border-radius: 24px;
        background: #303030;
        position: relative;
        overflow: hidden;
        transition: transform 200ms ease;
        &::before {
          content: "";
          position: absolute;
          height: 150%;
          width: 50px;
          transform: rotate(30deg);
          background-color: rgba(255, 255, 255, 0.2);
          left: -100px;
          top: -230px;
          animation: shine 3s ease-in infinite; 
        }
        p {
          margin: 20px;
          color: #FBE2B7;
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 800;
          line-height: 140%; /* 89.6px */

        }
        h3 {
          margin: 20px;
          font-family: 'Jost', sans-serif;
          font-size: 34px;
          font-style: normal;
          font-weight: 700;
          line-height: 47px; /* 47.6px */
          background: var(--GoldLinear, linear-gradient(180deg, #FDD727 0%, #5D4A1F 100%));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .silver {
          background: var(--SilverLinear, linear-gradient(180deg, #D9D9D9 0%, #5A5A5A 100%));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bronze {
          background: var(--BronzeLinear, linear-gradient(180deg, #B96F00 0%, #663200 100%));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    @media (max-width: 1400px) {
      .top-catch-holder {
        h2 {
          font-size: 58px;
        }
      }
    }
    @media (max-width: 1280px) {
      .top-catch-holder {
        h2 {
          font-size: 58px;
        }
        .top-catch-list {
          justify-content: space-evenly;
          gap: 50px;
        }
      }
    }
    @media (max-width: 550px) {
      padding: 25px 0px;
      .top-catch-holder {
        h2 {
          font-size: 34px;
        }
        .top-catch-list {
          margin-top: 32px;
          width: 105%;
          flex-direction: row;
          flex-wrap: nowrap;
          overflow: scroll;
          padding-right: 5%;
          padding-bottom: 24px;
          .top-catch-card {
            min-width: 280px;
            max-width: 280px;
          }
        }
      }
    }
  }
</style>