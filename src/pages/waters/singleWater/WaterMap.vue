<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    waterCoordinates: Object,
  });

</script>

<template>
  <section class="water-map-holder">
    <div class="water-map-content container">
      <h2>Mapa</h2>

      <div id="map">
        <GMapMap
          loading=async
          :center="props.waterCoordinates"
          :zoom="13"
          map-type-id="terrain"
          style="width: 100%; height: 550px"
        >
        <GMapMarker :position="props.waterCoordinates" />
        </GMapMap>
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