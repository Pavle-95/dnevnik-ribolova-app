<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from "stores/authStore.js";
  import { useCatchStore} from "stores/catchList.js";
  import { v4 as uuidv4 } from 'uuid';

  let cathListStore = useCatchStore();
  let authStore = useAuthStore();

  let addCatchModal = ref('addCatchModal');
  
  let newCatch = ref({
    user_id: authStore.user._id,
    location: authStore.user.location,

  });

  function openModal() {
    addCatchModal.value.showModal();

    if (cathListStore.catchForEdit) {
      console.log(cathListStore.catchForEdit);
      console.log('NIsta sve cool');
    }
    else {
      console.log('Editujemo');
    }
  }

  function closeModal() {
    addCatchModal.value.close();
  }

  function saveEndHandler() {
    console.log("Lista za cuvanje: " + cathListStore.fishList);
    cathListStore.saveCatchToDatabase(cathListStore.fishList);
  }

  function submitCatchHandler() {

    addCatchModal.value.close();
    newCatch.value = {...newCatch.value,
      catch_id: uuidv4(),
      user_id: authStore.user._id,
      location: authStore.user.location
    };

    cathListStore.addCatchToList(newCatch.value);

    // Saving to localStorage
    localStorage.setItem('currentCatch', JSON.stringify(cathListStore.fishList))
    newCatch.value = {
      user_id: authStore.user._id,
      location: authStore.user.location
    };
  }


</script>

<template>
  <section class="fishing-hero">
    <div class="fishing-hero-holder">
      <h1>Pecanje...</h1>
      <div class="btn-holder">
        <button 
          @click="openModal"
          class="btn-primary btn-primary-active">
          Add Catch
        </button>
        <button 
          @click="saveEndHandler"
          class="btn-primary">
          Save/End
        </button>
      </div>
    </div>
  </section>

  <dialog ref="addCatchModal" class="add-catch-modal">
    <span class="heading-close-btn">
      <h2>Unesi ulov</h2>
      <button class="close-modal-btn" @click="closeModal">
        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 9H8.5M8.5 9H15.5M8.5 9V16M8.5 9V2" stroke="#94A03C" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </span>
    <div class="form-holder">
      <div class="input-holder">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_56_11367)">
          <path d="M10.4828 8.5C10.4824 7.3145 10.796 6.15003 11.3916 5.125L11.6297 4.71063C11.1305 4.59183 10.6219 4.51707 10.1097 4.48719C9.42406 3.95906 8.40219 3.3325 7.22406 3.13313L6.5 3L6.91781 4.93313C5.61562 5.375 4.46688 6.2725 3.70656 6.89C3.55948 6.76687 3.40552 6.64656 3.24469 6.52906C2.00375 5.62281 0.663437 5.53531 0.607188 5.53219L0 5.5L0.0834375 6.10344C0.0925 6.16594 0.295625 7.50125 1.0725 8.49469C0.295625 9.48844 0.09375 10.8228 0.0834375 10.8862L0 11.5L0.607188 11.4575C0.663437 11.4544 2.00375 11.3672 3.24469 10.4606C3.4026 10.3454 3.55427 10.227 3.69969 10.1053C4.46125 10.725 5.61031 11.6241 6.91406 12.0659L6.5 14L7.22406 13.8681C8.39563 13.67 9.41406 13.0431 10.0991 12.5144C10.6184 12.4843 11.1342 12.4087 11.6403 12.2884L11.3931 11.8766C10.7968 10.8512 10.4828 9.68616 10.4828 8.5Z" fill="white"/>
          <path d="M15.6128 7.42953C15.43 7.12078 15.0959 6.6514 14.5443 6.17078C13.9702 5.6763 13.3146 5.28509 12.6068 5.01453L12.2578 5.62484C11.751 6.49741 11.4839 7.48839 11.4834 8.49743C11.4829 9.50647 11.7491 10.4977 12.255 11.3708L12.6221 11.9823C13.3226 11.7151 13.9718 11.3293 14.5415 10.842C15.5334 9.98328 16.0006 8.90609 16.0006 8.49984C16.0006 8.11515 15.7506 7.66421 15.6128 7.42953ZM13.0006 8.49984C12.9017 8.49984 12.805 8.47051 12.7228 8.41557C12.6406 8.36063 12.5765 8.28254 12.5386 8.19118C12.5008 8.09982 12.4909 7.99928 12.5102 7.90229C12.5295 7.8053 12.5771 7.71621 12.647 7.64629C12.717 7.57636 12.806 7.52874 12.903 7.50945C13 7.49015 13.1006 7.50006 13.1919 7.5379C13.2833 7.57574 13.3614 7.63983 13.4163 7.72205C13.4713 7.80428 13.5006 7.90095 13.5006 7.99984C13.5006 8.13245 13.4479 8.25962 13.3541 8.35339C13.2604 8.44716 13.1332 8.49984 13.0006 8.49984Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_56_11367">
          <rect width="16" height="16" fill="white" transform="translate(0 0.5)"/>
          </clipPath>
          </defs>
        </svg>
        <input v-model="newCatch.fishType" placeholder="Vrsta ribe" type="text">
      </div>
      <div class="input-holder">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.25 4.25H12.5396C12.9886 5.02328 13.25 5.91824 13.25 6.875C13.25 9.76988 10.8949 12.125 8 12.125C5.10512 12.125 2.75 9.76988 2.75 6.875C2.75 5.91824 3.01141 5.02328 3.46039 4.25H2.75C1.78504 4.25 1 5.03504 1 6V13.25C1 14.215 1.78504 15 2.75 15H13.25C14.215 15 15 14.215 15 13.25V6C15 5.03504 14.215 4.25 13.25 4.25ZM8 11.25C10.4164 11.25 12.375 9.29137 12.375 6.875C12.375 4.45863 10.4164 2.5 8 2.5C5.58363 2.5 3.625 4.45863 3.625 6.875C3.625 9.29137 5.58363 11.25 8 11.25ZM7.9918 7.09539L8.91 4.95273C9.0057 4.72934 9.26383 4.6268 9.48504 4.72277C9.70707 4.81793 9.80988 5.07523 9.715 5.29699L8.79434 7.44484C8.97699 7.64062 9.09375 7.89902 9.09375 8.1875C9.09375 8.79152 8.60402 9.28125 8 9.28125C7.39598 9.28125 6.90625 8.79152 6.90625 8.1875C6.90625 7.58648 7.39188 7.10004 7.9918 7.09539Z" fill="white"/>
        </svg>
        <input v-model="newCatch.fishWeight" placeholder="Tezina Ribe" type="number">
      </div>
      <div class="input-holder">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.6126 1.27723C12.1232 1.26691 11.6029 1.47416 11.2708 1.60244L9.49363 2.56735L11.1854 2.95273L11.0347 2.32679C12.0546 1.73532 12.8168 1.77688 13.1845 1.98116C13.3724 2.08551 13.4598 2.21998 13.4799 2.35294C13.5 2.48591 13.4609 2.64013 13.2887 2.81232L10.7967 5.30429C10.8793 5.35054 10.9557 5.40673 11.0239 5.47491C11.092 5.54304 11.1482 5.61948 11.1944 5.70207L13.6864 3.21007C13.8586 3.03788 14.0128 2.99869 14.1458 3.01882C14.2788 3.03898 14.4133 3.12641 14.5176 3.31419C14.7219 3.68194 14.7634 4.44413 14.172 5.4641L13.546 5.31338L13.9314 7.0051L15.0124 5.01366C15.2569 4.4671 15.3336 3.62482 15.0093 3.04101C14.8362 2.72951 14.5547 2.51188 14.23 2.46269C14.1895 2.45656 14.1486 2.45313 14.1075 2.45244C14.0868 2.45215 14.066 2.45253 14.0453 2.4536C14.0483 2.39166 14.0453 2.32985 14.036 2.26873C13.9869 1.94404 13.7692 1.66251 13.4578 1.48948C13.2241 1.35969 12.9391 1.28407 12.6127 1.27719L12.6126 1.27723ZM9.97763 5.68838C9.72351 5.69041 9.4092 5.73819 9.05726 5.82835C8.25288 6.03441 7.25301 6.45691 6.23835 6.97794C4.20904 8.02001 2.0987 9.47251 1.26085 10.3104C0.683603 10.8876 0.682103 11.6327 0.940509 12.4078C1.19888 13.183 1.73776 13.9397 2.14838 14.3503C2.55901 14.7609 3.31576 15.2998 4.09088 15.5582C4.86604 15.8166 5.6111 15.8151 6.18838 15.2378C7.0262 14.4 8.4787 12.2897 9.52076 10.2604C10.0418 9.24569 10.4643 8.24579 10.6704 7.44144C10.7734 7.03926 10.8211 6.68613 10.8084 6.41595C10.7956 6.14573 10.7262 5.97279 10.626 5.87266C10.5259 5.77254 10.353 5.70307 10.0828 5.69035C10.0478 5.68873 10.0127 5.68808 9.9776 5.68838H9.97763ZM9.59204 6.4271C9.59206 6.4271 9.59208 6.4271 9.5921 6.4271C9.73254 6.42973 9.8524 6.47632 9.93742 6.56132C9.99569 6.6196 10.0362 6.69452 10.0566 6.78182C10.077 6.86911 10.0769 6.96706 10.0563 7.07008C10.0356 7.17311 9.99496 7.27918 9.9365 7.38224C9.87804 7.4853 9.80296 7.58334 9.71554 7.67076C9.62812 7.75817 9.53009 7.83325 9.42702 7.89171C9.32396 7.95017 9.21789 7.99087 9.11487 8.01147C9.01185 8.03207 8.91389 8.03218 8.8266 8.01179C8.7393 7.9914 8.66438 7.95091 8.6061 7.89263C8.54782 7.83436 8.50733 7.75943 8.48694 7.67214C8.46655 7.58484 8.46666 7.48689 8.48726 7.38387C8.50787 7.28085 8.54856 7.17478 8.60702 7.07171C8.66548 6.96865 8.74056 6.87061 8.82798 6.7832C8.93949 6.67169 9.0679 6.58064 9.2014 6.51842C9.33491 6.4562 9.46923 6.4248 9.59204 6.4271Z" fill="white"/>
        </svg>
        <input v-model="newCatch.baitType" placeholder="Vrsta Mamca" type="text">
      </div>
      <div class="input-holder">
        <svg width="20" height="24" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.5C8.54184 1.50172 7.1439 2.08174 6.11282 3.11281C5.08174 4.14389 4.50173 5.54184 4.50001 7C4.49826 8.19161 4.8875 9.35089 5.60801 10.3C5.60801 10.3 5.75801 10.4975 5.78251 10.526L10 15.5L14.2195 10.5235C14.2415 10.497 14.392 10.3 14.392 10.3L14.3925 10.2985C15.1127 9.34981 15.5017 8.19107 15.5 7C15.4983 5.54184 14.9183 4.14389 13.8872 3.11281C12.8561 2.08174 11.4582 1.50172 10 1.5ZM10 9C9.60444 9 9.21776 8.8827 8.88887 8.66294C8.55997 8.44318 8.30362 8.13082 8.15225 7.76537C8.00087 7.39991 7.96126 6.99778 8.03844 6.60982C8.11561 6.22186 8.30609 5.86549 8.58579 5.58579C8.8655 5.30608 9.22186 5.1156 9.60983 5.03843C9.99779 4.96126 10.3999 5.00087 10.7654 5.15224C11.1308 5.30362 11.4432 5.55996 11.6629 5.88886C11.8827 6.21776 12 6.60444 12 7C11.9993 7.53023 11.7884 8.03855 11.4135 8.41348C11.0386 8.78841 10.5302 8.99934 10 9Z" fill="white"/>
        </svg>
        <input v-model="newCatch.location" placeholder="Ribolovna Voda" type="text">
      </div>
    </div>
    <button class="submit-catch" @click="submitCatchHandler">
      Dodaj ulov
    </button>
  </dialog>

</template>

<style lang="scss" scoped>
  .fishing-hero {
    padding: 110px 0px;
    background-image: url('img/default-page-img.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .fishing-hero-holder {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 50px;
      h1 {
        color: #FBE2B7;
        text-align: center;
        text-shadow: 4px 2px 10px rgba(255, 255, 255, 0.48);
        font-family: 'Jost', sans-serif;
        font-size: 64px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 89.6px */
      }
      .btn-holder {
        border-top: 2px solid #94A03C;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;
        button {
          border: none;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }

  .add-catch-modal {
    width: 45%;
    padding: 32px;
    border-radius: 16px;
    background: #303030;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: none;
    &:focus {
      outline: none;
    }
    .heading-close-btn {
      flex: 0 0 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
        color: #FFF;
        font-family: 'Jost', sans-serif;
        font-size: 28px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 33.6px */
      }
      .close-modal-btn {
        position: absolute;
        right: 32px;
        top: 32px;
        border: none;
        background-color: transparent;
        svg {
          transform: rotateZ(45deg) scale(1.4);
        }
      }
    }
    .form-holder {
      margin: 34px 24px;
      flex: 0 0 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      .input-holder {
        padding: 8px 0px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
        border-bottom: 1px solid var(--FourthLinear, #94A03C);
        svg {
          display: block;
          height: auto;
          width: 100%;
          flex: 0 0 6%;
          vertical-align: middle;
        }
        input {
          margin-left: 10px;
          background-color: transparent;
          border: none;
          flex: 1 0 60%;
          color: rgba(255, 255, 255, 0.80);
          font-family: 'Jost', sans-serif;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 25.2px */
          &:focus {
            outline: none;
          }
        }
      }
    }
    .submit-catch {
      margin: 0px auto;
      border: none;
      display: block;
      width: fit-content;
      padding: 12px 35px;
      border-radius: 8px;
      background: linear-gradient(90deg, #94A03C 0%, #1E2913 103.55%);
      color: #FFF;
      text-align: center;
      font-family: 'Jost', sans-serif;
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%; /* 19.2px */
    }
  }




</style>