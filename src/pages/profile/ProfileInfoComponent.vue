<script setup>
  import UserInfoForm from './partials/UserInfoForm.vue';
  import UserHeader from './partials/UserHeader.vue';

  // Store  
  import { useAuthStore } from '../../stores/authStore'
  const userInfo = useAuthStore();

</script>

<template>
  <section class="profile-info">
    <article class="container profile-info-holder">
      <div class="profile-header">
        <UserHeader :user="userInfo.user" />
      </div>
      <div class="profile-content" >
        <UserInfoForm />
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
  .profile-info {
    padding: 80px 0px 120px;
    .profile-info-holder {
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      .profile-header {
        flex: 0 0 100%;
        margin-bottom: 20px;
        display: flex;
        gap: 35px;
        justify-content: center;
        align-items: center;
      }
      .profile-content {
        // margin-top: 16px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;
        flex-wrap: wrap;
      }
    }
  }
</style>