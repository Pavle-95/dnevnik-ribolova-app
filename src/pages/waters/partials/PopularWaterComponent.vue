<script setup>
  import SinglePopularComponent from './SinglePopularComponent.vue';
  import { useWaterStore } from 'stores/waterStore';


  const waterStore = useWaterStore();

</script>


<template>
  <section class="top-locations">
    <div class="top-locations-holder container">
      <h2>Najviše Posećene Lokacije</h2>
      <div class="popular-card-holder">
        <SinglePopularComponent 
          v-for="water in waterStore.popularWaters"
          :key="water"
          :Water="water"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .top-locations {
    padding: 80px 0px 120px;
    border-top: 2px solid var(--FirstLinear, #94A03C);
    background: #21221C;
    .top-locations-holder {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
      h2 {
        flex: 0 0 100%;
        color: #FBE2B7;
        font-family: 'Jost', sans-serif;
        font-size: 54px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      .popular-card-holder {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: stretch;
      }
    }
  }
</style>