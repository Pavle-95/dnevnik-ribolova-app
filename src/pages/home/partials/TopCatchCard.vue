<script setup>
  import { defineProps } from 'vue';

  defineProps({
    fish: Object,
    fishType: Number,
  })




  

</script>

<template>
  <article :class="`top-catch-card style-type-${fishType}`">
    <span class="card-img"> 
        <img src="img/allFishesImg/saran-ceski.png" :alt="fish.fishType">
      </span>
      <div class="card-content">
        <p class="fish-name">Ime Ribe: <span>{{ fish.fishType }}</span></p>
        <p class="fish-date">Datum: <span>{{ fish.createdAt.split('T')[0] }}</span></p>
        <p class="fish-weight">Tezina: <span>{{ fish.fishWeight }}</span></p>
        <p class="fish-baitType">Mamac: <span>{{ fish.baitType }}</span></p>
      </div>
      <h3 v-if="fishType === 0" :class="`card-type-${fishType}`">GOLD</h3>
      <h3 v-if="fishType === 1" :class="`card-type-${fishType}`">SILVER</h3>
      <h3 v-if="fishType === 2" :class="`card-type-${fishType}`">BRONZE</h3>
  </article>
</template>

<style lang="scss" scoped>
      .top-catch-card {
        position: relative;
        padding: 10px;
        border-radius: 38px;
        border: 2px solid var(--GoldLinear, #FDD727);
        min-width: 330px;
        max-width: 330px;
        transition: .3s ease-in-out;
          &:hover {
            cursor: pointer;
            transform: translateY(-25px);
          }
        .card-img {
          position: relative;
          z-index: 2;
          display: block;
          width: 100%;
          height: auto;
          border-radius: 32px 32px 0px 60px;
          background: linear-gradient(90deg, #94A03C 0%, #1E2913 103.55%);
          padding: 30px;
          img {
            display: block;
            max-width: 100%;
            height: auto;
          }
        }
        .card-content {
          position: relative;
          z-index: 1;
          margin-top: -50px;
          padding: 64px 40px 20px;
          display: block;
          height: auto;
          border-radius: 0px  0px 32px 32px;
          background: #FAF7F3;
          p {
            color: #1E1E1E;
            font-family: 'Jost', sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 33.6px */
            margin-bottom: 6px;
            span {
              color: #1E1E1E;
              font-weight: 600;
            }
            &:last-of-type {
              margin-bottom: 0px;
            }
          }
        }
        .card-type-0, .card-type-1, .card-type-2 {
          margin-top: 5px;
          text-align: center;
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
        .card-type-1 {
          background: var(--SilverLinear, linear-gradient(180deg, #D9D9D9 0%, #5A5A5A 100%));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .card-type-2 {
          background: var(--BronzeLinear, linear-gradient(180deg, #B96F00 0%, #663200 100%));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .style-type-1 {
        border-radius: 38px;
        border: 2px solid var(--SilverLinear, #D9D9D9);
      }
      .style-type-2 {
        border-radius: 38px;
        border: 2px solid var(--BronzeLinear, #B96F00);
      }
</style>