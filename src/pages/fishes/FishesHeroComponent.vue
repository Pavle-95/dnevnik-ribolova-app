<script setup>

</script>

<template>
    <section class="fishes-header">
    <div class="container fishes-header-holder">
      <h1>Vrste slatkovodnih riba sa Balkana</h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .fishes-header {
    border-top: 2px solid #94A03C;
    padding: 150px 0px;
    background-image: url('img/default-page-img.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .fishes-header-holder {
      display: flex;
      flex-direction: column;
      gap: 50px;  
      h1 {
        text-align: center;
        color: #FBE2B7;
        text-shadow: 4px 2px 10px rgba(255, 255, 255, 0.48);
        font-family: 'Jost', sans-serif;
        font-size: 64px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 89.6px */
      }
    }
    @media (max-width: 1280px) {
      .fishes-header-holder {
        h1 {
          font-size: 58px;
        }
      }
    }
    @media (max-width: 550px) {
      padding: 25px 0px;
      .fishes-header-holder {
        h1 {
          font-size: 34px;
        }
      }
    }
  }
</style>