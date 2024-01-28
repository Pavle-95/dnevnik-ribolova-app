<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    waterCoordinates: Object,
  });

</script>

<template>
  <section class="water-map-holder">
    <h2>Map</h2>

    <div id="map">
      <GMapMap
        :center="props.waterCoordinates"
        :zoom="12"
        map-type-id="terrain"
        style="width: 100%; height: 550px"
      >
      <GMapMarker :position="props.waterCoordinates" />
      </GMapMap>
    </div>

  </section>
</template>
<style lang="scss" scoped>
  .water-map-holder {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
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
      flex: 0 0 100%;
      height: 550px;
      border-radius: 8px;
      overflow: hidden;
    }
  }

</style>