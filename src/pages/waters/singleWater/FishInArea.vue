<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    fishInArea: Array,
  })

</script>

<template>
  <section class="fish-in-area-holder">
    <h2>Ribe u ovoj oblasti</h2>
    <div v-if="props.fishInArea" class="fish-holder">
      <span
        v-for="fish in props.fishInArea" 
        :key="fish"
        class="img-holder">
        <img 
          :src="`../../../src/assets/images/allFishesImg/${fish}.png`" 
          :alt="fish">
      </span>
    </div>

    <h2>Ribe u zabrani</h2>
    <!-- URADI NAKNADNO -->
    <div class="banned-fish-holder">
      <span
        v-for="fish in 3" 
        :key="fish"
        class="img-holder">
        <img 
          :src="`../../../src/assets/images/allFishesImg/saran-ceski.png`" 
          :alt="fish">
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .fish-in-area-holder {
      flex: 0 0 100%;
      display: flex;
      flex-wrap: wrap;
      h2 {
        flex: 0 0 100%;
        color: #FBE2B7;
        font-family: 'Jost', sans-serif;
        font-size: 54px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 75.6px */  
      }
    .fish-holder {
      margin: 30px 0px 40px;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      // flex-wrap: wrap;
      gap: 15px;
      overflow-x: scroll;
      padding-bottom: 20px;
      .img-holder {
        min-width: 120px;
        width: 190px;
        height: auto;
        padding: 15px 25px;
        border-radius: 4.966px;
        background: rgba(0, 0, 0, 0.20);
        img {
          display: block;
          max-width: 100%;
          width: 148px;
          height: auto;
        }
      }
    }
    .banned-fish-holder {
      margin: 30px 0px 40px;
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      // flex-wrap: wrap;
      gap: 15px;
      overflow-x: scroll;
      padding-bottom: 20px;
      .img-holder {
        width: 190px;
        height: auto;
        padding: 16px 16px;
        border-radius: 4.966px;
        background: rgba(255, 0, 0, 0.25);
        img {
          display: inline !important;
          vertical-align: middle !important;
          max-width: 100%;
          height: auto;
        }
      }
    }
    @media (max-width: 550px) {
      h2 {
        font-size: 34px;
      }
      .fish-holder {
        padding-right: 5%;
        margin: 15px 0px 25px;
        min-width: 105%;
      }
      .banned-fish-holder {
        padding-right: 5%;
        margin: 15px 0px 25px;
        min-width: 105%;
      }
    }
  }
</style>