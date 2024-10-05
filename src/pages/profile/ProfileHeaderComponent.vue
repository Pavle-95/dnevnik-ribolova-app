<script setup>
  import { RouterLink } from 'vue-router';
  import { defineProps } from 'vue'
   
  defineProps({
    isProfile: Boolean,
  })

</script>

<template>
  <section class="profile-header">
    <div class="container profile-header-holder">
      <h2>Informacije o profilu</h2>
      <div class="btn-holder">
        <RouterLink :class="isProfile ? 'btn-primary btn-primary-active' : 'btn-primary'"  to="/profile">
          Moj Profil
        </RouterLink>
        <RouterLink :class="isProfile ? 'btn-primary' : 'btn-primary btn-primary-active'" to="/profile-license">
          Moja Dozvola
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .profile-header {
    border-top: 2px solid var(--FirstLinear, #94A03C);
    padding: 110px 0px;
    background-image: url('img/default-page-img.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .profile-header-holder {
      display: flex;
      flex-direction: column;
      gap: 50px;  
      h2 {
        text-align: center;
        color: #FBE2B7;
        text-shadow: 4px 2px 10px rgba(255, 255, 255, 0.48);
        font-family: 'Jost', sans-serif;
        font-size: 64px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 89.6px */
      }
      .btn-holder {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;
      }
    }
    @media (max-width: 1280px) {
      .profile-header-holder {
        h2 {
          font-size: 58px;
        }
      }
    }
    @media (max-width: 1024px) {
      .profile-header-holder {
        .btn-holder {
          .btn-primary {
            padding: 20px 38px;
            font-size: 16px;
          }
        }
      }
    }
    @media (max-width: 550px) {
      padding: 25px 0px;
      .profile-header-holder {
        gap: 35px;
        h2 {
          font-size: 34px;
        }
        .btn-holder {
          flex-direction: column;
          gap: 15px;
          .btn-primary {
            width: 100%;
            // padding: 18px 32px;
            font-size: 16px;
            &::before {
              left: -250px;
            }
          }
        }
      }
    }
  }
</style>