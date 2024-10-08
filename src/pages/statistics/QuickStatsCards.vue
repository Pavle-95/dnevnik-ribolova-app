<script setup>
  import {defineProps} from 'vue';

  const props = defineProps({
    dataStats: Object,
  })

</script>

<template>
  <div class="quick-stats-cards"> 
  <article class="single-card">
    <h3 class="card-header">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_56_8527)">
        <path d="M10.4828 8C10.4824 6.8145 10.796 5.65003 11.3916 4.625L11.6297 4.21063C11.1305 4.09183 10.6219 4.01707 10.1097 3.98719C9.42406 3.45906 8.40219 2.8325 7.22406 2.63313L6.5 2.5L6.91781 4.43313C5.61562 4.875 4.46688 5.7725 3.70656 6.39C3.55948 6.26687 3.40552 6.14656 3.24469 6.02906C2.00375 5.12281 0.663437 5.03531 0.607188 5.03219L0 5L0.0834375 5.60344C0.0925 5.66594 0.295625 7.00125 1.0725 7.99469C0.295625 8.98844 0.09375 10.3228 0.0834375 10.3862L0 11L0.607188 10.9575C0.663437 10.9544 2.00375 10.8672 3.24469 9.96062C3.4026 9.84542 3.55427 9.72698 3.69969 9.60531C4.46125 10.225 5.61031 11.1241 6.91406 11.5659L6.5 13.5L7.22406 13.3681C8.39563 13.17 9.41406 12.5431 10.0991 12.0144C10.6184 11.9843 11.1342 11.9087 11.6403 11.7884L11.3931 11.3766C10.7968 10.3512 10.4828 9.18616 10.4828 8Z" fill="#8C8C8C"/>
        <path d="M15.6125 6.92953C15.4297 6.62078 15.0957 6.1514 14.5441 5.67078C13.9699 5.1763 13.3144 4.78509 12.6066 4.51453L12.2575 5.12484C11.7508 5.99741 11.4836 6.98839 11.4832 7.99743C11.4827 9.00647 11.7488 9.99771 12.2547 10.8708L12.6219 11.4823C13.3223 11.2151 13.9716 10.8293 14.5413 10.342C15.5332 9.48328 16.0003 8.40609 16.0003 7.99984C16.0003 7.61515 15.7503 7.16421 15.6125 6.92953ZM13.0003 7.99984C12.9014 7.99984 12.8048 7.97051 12.7226 7.91557C12.6403 7.86063 12.5762 7.78254 12.5384 7.69118C12.5006 7.59982 12.4907 7.49928 12.5099 7.40229C12.5292 7.3053 12.5769 7.21621 12.6468 7.14629C12.7167 7.07636 12.8058 7.02874 12.9028 7.00945C12.9998 6.99015 13.1003 7.00006 13.1917 7.0379C13.283 7.07574 13.3611 7.13983 13.4161 7.22205C13.471 7.30428 13.5003 7.40095 13.5003 7.49984C13.5003 7.63245 13.4477 7.75962 13.3539 7.85339C13.2601 7.94716 13.1329 7.99984 13.0003 7.99984Z" fill="#8C8C8C"/>
        </g>
        <defs>
        <clipPath id="clip0_56_8527">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      UKUPAN ULOV</h3>
    <h2 class="card-info">{{props.dataStats.totalCatches}}</h2>
    <span class="card-progress">
      <svg class="progress-bar" width="180" height="4" viewBox="0 0 180 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="4" rx="2" fill="url(#paint0_linear_56_8532)"/>
        <linearGradient id="paint0_linear_56_8532" x1="0" y1="2.91954" x2="186.391" y2="2.91957" gradientUnits="userSpaceOnUse">
        <stop stop-color="#94A03C"/>
        <stop offset="1" stop-color="#1E2913"/>
        </linearGradient>
      </svg>
      <svg class="progress-dot" width="10" height="8" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.75C3.4665 3.75 4.25 2.9665 4.25 2C4.25 1.0335 3.4665 0.25 2.5 0.25C1.5335 0.25 0.75 1.0335 0.75 2C0.75 2.9665 1.5335 3.75 2.5 3.75Z" fill="white" stroke="black" stroke-width="0.5"/>
      </svg>
    </span>
    <p class="card-text">Ukupno riba ulovljeno</p>
  </article>

  <article class="single-card">
    <h3 class="card-header">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6667 6V10C10.6667 10.8841 10.3155 11.7319 9.69036 12.357C9.06523 12.9821 8.21739 13.3333 7.33333 13.3333C6.44928 13.3333 5.60143 12.9821 4.97631 12.357C4.35119 11.7319 4 10.8841 4 10V7.33333L6 9.33333" stroke="#8C8C8C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M10.6663 3.33333C11.02 3.33333 11.3591 3.47381 11.6092 3.72386C11.8592 3.97391 11.9997 4.31304 11.9997 4.66667C11.9997 5.02029 11.8592 5.35943 11.6092 5.60948C11.3591 5.85952 11.02 6 10.6663 6C10.3127 6 9.97358 5.85952 9.72353 5.60948C9.47348 5.35943 9.33301 5.02029 9.33301 4.66667C9.33301 4.31304 9.47348 3.97391 9.72353 3.72386C9.97358 3.47381 10.3127 3.33333 10.6663 3.33333ZM10.6663 3.33333V2" stroke="#8C8C8C" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      PROSEČAN ULOV</h3>
    <h2 class="card-info">{{props.dataStats.catchAverage}}</h2>
    <span class="card-progress">
      <svg class="progress-bar" width="180" height="4" viewBox="0 0 180 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="4" rx="2" fill="url(#paint0_linear_56_8532)"/>
        <linearGradient id="paint0_linear_56_8532" x1="0" y1="2.91954" x2="186.391" y2="2.91957" gradientUnits="userSpaceOnUse">
        <stop stop-color="#94A03C"/>
        <stop offset="1" stop-color="#1E2913"/>
        </linearGradient>
      </svg>
      <svg class="progress-dot" width="10" height="8" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.75C3.4665 3.75 4.25 2.9665 4.25 2C4.25 1.0335 3.4665 0.25 2.5 0.25C1.5335 0.25 0.75 1.0335 0.75 2C0.75 2.9665 1.5335 3.75 2.5 3.75Z" fill="white" stroke="black" stroke-width="0.5"/>
      </svg>
    </span>
    <p class="card-text">Ulov po danu</p>
  </article>

  <article class="single-card">
    <h3 class="card-header">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_56_8549)">
        <path d="M10.4828 8C10.4824 6.8145 10.796 5.65003 11.3916 4.625L11.6297 4.21063C11.1305 4.09183 10.6219 4.01707 10.1097 3.98719C9.42406 3.45906 8.40219 2.8325 7.22406 2.63313L6.5 2.5L6.91781 4.43313C5.61562 4.875 4.46688 5.7725 3.70656 6.39C3.55948 6.26687 3.40552 6.14656 3.24469 6.02906C2.00375 5.12281 0.663437 5.03531 0.607188 5.03219L0 5L0.0834375 5.60344C0.0925 5.66594 0.295625 7.00125 1.0725 7.99469C0.295625 8.98844 0.09375 10.3228 0.0834375 10.3862L0 11L0.607188 10.9575C0.663437 10.9544 2.00375 10.8672 3.24469 9.96062C3.4026 9.84542 3.55427 9.72698 3.69969 9.60531C4.46125 10.225 5.61031 11.1241 6.91406 11.5659L6.5 13.5L7.22406 13.3681C8.39563 13.17 9.41406 12.5431 10.0991 12.0144C10.6184 11.9843 11.1342 11.9087 11.6403 11.7884L11.3931 11.3766C10.7968 10.3512 10.4828 9.18616 10.4828 8Z" fill="#8C8C8C"/>
        <path d="M15.6125 6.92953C15.4297 6.62078 15.0957 6.1514 14.5441 5.67078C13.9699 5.1763 13.3144 4.78509 12.6066 4.51453L12.2575 5.12484C11.7508 5.99741 11.4836 6.98839 11.4832 7.99743C11.4827 9.00647 11.7488 9.99771 12.2547 10.8708L12.6219 11.4823C13.3223 11.2151 13.9716 10.8293 14.5413 10.342C15.5332 9.48328 16.0003 8.40609 16.0003 7.99984C16.0003 7.61515 15.7503 7.16421 15.6125 6.92953ZM13.0003 7.99984C12.9014 7.99984 12.8048 7.97051 12.7226 7.91557C12.6403 7.86063 12.5762 7.78254 12.5384 7.69118C12.5006 7.59982 12.4907 7.49928 12.5099 7.40229C12.5292 7.3053 12.5769 7.21621 12.6468 7.14629C12.7167 7.07636 12.8058 7.02874 12.9028 7.00945C12.9998 6.99015 13.1003 7.00006 13.1917 7.0379C13.283 7.07574 13.3611 7.13983 13.4161 7.22205C13.471 7.30428 13.5003 7.40095 13.5003 7.49984C13.5003 7.63245 13.4477 7.75962 13.3539 7.85339C13.2601 7.94716 13.1329 7.99984 13.0003 7.99984Z" fill="#8C8C8C"/>
        </g>
        <defs>
        <clipPath id="clip0_56_8549">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      UKUPNO VRSTA</h3>
    <h2 class="card-info">{{props.dataStats.totalSpecies}}</h2>
    <span class="card-progress">
      <svg class="progress-bar" width="180" height="4" viewBox="0 0 180 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="4" rx="2" fill="url(#paint0_linear_56_8532)"/>
        <linearGradient id="paint0_linear_56_8532" x1="0" y1="2.91954" x2="186.391" y2="2.91957" gradientUnits="userSpaceOnUse">
        <stop stop-color="#94A03C"/>
        <stop offset="1" stop-color="#1E2913"/>
        </linearGradient>
      </svg>
      <svg class="progress-dot" width="10" height="8" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.75C3.4665 3.75 4.25 2.9665 4.25 2C4.25 1.0335 3.4665 0.25 2.5 0.25C1.5335 0.25 0.75 1.0335 0.75 2C0.75 2.9665 1.5335 3.75 2.5 3.75Z" fill="white" stroke="black" stroke-width="0.5"/>
      </svg>
    </span>

    <p class="card-text">Razlicite vrste riba</p>
  </article>

  <article class="single-card">
    <h3 class="card-header">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_56_8560)">
        <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346627 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM10 11.6L7.2 8.8V3.2H8.8V8L11.2 10.4L10 11.6Z" fill="#8C8C8C"/>
        </g>
        <defs>
        <clipPath id="clip0_56_8560">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      UKUPNO DANA</h3>
    <h2 class="card-info">{{props.dataStats.daysFishing}} <span>Dana</span></h2>
    <span class="card-progress">
      <svg class="progress-bar" width="180" height="4" viewBox="0 0 180 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="4" rx="2" fill="url(#paint0_linear_56_8532)"/>
        <linearGradient id="paint0_linear_56_8532" x1="0" y1="2.91954" x2="186.391" y2="2.91957" gradientUnits="userSpaceOnUse">
        <stop stop-color="#94A03C"/>
        <stop offset="1" stop-color="#1E2913"/>
        </linearGradient>
      </svg>
      <svg style="left: 50%;" class="progress-dot" width="10" height="8" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.75C3.4665 3.75 4.25 2.9665 4.25 2C4.25 1.0335 3.4665 0.25 2.5 0.25C1.5335 0.25 0.75 1.0335 0.75 2C0.75 2.9665 1.5335 3.75 2.5 3.75Z" fill="white" stroke="black" stroke-width="0.5"/>
      </svg>
    </span>

    <p class="card-text">Ukupno dana na vodi</p>
  </article>

  <article class="single-card">
    <h3 class="card-header">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_56_8570)">
        <path d="M8 0C6.41775 0 4.87104 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346627 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM10 11.6L7.2 8.8V3.2H8.8V8L11.2 10.4L10 11.6Z" fill="#8C8C8C"/>
        </g>
        <defs>
        <clipPath id="clip0_56_8570">
        <rect width="16" height="16" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      SATI PECANJA</h3>
    <h2 class="card-info">{{props.dataStats.hoursFishing}} <span>Sati</span></h2>
    <span class="card-progress">
      <svg class="progress-bar" width="180" height="4" viewBox="0 0 180 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="180" height="4" rx="2" fill="url(#paint0_linear_56_8532)"/>
        <linearGradient id="paint0_linear_56_8532" x1="0" y1="2.91954" x2="186.391" y2="2.91957" gradientUnits="userSpaceOnUse">
        <stop stop-color="#94A03C"/>
        <stop offset="1" stop-color="#1E2913"/>
        </linearGradient>
      </svg>
      <svg class="progress-dot" width="10" height="8" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 3.75C3.4665 3.75 4.25 2.9665 4.25 2C4.25 1.0335 3.4665 0.25 2.5 0.25C1.5335 0.25 0.75 1.0335 0.75 2C0.75 2.9665 1.5335 3.75 2.5 3.75Z" fill="white" stroke="black" stroke-width="0.5"/>
      </svg>
    </span>
    <p class="card-text">Ukupno sati na vodi</p>
  </article>
</div>
</template>

<style lang="scss" scoped>
      .quick-stats-cards {
        margin-top: 35px;
        flex: 0 0 100%;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        .single-card {
          display: flex;
          flex-direction: column;
          height: 250px;
          padding: 20px;
          border-radius: 22px;
          border: 1px solid #303030;
          background: rgba(24, 24, 24, 0.15);
          .card-header {
            color: #8C8C8C;
            font-family: 'Inter', sans-serif;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            svg {
              vertical-align: middle;
            }
          }
          .card-info {
            margin-top: 12px;
            color: #FFF;
            font-family: 'Inter', sans-serif;
            font-size: 56px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            span {
              background: linear-gradient(90deg, #94A03C 0%, #4B7669 103.55%);
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              font-family: 'Inter', sans-serif;
              font-size: 20px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
            }
            svg {
              vertical-align: middle;
            }
          }
          .card-progress {
            margin: auto 0px 0px;
            position: relative;
            .progress-bar {
              width: 100%;
              
            }
            .progress-dot {
              position: absolute;
              top: 50%;
              left: 0%;
              transform: translateY(-15%);
            }
          }
          .card-text {
            margin-top: auto;
            color: #FFF;
            font-family: 'Inter', sans-serif;
            font-size: 17px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            svg {
              vertical-align: middle;
            }
          } 
        }
        @media (max-width: 1280px) {
          .single-card {
            height: 220px;
            min-width: 200px;
            padding: 16px;
            .card-header {
              font-size: 16px;
            }
            .card-info {
              font-size: 48px;
            }
            .card-text {
              font-size: 14px;
            }
          }
        }
      }
</style>