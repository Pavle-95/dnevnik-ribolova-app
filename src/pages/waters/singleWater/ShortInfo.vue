<script setup>
  import { defineProps } from 'vue';


  const props = defineProps({
    waterInfo: {
      type: String,
      default: ""
    }
  })

</script>

<template>
  <div class="short-info-holder">
    <h2 class="water-tittle">Short Info</h2>
    <p class="water-content">{{ props.waterInfo }}</p>
  </div>
</template>

<style lang="scss" scoped>

</style>