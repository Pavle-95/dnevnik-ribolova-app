<script setup>
  import { defineProps } from 'vue';
  
  
  const props = defineProps({
    fish: Object,
  })
</script>

<template>
    <section class="single-fish-hero">
      <div class="single-fish-hero-holder container">
        <div class="sfh-image">
          <img :src="`http://localhost:5713${props.fish.imgUrl}`" :alt="props.fish.species">
        </div>
        <div class="sfh-content">
          <h2 class="species">Vrsta: <span>{{ props.fish.species }}</span></h2>
          <h2 class="latin_name">Latinski Naziv: <span>{{ props.fish.latin_name }}</span></h2>
          <h2 class="local_name">Lokalni Naziv: <span>{{ props.fish.local_name }}</span></h2>
          <h2 class="max_weight">Max Tezin: <span>{{ props.fish.max_weight }}</span></h2>
        </div>
      </div>
    </section>
</template>

<style lang="scss" scoped>
  .single-fish-hero {
    padding: 63px 0px;
    border-top: 2px solid #94A03C;
    .single-fish-hero-holder {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 150px;
      .sfh-image {
        border: 4px solid #21221C;
        position: relative;
        border-radius: 50%;
        background: #333;
        width: 357px;
        height: 357px;        
        max-width: 357px;
        min-width: 357px;
        max-height: 357px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          display: block;
          max-width: 268px;
          height: auto;
        }
        &::before {
          position: absolute;
          z-index: -1;
          content: '';
          width: calc(100% + 13px);
          height: calc(100% + 13px);
          background: linear-gradient(90deg, rgba(148,160,60,1) 0%, rgba(30,41,19,1) 100%);
          border-radius: 50%;
        }
      }
      .sfh-content {
        h2 {
          margin: 20px 0px;
          color: #FBE2B7;
          text-align: left;
          font-family: 'Jost', sans-serif;
          font-size: 30px;
          font-style: normal;
          font-weight: 800;
          line-height: 140%; /* 42px */
          span {
            text-transform: capitalize;
            font-size: 30px;
            font-style: italic;
            font-weight: 300;
          }
        }
      }
    }
    @media (max-width: 1280px) {
      .single-fish-hero-holder {
        gap: 50px;
        // flex-wrap: wrap;
      }
    }
    @media (max-width: 768px) {
      .single-fish-hero-holder {
        flex-wrap: wrap;
      }
    }
    @media (max-width: 550px) {
      padding: 25px 0px;
      .single-fish-hero-holder {
        .sfh-image {
          width: 300px;
          max-width: 300px;
          min-width: 300px;
          
          height: 250px;
          max-height: 250px;
          min-height: 250px;        
        }
        .sfh-content {
          h2 {
            font-size: 24px;
            span {
              font-size: 22px;
            }
          }
        }
      }
    }
  }
</style>