<script setup>
// Imports
  import { ref } from 'vue'
  import { useAuthStore } from 'stores/authStore';

  import HeaderComponent from 'layout/HeaderComponent/HeaderComponent.vue';
  import ProfileHeaderComponent from 'pages/profile/ProfileHeaderComponent.vue';
  import ProfileInfoComponent from 'pages/profile/ProfileInfoComponent.vue';
  import FooterComponent from 'layout/Footer/FooterComponent.vue';


  // Get the store instance
  const authStore = useAuthStore();
  const userName = ref(null);


</script>

<template>
  <HeaderComponent />
  <ProfileHeaderComponent
    :is-profile="true"
  />
  <ProfileInfoComponent />
  <FooterComponent />
</template>

<style scoped lang="scss">

</style>
