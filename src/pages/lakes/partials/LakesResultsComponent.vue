<script setup>
// Imports
  import { defineProps } from 'vue';
  import SingleLakeComponent from './SingleLakeComponent.vue';

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
        <SingleLakeComponent 
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
        }
      }
    }
  }
</style>