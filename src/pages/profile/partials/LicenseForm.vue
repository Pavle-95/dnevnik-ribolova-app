<script setup>
  import { defineProps } from 'vue'

  defineProps(() => {

  })
</script>

<template>
          <form class="license-info">
          <h3>Informacije o dozvoli <span>(opciono)</span></h3>

          <span class="input-filed">
            <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="User / User_Card_ID">
              <path id="Vector" d="M12.5 38.2045C12.6326 38.2046 12.7693 38.2046 12.9102 38.2046H25M12.5 38.2045C10.4411 38.2029 9.36112 38.1771 8.52458 37.7509C7.74057 37.3514 7.10361 36.7123 6.70414 35.9283C6.25 35.037 6.25 33.8719 6.25 31.5383V19.8717C6.25 17.5381 6.25 16.3705 6.70414 15.4792C7.10361 14.6952 7.74057 14.0582 8.52458 13.6587C9.41588 13.2046 10.5835 13.2046 12.9171 13.2046H37.0837C39.4173 13.2046 40.5824 13.2046 41.4737 13.6587C42.2577 14.0582 42.8968 14.6952 43.2963 15.4792C43.75 16.3696 43.75 17.5358 43.75 19.8648V31.5444C43.75 33.8733 43.75 35.0379 43.2963 35.9283C42.8968 36.7123 42.2577 37.3514 41.4737 37.7509C40.5833 38.2046 39.4188 38.2046 37.0898 38.2046H25M12.5 38.2045C12.5001 35.9033 15.2983 34.0379 18.75 34.0379C22.2018 34.0379 25 35.9034 25 38.2046M12.5 38.2045C12.5 38.2045 12.5 38.2045 12.5 38.2045ZM37.5 29.8713H29.1667M37.5 23.6213H31.25M18.75 27.7879C16.4488 27.7879 14.5833 25.9224 14.5833 23.6213C14.5833 21.3201 16.4488 19.4546 18.75 19.4546C21.0512 19.4546 22.9167 21.3201 22.9167 23.6213C22.9167 25.9224 21.0512 27.7879 18.75 27.7879Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
            </svg>
            <div class="field-text">
              <label for="full-name">Broj Dozvole</label>
              <input type="text" id="full-name" placeholder="3338845">
            </div>
          </span>

            <span class="input-filed">
              <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Warning / Triangle_Warning">
                <path id="Vector" d="M24.9995 19.4549V27.7882M9.12223 32.3711C7.22758 35.6528 6.28053 37.2942 6.42204 38.6406C6.54547 39.815 7.16184 40.882 8.11719 41.576C9.21209 42.3715 11.1056 42.3715 14.8923 42.3715H35.1067C38.8935 42.3715 40.7866 42.3715 41.8815 41.576C42.8369 40.882 43.4535 39.815 43.577 38.6406C43.7185 37.2942 42.7717 35.6528 40.8771 32.3711L30.7734 14.8711C28.8788 11.5895 27.931 9.94897 26.6943 9.39831C25.6155 8.91801 24.3829 8.91801 23.3041 9.39831C22.0678 9.94874 21.1206 11.5893 19.2276 14.8682L9.12223 32.3711ZM25.1053 34.0382V34.2465L24.8958 34.2469V34.0382H25.1053Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>

              <div class="field-text">
                <label for="email">JMBG</label>
                <input type="email" id="email" placeholder="Floyd Miles">
              </div>
            </span>

            <span class="input-filed">
              <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Calendar / Calendar_Check">
                <path id="Vector" d="M8.33301 16.8711H41.6663M8.33301 16.8711V35.2048C8.33301 37.5384 8.33301 38.7046 8.78715 39.5959C9.18662 40.3799 9.82358 41.0179 10.6076 41.4174C11.498 41.8711 12.6642 41.8711 14.9932 41.8711H35.0061C37.3351 41.8711 38.4997 41.8711 39.3901 41.4174C40.1741 41.0179 40.8132 40.3799 41.2126 39.5959C41.6663 38.7054 41.6663 37.5409 41.6663 35.2119V16.8711M8.33301 16.8711V15.2048C8.33301 12.8713 8.33301 11.7036 8.78715 10.8123C9.18662 10.0283 9.82358 9.39137 10.6076 8.9919C11.4989 8.53776 12.6665 8.53776 15.0001 8.53776H16.6663M41.6663 16.8711V15.198C41.6663 12.869 41.6663 11.7028 41.2126 10.8123C40.8132 10.0283 40.1741 9.39137 39.3901 8.9919C38.4988 8.53776 37.3336 8.53776 35.0001 8.53776H33.333M16.6663 8.53776H33.333M16.6663 8.53776V4.37109M33.333 8.53776V4.37109M31.2497 25.2044L22.9163 33.5378L18.7497 29.3711" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
              <div class="field-text">
                <label for="file-upload">Datum Izdavanja</label>
                <input type="date" id="file-upload">
              </div>
            </span>

            <span class="input-filed">
              <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Edit / Edit_Pencil_Line_01">
                <path id="Vector" d="M8.33301 42.3713H41.6663M8.33301 42.3713V34.038L24.9997 17.3713M8.33301 42.3713L16.6663 42.3713L33.333 25.7046M24.9997 17.3713L30.976 11.395L30.9796 11.3914C31.8023 10.5688 32.2143 10.1567 32.6893 10.0024C33.1077 9.8664 33.5585 9.8664 33.9769 10.0024C34.4516 10.1566 34.8632 10.5682 35.6847 11.3897L39.3093 15.0143C40.1343 15.8393 40.547 16.252 40.7016 16.7277C40.8375 17.1461 40.8375 17.5968 40.7015 18.0153C40.5471 18.4906 40.135 18.9027 39.3111 19.7265L39.3093 19.7283L33.333 25.7046M24.9997 17.3713L33.333 25.7046" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>

              <div class="field-text">
                <label for="location">Potpis</label>
                <input type="text" id="location" placeholder="Floyd Miles">
              </div>
            </span>

            <span class="input-filed">
              <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Navigation / Building_01">
                <path id="Vector" d="M4.16699 42.3714H8.33366M8.33366 42.3714H18.7503M8.33366 42.3714V15.7052C8.33366 13.3716 8.33366 12.204 8.7878 11.3127C9.18727 10.5287 9.82423 9.8917 10.6082 9.49223C11.4995 9.03809 12.6672 9.03809 15.0007 9.03809H18.3341C20.6676 9.03809 21.8328 9.03809 22.7241 9.49223C23.5081 9.8917 24.1472 10.5287 24.5466 11.3127C25.0003 12.2031 25.0003 13.3693 25.0003 15.6983V21.5385M18.7503 42.3714H41.667M18.7503 42.3714V30.6384C18.7503 29.5439 18.7503 28.9964 18.8816 28.4859C18.9979 28.0335 19.1894 27.6044 19.4482 27.2155C19.74 26.777 20.1485 26.4098 20.9618 25.6791L25.7568 21.3714C27.3292 19.9588 28.1159 19.2519 29.0055 18.9838C29.7898 18.7474 30.6268 18.7474 31.4111 18.9838C32.3014 19.2521 33.0892 19.9593 34.6642 21.3743L39.4559 25.6791C40.2701 26.4106 40.6764 26.7767 40.9684 27.2155C41.2272 27.6044 41.4184 28.0335 41.5348 28.4859C41.666 28.9964 41.667 29.5439 41.667 30.6384V42.3714M41.667 42.3714H45.8337" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>

              <div class="field-text">
                <label for="date-of-birth">Ime izdavaca</label>
                <input type="text" id="date-of-birth" placeholder="Floyd Miles">
              </div>
            </span>

            <span class="input-filed">
              <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.4167 44.4546C35.4167 38.7016 30.753 34.0379 25 34.0379C19.247 34.0379 14.5833 38.7016 14.5833 44.4546M35.4167 44.4546H37.0898C39.4188 44.4546 40.5833 44.4546 41.4737 44.0009C42.2577 43.6014 42.8968 42.9623 43.2963 42.1783C43.75 41.2879 43.75 40.1233 43.75 37.7944V13.6148C43.75 11.2858 43.75 10.1196 43.2963 9.22917C42.8968 8.44516 42.2577 7.8082 41.4737 7.40873C40.5824 6.95459 39.4173 6.95459 37.0837 6.95459H12.9171C10.5835 6.95459 9.41588 6.95459 8.52458 7.40873C7.74057 7.8082 7.10361 8.44516 6.70414 9.22917C6.25 10.1205 6.25 11.2881 6.25 13.6217V37.7883C6.25 40.1219 6.25 41.287 6.70414 42.1783C7.10361 42.9623 7.74057 43.6014 8.52458 44.0009C9.415 44.4546 10.5812 44.4546 12.9102 44.4546H14.5833M35.4167 44.4546H14.5833M25 27.7879C21.5482 27.7879 18.75 24.9897 18.75 21.5379C18.75 18.0861 21.5482 15.2879 25 15.2879C28.4518 15.2879 31.25 18.0861 31.25 21.5379C31.25 24.9897 28.4518 27.7879 25 27.7879Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <div class="field-text">
                <label for="number">Opciono</label>
                <input type="number" id="number" placeholder="Optional">
              </div>
            </span>
        </form>
</template>

<style lang="scss" scoped>
 .license-info {
    flex: 0 0 38%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    h3 {
      flex: 0 0 100%;
      color: #FBE2B7;
      font-family: 'Jost', sans-serif;
      font-size: 36px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 50.4px */
      margin-bottom: 8px;
      span {
        color: #fbe2b79f;
        font-size: 26px;
        font-weight: 300;
      }
    }
    .input-filed {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid var(--FirstLinear, #94A03C);
      gap: 16px;
      flex: 0 0 100%;
      .field-img {
        display: block;
        max-width: 50px;
        height: auto;
      }
      .field-text {
        padding: 16px 0px 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        label {
          flex: 0 0 100%;
          color: #FFF;
          font-family: 'Jost', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%; /* 33.6px */
        }
        input, .label-file {
          flex: 0 0 100%;
          color: rgba(255, 255, 255, 0.80);
          font-family: 'Inter', sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 28px */
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
        }
        .label-file {
          color: rgba(255, 255, 255, 0.22) !important;
        }
        
        input[type='file'] {
          display: none;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
</style>