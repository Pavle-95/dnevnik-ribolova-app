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
  <section class="short-info-holder">
    <h2 class="water-tittle">Short Info</h2>
    <p class="water-content">{{ props.waterInfo }}</p>
  </section>
</template>

  <style lang="scss" scoped>
  .short-info-holder {
    margin: 0px 0px 40px;
    h2 {
      color: #FBE2B7;
      font-family: 'Jost', sans-serif;
      font-size: 54px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 75.6px */
      margin-bottom: 30px;
    }
    p {
      color: #FFF;
      font-family: 'Jost', sans-serif;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 30.8px */
    }
  }
</style>