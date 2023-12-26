<script setup>

</script>

<template>
  <section class="statistics-hero">
    <div class="statistics-hero-holde container">
      <h1>Uronite u svoj ribolovački uspeh <br>
          Pratite kako napredujete </h1>
      <p>Korak po korak, ulov po ulov pratite svoj put od početnika do stručnjaka. <br>
          Naša statistika dokumentuje vašu evoluciju ribolova, nudeći vam vizuelni prikaz vašeg uspona.</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .statistics-hero {
    border-top: 2px solid var(--FirstLinear, #94A03C);
    padding: 110px 0px;
    background-image: url('img/default-page-img.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .statistics-hero-holde {
      h1 {
        color: #FBE2B7;
        text-align: center;
        text-shadow: 4px 2px 10px rgba(255, 255, 255, 0.48);
        font-family: 'Inter', sans-serif;
        font-size: 64px;
        font-style: normal;
        font-weight: 800;
        line-height: 140%; /* 89.6px */
      }
      p {
        margin-top: 40px;
        color: #FFF;
        text-align: center;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-family: 'Jost', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 30px; /* 150% */
      }
    }
  }
</style>