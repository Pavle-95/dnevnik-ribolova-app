<script setup>
// Imports
  import { ref, onMounted } from 'vue'

  let userName = ref('');

  onMounted(() => {
    userName.value = JSON.parse(localStorage.getItem('user')).user.fullName.split(' ')[0];
  })

</script>

<template>
  <section class="location-hero">
    <div class="location-hero-holder container">
      <h1>Zdravo <span>{{ userName }}</span><br>
        Pronađi  idealnu lokaciju za pecanje
      </h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .location-hero {
    border-top: 2px solid var(--FirstLinear, #94A03C);
    padding: 110px 0px 110px;
    background-image: url('img/default-page-img.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .location-hero-holder {
      h1 {
        color: #FBE2B7;
        text-align: center;
        text-shadow: 4px 2px 10px rgba(255, 255, 255, 0.48);
        font-family: 'Inter', sans-serif;
        font-size: 64px;
        font-style: normal;
        font-weight: 800;
        line-height: 140%; /* 89.6px */
        span {
          color: #21221C;
        }
      }
    }
  }
</style>