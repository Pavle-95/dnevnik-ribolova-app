<script setup>
  import { defineProps } from 'vue';


  const props = defineProps({
    fish: Object,
  })

  console.log(props.fish);
</script>

<template>
  <article class="single-fish-card">
    <div class="card-img">
      <img src="../../../assets/images/allFishesImg/suncanica-gibbosus.png" alt="">
    </div>
    <div class="card-content">
      <h3 class="fish-name">
        {{ fish.vrsta }}
      </h3>
      <p class="fish-desctiption">
        {{ fish.kratak_opis }}
      </p>
      <a href="" class="see-more">Nastavi Citanje</a>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .single-fish-card {
    width: 300px;
    .card-img {
      margin: 0px auto -45px;
      display: block;
      max-width: 220px;
      height: auto;
      img {
        max-width: 100%;
        height: auto;
        display: block;
      }
    }
    .card-content {
      padding: 60px 16px 16px 16px;
      border-radius: 16px;
      border: 1px solid var(--FirstLinear, #94A03C);
      background: #303030;
      .fish-name {
        color: #FFF;
        font-family: 'Jost', sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 33.6px */
      }
      .fish-desctiption {
        margin: 10px 0px 20px;
        color: #FFF;
        font-family: 'Jost', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 22.4px */
      }
      .see-more {
        display: block;
        width: fit-content;
        padding: 10px 20px;
        border-radius: 10.667px;
        background: var(--FirstLinear, linear-gradient(90deg, #94A03C 0%, #1E2913 103.55%));
        color: #FFF;
        font-family: 'Jost', sans-serif;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 22.4px */
      }
    }
  }
</style>