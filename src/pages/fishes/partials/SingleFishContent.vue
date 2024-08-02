<script setup>
  import { defineProps } from 'vue';
  
  
  const props = defineProps({
    fish: Object,
  })
</script>

<template>
  <section class="single-fish-content">
    <div class="single-fish-content-holder container">
      <article class="sfc-general_information">
        <h2>Navike, stanište, rasprostranjenost</h2>
        <p>{{ props.fish.general_information }}</p>
      </article>

      <article class="sfc-description">   
        <h2>Opis i građa</h2>
        <p>{{ props.fish.description }}</p>
      </article>

      <article class="sfc-spawn_time">
        <h2>Razmnožavanje:</h2>
        <p>{{ props.fish.spawn_time }}</p>
      </article>

      <article class="sfc-hunting_equipment">
        <h2>Mamci i pribor za lov:</h2>
        <p>{{ props.fish.hunting_equipment }}</p>
      </article>
    </div>
</section>
</template>

<style lang="scss" scoped>
  .single-fish-content {
    padding: 80px 0px 120px;
    border-top: 2px solid #94A03C;
    .single-fish-content-holder {
      article {
        margin: 56px 0px;
        width: 100%;
        h2 {
          color: #FBE2B7;
          font-family: 'Jost', sans-serif;
          font-size: 54px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        p {
          margin-top: 30px;
          color: #FFF;
          font-family: 'Jost', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 30px; /* 125% */
          letter-spacing: 0.5px;
        }
      }
    }
  }
</style>