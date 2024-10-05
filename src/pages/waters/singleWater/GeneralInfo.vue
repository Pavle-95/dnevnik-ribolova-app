<script setup>
  import { defineProps, onMounted, ref } from 'vue';
  import { getCurrentWeatherCoordinates } from 'services/getWeatherService.js';
  import { useAuthStore } from '../../../stores/authStore';


  let authStore = useAuthStore();
  
  let handleWeather = ref(null);
  let locationWeather = ref(null);
  let oneDay = ref(true);
  let next24hList = ref([]);

  function formatTime(timeString) {
    const timestamp = timeString;
    const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds
    const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Remove AM/PM from the formatted time
    const timeWithoutAMPM = formattedTime.replace(/\s[APMapm]{2}$/i, '');

    return timeWithoutAMPM;
  }

  function formatTemperature(temperature) {
    const formatedTemperature = Math.round(temperature);
    return formatedTemperature; 
  }

  function formatHours(inputTime, inputType) {
    // Assuming inputTime is in the format HH:MM:SS
    // Split the input time by ":" or "-" to get hours, minutes, and seconds
    const [hours, minutes, seconds] = inputTime.split(/[: -]/);

    if (inputType === '-') {
        const formattedTime = `${hours}:${minutes}`;
        return formattedTime;
    }
    if (inputType === ':') {
        const formattedTime = `${minutes}/${seconds}`;
        return formattedTime;
    }
}

  function dayHandler(isOneDay) {
    oneDay.value = isOneDay
    next24hList.value = [];
    if(oneDay.value === true) {
      locationWeather.value = handleWeather.value.list[0];
      locationWeather.value.sunrise = handleWeather.value.city.sunrise;
      
      for (let i = 0; i < 6; i++) {
        next24hList.value.push(handleWeather.value.list[i]);
      }
    }
    else {
      locationWeather.value = handleWeather.value.list[1];
      locationWeather.value.sunrise = handleWeather.value.city.sunrise;
      for (let i = 0; i < 40; i = i+8) {
        next24hList.value.push(handleWeather.value.list[i]);
      }
    }
  }

  async function fetchWaterWeatherData(location, token) {
    const response = await getCurrentWeatherCoordinates(location, token)
    handleWeather.value = await response;
    dayHandler(true);

  }

  const props = defineProps({
    waterName: String,
    waterCoordinates: Object,
  });


  onMounted(() => {
    authStore.isUserLogin;
    // In this function i call data from backend
    if(props.waterCoordinates){
      fetchWaterWeatherData(props.waterCoordinates, authStore.userToken);
    }

  })
  
  // setTimeout(() => {
  //   dayHandler(true);
  // }, 1000)
</script>

<template>
  <section class="general-info-section">
    <span class="general-info-btn-holder">
      <h2>Meteorološke Informacije</h2>
      <button class="btn-primary" v-if="oneDay !== true" @click="dayHandler(true)">Za Danas</button>
      <button class="btn-primary" v-if="oneDay !== false" @click="dayHandler(false)">Naredna 5 Dana</button>
    </span>
    <div v-if="locationWeather" class="general-info-holder">

      <article class="single-info-card feels-like">
        <h3 class="card-tittle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5H13.5V6H10V5ZM10 8H15V9H10V8ZM10 11H13.5V12H10V11ZM5 10.092V3.5H4V10.092C3.6664 10.2099 3.38523 10.442 3.20619 10.7472C3.02715 11.0524 2.96177 11.4111 3.02161 11.7599C3.08144 12.1086 3.26264 12.425 3.53317 12.6531C3.80371 12.8811 4.14616 13.0062 4.5 13.0062C4.85385 13.0062 5.1963 12.8811 5.46683 12.6531C5.73737 12.425 5.91857 12.1086 5.9784 11.7599C6.03824 11.4111 5.97286 11.0524 5.79382 10.7472C5.61478 10.442 5.33361 10.2099 5 10.092Z" fill="#8C8C8C"/>
            <path d="M15 1.99993H6.487C6.17328 1.58029 5.73525 1.27022 5.23518 1.11383C4.73512 0.957431 4.19847 0.962665 3.70155 1.12879C3.20463 1.29491 2.77273 1.61345 2.46726 2.03914C2.16178 2.46483 1.99828 2.97599 2 3.49993V9.05493C1.51767 9.54722 1.19141 10.1709 1.06213 10.8479C0.93285 11.5249 1.00631 12.2249 1.2733 12.8603C1.54029 13.4957 1.98892 14.0381 2.56294 14.4195C3.13695 14.801 3.81081 15.0044 4.5 15.0044C5.18919 15.0044 5.86305 14.801 6.43707 14.4195C7.01108 14.0381 7.45972 13.4957 7.7267 12.8603C7.99369 12.2249 8.06715 11.5249 7.93788 10.8479C7.8086 10.1709 7.48234 9.54722 7 9.05493V3.49993C7 3.33199 6.98308 3.16448 6.9495 2.99993H15V1.99993ZM4.5 13.9999C3.99387 14.0007 3.49947 13.8475 3.08236 13.5609C2.66525 13.2742 2.34512 12.8675 2.16443 12.3947C1.98373 11.9219 1.95101 11.4054 2.07059 10.9136C2.19017 10.4218 2.45641 9.97796 2.834 9.64093L3 9.49143V3.49993C3 3.10211 3.15804 2.72058 3.43934 2.43927C3.72065 2.15797 4.10218 1.99993 4.5 1.99993C4.89783 1.99993 5.27936 2.15797 5.56066 2.43927C5.84197 2.72058 6 3.10211 6 3.49993V9.49143L6.166 9.64093C6.5436 9.97796 6.80984 10.4218 6.92942 10.9136C7.049 11.4054 7.01627 11.9219 6.83558 12.3947C6.65488 12.8675 6.33476 13.2742 5.91764 13.5609C5.50053 13.8475 5.00613 14.0007 4.5 13.9999Z" fill="#8C8C8C"/>
          </svg>
          Realni Osecaj</h3>
        <h4 class="card-temp">
          {{ formatTemperature(locationWeather.main.feels_like) }}°
        </h4>
        <p class="feels-like-desctiption">Realni osecaj temperature</p>
      </article>
      <article class="single-info-card min-max">
        <h3 class="card-tittle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5H13.5V6H10V5ZM10 8H15V9H10V8ZM10 11H13.5V12H10V11ZM5 10.092V3.5H4V10.092C3.6664 10.2099 3.38523 10.442 3.20619 10.7472C3.02715 11.0524 2.96177 11.4111 3.02161 11.7599C3.08144 12.1086 3.26264 12.425 3.53317 12.6531C3.80371 12.8811 4.14616 13.0062 4.5 13.0062C4.85385 13.0062 5.1963 12.8811 5.46683 12.6531C5.73737 12.425 5.91857 12.1086 5.9784 11.7599C6.03824 11.4111 5.97286 11.0524 5.79382 10.7472C5.61478 10.442 5.33361 10.2099 5 10.092Z" fill="#8C8C8C"/>
            <path d="M15 1.99993H6.487C6.17328 1.58029 5.73525 1.27022 5.23518 1.11383C4.73512 0.957431 4.19847 0.962665 3.70155 1.12879C3.20463 1.29491 2.77273 1.61345 2.46726 2.03914C2.16178 2.46483 1.99828 2.97599 2 3.49993V9.05493C1.51767 9.54722 1.19141 10.1709 1.06213 10.8479C0.93285 11.5249 1.00631 12.2249 1.2733 12.8603C1.54029 13.4957 1.98892 14.0381 2.56294 14.4195C3.13695 14.801 3.81081 15.0044 4.5 15.0044C5.18919 15.0044 5.86305 14.801 6.43707 14.4195C7.01108 14.0381 7.45972 13.4957 7.7267 12.8603C7.99369 12.2249 8.06715 11.5249 7.93788 10.8479C7.8086 10.1709 7.48234 9.54722 7 9.05493V3.49993C7 3.33199 6.98308 3.16448 6.9495 2.99993H15V1.99993ZM4.5 13.9999C3.99387 14.0007 3.49947 13.8475 3.08236 13.5609C2.66525 13.2742 2.34512 12.8675 2.16443 12.3947C1.98373 11.9219 1.95101 11.4054 2.07059 10.9136C2.19017 10.4218 2.45641 9.97796 2.834 9.64093L3 9.49143V3.49993C3 3.10211 3.15804 2.72058 3.43934 2.43927C3.72065 2.15797 4.10218 1.99993 4.5 1.99993C4.89783 1.99993 5.27936 2.15797 5.56066 2.43927C5.84197 2.72058 6 3.10211 6 3.49993V9.49143L6.166 9.64093C6.5436 9.97796 6.80984 10.4218 6.92942 10.9136C7.049 11.4054 7.01627 11.9219 6.83558 12.3947C6.65488 12.8675 6.33476 13.2742 5.91764 13.5609C5.50053 13.8475 5.00613 14.0007 4.5 13.9999Z" fill="#8C8C8C"/>
          </svg>
          MIN / MAX</h3>
        <span class="card-min-max">
          <h4>{{ formatTemperature(locationWeather.main.temp_max) }}° <span>max</span></h4>
          <h4>{{ formatTemperature(locationWeather.main.temp_min) }}° <span>min</span></h4>          
        </span>
      </article>

      <article class="single-info-card rain-possibility">
        <h3 class="card-tittle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.8448 3.08886C8.90002 2.64596 6.56717 5.513 3.72043 5.75981C2.64078 5.85222 1.58931 5.63359 0.566013 5.10391C0.0859204 4.85372 -0.0887609 4.54718 0.0419685 4.18429C0.0802074 4.0786 0.140617 3.98232 0.219173 3.90186C0.297729 3.8214 0.39263 3.75861 0.497553 3.71766C0.602477 3.67672 0.715015 3.65856 0.827674 3.6644C0.940333 3.67024 1.05053 3.69994 1.15092 3.75153C5.0018 5.73614 7.34479 1.70944 10.9421 1.63844C11.8245 1.61815 14.6916 1.83453 14.2182 3.35258C14.178 3.48148 14.0908 3.59045 13.9742 3.65757C13.8575 3.72468 13.72 3.74497 13.5894 3.71434C12.9267 3.5622 12.3959 3.17339 11.8448 3.08886Z" fill="#8D8D8C"/>
            <path d="M9.94769 9.67841C10.5427 8.44549 11.1479 7.22159 11.7633 6.0067C12.5882 4.38047 13.4571 5.50632 13.9406 6.45299C14.9256 8.36886 15.5375 9.61304 15.7764 10.1856C16.7129 12.444 14.5424 14.9223 12.2569 14.4996C9.90036 14.0669 8.87932 11.9031 9.94769 9.67841Z" fill="#8D8D8C"/>
            <path d="M1.1846 7.64981C2.75786 8.45899 4.26238 8.46011 5.69815 7.65319C7.31085 6.75048 8.02969 6.16103 9.97373 5.69446C10.3709 5.601 10.6518 6.17253 10.4662 6.53592C10.2569 6.94586 9.88088 7.11181 9.23122 7.37595C6.25938 8.58971 3.52759 11.095 0.224413 8.67424C0.124437 8.60095 0.056181 8.49229 0.0335643 8.37041C0.0109475 8.24853 0.0356727 8.12261 0.102699 8.01834L0.166937 7.92029C0.272792 7.757 0.435566 7.63889 0.623635 7.5889C0.811704 7.53892 1.01164 7.56063 1.1846 7.64981Z" fill="#8D8D8C"/>
            <path d="M1.7698 11.8523C4.23112 12.6806 6.18192 11.335 8.26795 10.0807C8.49335 9.9432 8.59478 10.0063 8.57224 10.27L8.50462 11.0375C8.49395 11.1555 8.45829 11.2699 8.39999 11.3731C8.3417 11.4763 8.26212 11.5659 8.16653 11.6359C6.00611 13.2114 3.01398 14.3643 0.559424 12.8125C0.150331 12.5555 -0.133668 12.0991 0.275425 11.7137C0.704804 11.3114 1.2728 11.6833 1.7698 11.8523Z" fill="#8D8D8C"/>
          </svg>
          Mogucnost kise</h3>
        <span class="card-rain">
          <h4>{{ locationWeather.pop }}%</h4>     
        </span>
        <span class="chance-of-rain-slider">
          <svg class="progress-bar" width="180" height="4" viewBox="0 0 180 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="180" height="4" rx="2" fill="url(#paint0_linear_56_8532)"/>
            <linearGradient id="paint0_linear_56_8532" x1="0" y1="2.91954" x2="186.391" y2="2.91957" gradientUnits="userSpaceOnUse">
            <stop stop-color="#94A03C"/>
            <stop offset="1" stop-color="#1E2913"/>
            </linearGradient>
          </svg>
          <svg class="progress-dot" style="" width="10" height="8" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 3.75C3.4665 3.75 4.25 2.9665 4.25 2C4.25 1.0335 3.4665 0.25 2.5 0.25C1.5335 0.25 0.75 1.0335 0.75 2C0.75 2.9665 1.5335 3.75 2.5 3.75Z" fill="white" stroke="black" stroke-width="0.5"/>
          </svg>
        </span>
        <p class="chance-of-rain">Mogucnost kise</p>
      </article>

      <article class="single-info-card sunrise">
        <h3 class="card-tittle">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_56_15794)">
            <path d="M7.646 1.64592C7.69245 1.59935 7.74762 1.56241 7.80837 1.5372C7.86911 1.512 7.93423 1.49902 8 1.49902C8.06577 1.49902 8.13089 1.512 8.19163 1.5372C8.25238 1.56241 8.30755 1.59935 8.354 1.64592L9.854 3.14592C9.90049 3.19241 9.93736 3.24759 9.96252 3.30833C9.98768 3.36907 10.0006 3.43417 10.0006 3.49992C10.0006 3.56566 9.98768 3.63076 9.96252 3.6915C9.93736 3.75224 9.90049 3.80743 9.854 3.85392C9.80751 3.90041 9.75232 3.93728 9.69158 3.96244C9.63084 3.9876 9.56574 4.00055 9.5 4.00055C9.43426 4.00055 9.36916 3.9876 9.30842 3.96244C9.24768 3.93728 9.19249 3.90041 9.146 3.85392L8.5 3.20692V4.99992C8.5 5.13253 8.44732 5.2597 8.35355 5.35347C8.25979 5.44724 8.13261 5.49992 8 5.49992C7.86739 5.49992 7.74021 5.44724 7.64645 5.35347C7.55268 5.2597 7.5 5.13253 7.5 4.99992V3.20692L6.854 3.85392C6.80751 3.90041 6.75232 3.93728 6.69158 3.96244C6.63084 3.9876 6.56574 4.00055 6.5 4.00055C6.43426 4.00055 6.36916 3.9876 6.30842 3.96244C6.24768 3.93728 6.19249 3.90041 6.146 3.85392C6.09951 3.80743 6.06264 3.75224 6.03748 3.6915C6.01232 3.63076 5.99937 3.56566 5.99937 3.49992C5.99937 3.43417 6.01232 3.36907 6.03748 3.30833C6.06264 3.24759 6.09951 3.19241 6.146 3.14592L7.646 1.64592ZM2.343 4.84292C2.43676 4.74918 2.56392 4.69652 2.6965 4.69652C2.82908 4.69652 2.95624 4.74918 3.05 4.84292L4.464 6.25692C4.55508 6.35122 4.60548 6.47752 4.60434 6.60862C4.6032 6.73972 4.55061 6.86512 4.45791 6.95783C4.3652 7.05053 4.2398 7.10312 4.1087 7.10425C3.9776 7.10539 3.8513 7.055 3.757 6.96392L2.343 5.54992C2.24926 5.45615 2.19661 5.329 2.19661 5.19642C2.19661 5.06383 2.24926 4.93668 2.343 4.84292ZM13.657 4.84292C13.7507 4.93668 13.8034 5.06383 13.8034 5.19642C13.8034 5.329 13.7507 5.45615 13.657 5.54992L12.243 6.96392C12.1969 7.01167 12.1417 7.04976 12.0807 7.07597C12.0197 7.10217 11.9541 7.11597 11.8877 7.11654C11.8213 7.11712 11.7555 7.10447 11.694 7.07933C11.6326 7.05419 11.5767 7.01706 11.5298 6.97011C11.4829 6.92317 11.4457 6.86734 11.4206 6.80589C11.3954 6.74445 11.3828 6.67861 11.3834 6.61222C11.384 6.54583 11.3977 6.48022 11.4239 6.41921C11.4502 6.35821 11.4882 6.30304 11.536 6.25692L12.95 4.84292C13.0438 4.74918 13.1709 4.69652 13.3035 4.69652C13.4361 4.69652 13.5632 4.74918 13.657 4.84292ZM11.709 11.9999C11.9542 11.3928 12.0466 10.7347 11.978 10.0835C11.9095 9.43231 11.6822 8.8079 11.316 8.26508C10.9497 7.72227 10.4559 7.27765 9.87773 6.97027C9.29957 6.66289 8.65479 6.50215 8 6.50215C7.34521 6.50215 6.70043 6.66289 6.12227 6.97027C5.54411 7.27765 5.05025 7.72227 4.68405 8.26508C4.31784 8.8079 4.0905 9.43231 4.02197 10.0835C3.95344 10.7347 4.04582 11.3928 4.291 11.9999H0.5C0.367392 11.9999 0.240215 12.0526 0.146447 12.1464C0.0526784 12.2401 0 12.3673 0 12.4999C0 12.6325 0.0526784 12.7597 0.146447 12.8535C0.240215 12.9472 0.367392 12.9999 0.5 12.9999H15.5C15.6326 12.9999 15.7598 12.9472 15.8536 12.8535C15.9473 12.7597 16 12.6325 16 12.4999C16 12.3673 15.9473 12.2401 15.8536 12.1464C15.7598 12.0526 15.6326 11.9999 15.5 11.9999H11.71H11.709ZM0 10.4999C0 10.3673 0.0526784 10.2401 0.146447 10.1464C0.240215 10.0526 0.367392 9.99992 0.5 9.99992H2.5C2.63261 9.99992 2.75979 10.0526 2.85355 10.1464C2.94732 10.2401 3 10.3673 3 10.4999C3 10.6325 2.94732 10.7597 2.85355 10.8535C2.75979 10.9472 2.63261 10.9999 2.5 10.9999H0.5C0.367392 10.9999 0.240215 10.9472 0.146447 10.8535C0.0526784 10.7597 0 10.6325 0 10.4999ZM13 10.4999C13 10.3673 13.0527 10.2401 13.1464 10.1464C13.2402 10.0526 13.3674 9.99992 13.5 9.99992H15.5C15.6326 9.99992 15.7598 10.0526 15.8536 10.1464C15.9473 10.2401 16 10.3673 16 10.4999C16 10.6325 15.9473 10.7597 15.8536 10.8535C15.7598 10.9472 15.6326 10.9999 15.5 10.9999H13.5C13.3674 10.9999 13.2402 10.9472 13.1464 10.8535C13.0527 10.7597 13 10.6325 13 10.4999Z" fill="#8C8C8C"/>
            </g>
            <defs>
            <clipPath id="clip0_56_15794">
            <rect width="16" height="13" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
            </defs>
          </svg>
          SUNRISE</h3>
        <span class="card-sunrise">
          <h4>{{ formatTime(locationWeather.sunrise) }}</h4>     
        </span>
        <svg class="svg-sunrise" width="170" height="54" viewBox="0 0 170 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 52.0818C12.081 51.1876 38.5267 45.5631 55.6614 30.2186C77.0797 11.038 102.737 23.5121 113.892 30.2186C125.048 36.9251 139.996 42.1562 169 37.5958" stroke="url(#paint0_linear_354_1359)" stroke-width="2" stroke-linecap="round"/>
          <g filter="url(#filter0_dddd_354_1359)">
          <path d="M81.2002 19.5C81.2002 20.8807 80.0809 22 78.7002 22C77.3195 22 76.2002 20.8807 76.2002 19.5C76.2002 18.1193 77.3195 17 78.7002 17C80.0809 17 81.2002 18.1193 81.2002 19.5Z" fill="url(#paint1_linear_354_1359)"/>
          <path d="M80.9502 19.5C80.9502 20.7426 79.9428 21.75 78.7002 21.75C77.4576 21.75 76.4502 20.7426 76.4502 19.5C76.4502 18.2574 77.4576 17.25 78.7002 17.25C79.9428 17.25 80.9502 18.2574 80.9502 19.5Z" stroke="white" stroke-width="0.5"/>
          </g>
          <path style="mix-blend-mode:color-dodge" d="M79.0833 39.7663C90.0645 39.7663 98.9665 30.8643 98.9665 19.8831C98.9665 8.90198 90.0645 0 79.0833 0C68.1022 0 59.2002 8.90198 59.2002 19.8831C59.2002 30.8643 68.1022 39.7663 79.0833 39.7663Z" fill="url(#paint2_radial_354_1359)"/>
          <defs>
          <filter id="filter0_dddd_354_1359" x="75.2002" y="16" width="7" height="7" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.52549 0 0 0 0 0.109804 0 0 0 0.85 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_354_1359"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.52549 0 0 0 0 0.109804 0 0 0 0.5 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow_354_1359" result="effect2_dropShadow_354_1359"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.52549 0 0 0 0 0.109804 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow_354_1359" result="effect3_dropShadow_354_1359"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="0.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.054902 0 0 0 0 0.52549 0 0 0 0 0.109804 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow_354_1359" result="effect4_dropShadow_354_1359"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_354_1359" result="shape"/>
          </filter>
          <linearGradient id="paint0_linear_354_1359" x1="1" y1="43.416" x2="174.965" y2="43.416" gradientUnits="userSpaceOnUse">
          <stop stop-color="#94A03C"/>
          <stop offset="1" stop-color="#1E2913"/>
          </linearGradient>
          <linearGradient id="paint1_linear_354_1359" x1="76.2002" y1="20.6494" x2="81.3777" y2="20.6494" gradientUnits="userSpaceOnUse">
          <stop stop-color="#94A03C"/>
          <stop offset="1" stop-color="#4B7669"/>
          </linearGradient>
          <radialGradient id="paint2_radial_354_1359" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.0833 19.8831) scale(19.8831)">
          <stop offset="0.09" stop-color="white"/>
          <stop offset="0.17" stop-color="#5E5E5E"/>
          <stop offset="0.22"/>
          </radialGradient>
          </defs>
        </svg>
      </article>

      <article class="single-info-card wind">
        <h3 class="card-tittle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 11.5C11.5 12.0304 11.2893 12.5391 10.9142 12.9142C10.5391 13.2893 10.0304 13.5 9.5 13.5C8.64375 13.5 7.81563 12.9419 7.53125 12.1737C7.48798 12.0501 7.49498 11.9144 7.55074 11.7958C7.6065 11.6773 7.70656 11.5853 7.82941 11.5398C7.95226 11.4942 8.08808 11.4987 8.20764 11.5523C8.32721 11.6059 8.42096 11.7043 8.46875 11.8263C8.60875 12.2044 9.0625 12.5 9.5 12.5C9.76522 12.5 10.0196 12.3946 10.2071 12.2071C10.3946 12.0196 10.5 11.7652 10.5 11.5C10.5 11.2348 10.3946 10.9804 10.2071 10.7929C10.0196 10.6054 9.76522 10.5 9.5 10.5H2.5C2.36739 10.5 2.24021 10.4473 2.14645 10.3536C2.05268 10.2598 2 10.1326 2 10C2 9.86739 2.05268 9.74021 2.14645 9.64645C2.24021 9.55268 2.36739 9.5 2.5 9.5H9.5C10.0304 9.5 10.5391 9.71071 10.9142 10.0858C11.2893 10.4609 11.5 10.9696 11.5 11.5ZM7.5 6.5C8.03043 6.5 8.53914 6.28929 8.91421 5.91421C9.28929 5.53914 9.5 5.03043 9.5 4.5C9.5 3.96957 9.28929 3.46086 8.91421 3.08579C8.53914 2.71071 8.03043 2.5 7.5 2.5C6.64375 2.5 5.81563 3.05813 5.53125 3.82625C5.48798 3.94992 5.49498 4.08562 5.55074 4.20418C5.6065 4.32274 5.70656 4.41468 5.82941 4.46022C5.95226 4.50575 6.08808 4.50125 6.20764 4.44768C6.32721 4.3941 6.42096 4.29574 6.46875 4.17375C6.60875 3.79562 7.0625 3.5 7.5 3.5C7.76522 3.5 8.01957 3.60536 8.20711 3.79289C8.39464 3.98043 8.5 4.23478 8.5 4.5C8.5 4.76522 8.39464 5.01957 8.20711 5.20711C8.01957 5.39464 7.76522 5.5 7.5 5.5H1.5C1.36739 5.5 1.24021 5.55268 1.14645 5.64645C1.05268 5.74021 1 5.86739 1 6C1 6.13261 1.05268 6.25979 1.14645 6.35355C1.24021 6.44732 1.36739 6.5 1.5 6.5H7.5ZM13 4.5C12.1438 4.5 11.3156 5.05813 11.0312 5.82625C10.988 5.94992 10.995 6.08562 11.0507 6.20418C11.1065 6.32274 11.2066 6.41468 11.3294 6.46022C11.4523 6.50575 11.5881 6.50125 11.7076 6.44768C11.8272 6.3941 11.921 6.29574 11.9688 6.17375C12.1088 5.79562 12.5625 5.5 13 5.5C13.2652 5.5 13.5196 5.60536 13.7071 5.79289C13.8946 5.98043 14 6.23478 14 6.5C14 6.76522 13.8946 7.01957 13.7071 7.20711C13.5196 7.39464 13.2652 7.5 13 7.5H2C1.86739 7.5 1.74021 7.55268 1.64645 7.64645C1.55268 7.74021 1.5 7.86739 1.5 8C1.5 8.13261 1.55268 8.25979 1.64645 8.35355C1.74021 8.44732 1.86739 8.5 2 8.5H13C13.5304 8.5 14.0391 8.28929 14.4142 7.91421C14.7893 7.53914 15 7.03043 15 6.5C15 5.96957 14.7893 5.46086 14.4142 5.08579C14.0391 4.71071 13.5304 4.5 13 4.5Z" fill="#8C8C8C"/>
          </svg>
          WIND</h3>
        <span class="card-wind-speed">
          <h4>{{ formatTemperature(locationWeather.wind.speed) }}</h4>     
          <h5>km/h</h5>    
        </span>
      </article>

      <article class="single-info-card pressure">
        <h3 class="card-tittle">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5 11.5C11.5 12.0304 11.2893 12.5391 10.9142 12.9142C10.5391 13.2893 10.0304 13.5 9.5 13.5C8.64375 13.5 7.81563 12.9419 7.53125 12.1737C7.48798 12.0501 7.49498 11.9144 7.55074 11.7958C7.6065 11.6773 7.70656 11.5853 7.82941 11.5398C7.95226 11.4942 8.08808 11.4987 8.20764 11.5523C8.32721 11.6059 8.42096 11.7043 8.46875 11.8263C8.60875 12.2044 9.0625 12.5 9.5 12.5C9.76522 12.5 10.0196 12.3946 10.2071 12.2071C10.3946 12.0196 10.5 11.7652 10.5 11.5C10.5 11.2348 10.3946 10.9804 10.2071 10.7929C10.0196 10.6054 9.76522 10.5 9.5 10.5H2.5C2.36739 10.5 2.24021 10.4473 2.14645 10.3536C2.05268 10.2598 2 10.1326 2 10C2 9.86739 2.05268 9.74021 2.14645 9.64645C2.24021 9.55268 2.36739 9.5 2.5 9.5H9.5C10.0304 9.5 10.5391 9.71071 10.9142 10.0858C11.2893 10.4609 11.5 10.9696 11.5 11.5ZM7.5 6.5C8.03043 6.5 8.53914 6.28929 8.91421 5.91421C9.28929 5.53914 9.5 5.03043 9.5 4.5C9.5 3.96957 9.28929 3.46086 8.91421 3.08579C8.53914 2.71071 8.03043 2.5 7.5 2.5C6.64375 2.5 5.81563 3.05813 5.53125 3.82625C5.48798 3.94992 5.49498 4.08562 5.55074 4.20418C5.6065 4.32274 5.70656 4.41468 5.82941 4.46022C5.95226 4.50575 6.08808 4.50125 6.20764 4.44768C6.32721 4.3941 6.42096 4.29574 6.46875 4.17375C6.60875 3.79562 7.0625 3.5 7.5 3.5C7.76522 3.5 8.01957 3.60536 8.20711 3.79289C8.39464 3.98043 8.5 4.23478 8.5 4.5C8.5 4.76522 8.39464 5.01957 8.20711 5.20711C8.01957 5.39464 7.76522 5.5 7.5 5.5H1.5C1.36739 5.5 1.24021 5.55268 1.14645 5.64645C1.05268 5.74021 1 5.86739 1 6C1 6.13261 1.05268 6.25979 1.14645 6.35355C1.24021 6.44732 1.36739 6.5 1.5 6.5H7.5ZM13 4.5C12.1438 4.5 11.3156 5.05813 11.0312 5.82625C10.988 5.94992 10.995 6.08562 11.0507 6.20418C11.1065 6.32274 11.2066 6.41468 11.3294 6.46022C11.4523 6.50575 11.5881 6.50125 11.7076 6.44768C11.8272 6.3941 11.921 6.29574 11.9688 6.17375C12.1088 5.79562 12.5625 5.5 13 5.5C13.2652 5.5 13.5196 5.60536 13.7071 5.79289C13.8946 5.98043 14 6.23478 14 6.5C14 6.76522 13.8946 7.01957 13.7071 7.20711C13.5196 7.39464 13.2652 7.5 13 7.5H2C1.86739 7.5 1.74021 7.55268 1.64645 7.64645C1.55268 7.74021 1.5 7.86739 1.5 8C1.5 8.13261 1.55268 8.25979 1.64645 8.35355C1.74021 8.44732 1.86739 8.5 2 8.5H13C13.5304 8.5 14.0391 8.28929 14.4142 7.91421C14.7893 7.53914 15 7.03043 15 6.5C15 5.96957 14.7893 5.46086 14.4142 5.08579C14.0391 4.71071 13.5304 4.5 13 4.5Z" fill="#8C8C8C"/>
          </svg>
          PRESSURE</h3>
        <span class="card-pressure">
          <h4>{{ locationWeather.main.pressure }}</h4>        
        </span>
      </article>
    </div>
    <div class="weather-by-hours">
      <article 
        v-for="weather in next24hList"
        :key="weather"
        class="single-hour-weather-card">
        <h2 v-if="oneDay !== true" class="weather-card-time-date">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Calendar / Calendar_Days">
            <path id="Vector" d="M8 4H7.2002C6.08009 4 5.51962 4 5.0918 4.21799C4.71547 4.40973 4.40973 4.71547 4.21799 5.0918C4 5.51962 4 6.08009 4 7.2002V8M8 4H16M8 4V2M16 4H16.8002C17.9203 4 18.4796 4 18.9074 4.21799C19.2837 4.40973 19.5905 4.71547 19.7822 5.0918C20 5.5192 20 6.07899 20 7.19691V8M16 4V2M4 8V16.8002C4 17.9203 4 18.4801 4.21799 18.9079C4.40973 19.2842 4.71547 19.5905 5.0918 19.7822C5.5192 20 6.07899 20 7.19691 20H16.8031C17.921 20 18.48 20 18.9074 19.7822C19.2837 19.5905 19.5905 19.2842 19.7822 18.9079C20 18.4805 20 17.9215 20 16.8036V8M4 8H20M16 16H16.002L16.002 16.002L16 16.002V16ZM12 16H12.002L12.002 16.002L12 16.002V16ZM8 16H8.002L8.00195 16.002L8 16.002V16ZM16.002 12V12.002L16 12.002V12H16.002ZM12 12H12.002L12.002 12.002L12 12.002V12ZM8 12H8.002L8.00195 12.002L8 12.002V12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>

          {{ formatHours(weather.dt_txt.split(' ')[0], ':') }}
        </h2>
        <h2 v-if="oneDay === true" class="weather-card-time-date">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Calendar / Clock">
            <path id="Vector" d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>


          {{ formatHours(weather.dt_txt.split(' ')[1], '-') }}
        </h2>
        <img 
            class="weather-card-icon"
            :src="`/src/assets/images/weatherIcons/${weather.weather[0].icon}@2x.png`" 
            :alt="weather.weather[0].icon">

        <span class="weather-card-min-max">
          <h4>{{ formatTemperature(weather.main.temp_max) }}° <span>max</span></h4>
          <h4>{{ formatTemperature(weather.main.temp_min) }}° <span>min</span></h4>
        </span>

        <span class="card-rain">
          <h4>{{ Math.round(weather.pop * 100) }}% Mogucnost Kise</h4>     
        </span>
        <span class="chance-of-rain-slider">
          <svg class="progress-bar" width="180" height="4" viewBox="0 0 180 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="180" height="4" rx="2" fill="url(#paint0_linear_56_8532)"/>
            <linearGradient id="paint0_linear_56_8532" x1="0" y1="2.91954" x2="186.391" y2="2.91957" gradientUnits="userSpaceOnUse">
            <stop stop-color="#94A03C"/>
            <stop offset="1" stop-color="#1E2913"/>
            </linearGradient>
          </svg>
          <svg class="progress-dot" :style="{ left: Math.round(weather.pop * 100) + '%' }" width="10" height="8" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 3.75C3.4665 3.75 4.25 2.9665 4.25 2C4.25 1.0335 3.4665 0.25 2.5 0.25C1.5335 0.25 0.75 1.0335 0.75 2C0.75 2.9665 1.5335 3.75 2.5 3.75Z" fill="white" stroke="black" stroke-width="0.5"/>
          </svg>
        </span>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .general-info-section {
    .general-info-btn-holder {
      margin: 40px 0px 24px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;
      h2 {
        color: #FBE2B7;
        font-family: 'Jost', sans-serif;
        font-size: 54px;
        font-style: normal;
        font-weight: 500;
        line-height: 50px; /* 92.593% */
      }
      .btn-primary {
        border: none;
        padding: 16px 26px;
        font-size: 16px;
        font-weight: 300;
      }
    }   
    .general-info-holder, .weather-by-hours {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      overflow-x: scroll;
      padding-bottom: 20px;
      .single-info-card, .single-hour-weather-card {
        padding: 16px;
        border-radius: 22px;
        border: 1px solid #303030;
        background: rgba(24, 24, 24, 0.15);
        
        display: flex;
        gap: 12px;
        flex-direction: column;

        .weather-card-icon {
          margin: 0px auto;
          display: block;
          max-width: 80%;
          height: auto;
          max-height: 100px;
        }

        .weather-card-min-max {
          display: flex;
          justify-content: space-evenly;
          margin-top: auto;
          color: #FFF;
          font-family: 'Jost', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          text-wrap: wrap;
          span {
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
          }
        }

        .card-temp {
          color: #FFF;
          font-family: 'Inter', sans-serif;
          font-size: 56px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .feels-like-desctiption {
          margin-top: auto;
          color: #FFF;
          font-family: 'Jost', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          text-wrap: wrap;
        }
        .card-min-max {
          h4 {
            display: flex;
            align-items: flex-end;
            color: #FFF;
            font-family: 'Jost', sans-serif;
            font-size: 48px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            &:last-of-type {
              margin-top: 19px;
            }
            span {
              margin-left: 8px;
              font-size: 32px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
          }
        }
        .card-rain {
          color: #FFF;
          font-family: 'Inter', sans-serif;
          font-size: 56px;
          font-style: normal;
          font-weight: 400;
          line-height: 48px; /* 85.714% */
          h4 {
            color: #FFF;
            font-family: 'Jost', sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 24px;
          }
        }
        .chance-of-rain {
            color: #FFF;
            font-family: 'Jost', sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        .card-sunrise {
          h4 {
            color: #FFF;
            font-family: 'Jost', sans-serif;
            font-size: 56px;
            font-style: normal;
            font-weight: 400;
            line-height: 56px; /* 100% */
          }
        }
        .card-pressure {
          h4 {
            margin-top: 56px;
            text-align: center;
            color: #FFF;
            text-align: center;
            font-family: 'Jost', sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
        .card-wind-speed {
          justify-self: center;
          text-align: center;
          margin-top: 56px;
          h4 {
            color: #FFF;
            text-align: center;
            font-family: 'Jost', sans-serif;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
          h5 {
            color: #FFF;
            font-family: 'Jost', sans-serif;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
        // Izmeni
        min-width: 200px;
        min-height: 230px;

        max-width: 200px;
        max-height: 230px;
        h3, .weather-card-time-date {
          color: #8C8C8C;
          font-family: 'Jost', sans-serif;
          font-size: 18px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          svg {
            vertical-align: bottom;
          }
        }
        .chance-of-rain-slider {
            position: relative;
            .progress-bar {
              width: 100%;
              
            }
            .progress-dot {
              position: absolute;
              top: 77%;
              left: 0%;
              transform: translateY(-15%);
            }
          }
      }
      .single-hour-weather-card {
        max-height: 270px;
        .card-rain {
          h4 {
            font-size: 15px;
            font-weight: 300;
          }
        }
        .chance-of-rain-slider {
          .progress-dot {
            top: 55%;
          }
        }
      }
      .rain-possibility, .sunrise {
        justify-content: space-between;
      }
      .sunrise {
        .svg-sunrise {
          margin-bottom: 20px;
        }
      }
      .wind {
        background-image: url('../../../assets/images/weatherIcons/wind-location.svg');
        background-position: center 70%;
        background-repeat: no-repeat;
        background-size: 90%;
      }
      .pressure {
        background-image: url('../../../assets/images/weatherIcons/pressure-location.svg');
        background-position: center 70%;
        background-repeat: no-repeat;
        background-size: 90%;
      }
    } 
    .weather-by-hours {
      margin-top: 16px;
    }
    @media (max-width: 550px) {
      .general-info-btn-holder {
        margin: 0px 0px 25px;
        flex-wrap: wrap;
        h2 {
          font-size: 34px;
          flex: 1 0 100%;
        }
        .btn-primary {
          flex: 1 0 100%;
        }
      }
    }
    .general-info-holder {
      flex: 0 0 105%;
      width: 105%;
      padding-right: 5%;
    }
    .weather-by-hours {
      flex: 0 0 105%;
      width: 105%;
      padding-right: 5%;
    }
  }
</style>