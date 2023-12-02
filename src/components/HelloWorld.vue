<script setup>
  import { ref } from 'vue'

  let apiURL = import.meta.env.VITE_DEV_URL;

  var msgBackend = ref('Misko bree');

  async function getMSG() {
    try {
        const response = await fetch(`${apiURL}/poruka`);
        const msg = await response.json();
        msgBackend.value = msg.msg;
    } catch (error) {
      console.log(error);
    }
  }



</script>

<template>

  <div class="card">
    <h1>Dnevnik ribolova</h1>
    <h3>Poruka sa FrontEnd-a</h3>
    <h3>{{ msgBackend }}</h3>
    <button @click="getMSG">Klikni za poruku</button>
  </div>

</template>

<style scoped>
.card {
  color: #888;
}
</style>
