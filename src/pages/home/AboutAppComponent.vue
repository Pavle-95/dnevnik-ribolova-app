<script setup>

</script>

<template>
  <section class="about-section">
    <div class="container about-holder">
      <h2>O Nasoj Aplikaciji</h2>
      <p>Predstavljamo vam Dnevnik Ribolova – vašeg ribolovačkog saputnika. Otkrijte savršene ribolovačke lokacije, beležite ulove, pratite statistike vašeg ribolova, i planirajte sledeću avanturu. Ostanite korak ispred uz ažuriranja u stvarnom vremenu o vremenskim uslovima na vašoj ribolovačkoj lokaciji.</p>
      <p>Uložili smo vreme u kreiranje ove aplikacije, i tek smo počeli. Očekujte uzbudljiva ažuriranja, uključujući enciklopediju riba i stručne lekcije o ribolovu. Počnite svoje ribolovačko putovanje danas i pratite rast Dnevnika Ribolova zajedno s vama.</p>
      <img src="img/header/dnevnik-ribolova-logo.svg" alt="Logo On About us">
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-section {
  padding: 60px 0px 60px;
  background-image: url('img/home/about-bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  .about-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 58px;
    h2 {
      text-align: center;
      color: #FBE2B7;
      font-family: 'Inter', sans-serif;
      font-size: 64px;
      font-style: normal;
      font-weight: 800;
      line-height: 140%; /* 89.6px */
    }
    p {
      color: #FBE2B7;
      text-align: center;
      font-family: 'Inter', sans-serif;
      font-size: 30px;
      font-style: normal;
      font-weight: 800;
      line-height: 45px; /* 150% */
    }
    img {
      display: block;
      max-width: 425px;
      min-width: 425px;
      height: auto;
    }
  }
  @media (max-width: 550px) {
    padding: 25px 0px 25px;
    margin: 0px auto 25px;
    width: 90%;
    border-radius: 16px;
    .about-holder {
      gap: 25px;
      max-width: 100%;
      width: 100%;
      padding: 0px 10px;
      h2 {
        font-size: 34px;
      }
      p {
        font-size: 16px;
        line-height: 140%;
      }
      img {
        height: auto;
        display: block;
        max-width: 100%;
        min-width: 100%;
      }
    }
  }
}
</style>