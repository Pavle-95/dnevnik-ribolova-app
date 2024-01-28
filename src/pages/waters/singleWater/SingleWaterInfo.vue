<script setup>
// Imports
  import { defineProps } from 'vue';
// Import Components for single fishning water
  import ShortInfo from './ShortInfo.vue';
  import FishInArea from './FishInArea.vue';
  import GeneralInfo from './GeneralInfo.vue';
  import WaterMap from './WaterMap.vue';

  const props = defineProps({
    waterData: {
      type: Object,
    }
  });

  console.log("WaterData: ");
  console.log(props.waterData.fish_in_area);

</script>

<template>
    <section class="container single-water-content">
      <ShortInfo :waterInfo="props.waterData.content"/>
      <FishInArea :fishInArea="props.waterData.fish_in_area"/>
      <GeneralInfo :waterName="props.waterData.lake_name"/>
      <WaterMap :waterCoordinates="props.waterData.coordinates" />
    </section>
</template>

<style lang="scss" scoped>

</style>