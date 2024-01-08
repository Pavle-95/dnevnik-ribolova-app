<script setup>
  import { ref } from 'vue';
  import { useCatchStore} from '../../stores/catchList.js'
  import SingleCatchCard from './partials/SingleCatchCard.vue';

  let cathListStore = ref(useCatchStore());


</script>

<template>
  <section class="fishing-list">
    <div class="fishing-list-holder container">
      <h2>List danasnjeg ulova</h2>
      <div v-if="cathListStore.fishList.length > 0" class="fish-holder">
        <SingleCatchCard
          v-for="fish in cathListStore.fishList"
          :fish="fish"
          :key="fish"
        />
      </div>
      <div v-else class="end-point">
        <h2>Vasa lista je prazna molimo vas dodajte vas ulov</h2>
      </div> 
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .fishing-list {
    padding: 80px 0px;
    .fishing-list-holder {
      h2 {
        color: #FBE2B7;
        font-family: 'Jost', sans-serif;
        font-size: 54px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 75.6px */
      }
      .fish-holder {
        margin-top: 20px;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 25px;
      }
    }
  }
</style>