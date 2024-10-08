<script setup>
// Imports
import { ref } from 'vue';
import { useCatchStore } from '../../stores/catchList'; 
import QuickStatsCards from './QuickStatsCards.vue'

const catchStore = useCatchStore();

// Varibales
let timeDefine = ref('')
let stats = ref({
  totalCaths: 124,
  catchAverage: 85,
  totalSpecies: 22,
  daysFishing: 156,
  hoursFishing: 274
})

// Functions
function isActive(e, time) {
  // Remove 'quick-stats-link-btn-active' class from all li elements
  const allTimeDefines = document.querySelectorAll('.qucik-nav-links button')
  allTimeDefines.forEach((link) => link.classList.remove('quick-stats-link-btn-active'))

  // Toggle the class on the clicked button
  e.target.classList.add('quick-stats-link-btn-active')

  // Update the timeDefine.value
  timeDefine.value = time

  // Call dataStatsHander Function to inport new data for time definition
  dataStatsHandler(time);
  catchStore.retrieveAllCatchHandler(time);
}

function dataStatsHandler(time) {
  switch (time) {
    case 'limitles':
      stats.value = {
        totalCaths: 124,
        catchAverage: 85,
        totalSpecies: 22,
        daysFishing: 156,
        hoursFishing: 274
      }
      break

    case 'thisYear':
      stats.value = {
        totalCaths: 120,
        catchAverage: 30,
        totalSpecies: 8,
        daysFishing: 180,
        hoursFishing: 220
      }
      break

    case 'thisMonth':
      stats.value = {
        totalCaths: 30,
        catchAverage: 15,
        totalSpecies: 3,
        daysFishing: 30,
        hoursFishing: 40
      }
      break

    case 'lastMonth':
      stats.value = {
        totalCaths: 40,
        catchAverage: 20,
        totalSpecies: 5,
        daysFishing: 35,
        hoursFishing: 45
      }
      break

    // Default case
    default:
      stats.value = {
        totalCaths: 0,
        catchAverage: 0,
        totalSpecies: 0,
        daysFishing: 0,
        hoursFishing: 0
      }
      break
  }
}
</script>

<template>
  <section class="quick-stast">
    <div class="container quick-stast-holder">
      <h2 class="quick-stast-title">Brza Statistika</h2>

      <ul class="quick-stats-nav">
        <li class="qucik-nav-links">
          <button
            @click="isActive($event, 'limitles')"
            class="quick-stats-link-btn quick-stats-link-btn-active"
          >
            Svo Vreme
          </button>
        </li>
        <li class="qucik-nav-links">
          <button @click="isActive($event, 'thisYear')" class="quick-stats-link-btn">
            Ove Godine
          </button>
        </li>
        <li class="qucik-nav-links">
          <button @click="isActive($event, 'thisMonth')" class="quick-stats-link-btn">
            Ovaj Mesec
          </button>
        </li>
        <li class="qucik-nav-links">
          <button @click="isActive($event, 'lastMonth')" class="quick-stats-link-btn">
            Prethodni Mesec
          </button>
        </li>
      </ul>

      <!-- Quick Cards -->
      <QuickStatsCards :dataStats="stats" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.quick-stast {
  padding: 80px 0px;
  border-top: 2px solid var(--FirstLinear, #94a03c);
  background: #21221c;
  .quick-stast-holder {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 24px;
    .quick-stast-title {
      flex: 0 0 100%;
      color: #fbe2b7;
      font-family: 'Jost', sans-serif;
      font-size: 54px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .quick-stats-nav {
      flex: 0 0 100%;
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
      .quick-stats-link-btn {
        border: none;
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
  @media (max-width: 1280px) {
    .quick-stast-holder {
      .quick-stats-nav {
        min-width: 105%;
        overflow: scroll;
        justify-content: flex-start;
        gap: 16px;
        padding-right: 5%;
        padding-bottom: 16px;
      }
      .quick-stats-cards {
        min-width: 105%;
        overflow: scroll;
        justify-content: flex-start;
        gap: 16px;
        padding-right: 5%;
        padding-bottom: 16px;
      }
    }
  }
  @media (max-width: 550px) {
    padding: 25px 0px;
    .quick-stast-holder {
      .quick-stast-title {
        font-size: 34px;
      }
      .quick-stats-nav {
        min-width: 105%;
        overflow: scroll;
        justify-content: flex-start;
        gap: 16px;
        padding-right: 5%;
        padding-bottom: 16px;
        .qucik-nav-links {
          button {
            padding: 12px 18px;
            font-size: 16px;
          }
        }
      }
      .quick-stats-cards {
        margin-top: 5px;
        min-width: 105%;
        overflow: scroll;
        justify-content: flex-start;
        gap: 16px;
        padding-right: 5%;
        padding-bottom: 16px;
      }
    }
  }
}
</style>
