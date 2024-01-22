<script setup>
// Imports
  import { onMounted, ref } from 'vue';
  import { useCatchStore} from '../../stores/catchList.js'

  import AddEditCatchComponent from './partials/AddEditCatchComponent.vue';
  import SingleCatchCard from './partials/SingleCatchCard.vue';

/// Variables
  const cathListStore = useCatchStore();
  let editCatchModal = ref('editCatchModal');
  let editedCatch = ref({});
  let oldCatch;

//// Functions
  function editCatchHandler(id) {
    // Extract Catch that you want to edit
    const catchList = cathListStore.fishList.filter(element => element.catch_id === id);
    editedCatch.value = catchList[0];
    oldCatch = {...editedCatch.value};
 
    // Show Edit Modal
    editCatchModal.value.showModal();
  }

  function submitEditedCatch() {
    // Call Function that edit old values with new
    cathListStore.editCatchFromList(editedCatch.value);
    // Call Close modal function
    editCatchModal.value.close();
  }

  function closeModal() {
    editedCatch.value = oldCatch;
    cathListStore.editCatchFromList(oldCatch);

    editCatchModal.value.close();
  }

  onMounted(() => {
    cathListStore.fetchDataFromLocalStorage();
  })
</script>

<template>
  <section class="fishing-list">
    <div class="fishing-list-holder container">
      <h2>List danasnjeg ulova</h2>
      <div v-if="cathListStore.fishList.length > 0" class="fish-holder">
        <SingleCatchCard
          v-for="(fish, index) in cathListStore.fishList"
          :fish="fish"
          :key="index"
          :id="fish.catch_id"
          @editCatchHandler="editCatchHandler(fish.catch_id)"
        />
      </div>
      <div v-else class="end-point">
        <h2>Vasa lista je prazna molimo vas dodajte vas ulov</h2>
      </div> 
    </div>
  </section>

  <dialog ref="editCatchModal" class="edit-catch-modal">
    <AddEditCatchComponent
      :fish="editedCatch"
      @closeModal="closeModal"
      @submitCatch="submitEditedCatch"
    />
  </dialog>
</template>

<style lang="scss" scoped>
  .fishing-list {
    padding: 80px 0px;
    .fishing-list-holder {
      h2 {
        color: #FBE2B7;
        font-family: 'Jost', sans-serif;
        font-size: 54px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 75.6px */
      }
      .fish-holder {
        margin-top: 40px;
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 25px;
      }
    }
  }
  .edit-catch-modal {
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
  }
</style>