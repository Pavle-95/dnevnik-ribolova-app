<script setup>
  import { defineProps, onMounted, ref } from 'vue';
  const mapSecret = import.meta.env.VITE_MAP_API_KEY;
  import maplibregl from 'maplibre-gl';

  const props = defineProps({
    waterCoordinates: Object,
  });

  let isLoading = ref(true);


  onMounted(() => {
    isLoading.value = true;

    setTimeout(() => {
      const map = new maplibregl.Map({
          container: 'map',
          style: `https://maps.geoapify.com/v1/styles/klokantech-basic/style.json?apiKey=${mapSecret}`,
          center: [props.waterCoordinates.lng, props.waterCoordinates.lat],
          zoom: 14 
      });

      // new maplibregl.Marker()
      //   .setLngLat([props.waterCoordinates.lng, props.waterCoordinates.lat])
      //   .addTo(map);
    
      isLoading.value = false;
    }, 1000);
  })
</script>

<template>
  <section class="water-map-holder">
    <div class="water-map-content container">
      <h2>Mapa</h2>

      <div id="map">
        <h2 v-if="isLoading === true">Loading...</h2>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  .water-map-holder {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    border-top: 2px solid #94A03C;
    padding: 80px 0px 120px;
    .water-map-content {
      h2 {
        flex: 0 0 100%;
        color: #FBE2B7;
        font-family: 'Jost', sans-serif;
        font-size: 54px;
        font-style: normal;
        font-weight: 700;
        line-height: normal; 
      }
      #map {
        margin-top: 30px;
        flex: 0 0 100%;
        height: 550px;
        border-radius: 8px;
        overflow: hidden;
      }

    }
    @media (max-width: 550px) {
      padding: 25px 0px;
      .water-map-content {
        h2 {
          font-size: 34px;
        }
      }
    }
  }

</style>