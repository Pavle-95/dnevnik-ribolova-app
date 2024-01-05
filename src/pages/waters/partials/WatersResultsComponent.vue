<script setup>
// Imports
  import { defineProps } from 'vue';
  import SingleWaterComponent from './SingleWaterComponent.vue';

  const props = defineProps({
    lakes: Array,
    isLoading: Boolean,
  })

</script>

<template>
  <section class="lakes-results">
    <div class="lakes-results-holder container">
      <h2>Rezultat Pretrage</h2>
      <div v-if="!isLoading" class="results-card-holder">        
        <h2 class="no-results" v-if="lakes <= 0 && !isLoading">Tvoja Pretraga nema rezultata</h2>
        <!-- Single Water Card -->
        <SingleWaterComponent 
          v-for="lake in props.lakes"
          :key="lake.id"
          :lake="lake"
        />
      </div>
      
      <div 
        v-if="isLoading"
        class="results-card-holder-dummy">
        <article class="loading-dummy">

        </article>
        <article class="loading-dummy">
          
        </article>
        <article class="loading-dummy">
          
        </article>
        <article class="loading-dummy">
          
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .lakes-results {
    margin-top: 40px;
    .lakes-results-holder {
      h2 {
        color: #FBE2B7;
        font-family: 'Jost', sans-serif;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 50px; /* 125% */
      }
      .results-card-holder {
        margin-top: 20px;
        display: flex;
        overflow-x: scroll;
        gap: 25px;
        padding-bottom: 25px;
        .no-results {
          margin-bottom: 380px;
        }
        /* width */
        &::-webkit-scrollbar {
          height: 5px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          border-radius: 5px;
          background: #f1f1f1;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          border-radius: 5px;
          background: #888;
          &:hover {
            background: #555;
            cursor: pointer;
          }
        }
      }
      .results-card-holder-dummy {
        margin-top: 20px;
        display: flex;
        overflow-x: hidden;
        gap: 25px;
        padding-bottom: 30px;
        .loading-dummy {
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
        }
      }
    }
  }

// Animation Style 
@keyframes shine {
  0% {
    transform: rotate(30deg) scale(1.1);
    left: -100px;
    top: -230px;
  }
  10% {
    transform: rotate(35deg) scale(1);
    left: 350px;
    top: 100px;
  }
  100% {
    transform: rotate(35deg) scale(1);
    left: 350px;
    top: 100px;
  }
}
</style>