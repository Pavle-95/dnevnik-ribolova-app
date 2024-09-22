<script setup>
  import { ref } from 'vue';
  import { useAuthStore } from "stores/authStore.js";
  import { useCatchStore} from "stores/catchList.js";
  import { v4 as uuidv4 } from 'uuid';

  import AddEditCatchComponent from './partials/AddEditCatchComponent.vue';

  let cathListStore = useCatchStore();
  let authStore = useAuthStore();

  let addCatchModal = ref('addCatchModal');
  
  let newCatch = ref({
    user_id: authStore.user._id,
    location: authStore.user.location,
  });

  function openModal() {
    addCatchModal.value.showModal();
  }

  function closeModal() {
    addCatchModal.value.close();
  }

  function saveEndHandler() {
    cathListStore.saveCatchToDatabase(cathListStore.fishList);
  }

  function submitCatchHandler() {    
    // Get all new value for the catch
    newCatch.value = {...newCatch.value,
      catch_id: uuidv4(),
      user_id: authStore.user._id,
      location: authStore.user.location
    };

    // Push new catch to the list
    cathListStore.addCatchToList(newCatch.value);

    // Saving to localStorage
    localStorage.setItem('currentCatch', JSON.stringify(cathListStore.fishList))
    
    // Reset new catch value
    newCatch.value = {
      user_id: authStore.user._id,
      location: authStore.user.location
    };

    // Close Modal
    addCatchModal.value.close();
  }
</script>

<template>
  <section class="fishing-hero">
    <div class="fishing-hero-holder container">
      <h1>Pecanje...</h1>
      <div class="btn-holder">
        <button 
          @click="openModal"
          class="btn-primary btn-primary-active">
          Dodaj Ulov
        </button>
        <button 
          @click="saveEndHandler"
          class="btn-primary">
          Sacuvaj/Izadji
        </button>
      </div>
    </div>
  </section>

  <dialog ref="addCatchModal" class="add-catch-modal">
    <AddEditCatchComponent
      :fish="newCatch"
      @closeModal="closeModal"
      @submitCatch="submitCatchHandler"
    />
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
    @media (max-width: 1280px) {
      .fishing-hero-holder {
        h1 {
          font-size: 58px;
        }
      }
    }
    @media (max-width: 1024px) {
      .fishing-hero-holder {
        .btn-holder {
          button {
            padding: 20px 38px;
            font-size: 16px;
          }
        }
      }
    }
    @media (max-width: 550px) {
      padding: 25px 0px;
      .fishing-hero-holder {
        gap: 35px;
        h1 {
          font-size: 34px;
        }
        .btn-holder {
          flex-direction: column;
          gap: 15px;
          button {
            width: 100%;
            // padding: 18px 32px;
            font-size: 16px;
            &::before {
              left: -250px;
            }
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
    @media (max-width: 1024px) {
      width: 100%;
    }
    @media (max-width: 550px) {
       padding: 16px;
    }
  }
</style>