<script setup>
  import { ref, defineProps } from 'vue';
  import { RouterLink } from 'vue-router';

  let props = defineProps({
    lake: Object, 
  })

</script>

<template>
  <article class="single-lake">
    <h2>{{ props.lake.lake_name }}</h2>
    <RouterLink class="link-btn" :to="'/location/' + props.lake.lake_id">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.666748" width="32" height="30.6667" rx="10.6667" fill="url(#paint0_linear_56_9367)"/>
        <path d="M22 10L17.6667 22C17.6375 22.0638 17.5905 22.1179 17.5314 22.1558C17.4723 22.1938 17.4036 22.2139 17.3334 22.2139C17.2632 22.2139 17.1944 22.1938 17.1353 22.1558C17.0763 22.1179 17.0293 22.0638 17 22L14.6667 17.3333L10 15C9.93622 14.9708 9.88213 14.9238 9.84421 14.8647C9.80629 14.8056 9.78613 14.7369 9.78613 14.6667C9.78613 14.5965 9.80629 14.5277 9.84421 14.4686C9.88213 14.4095 9.93622 14.3626 10 14.3333L22 10Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_56_9367" x1="0" y1="23.0499" x2="33.1361" y2="23.0499" gradientUnits="userSpaceOnUse">
        <stop stop-color="#94A03C"/>
        <stop offset="1" stop-color="#4B7669"/>
        </linearGradient>
        </defs>
      </svg>
    </RouterLink>
    <div class="fish-in-area">
        <h4>Fish in this  area</h4>
        <span v-if="props.lake.fish_in_area" class="fish-holder">
          <span
            v-for="fish in props.lake.fish_in_area.slice(0, 4)" 
            :key="fish"
            class="img-holder">
            <img 
              :src="`../../../src/assets/images/allFishesImg/${fish}.png`" 
              :alt="fish">
          </span>
        </span>
        <span v-if="props.lake.fish_in_area.length === 0 || props.lake.fish_in_area.length > 10" class="fish-holder">
            <span v-for="n in 4" :key="n" class="img-holder"></span>
        </span>
    </div>
    <div class="lake-img">
      <img src="../../../assets/images/barje.jpg" alt="'Water Image'">
    </div>


  </article>
</template>

<style lang="scss" scoped>
  .single-lake {
    padding: 16px;
    border-radius: 24px;
    background: #303030;
    max-width: 350px;
    min-width: 350px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    h2 {
      flex: 0 0 80%;
      color: #FFF;
      font-family: 'Jost', sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 33px; /* 33.6px */
    }
    .link-btn{
      flex: 0 0 10%;
      color: #FFF;
      font-family: 'Jost', sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 33px; /* 33.6px */
      text-align: right;
    }
    .fish-in-area {
      flex: 0 0 100%;
      display: flex;
      flex-wrap: wrap;
      h4 {
        margin-bottom: 8px;
        flex: 0 0 100%;
        color: #FFF;
        font-family: 'Jost', sans-serif;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%; /* 25.2px */
      }
      .fish-holder {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 8px;
        .img-holder {
          width: 72px;
          height: 38px;
          padding: 4px 6px;
          border-radius: 4.966px;
          background: rgba(0, 0, 0, 0.20);
          img {
            display: block;
            max-width: 100%;
            height: auto;
          }
        }
      }
    }
    .lake-img {
      display: block;
      height: auto;
      max-width: 100%;
      img {
        display: block;
        height: auto;
        max-width: 100%;
      }
    }
  }
</style>