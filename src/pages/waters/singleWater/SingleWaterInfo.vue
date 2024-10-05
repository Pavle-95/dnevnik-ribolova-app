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
</script>

<template>
    <section class="single-water-content">
      <div class="single-water-holde container">
        <ShortInfo :waterInfo="props.waterData.content"/>
        <FishInArea :fishInArea="props.waterData.fish_in_area"/>
        <GeneralInfo 
          :waterName="props.waterData.water_name"
          :waterCoordinates="props.waterData.coordinates"
        />
      </div>
    </section>
    <WaterMap :waterCoordinates="props.waterData.coordinates" />
</template>

<style lang="scss" scoped>
  .single-water-content {
    padding: 80px 0px;
    border-top: 2px solid #94A03C;
    @media (max-width: 550px) {
      padding: 25px 0px;
    }
  }
</style>