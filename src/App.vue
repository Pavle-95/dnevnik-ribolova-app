<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="img-holder">
    <img src="./assets/DnevnikRibolovaLogo.svg" class="logo vue" alt="Dnevnik Ribolova logo" />
  </div>
  <HelloWorld/>
</template>

<style lang="scss" scoped>
.img-holder {
  max-width: 40%;
  margin: 0px auto;
  .logo {
    display: block;
    max-width: 100%;
    height: auto;
  }

}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
