<script setup>
  import { ref, defineProps } from 'vue';

  const props = defineProps({
    Water: Object,
  });

  let coordinates = props.Water.coordinates.split(',');
  let longitude = ref(parseFloat(coordinates[0]));
  let latitude = ref(parseFloat(coordinates[1]));

  let mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d90577.78647924331!2d${longitude.value}!3d${latitude.value}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srs!4v1704461823238!5m2!1sen!2srs`;
</script>

<template>
  <article class="single-popular-card">
    <!-- Card Header -->
    <div v-if="Water.Naziv" class="card-header">
      <h2>{{ Water.Naziv }}</h2>
      <button class="single-water-btn">
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.6666 2.14209L10.3332 14.1421C10.304 14.2059 10.257 14.26 10.1979 14.2979C10.1388 14.3358 10.0701 14.356 9.99988 14.356C9.92967 14.356 9.86094 14.3358 9.80185 14.2979C9.74276 14.26 9.6958 14.2059 9.66655 14.1421L7.33322 9.47542L2.66655 7.14209C2.60272 7.11284 2.54864 7.06588 2.51071 7.00679C2.47279 6.9477 2.45264 6.87897 2.45264 6.80876C2.45264 6.73855 2.47279 6.66981 2.51071 6.61072C2.54864 6.55163 2.60272 6.50467 2.66655 6.47542L14.6666 2.14209Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <!-- Fish in Area -->
    <h3>Ribe u ovoj oblasti</h3>
    <span v-if="Water.fishInArea" class="fish-holder">
      <span
        v-for="fish in props.Water.fishInArea" 
        :key="fish"
        class="img-holder">
        <img 
          :src="`../../../src/assets/images/allFishesImg/${fish}.png`" 
          :alt="fish">
      </span>
    </span>
    <!-- Img and button to wiki page -->
    <div v-if="Water.imgUrl" class="img-map-holder">
      <span class="lake-img">
        <img 
          :src="`../../../src/assets/${props.Water.imgUrl}`" 
          :alt="'Fish Image'">
        </span>
        <!-- Map -->
        <div class="iframe-holder">
          <iframe 
            class="embed-map"
            :src="mapSrc" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  .single-popular-card {
    border: 1px solid var(--FirstLinear, #94A03C);
    flex: 0 0 32%;
    padding: 32px;
    border-radius: 24px;
    background: #303030;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        color: #FFF;
        font-family: 'Jost', sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 33.6px */
      }
      .single-water-btn {
        border: none;
        padding: 8px;
        border-radius: 10.667px;
        background: linear-gradient(90deg, #94A03C 0%, #4B7669 103.55%);
        svg {
          vertical-align: middle;
        }
      }
    }
    h3 {
      color: #FFF;
      font-family: 'Jost', sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 25.2px */
      margin-bottom: -12px;
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
    .img-map-holder {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
      .lake-img {
        flex: 0 0 36%;
        border-radius: 8px;
        overflow: hidden;
        height: 100%;
        img {
          display: block;
          max-width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .iframe-holder {
        flex: 0 0 62%;
        border-radius: 8px;
        overflow: hidden;
        .embed-map {
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
        }
      }
    }
    @media (max-width: 1280px) {
      max-width: 350px;
      flex: 0 0 100%;
      padding: 16px;
      .fish-holder {
        .img-holder {
          &:nth-of-type(n+5) {
            display: none;
          }
        }
      }
    }
    @media (max-width: 550px) {
      gap: 12px;
      min-width: 350px;
      .card-header {
        h2 {
          font-size: 20px;
          height: 32px;
        }
        .single-water-btn {
          height: 32px;

        }
      }
      h3 {
        margin-bottom: 8px;
        font-size: 16px;
      }
      // .fish-in-area {
      //   h4 {
      //     font-size: 14px;
      //   }
      // }
      // .lake-img {
      //   height: 200px;
      //   width: 100%;
      //   img {
      //     object-fit: cover;
      //     width: 100%;
      //     height: 100%;
      //   }
      // }
    }
  }

</style>