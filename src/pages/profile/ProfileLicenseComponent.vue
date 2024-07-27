<script setup>
  import UserHeader from './partials/UserHeader.vue';
  import { ref, watch } from 'vue';

  // Store  
  import { useAuthStore } from '../../stores/authStore'
  const userInfo = useAuthStore();

  const user = ref(userInfo.user);

  const imgData = ref(arrayBufferToBase64(userInfo.user.img.data ? userInfo.user.img.data : ' '));


  function arrayBufferToBase64( buffer ) {
      var binary = '';
      var bytes = new Uint8Array( buffer );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
      }
      return window.btoa( binary );
    }

    watch(() => userInfo.user.img.data, () => {
    // Do something when props.user.img.data changes
    imgData.value = arrayBufferToBase64(userInfo.user.img.data);
  });

  
</script>

<template>
  <section class="profile-info">
    <article class="container profile-info-holder">
      <div class="profile-header">
        <UserHeader :user="user" />
      </div>
      <div class="profile-content">
        <h3>Ovo nije prava dozvola ovo je prototip dozvole</h3>
        <span class="license-front">
          <img src="img/profile/license-front.png" alt="License Front">
          <p class="license-number">{{user.licenseNumber ? `${user.licenseNumber}` : 'Unesi podatke'}}</p>
          <p class="license-distributor">{{user.distributorName ? `${user.distributorName}` : 'Unesi podatke'}}</p>
          <p class="license-signature-front">{{user.signature ? `${user.signature}` : 'Unesi podatke'}}</p>
        </span>
        <span class="license-back">
          <img src="img/profile/license-back.png" alt="License Back">
          <p class="license-full-names">{{user.fullName ? `${user.fullName}` : 'Unesi podatke'}}</p>
          <p class="license-location">{{user.location ? `${user.location}` : 'Unesi podatke'}}</p>
          <p class="license-id">{{user.userID ? `${user.userID}` : '***************'}}</p>
          <img :src="'data:image/png;base64,' + imgData" alt="slika" class="license-img"/>
          <p class="license-date-of-issuance">{{user.dateOfIssuance ? `${user.dateOfIssuance}` : 'Unesi podatke'}}</p>
          <p class="license-signature-back">{{user.signature ? `${user.signature}` : 'Unesi podatke'}}</p>
        </span>
      </div>
    </article>
  </section>
</template>

<style lang="scss" scoped>
  .profile-info {
    border-top: 2px solid var(--FirstLinear, #94A03C);
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
        // margin-top: 16px;
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
            display: block;
            width: 90%;
            text-align: center;
            font-size: 20px;
            color: blue;
            top: 120px;
            left: 50%;
            transform: translateX(-50%);
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
            display: block;
            width: 90%;
            text-align: center;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
          }
          .license-location {
            display: block;
            width: 90%;
            text-align: center;
            top: 66px;
            left: 50%;
            transform: translateX(-50%);
          }
          .license-id {
            font-size: 21px;
            top: 156px;
            left: 33px;
            letter-spacing: 11px;
          }
          .license-img {
            object-fit: cover;
            max-width: 168px;
            min-width: 168px;
            max-height: 168px;
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