<script setup>
  import { ref, defineProps, onMounted } from 'vue';
  import { useAuthStore } from 'stores/authStore.js';
  import { RouterLink } from 'vue-router';
  import { getCurrentWeather } from 'services/getWeatherService.js';
  import { toast } from 'vue3-toastify';
  import 'vue3-toastify/dist/index.css';

  defineProps({
    userName: String,
  })

  const authStore = useAuthStore();
  const userLocation = ref(null);
  
  // let isLoading = ref(false);
  let currentTemperature = ref();
  let highTemperature = ref();
  let lowTemperature = ref();
  let iconCode = ref();
  let city = ref();
  let country = ref();
  let currentWeatherDescription = ref();

  ////// Functions
  // Simple function to reduce code and handle the displaying data
  function weatherDataDisplay(weatherData) {
    currentTemperature.value = parseInt(weatherData.main.temp);
    highTemperature.value = parseInt(weatherData.main.temp_max);
    lowTemperature.value = parseInt(weatherData.main.temp_min);


    iconCode.value = weatherData.weather[0].icon
    city.value = weatherData.name;
    country.value = weatherData.sys.country;
    currentWeatherDescription.value = weatherData.weather[0].description;
  }

  async function getCurrentWeatherHandler(location, userToken) {
    // Save time when last api call is made
    localStorage.setItem('lastAPICallTime', Date.now());
    
    try {
      const respoonse = await getCurrentWeather(location, userToken);

      if (respoonse.cod === '404' || respoonse.cod === '400') {
        localStorage.removeItem('lastAPICallTime');        
        userLocation.value = null

        toast('Lokacija nije pronađen', {
          autoClose: 1500,
          "theme": "dark",
          "type": "warning",
          "dangerouslyHTMLString": true
        })
      }
      else {
        localStorage.setItem('weather', JSON.stringify(respoonse))
        weatherDataDisplay(respoonse);
      }

    } catch (error) {
      console.log(error);
    }    
  }

  function shouldMakeAPICall() {
    // Retrieve the last API call timestamp from localStorage
    const lastAPICallTime = localStorage.getItem('lastAPICallTime');

    // If there is no previous timestamp or it's been more than one hour (3600 seconds), return true
    return !lastAPICallTime || (Date.now() - lastAPICallTime > 3600000);
  }

  onMounted(() => {
    authStore.isUserLogin();
    authStore.user.location === '' ? userLocation.value = null : userLocation.value = authStore.user.location

    if (!userLocation.value || shouldMakeAPICall()) {
      getCurrentWeatherHandler(userLocation.value, authStore.userToken)
    }
    else {
      const weather = JSON.parse(localStorage.getItem('weather'));
      weatherDataDisplay(weather);
    }
  })

</script>

<template>
  <section class="home-hero">
    <div class="container hero-holder">
      <div class="hero-content">
        <h1>Dnevnik Ribolova</h1>
        <h2>Zdravo <span>{{ userName }}</span> <br> lep dan za pecanje!</h2>
        <RouterLink class="btn-primary hero-btn" to="/fishing">
          Zapocni Pecanje
        </RouterLink>
      </div>
      <div class="hero-wether">
        <div class="img-holder">
          <img src="img/home/appWidget.png" alt="Hero Widget">

          <!-- No Location Added in profile -->
          <h3 class="no-location" v-if="!userLocation">Molimo vas unesite lokaciju <br> za vas profil</h3>

          <!-- Is Loading Animation -->
          <p v-if="userLocation" class="currentTemperature">{{ currentTemperature }}°</p>

          <img 
            :src="`src/assets/images/weatherIcons/${iconCode}@2x.png`" 
            :alt="iconCode"
            v-if="userLocation" class="weatherIcon">


          <p v-if="userLocation" class="high-low">H:{{ highTemperature }}° <span>L:{{ lowTemperature }}°</span> </p>
          <p v-if="userLocation" class="city-country">{{ city }}, <span>{{ country }}</span> </p>
          <p v-if="userLocation" class="currentWeatherDescription">{{ currentWeatherDescription }}</p>

        </div>
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
        flex: 0 0 33%;
        .img-holder {
          display: flex;
          justify-content: end;
          position: relative;
          .no-location {
          width: 100%;
          margin-left: auto;
          position: absolute;
          top: 55%;
          left: 140px;
          text-align: left;
          color: #FBE2B7;
          text-shadow: 4px 2px 10px rgba(255, 255, 255, 0.48);
          font-family: 'Inter', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 800;
          line-height: 140%; /* 89.6px */
        }
        .currentTemperature {
          position: absolute;
          top: 50px;
          left: 120px;
          color: #FBE2B7;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-family: 'Jost', sans-serif;
          font-size: 70px;
          font-style: normal;
          font-weight: 500;
          line-height: 41px; /* 58.571% */
          letter-spacing: 0.374px;
        }
        .weatherIcon {
          width: 30%;
          position: absolute;
          right: 40px;
          top: -10px;
        }
        .high-low {
          position: absolute;
          bottom: 55px;
          left: 120px;
          color: rgba(251, 226, 183, 0.60);
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-family: 'Jost', sans-serif;
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px; /* 100% */
          letter-spacing: -0.078px;
        }
        .city-country {
          position: absolute;
          bottom: 21px;
          left: 120px;
          color: #FBE2B7;
          font-family: 'Jost', sans-serif;
          font-size: 30px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
          letter-spacing: -0.408px;
        }
        .currentWeatherDescription {
          position: absolute;
          right: 41px;
          bottom: 42px;
          color: #FBE2B7;
          text-align: right;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-family: 'Jost', sans-serif;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 18px; /* 81.818% */
          letter-spacing: -0.078px;
          text-transform: capitalize;
        }

        img {
          display: block;
          height: auto;
          max-width: 100%;
        }

        }
      }
    }
  }
</style>