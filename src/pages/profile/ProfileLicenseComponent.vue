<script setup>
  import UserHeader from './partials/UserHeader.vue';

</script>

<template>
  <section class="profile-info">
    <article class="container profile-info-holder">
      <div class="profile-header">
        <UserHeader />
      </div>
      <div class="profile-content">
        <h3>Ovo nije prava dozvola ovo je prototip dozvole</h3>
        <span class="license-front">
          <img src="img/profile/license-front.png" alt="License Front">
          <p class="license-number">0033044</p>
          <p class="license-distributor">Asocijacija Beternica-vlasina D.O.O</p>
          <p class="license-signature-front">Marko Markovic</p>
        </span>
        <span class="license-back">
          <img src="img/profile/license-back.png" alt="License Back">
          <p class="license-full-names">Pavle Pesic</p>
          <p class="license-location">Leskovac</p>
          <p class="license-id">0308995740022</p>
          <img src="img/profile/floyd-miles.png" alt="" class="license-img">
          <p class="license-date-of-issuance">23.01.2023</p>
          <p class="license-signature-back">S Bratislav</p>
        </span>
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
        margin-bottom: 20px;
        flex: 0 0 100%;
        display: flex;
        gap: 35px;
        justify-content: center;
        align-items: center;
      }
      .profile-content {
        margin-top: 16px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 50px 30px;
        h3 {
          text-align: center;
          flex: 0 0 100%;
          color: #FF6060;
          font-family: 'Jost', sans-serif;
          font-size: 36px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%; /* 50.4px */
        }
        .license-front {
          position: relative;
          img {
            display: block;
            max-width: 100%;
            height: auto;
          }
          p {
            position: absolute;
            color: #000000;
            font-family: 'Jost', sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 33.6px */
          }
          .license-number {
            top: 10px;
            left: 40px;
          }
          .license-distributor {
            text-align: center;
            font-size: 20px;
            color: blue;
            top: 120px;
            left: 22px;
          }
          .license-signature-front {
            bottom: 47px;
            right: 55px;
          }
        }
        .license-back {
          position: relative;
          img {
            display: block;
            max-width: 100%;
            height: auto;
          }
          p {
            position: absolute;
            color: #000000;
            font-family: 'Jost', sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 140%; /* 33.6px */
          }
          .license-full-names {
            top: 23px;
            left: 108px;
          }
          .license-location {
            top: 66px;
            left: 120px;
          }
          .license-id {
            font-size: 21px;
            top: 156px;
            left: 33px;
            letter-spacing: 11px;
          }
          .license-img {
            max-width: 168px;
            min-height: 210px;
            position: absolute;
            bottom: 90px;
            left: 30px;
            border-radius: 10px;
          }
          .license-date-of-issuance {
            bottom: 121px;
            right: 20px;
            font-size: 18px;
          }

          .license-signature-back {

            bottom: 35px;
            right: 40px;
          }
        }
      }
    }
  }
</style>