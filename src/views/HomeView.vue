<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <ul class="home-nav">
    <li>
      <RouterLink to="/log-in">Log In</RouterLink>
    </li>
    <li>
      <RouterLink to="/register">Register</RouterLink>
    </li>
    <!-- <li>
      <RouterLink to="/home">Home Page</RouterLink>
    </li>
    <li>
      <RouterLink to="/statistics">Statistics</RouterLink>
    </li> -->
  </ul>
</template>

<style scoped lang="scss">
  .home-nav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    list-style: none;
    border-top: 2px solid var(--FirstLinear, #94A03C);
    background: #21221C;
    li { 
      padding: 20px 35px;
      a {
        // Start Fishing
        text-decoration: none;
        color: #FBE2B7;
        font-size: 26px;
        font-family: 'Jost', sans-serif;
        font-weight: 500;
        line-height: 31.20px;
        word-wrap: break-word
      }
    }
  }
</style>
