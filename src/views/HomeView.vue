<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <section>
    <img src="img/header/dnevnik-ribolova-logo.svg" alt="Dnevnik Ribolova Logo">
    <ul class="home-nav">
    <li>
      <RouterLink 
        to="/log-in"
        class="btn-primary btn-primary-active"
        >Log In</RouterLink>
    </li>
    <li>
      <RouterLink 
        to="/register"
        class="btn-primary"
        >Register</RouterLink>
    </li>
    <!-- <li>
      <RouterLink to="/home">Home Page</RouterLink>
    </li>
    <li>
      <RouterLink to="/statistics">Statistics</RouterLink>
    </li> -->
  </ul>
  </section>
</template>

<style scoped lang="scss">
  section {
    padding: 50px 0px;
    width: 100%;
    height: 100vh;
    background: #21221C;
    img {
      padding-bottom: 50px;
      display: block;
      height: auto;
      max-width: 100%;
      margin: 0px auto;
    }
    .home-nav {
      padding-top: 50px;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 20px;
      list-style: none;
      border-top: 2px solid var(--FirstLinear, #94A03C);
      li {
        height: auto;
      }
  }
  }
</style>
