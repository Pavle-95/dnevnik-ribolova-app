<script setup>
  import { defineProps } from 'vue';
  import { RouterLink } from 'vue-router';

  defineProps({
    userName: String,
  })




</script>

<template>
  <section class="home-hero">
    <div class="container hero-holder">
      <div class="hero-content">
        <h1>Dnevnik Ribolova</h1>
        <h2>Zdravo <span>{{ userName }}</span> <br> lep dan za pecanje!</h2>
        <RouterLink class="btn-primary hero-btn" to="/location">
          Zapocni Pecanje
        </RouterLink>
      </div>
      <div class="hero-wether">
        <img src="img/home/appWidget.png" alt="Hero Widget">
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .home-hero {
    padding: 220px 0px;
    background-image: url('img/home/hero-img.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .hero-holder {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .hero-content {
        flex: 0 0 49%;
        max-width: 620px;
        h1 {
          display: none;
        }
        h2 {
          color: #FBE2B7;
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
        .hero-btn {
          margin-top: 40px;
          display: block;
          width: fit-content;
          &::before {
            left: -190px;
          }
          &:hover {
            &::before {
              left: 250px;
            }
          }
        }
      }
      .hero-wether {
        flex: 0 0 49%;
        img {
          margin-left: auto;
          display: block;
          height: auto;
          max-width: 100%;
        }
      }
    }
  }
</style>