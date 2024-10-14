<script setup>
import { defineProps, defineEmits, watch, ref } from 'vue';

const props = defineProps(['user', 'isEdit']);

const emit = defineEmits(['fishermanFormSubmit']);

const fishermanForm = ref({
  fullName: props.user.fullName,
  email: props.user.email,
  location: props.user.location,
  dateOfBirth: props.user.dateOfBirth,
  phoneNumber: props.user.phoneNumber,
});

function fishermanFormSubmitHandler() {
  emit('fishermanFormSubmit', fishermanForm.value);
}

// Watch changes on the isEditRef
watch(() => props.isEdit, () => {
  fishermanFormSubmitHandler();
});
</script>

<template>
  <form class="fisherman-info">
    <h3>Informacije o pecarošu</h3>


    <span class="input-filed">
      <svg class="field-img" width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35.4167 44.4548C35.4167 38.7019 30.753 34.0382 25 34.0382C19.247 34.0382 14.5833 38.7019 14.5833 44.4548M35.4167 44.4548H37.0898C39.4188 44.4548 40.5833 44.4548 41.4737 44.0011C42.2577 43.6017 42.8968 42.9626 43.2963 42.1786C43.75 41.2881 43.75 40.1236 43.75 37.7946V13.6151C43.75 11.2861 43.75 10.1198 43.2963 9.22941C42.8968 8.4454 42.2577 7.80845 41.4737 7.40897C40.5824 6.95483 39.4173 6.95483 37.0837 6.95483H12.9171C10.5835 6.95483 9.41588 6.95483 8.52458 7.40897C7.74057 7.80845 7.10361 8.4454 6.70414 9.22941C6.25 10.1207 6.25 11.2884 6.25 13.6219V37.7886C6.25 40.1221 6.25 41.2873 6.70414 42.1786C7.10361 42.9626 7.74057 43.6017 8.52458 44.0011C9.415 44.4548 10.5812 44.4548 12.9102 44.4548H14.5833M35.4167 44.4548H14.5833M25 27.7882C21.5482 27.7882 18.75 24.9899 18.75 21.5382C18.75 18.0864 21.5482 15.2882 25 15.2882C28.4518 15.2882 31.25 18.0864 31.25 21.5382C31.25 24.9899 28.4518 27.7882 25 27.7882Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="field-text">
        <label for="full-name">Puno Ime</label>
        <input v-model="fishermanForm.fullName" type="text" id="full-name" :placeholder="user.fullName" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Communication / Mail">
        <path id="Vector" d="M8.33333 13.2044L21.0576 22.8133L21.0618 22.8168C22.4747 23.8529 23.1815 24.3713 23.9557 24.5715C24.6401 24.7485 25.3594 24.7485 26.0437 24.5715C26.8186 24.3711 27.5275 23.8512 28.9429 22.8133C28.9429 22.8133 37.1043 16.5501 41.6667 13.2044M6.25 33.6215V17.7882C6.25 15.4546 6.25 14.287 6.70414 13.3957C7.10361 12.6117 7.74057 11.9747 8.52458 11.5752C9.41588 11.1211 10.5835 11.1211 12.9171 11.1211H37.0837C39.4173 11.1211 40.5824 11.1211 41.4737 11.5752C42.2577 11.9747 42.8968 12.6117 43.2963 13.3957C43.75 14.2861 43.75 15.4523 43.75 17.7813V33.6285C43.75 35.9575 43.75 37.1221 43.2963 38.0125C42.8968 38.7965 42.2577 39.4346 41.4737 39.8341C40.5833 40.2878 39.4188 40.2878 37.0898 40.2878H12.9102C10.5812 40.2878 9.415 40.2878 8.52458 39.8341C7.74057 39.4346 7.10361 38.7965 6.70414 38.0125C6.25 37.1212 6.25 35.9551 6.25 33.6215Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
      <div class="field-text">
        <label for="email">Email Adresa</label>
        <input v-model="fishermanForm.email" type="email" id="email"  :placeholder="user.email" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="File / File_Add">
        <path id="Vector" d="M25.0003 37.7046V31.4546M25.0003 31.4546V25.2046M25.0003 31.4546H18.7503M25.0003 31.4546H31.2503M27.0837 6.4564C26.8847 6.45459 26.6613 6.45459 26.406 6.45459H17.0841C14.7505 6.45459 13.5829 6.45459 12.6916 6.90873C11.9076 7.3082 11.2706 7.94516 10.8711 8.72917C10.417 9.62047 10.417 10.7881 10.417 13.1217V37.2883C10.417 39.6219 10.417 40.7881 10.8711 41.6794C11.2706 42.4634 11.9076 43.1014 12.6916 43.5009C13.582 43.9546 14.7483 43.9546 17.0773 43.9546L32.9234 43.9546C35.2524 43.9546 36.417 43.9546 37.3074 43.5009C38.0914 43.1014 38.7305 42.4634 39.13 41.6793C39.5837 40.7889 39.5837 39.6244 39.5837 37.2954V19.6331C39.5837 19.3774 39.5836 19.1538 39.5817 18.9546M27.0837 6.4564C27.6787 6.46182 28.0552 6.48344 28.4146 6.56971C28.8397 6.67178 29.2459 6.84056 29.6187 7.06901C30.039 7.3266 30.3999 7.68755 31.1201 8.40771L37.6315 14.9191C38.3522 15.6398 38.7105 15.9991 38.9681 16.4196C39.1966 16.7924 39.3656 17.1989 39.4677 17.624C39.5539 17.9833 39.576 18.3598 39.5817 18.9546M27.0837 6.4564V12.2879C27.0837 14.6215 27.0837 15.7874 27.5378 16.6787C27.9373 17.4627 28.5742 18.1014 29.3582 18.5009C30.2487 18.9546 31.4149 18.9546 33.7439 18.9546H39.5817M39.5817 18.9546H39.5841" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
      <div class="field-text">
        <label for="file-upload">Postavi Sliku</label>
        <label class="label-file" for="file-upload">max: 0.5mb</label>
        <input type="file" id="file-upload" :disabled="!isEdit" readonly>
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Navigation / Map_Pin">
        <g id="Vector">
        <path d="M10.417 21.3772C10.417 31.4852 19.2596 39.844 23.1736 43.0488C23.7338 43.5074 24.0172 43.7395 24.4351 43.8572C24.7605 43.9488 25.2395 43.9488 25.5649 43.8572C25.9836 43.7393 26.265 43.5095 26.8273 43.0491C30.7413 39.8443 39.5835 31.4861 39.5835 21.3781C39.5835 17.5529 38.0471 13.8839 35.3122 11.179C32.5773 8.47416 28.8682 6.95459 25.0005 6.95459C21.1328 6.95459 17.4233 8.47439 14.6884 11.1792C11.9534 13.8841 10.417 17.552 10.417 21.3772Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.8337 19.4546C20.8337 21.7558 22.6991 23.6213 25.0003 23.6213C27.3015 23.6213 29.167 21.7558 29.167 19.4546C29.167 17.1534 27.3015 15.2879 25.0003 15.2879C22.6991 15.2879 20.8337 17.1534 20.8337 19.4546Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </g>
      </svg>
      <div class="field-text">
        <label for="location">Mesto Stanovanja</label>
        <input v-model="fishermanForm.location" type="text" id="location" :placeholder="user.location ? user.location : 'Unesi mesto stanovanja'" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Calendar / Calendar_Days">
        <path id="Vector" d="M16.6663 9.03776H15.0001C12.6665 9.03776 11.4989 9.03776 10.6076 9.4919C9.82358 9.89137 9.18662 10.5283 8.78715 11.3123C8.33301 12.2036 8.33301 13.3713 8.33301 15.7048V17.3711M16.6663 9.03776H33.333M16.6663 9.03776V4.87109M33.333 9.03776H35.0001C37.3336 9.03776 38.4988 9.03776 39.3901 9.4919C40.1741 9.89137 40.8132 10.5283 41.2126 11.3123C41.6663 12.2028 41.6663 13.369 41.6663 15.698V17.3711M33.333 9.03776V4.87109M8.33301 17.3711V35.7048C8.33301 38.0384 8.33301 39.2046 8.78715 40.0959C9.18662 40.8799 9.82358 41.5179 10.6076 41.9174C11.498 42.3711 12.6642 42.3711 14.9932 42.3711H35.0061C37.3351 42.3711 38.4997 42.3711 39.3901 41.9174C40.1741 41.5179 40.8132 40.8799 41.2126 40.0959C41.6663 39.2054 41.6663 38.0409 41.6663 35.7119V17.3711M8.33301 17.3711H41.6663M33.333 34.0378H33.3372L33.3371 34.0419L33.333 34.0418V34.0378ZM24.9997 34.0378H25.0038L25.0037 34.0419L24.9997 34.0418V34.0378ZM16.6663 34.0378H16.6705L16.6704 34.0419L16.6663 34.0418V34.0378ZM33.3371 25.7044V25.7086L33.333 25.7085V25.7044H33.3371ZM24.9997 25.7044H25.0038L25.0037 25.7086L24.9997 25.7085V25.7044ZM16.6663 25.7044H16.6705L16.6704 25.7086L16.6663 25.7085V25.7044Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
      <div class="field-text">
        <label for="date-of-birth">Datum Rođenja</label>
        <input v-model="fishermanForm.dateOfBirth" type="date" id="date-of-birth" :placeholder="user.dateOfBirth ? user.dateOfBirth : 'Unesi Datum Rodjena'" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.7968 9.5738C19.164 7.99189 17.6319 6.95459 15.9281 6.95459H10.1974C8.0173 6.95459 6.25 8.72146 6.25 10.9015C6.25 29.4321 21.2725 44.4546 39.8031 44.4546C41.9831 44.4546 43.75 42.6871 43.75 40.5071L43.751 34.7753C43.751 33.0716 42.7139 31.5397 41.132 30.9069L35.6394 28.7107C34.2185 28.1423 32.6006 28.3981 31.4249 29.3779L30.0073 30.5602C28.3518 31.9398 25.9159 31.8301 24.3921 30.3062L20.4005 26.311C18.8766 24.7871 18.764 22.3532 20.1436 20.6977L21.3257 19.2802C22.3054 18.1045 22.5635 16.4862 21.9951 15.0652L19.7968 9.5738Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <div class="field-text">
        <label for="number">Broj Telefona</label>
        <input v-model="fishermanForm.phoneNUmber" type="number" id="number" :placeholder="user.phoneNumber ? phoneNumber : 'Unesi Broj Telefona'" :readonly="!isEdit">
      </div>
    </span>
</form>
</template>

<style lang="scss" scoped>
  .fisherman-info {
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