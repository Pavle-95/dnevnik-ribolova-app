<script setup>
import { ref } from 'vue';
import { updateUser } from 'services/userServices';

// Store  
import { useAuthStore } from 'stores/authStore'
const userInfo = useAuthStore();

const isEdit = ref(false);

const newUserInfo = ref({
  fullName: userInfo.user.fullName,
  email: userInfo.user.email,
  img: null,
  location: userInfo.user.location,
  dateOfBirth: userInfo.user.dateOfBirth,
  phoneNumber: userInfo.user.phoneNumber,
  licenseNumber: userInfo.user.licenseNumber,
  userID: userInfo.user.userID,
  signature: userInfo.user.signature,
  distributorName: userInfo.user.distributorName,
  optional: userInfo.user.optional,
});

function saveEditHandler() {
  const temporatyUserInfo = {...userInfo.user, ...newUserInfo.value}
  userInfo.userUpdate(temporatyUserInfo);
  userUpdateHandler(temporatyUserInfo);
  isEdit.value = false;
}

function editHandler() {
  isEdit.value = true;
}

function cancelEditHandler() {
  const temporatyUserInfo = {...userInfo.user};
  newUserInfo.value = temporatyUserInfo;
  isEdit.value = false;
}

async function userUpdateHandler(updatedUser) {
  try {
    const response = await updateUser(updatedUser);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

</script>


<template>
  <div class="edit-btn">
    <button class="edit btn-primary" v-if="!isEdit" @click="editHandler">Edit</button>
    <button class="save btn-primary" v-if="isEdit" @click="saveEditHandler">Save</button>
    <button class="cancel btn-primary" v-if="isEdit" @click="cancelEditHandler">Cancel</button>
  </div>
    
  <form class="fisherman-info">
    <h3>Informacije o pecarošu</h3>

    <span class="input-filed">
      <svg class="field-img" width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M35.4167 44.4548C35.4167 38.7019 30.753 34.0382 25 34.0382C19.247 34.0382 14.5833 38.7019 14.5833 44.4548M35.4167 44.4548H37.0898C39.4188 44.4548 40.5833 44.4548 41.4737 44.0011C42.2577 43.6017 42.8968 42.9626 43.2963 42.1786C43.75 41.2881 43.75 40.1236 43.75 37.7946V13.6151C43.75 11.2861 43.75 10.1198 43.2963 9.22941C42.8968 8.4454 42.2577 7.80845 41.4737 7.40897C40.5824 6.95483 39.4173 6.95483 37.0837 6.95483H12.9171C10.5835 6.95483 9.41588 6.95483 8.52458 7.40897C7.74057 7.80845 7.10361 8.4454 6.70414 9.22941C6.25 10.1207 6.25 11.2884 6.25 13.6219V37.7886C6.25 40.1221 6.25 41.2873 6.70414 42.1786C7.10361 42.9626 7.74057 43.6017 8.52458 44.0011C9.415 44.4548 10.5812 44.4548 12.9102 44.4548H14.5833M35.4167 44.4548H14.5833M25 27.7882C21.5482 27.7882 18.75 24.9899 18.75 21.5382C18.75 18.0864 21.5482 15.2882 25 15.2882C28.4518 15.2882 31.25 18.0864 31.25 21.5382C31.25 24.9899 28.4518 27.7882 25 27.7882Z"
          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div class="field-text">
        <label for="full-name">Puno Ime</label>
        <input v-model="newUserInfo.fullName" type="text" id="full-name" :placeholder="userInfo.user.fullName" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Communication / Mail">
          <path id="Vector"
            d="M8.33333 13.2044L21.0576 22.8133L21.0618 22.8168C22.4747 23.8529 23.1815 24.3713 23.9557 24.5715C24.6401 24.7485 25.3594 24.7485 26.0437 24.5715C26.8186 24.3711 27.5275 23.8512 28.9429 22.8133C28.9429 22.8133 37.1043 16.5501 41.6667 13.2044M6.25 33.6215V17.7882C6.25 15.4546 6.25 14.287 6.70414 13.3957C7.10361 12.6117 7.74057 11.9747 8.52458 11.5752C9.41588 11.1211 10.5835 11.1211 12.9171 11.1211H37.0837C39.4173 11.1211 40.5824 11.1211 41.4737 11.5752C42.2577 11.9747 42.8968 12.6117 43.2963 13.3957C43.75 14.2861 43.75 15.4523 43.75 17.7813V33.6285C43.75 35.9575 43.75 37.1221 43.2963 38.0125C42.8968 38.7965 42.2577 39.4346 41.4737 39.8341C40.5833 40.2878 39.4188 40.2878 37.0898 40.2878H12.9102C10.5812 40.2878 9.415 40.2878 8.52458 39.8341C7.74057 39.4346 7.10361 38.7965 6.70414 38.0125C6.25 37.1212 6.25 35.9551 6.25 33.6215Z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
      <div class="field-text">
        <label for="email">Email Adresa</label>
        <input v-model="newUserInfo.email" type="email" id="email" :placeholder="userInfo.user.email" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="File / File_Add">
          <path id="Vector"
            d="M25.0003 37.7046V31.4546M25.0003 31.4546V25.2046M25.0003 31.4546H18.7503M25.0003 31.4546H31.2503M27.0837 6.4564C26.8847 6.45459 26.6613 6.45459 26.406 6.45459H17.0841C14.7505 6.45459 13.5829 6.45459 12.6916 6.90873C11.9076 7.3082 11.2706 7.94516 10.8711 8.72917C10.417 9.62047 10.417 10.7881 10.417 13.1217V37.2883C10.417 39.6219 10.417 40.7881 10.8711 41.6794C11.2706 42.4634 11.9076 43.1014 12.6916 43.5009C13.582 43.9546 14.7483 43.9546 17.0773 43.9546L32.9234 43.9546C35.2524 43.9546 36.417 43.9546 37.3074 43.5009C38.0914 43.1014 38.7305 42.4634 39.13 41.6793C39.5837 40.7889 39.5837 39.6244 39.5837 37.2954V19.6331C39.5837 19.3774 39.5836 19.1538 39.5817 18.9546M27.0837 6.4564C27.6787 6.46182 28.0552 6.48344 28.4146 6.56971C28.8397 6.67178 29.2459 6.84056 29.6187 7.06901C30.039 7.3266 30.3999 7.68755 31.1201 8.40771L37.6315 14.9191C38.3522 15.6398 38.7105 15.9991 38.9681 16.4196C39.1966 16.7924 39.3656 17.1989 39.4677 17.624C39.5539 17.9833 39.576 18.3598 39.5817 18.9546M27.0837 6.4564V12.2879C27.0837 14.6215 27.0837 15.7874 27.5378 16.6787C27.9373 17.4627 28.5742 18.1014 29.3582 18.5009C30.2487 18.9546 31.4149 18.9546 33.7439 18.9546H39.5817M39.5817 18.9546H39.5841"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
      <div class="field-text">
        <label for="file-upload">Slika</label>
        <label class="label-file" for="file-upload">Postavi Sliku</label>
        <input type="file" id="file-upload" readonly>
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Navigation / Map_Pin">
          <g id="Vector">
            <path
              d="M10.417 21.3772C10.417 31.4852 19.2596 39.844 23.1736 43.0488C23.7338 43.5074 24.0172 43.7395 24.4351 43.8572C24.7605 43.9488 25.2395 43.9488 25.5649 43.8572C25.9836 43.7393 26.265 43.5095 26.8273 43.0491C30.7413 39.8443 39.5835 31.4861 39.5835 21.3781C39.5835 17.5529 38.0471 13.8839 35.3122 11.179C32.5773 8.47416 28.8682 6.95459 25.0005 6.95459C21.1328 6.95459 17.4233 8.47439 14.6884 11.1792C11.9534 13.8841 10.417 17.552 10.417 21.3772Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M20.8337 19.4546C20.8337 21.7558 22.6991 23.6213 25.0003 23.6213C27.3015 23.6213 29.167 21.7558 29.167 19.4546C29.167 17.1534 27.3015 15.2879 25.0003 15.2879C22.6991 15.2879 20.8337 17.1534 20.8337 19.4546Z"
              stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </g>
      </svg>
      <div class="field-text">
        <label for="location">Mesto Stanovanja</label>
        <input v-model="newUserInfo.location" type="text" id="location"
          :placeholder="userInfo.user.location ? userInfo.user.location : 'Unesi mesto stanovanja'" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Calendar / Calendar_Days">
          <path id="Vector"
            d="M16.6663 9.03776H15.0001C12.6665 9.03776 11.4989 9.03776 10.6076 9.4919C9.82358 9.89137 9.18662 10.5283 8.78715 11.3123C8.33301 12.2036 8.33301 13.3713 8.33301 15.7048V17.3711M16.6663 9.03776H33.333M16.6663 9.03776V4.87109M33.333 9.03776H35.0001C37.3336 9.03776 38.4988 9.03776 39.3901 9.4919C40.1741 9.89137 40.8132 10.5283 41.2126 11.3123C41.6663 12.2028 41.6663 13.369 41.6663 15.698V17.3711M33.333 9.03776V4.87109M8.33301 17.3711V35.7048C8.33301 38.0384 8.33301 39.2046 8.78715 40.0959C9.18662 40.8799 9.82358 41.5179 10.6076 41.9174C11.498 42.3711 12.6642 42.3711 14.9932 42.3711H35.0061C37.3351 42.3711 38.4997 42.3711 39.3901 41.9174C40.1741 41.5179 40.8132 40.8799 41.2126 40.0959C41.6663 39.2054 41.6663 38.0409 41.6663 35.7119V17.3711M8.33301 17.3711H41.6663M33.333 34.0378H33.3372L33.3371 34.0419L33.333 34.0418V34.0378ZM24.9997 34.0378H25.0038L25.0037 34.0419L24.9997 34.0418V34.0378ZM16.6663 34.0378H16.6705L16.6704 34.0419L16.6663 34.0418V34.0378ZM33.3371 25.7044V25.7086L33.333 25.7085V25.7044H33.3371ZM24.9997 25.7044H25.0038L25.0037 25.7086L24.9997 25.7085V25.7044ZM16.6663 25.7044H16.6705L16.6704 25.7086L16.6663 25.7085V25.7044Z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
      <div class="field-text">
        <label for="date-of-birth">Datum Rođenja</label>
        <input v-model="newUserInfo.dateOfBirth" type="date" id="date-of-birth"
          :placeholder="userInfo.user.dateOfBirth ? userInfo.user.dateOfBirth : 'Unesi Datum Rodjena'" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.7968 9.5738C19.164 7.99189 17.6319 6.95459 15.9281 6.95459H10.1974C8.0173 6.95459 6.25 8.72146 6.25 10.9015C6.25 29.4321 21.2725 44.4546 39.8031 44.4546C41.9831 44.4546 43.75 42.6871 43.75 40.5071L43.751 34.7753C43.751 33.0716 42.7139 31.5397 41.132 30.9069L35.6394 28.7107C34.2185 28.1423 32.6006 28.3981 31.4249 29.3779L30.0073 30.5602C28.3518 31.9398 25.9159 31.8301 24.3921 30.3062L20.4005 26.311C18.8766 24.7871 18.764 22.3532 20.1436 20.6977L21.3257 19.2802C22.3054 18.1045 22.5635 16.4862 21.9951 15.0652L19.7968 9.5738Z"
          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <div class="field-text">
        <label for="number">Broj Telefona</label>
        <input v-model="newUserInfo.phoneNumber" type="number" id="number"
          :placeholder="userInfo.user.phoneNumber ? userInfo.user.phoneNumber : 'Unesi Broj Telefona'" :readonly="!isEdit">
      </div>
    </span>
  </form>

  <form class="license-info">
    <h3>Informacije o dozvoli <span>(opciono)</span></h3>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="User / User_Card_ID">
          <path id="Vector"
            d="M12.5 38.2045C12.6326 38.2046 12.7693 38.2046 12.9102 38.2046H25M12.5 38.2045C10.4411 38.2029 9.36112 38.1771 8.52458 37.7509C7.74057 37.3514 7.10361 36.7123 6.70414 35.9283C6.25 35.037 6.25 33.8719 6.25 31.5383V19.8717C6.25 17.5381 6.25 16.3705 6.70414 15.4792C7.10361 14.6952 7.74057 14.0582 8.52458 13.6587C9.41588 13.2046 10.5835 13.2046 12.9171 13.2046H37.0837C39.4173 13.2046 40.5824 13.2046 41.4737 13.6587C42.2577 14.0582 42.8968 14.6952 43.2963 15.4792C43.75 16.3696 43.75 17.5358 43.75 19.8648V31.5444C43.75 33.8733 43.75 35.0379 43.2963 35.9283C42.8968 36.7123 42.2577 37.3514 41.4737 37.7509C40.5833 38.2046 39.4188 38.2046 37.0898 38.2046H25M12.5 38.2045C12.5001 35.9033 15.2983 34.0379 18.75 34.0379C22.2018 34.0379 25 35.9034 25 38.2046M12.5 38.2045C12.5 38.2045 12.5 38.2045 12.5 38.2045ZM37.5 29.8713H29.1667M37.5 23.6213H31.25M18.75 27.7879C16.4488 27.7879 14.5833 25.9224 14.5833 23.6213C14.5833 21.3201 16.4488 19.4546 18.75 19.4546C21.0512 19.4546 22.9167 21.3201 22.9167 23.6213C22.9167 25.9224 21.0512 27.7879 18.75 27.7879Z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
      <div class="field-text">
        <label for="full-name">Broj Dozvole</label>
        <input v-model="newUserInfo.licenseNumber" type="text" id="full-name"
          :placeholder="userInfo.user.licenseNumber ? userInfo.user.licenseNumber : 'Unesi Broj Dozvole'" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Warning / Triangle_Warning">
          <path id="Vector"
            d="M24.9995 19.4549V27.7882M9.12223 32.3711C7.22758 35.6528 6.28053 37.2942 6.42204 38.6406C6.54547 39.815 7.16184 40.882 8.11719 41.576C9.21209 42.3715 11.1056 42.3715 14.8923 42.3715H35.1067C38.8935 42.3715 40.7866 42.3715 41.8815 41.576C42.8369 40.882 43.4535 39.815 43.577 38.6406C43.7185 37.2942 42.7717 35.6528 40.8771 32.3711L30.7734 14.8711C28.8788 11.5895 27.931 9.94897 26.6943 9.39831C25.6155 8.91801 24.3829 8.91801 23.3041 9.39831C22.0678 9.94874 21.1206 11.5893 19.2276 14.8682L9.12223 32.3711ZM25.1053 34.0382V34.2465L24.8958 34.2469V34.0382H25.1053Z"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>

      <div class="field-text">
        <label for="email">JMBG</label>
        <input v-model="newUserInfo.userID" type="email" id="email"
          :placeholder="userInfo.user.userID ? userInfo.user.userID : 'Unesi JMBG (Opciono)'" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Calendar / Calendar_Check">
          <path id="Vector"
            d="M8.33301 16.8711H41.6663M8.33301 16.8711V35.2048C8.33301 37.5384 8.33301 38.7046 8.78715 39.5959C9.18662 40.3799 9.82358 41.0179 10.6076 41.4174C11.498 41.8711 12.6642 41.8711 14.9932 41.8711H35.0061C37.3351 41.8711 38.4997 41.8711 39.3901 41.4174C40.1741 41.0179 40.8132 40.3799 41.2126 39.5959C41.6663 38.7054 41.6663 37.5409 41.6663 35.2119V16.8711M8.33301 16.8711V15.2048C8.33301 12.8713 8.33301 11.7036 8.78715 10.8123C9.18662 10.0283 9.82358 9.39137 10.6076 8.9919C11.4989 8.53776 12.6665 8.53776 15.0001 8.53776H16.6663M41.6663 16.8711V15.198C41.6663 12.869 41.6663 11.7028 41.2126 10.8123C40.8132 10.0283 40.1741 9.39137 39.3901 8.9919C38.4988 8.53776 37.3336 8.53776 35.0001 8.53776H33.333M16.6663 8.53776H33.333M16.6663 8.53776V4.37109M33.333 8.53776V4.37109M31.2497 25.2044L22.9163 33.5378L18.7497 29.3711"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
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
          <path id="Vector"
            d="M8.33301 42.3713H41.6663M8.33301 42.3713V34.038L24.9997 17.3713M8.33301 42.3713L16.6663 42.3713L33.333 25.7046M24.9997 17.3713L30.976 11.395L30.9796 11.3914C31.8023 10.5688 32.2143 10.1567 32.6893 10.0024C33.1077 9.8664 33.5585 9.8664 33.9769 10.0024C34.4516 10.1566 34.8632 10.5682 35.6847 11.3897L39.3093 15.0143C40.1343 15.8393 40.547 16.252 40.7016 16.7277C40.8375 17.1461 40.8375 17.5968 40.7015 18.0153C40.5471 18.4906 40.135 18.9027 39.3111 19.7265L39.3093 19.7283L33.333 25.7046M24.9997 17.3713L33.333 25.7046"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>

      <div class="field-text">
        <label for="location">Potpis</label>
        <input v-model="newUserInfo.signature" type="text" id="location"
          :placeholder="userInfo.user.signature ? userInfo.user.signature : 'Unesi digitalni potpis'" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Navigation / Building_01">
          <path id="Vector"
            d="M4.16699 42.3714H8.33366M8.33366 42.3714H18.7503M8.33366 42.3714V15.7052C8.33366 13.3716 8.33366 12.204 8.7878 11.3127C9.18727 10.5287 9.82423 9.8917 10.6082 9.49223C11.4995 9.03809 12.6672 9.03809 15.0007 9.03809H18.3341C20.6676 9.03809 21.8328 9.03809 22.7241 9.49223C23.5081 9.8917 24.1472 10.5287 24.5466 11.3127C25.0003 12.2031 25.0003 13.3693 25.0003 15.6983V21.5385M18.7503 42.3714H41.667M18.7503 42.3714V30.6384C18.7503 29.5439 18.7503 28.9964 18.8816 28.4859C18.9979 28.0335 19.1894 27.6044 19.4482 27.2155C19.74 26.777 20.1485 26.4098 20.9618 25.6791L25.7568 21.3714C27.3292 19.9588 28.1159 19.2519 29.0055 18.9838C29.7898 18.7474 30.6268 18.7474 31.4111 18.9838C32.3014 19.2521 33.0892 19.9593 34.6642 21.3743L39.4559 25.6791C40.2701 26.4106 40.6764 26.7767 40.9684 27.2155C41.2272 27.6044 41.4184 28.0335 41.5348 28.4859C41.666 28.9964 41.667 29.5439 41.667 30.6384V42.3714M41.667 42.3714H45.8337"
            stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>

      <div class="field-text">
        <label for="date-of-birth">Ime izdavaca</label>
        <input v-model="newUserInfo.distributorName" type="text" id="date-of-birth"
          :placeholder="userInfo.user.distributorName ? userInfo.user.distributorName : 'Unesi Ime Izdavaca'" :readonly="!isEdit">
      </div>
    </span>

    <span class="input-filed">
      <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M35.4167 44.4546C35.4167 38.7016 30.753 34.0379 25 34.0379C19.247 34.0379 14.5833 38.7016 14.5833 44.4546M35.4167 44.4546H37.0898C39.4188 44.4546 40.5833 44.4546 41.4737 44.0009C42.2577 43.6014 42.8968 42.9623 43.2963 42.1783C43.75 41.2879 43.75 40.1233 43.75 37.7944V13.6148C43.75 11.2858 43.75 10.1196 43.2963 9.22917C42.8968 8.44516 42.2577 7.8082 41.4737 7.40873C40.5824 6.95459 39.4173 6.95459 37.0837 6.95459H12.9171C10.5835 6.95459 9.41588 6.95459 8.52458 7.40873C7.74057 7.8082 7.10361 8.44516 6.70414 9.22917C6.25 10.1205 6.25 11.2881 6.25 13.6217V37.7883C6.25 40.1219 6.25 41.287 6.70414 42.1783C7.10361 42.9623 7.74057 43.6014 8.52458 44.0009C9.415 44.4546 10.5812 44.4546 12.9102 44.4546H14.5833M35.4167 44.4546H14.5833M25 27.7879C21.5482 27.7879 18.75 24.9897 18.75 21.5379C18.75 18.0861 21.5482 15.2879 25 15.2879C28.4518 15.2879 31.25 18.0861 31.25 21.5379C31.25 24.9897 28.4518 27.7879 25 27.7879Z"
          stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div class="field-text">
        <label for="number">Opciono</label>
        <input v-model="newUserInfo.optional" type="number" id="number"
          :placeholder="userInfo.user.optional ? userInfo.user.optional : 'Opcioni Unos'" :readonly="!isEdit">
      </div>
    </span>
  </form>
</template>

<style lang="scss" scoped>
.edit-btn {
    flex: 0 0 100%;
    margin: 15px 0px 15px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    button {
      border: none;
      padding: 15px 20px;
      font-size: 16px;
    }
  }
.fisherman-info, .license-info {
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
    line-height: 140%;
    /* 50.4px */
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
        line-height: 140%;
        /* 33.6px */
      }

      input,
      .label-file {
        flex: 0 0 100%;
        color: rgba(255, 255, 255, 0.80);
        font-family: 'Inter', sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
        /* 28px */
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