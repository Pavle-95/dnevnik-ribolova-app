<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  user: Object,
});

const imgData = ref(arrayBufferToBase64(props.user.img.data));


function arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }

  watch(() => props.user.img.data, () => {
  // Do something when props.user.img.data changes
  imgData.value = arrayBufferToBase64(props.user.img.data);
});

</script>

<template>
    <span class="user-img-holder">
      <img :src="'data:image/png;base64,' + imgData" alt="slika"/>
    </span>
    <span class="user-general-info">
      <h2 class="user-name">{{ props.user.fullName }}</h2>
      <h3 class="user-email">{{ props.user.email }}</h3>
    </span>
</template>

<style lang="scss" scoped>
  .user-img-holder {
    position: relative;
    background-image: url('img/profile/profile-img-holder.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    max-width: 375px;
    min-width: 375px;
    max-height: 375px;
    height: auto;
    overflow: hidden;
    img {
      position: relative;
      z-index: -1;
      left: -8px;
      padding: 20px;
      border-radius: 50%;
      display: block;
      max-width: 375px;
      max-height: 375px;
      min-width: 375px;
      min-height: 375px;
      object-fit: cover;
    }
  }
  .user-general-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    .user-name {
      color: #FBE2B7;
      font-family: 'Jost', sans-serif;
      font-size: 60px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 84px */
    }
    .user-email {
      color: #FBE2B7;
      font-family: 'Jost', sans-serif;
      font-size: 42px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 58.8px */
    }
  }
</style>