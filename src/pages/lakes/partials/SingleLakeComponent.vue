<script setup>
  import { ref, defineProps } from 'vue';

  let props = defineProps({
    lake: Object, 
  })

</script>

<template>
  <article class="single-lake">
    <h2>{{ props.lake.Naziv }}</h2>
    <p>{{ props.lake.Reka }}</p>
  </article>
</template>

<style lang="scss" scoped>
  .single-lake {
    padding: 16px;
    border-radius: 24px;
    background: #303030;
    min-width: 350px;
      height: 430px;
    h2 {
      color: #FFF;
      font-family: 'Jost', sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 33.6px */
    }
    p {
      color: #FFF;
      font-family: 'Jost', sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 140%; /* 25.2px */
    }
  }
</style>