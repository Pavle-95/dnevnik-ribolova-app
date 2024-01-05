<script setup>
// Imports
  import { ref } from 'vue';
  import { useAuthStore } from 'stores/authStore';
  import { useWaterStore } from 'stores/waterStore';
  import { getLakes } from 'services/lakeSearchServices' 
  import WatersResultsComponent from './WatersResultsComponent.vue';

/// Varibles
  const authStore = useAuthStore();
  const lakeStore = useWaterStore();
  const bearerToken = authStore.userToken;

  let searchQuery = ref({
    type: 'all',
    text: '',
  });

  let searchPlaceholder = ref('sve');
  let isLoading = ref(true);

//// Function
async function searchInputHandler() {
  isLoading.value = true;
  try {
    const response = await getLakes(searchQuery.value, bearerToken)
    lakeStore.lakes = response;
    isLoading.value = false;
    // console.log(response);
  } catch (error) {
    console.log(error);
  }

}

// Functions
function isActive(e, waterType) {
  // Remove 'quick-stats-link-btn-active' class from all li elements
  const allTimeDefines = document.querySelectorAll('.filter-btn button')
  allTimeDefines.forEach((link) => link.classList.remove('quick-stats-link-btn-active'))

  // Toggle the class on the clicked button
  e.target.classList.add('quick-stats-link-btn-active')
  searchQuery.value.type = waterType;
  searchPlaceholderHandler(waterType);
  searchInputHandler();
}

// Translater function for placeholder
function searchPlaceholderHandler(waterType) {
  switch (waterType) {
    case 'all':
      searchPlaceholder.value = 'sve';
      break;

    case 'lake':
      searchPlaceholder.value = 'jezera';
      break;

    case 'river':
      searchPlaceholder.value = 'reke';
      break;

    case 'pond':
      searchPlaceholder.value = 'bare';
      break;

    case 'fishpond':
      searchPlaceholder.value = 'ribnjaci';
      break;

    default:
      searchPlaceholder.value = 'sve';
      break;
  }
}
</script>

<template>
  <section class="lakes-search">
    <!-- Lake Search Holder -->
    <div class="lakes-search-holder container">
      <h2>Pretrazi Lokacije</h2>
      <!-- Search Input -->
      <div class="search-input-holder">
        <input 
          class="search-input"
          :placeholder="'Petraži ' + searchPlaceholder"
          type="text"
          v-model="searchQuery.text">
        <button @click="searchInputHandler" class="search-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Interface / Search_Magnifying_Glass">
            <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
      </div>
      <!-- Search Filter Holder -->
      <ul class="search-filter-holder">
        <li class="filter-btn">
          <button
            @click="isActive($event, 'all')"
            class="quick-stats-link-btn quick-stats-link-btn-active">
            Sve
          </button>
        </li>
        <li class="filter-btn">
          <button
            @click="isActive($event, 'lake')"
            class="quick-stats-link-btn">
            Jezera
          </button>
        </li>
        <li class="filter-btn">
          <button 
            @click="isActive($event, 'river')" 
            class="quick-stats-link-btn">
            Reke
          </button>
        </li>
        <li class="filter-btn">
          <button 
            @click="isActive($event, 'pond')" 
            class="quick-stats-link-btn">
            Bare
          </button>
        </li>
        <li class="filter-btn">
          <button 
            @click="isActive($event, 'fishpond')" 
            class="quick-stats-link-btn">
            Ribnjaci
          </button>
        </li>
      </ul>
    </div>

    <!-- Search Results Holder -->
    <WatersResultsComponent 
      :lakes="lakeStore.lakes"
      :isLoading="isLoading"
    />
    <!-- Search Results Holder -->
  </section>
</template>

<style lang="scss" scoped>
  .lakes-search {
    padding: 80px 0px 120px;
    border-top: 2px solid var(--FirstLinear, #94A03C);
    background: #21221C;
    .lakes-search-holder {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      h2 {
        flex: 0 0 100%;
        color: #FBE2B7;
        font-family: 'Jost', sans-serif;
        font-size: 54px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
      .search-input-holder {
        flex: 0 0 65%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
        .search-input {
          flex: 1 0 70%;
          border: none;
          padding: 16px 25px;
          border-radius: 16px;
          background: #303030;
          color: #FFF;
          font-family: 'Jost', sans-serif;
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 140%; /* 28px */
          &:focus {
            outline: none;
          }
        }
        .search-btn {
          border: none;
          flex: 0 0 10%;
          max-width: 56px;
          height: auto;
          padding: 16px;
          border-radius: 16px;
          background: linear-gradient(90deg, #94A03C 0%, #1E2913 103.55%);
          &:focus {
            outline: none;
          }
          &:hover {
            cursor: pointer;
          }
        }
      }
      .search-filter-holder {
        flex: 0 0 65%;
        display: flex;
        gap: 20px;
        list-style: none;
        .filter-btn {
          button {
            border: none;
            flex: 1 0 20%;
            padding: 20px 30px;
            overflow: hidden;
            color: var(--White, #fff);
            text-align: center;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-family: 'Jost', sans-serif;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            letter-spacing: 0.5px;
            border-radius: 4px;
            background: #303030;
            &:hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
</style>