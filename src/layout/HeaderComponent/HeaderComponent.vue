<script setup>
  import { RouterLink, useRouter } from 'vue-router';
  import { ref, watch } from 'vue';

  import MobileHeaderComponent from './MobileHeaderComponent.vue'; 

  // Store  
  import { useAuthStore } from '../../stores/authStore'
  
  // Variable
  const navigationDropDown = ref();
  const navigationDropDownSVG = ref();

  const userInfo = useAuthStore();
  const router = useRouter();
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

  function handleDropDown() {      
    navigationDropDown.value.classList.toggle('showDropDown');    
    navigationDropDownSVG.value.classList.toggle('showDropDownSVG');
  }

  function Logout() {
    router.push('/login');
    localStorage.clear();
  }
</script>

<template>
  <header class="header-holder">
    <ul class="container navigation">
      <li class="navigation-link">
        <RouterLink class="logo-link" to="/">
          <img class="logo-img" src="img/header/dnevnik-ribolova-logo.svg" alt="Logo">
          <p class="logo-text">Dnevnik <br> Ribolova</p>
        </RouterLink>
      </li>
      <li class="navigation-link">
        <RouterLink class="profile-link" to="/profile">
          Profil
        </RouterLink>
      </li>
      <li class="navigation-link">
        <RouterLink class="statistics-link" to="/statistics">
          Statistika
        </RouterLink>
      </li>
      <li class="navigation-link">
        <RouterLink class="location-link" to="/location">
          Lokacije
        </RouterLink>
      </li>
      <li class="navigation-link">
        <RouterLink class="location-link" to="/fishing">
          Pecanje
        </RouterLink>
      </li>
      <li class="navigation-link">
        <RouterLink class="location-link" to="/fishes">
          Vrste Riba
        </RouterLink>
      </li>
      <li class="navigation-link">
        <button @click="Logout" class="logout-link">
          Odjavi Se          
        </button>
      </li>
      <li class="navigation-link-mobile">
        <button @click="handleDropDown" id="profile-mobile-btn" class="profile-mobile-btn">
          <img :src="'data:image/png;base64,' + imgData" alt="slika" class="license-img"/>
        </button>
        <svg ref="navigationDropDownSVG" class="svg-interactive" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <rect y="0.5" width="30" height="30" fill="url(#pattern0_133_1158)"/>
          <defs>
          <pattern id="pattern0_133_1158" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_133_1158" transform="scale(0.01)"/>
          </pattern>
          <image id="image0_133_1158" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcUlEQVR4nO3aMUoDQRhA4Um8gMFKUPQgYq2ldrZiKx4jEe3t5iaSQmzE4IEUnixsKqNmQuL8jO+DQLr9Z94OZCApSZIkSZIkSZIkSZIkSZIkSZIkSZIkSZIkLQvYAs6Be2ACnACD2jsIDIDTfqY74KybNbUM2AVmfPUIjCrONQKmC+Z67WZOLerfwGe+N6sRpY+x6CWZe4pwgtcOOP5h0VWi8HuMuaPUGuBmiYX/WZSCGJ3r1BrgasnFbzxKYYzOZWoNcAh81I5CeYx34CC1CLgt2Ii1R1khRmecWtX/0noo3JA3YGcNz94GXgqfnYFhalmNKBgjThSMEScKxogTBWPEiYIx4kTBGHGiYIw4UTDGZgDD/kJWYrbCDbz9S1/lk1LCGIGiZE9GnJOSjREnSjZGnCjZGHGiZGPEiZKNESdKNkacKNkYdW70k/5PCHPd97ExKgL2gYv+s1dzFkmSJEmSJEmSJEmSJEmSJEmS0r/wCbCwo5oGaLKYAAAAAElFTkSuQmCC"/>
          </defs>
        </svg>
        <ul ref="navigationDropDown" class="navigation-drop-down">
          <li>
            <RouterLink class="profile-link" to="/profile">
              Moj Profil
            </RouterLink>
          </li>
          <li>
            <button @click="Logout" class="logout-link">
              Odjavi Se          
            </button>
          </li>
        </ul>
      </li>
    </ul>
  </header>
  <MobileHeaderComponent />
</template>

<style lang="scss" scoped>
  .header-holder {
    .navigation {
      padding: 10px 0px;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 35px;
      .navigation-link {
        .logo-link {
          display: flex;
          align-items: center;
        }
        a {
          color: #FBE2B7;
          font-family: 'Jost', sans-serif;
          font-size: 17px;
          font-style: normal;
          font-weight: 600;
          line-height: 35px; /* 159.091% */
          text-transform: uppercase;
          transition: .3s ease-out;
          &:hover {
            transition: .3s ease-out;
            &::after {
              width: 100%;
            }
          }
          &::after {
            transition: .3s ease-out;
            display: block;
            content: '';
            width: 0%;
            height: 2px;
            background: #FBE2B7;
          }
        }
        .logout-link {
          padding: 10px 25px;
          border-radius: 10px;
          border: 1px solid #FBE2B7;
          background: #21221C;
          color: #FBE2B7;
          font-family: "Jost", sans-serif;
          font-size: 17px;
          font-style: normal;
          font-weight: 600;
          line-height: 35px;
          text-transform: uppercase;
          transition: 0.3s ease-out;
          &:hover {
            cursor: pointer;
          }
          &::after {
            all: unset;
          }
        }
        .logo-link {
          &::after {
            all: unset;
          }
        }
        &:first-of-type {
          margin-right: auto;
        }
        &:nth-of-type(7) {
          margin-left: auto;
        }
      }
      .navigation-link-mobile {
        display: none;
      }
    }
    @media (max-width: 1280px) {
      .navigation {
        .navigation-link {
          display: none;
          &:first-of-type {
            display: block;
          }
        }
        .navigation-link-mobile {
          display: block;
          margin-right: 25px;
          max-width: 65px;
          position: relative;
          .profile-mobile-btn {
            border: none;
            overflow: hidden;
            border-radius: 50%;
            img {
              display: block;
              max-width: 100%;
              height: auto;
            }
          }
          .navigation-drop-down {
            position: absolute;
            width: 100%;
            min-width: 150px;
            top: calc(100% + 12px);
            right: 0px;
            background: #21221C;;
            // border: 1px solid #FBE2B7;
            border-radius: 16px;
            display: none;
            list-style: none;
            flex-direction: column;
            gap: 16px;
            padding: 24px 12px;
            li {
              border-bottom: 1px solid #94A03C;
              button, a {
                background-color: transparent;
                border: none;
                color: white;
                // text-shadow: 4px 2px 10px rgba(255, 255, 255, 0.48);
                font-family: "Inter", sans-serif;
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 140%;
              }
            }
          }
          .svg-interactive {
            transition: .3s ease;
            position: absolute;
            top: calc(50% - 15px);
            // transform: translate(0%, -50%);
          }
        }
      }
    }
    @media (max-width: 550px) {
      .navigation {
        padding: 18px 0px;
        .navigation-link {
          .logo-link {
            max-width: 53px;
            .logo-img {
              display: block;
              height: auto;
              max-width: 100%;
            }
            .logo-text {
              font-size: 14px;
              line-height: 24px;
            }
          }
        }
        .navigation-link-mobile {
          max-width: 53px;
        }
      }
    }
  }
</style>