<script setup>
  import { defineProps } from 'vue';

  const props = defineProps({
    fishInArea: Array,
  })

  console.log(props.fishInArea);
</script>

<template>
  <section class="fish-in-area-holder">
    <h2>Ribe u ovoj oblasti</h2>
    <div v-if="props.fishInArea" class="fish-holder">
      <span
        v-for="fish in props.fishInArea" 
        :key="fish"
        class="img-holder">
        <img 
          :src="`../../../src/assets/images/allFishesImg/${fish}.png`" 
          :alt="fish">
      </span>
    </div>

    <h2>Ribe u zabrani</h2>
    <!-- URADI NAKNADNO -->
    <div class="banned-fish-holder">
      <span
        v-for="fish in 3" 
        :key="fish"
        class="img-holder">
        <img 
          :src="`../../../src/assets/images/allFishesImg/saran-ceski.png`" 
          :alt="fish">
      </span>
    </div>
  </section>
</template>

<style lang="scss" scoped>

</style>