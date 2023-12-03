<script setup>

</script>

<template>
  <section class="auth-header">
    <div class="logo-text-container">
      <img class="auth-logo" src="img/header/dnevnik-ribolova-logo.svg" alt="Header Logo">
      <h2 class="auth-logo-text" >Dnevnik <br> Ribolova</h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .auth-header {
    position: relative;
    z-index: 2;
    height: 200px;
    width: 100%;
    background-image: url('img/header/auth-header-bg.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    .logo-text-container {
      width: fit-content;
      margin: 0px auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 13px;

      .auth-logo {
        display: block;
        max-width: 91px;
        height: auto;
      }
      .auth-logo-text {
        color: #FBE2B7;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: 'Jost', sans-serif;
        font-size: 21.185px;
        font-style: normal;
        font-weight: 700;
        line-height: 33.703px; /* 159.091% */
        text-transform: uppercase;
      }
    }
  }
</style>