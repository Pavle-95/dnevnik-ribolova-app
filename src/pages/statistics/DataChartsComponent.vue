<script setup>
// Imports
import { ref } from 'vue'
import DataChartsCard from './DataChartsCard.vue';


// Varibales
let categoryDefine = ref('')
let stats = ref({
  data: [
    { name: 'stuka', value: 2 },
    { name: 'som', value: 14 },
    { name: 'šaran', value: 4 },
    { name: 'pastrmka', value: 12 },
    { name: 'somovina', value: 2 },
    { name: 'smuđ', value: 3 }
    // add five more type of fish with their respective values
  ]
})

// Functions
function isActive(e, category) {
  // Remove 'quick-stats-link-btn-active' class from all li elements
  const allTimeDefines = document.querySelectorAll('.data-charts-nav-links button')
  allTimeDefines.forEach((link) => link.classList.remove('quick-stats-link-btn-active'))

  // Toggle the class on the clicked button
  e.target.classList.add('quick-stats-link-btn-active')

  // Update the categoryDefine.value
  categoryDefine.value = category

  // Call dataStatsHander Function to inport new data for time definition
  dataStatsHandler(categoryDefine.value)
}

function dataStatsHandler(category) {
  switch (category) {
  case 'typeOfFish':
    stats.value = {
      data: [
        { name: 'stuka', value: 2 },
        { name: 'som', value: 14 },
        { name: 'šaran', value: 4 },
        { name: 'pastrmka', value: 12 },
        { name: 'somovina', value: 2 },
        { name: 'smuđ', value: 3 }
        // add five more type of fish with their respective values
      ]
    }
    break;

  case 'fishSize':
    stats.value = {
      data: [
        'od 0 do 5cm',
        'od 5 do 10cm',
        'od 10 do 15cm',
        'od 15 do 20cm',
        'od 20 do 25cm',
        'preko 25cm'
        // add five more size options
      ]
    }
    break;

  case 'location':
    stats.value = {
      data: [
        'Jezero Barje',
        'Reka Sava',
        'Jezero Bled',
        'Ribnik Krka',
        'Reka Kolpa',
        'Jezero Bohinj'
        // add five more locations
      ]
    }
    break;

  case 'baitUsed':
    stats.value = {
      data: [
        'Fider',
        'Muharjenje',
        'Štek',
        'Feeder',
        'Podvodni ribolov',
        'Plivanje'
        // add five more fishing methods
      ]
    }
    break;

  // Default case
  default:
    stats.value = {
      data: [
        'stuka',
        'som',
        'šaran',
        'pastrmka',
        'somovina',
        'smuđ'
        // add five more type of fish
      ]
    }
    break;
}
}
</script>

<template>
  <section class="data-charts-stast">
    <div class="container data-charts-stast-holder">
      <h2 class="data-charts-stast-title">Statistika u Grafikonima</h2>

      <ul class="data-charts-stats-nav">
        <li class="data-charts-nav-links">
          <button
            @click="isActive($event, 'typeOfFish')"
            class="data-charts-stats-link-btn quick-stats-link-btn-active"
          >
            Vrsta Ribe
          </button>
        </li>
        <li class="data-charts-nav-links">
          <button @click="isActive($event, 'fishSize')" class="data-charts-stats-link-btn">
            Velicina Ribe
          </button>
        </li>
        <li class="data-charts-nav-links">
          <button @click="isActive($event, 'location')" class="data-charts-stats-link-btn">
            Lokacija
          </button>
        </li>
        <li class="data-charts-nav-links">
          <button @click="isActive($event, 'fishingMethod')" class="data-charts-stats-link-btn">
            Metoda Pecanja
          </button>
        </li>
        <li class="data-charts-nav-links">
          <button @click="isActive($event, 'baitUsed')" class="data-charts-stats-link-btn">
            Korisceni Mamac
          </button>
        </li>
      </ul>

      <!-- Quick Cards -->
      <DataChartsCard :dataStats="stats" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.data-charts-stast {
  padding: 80px 0px;
  border-top: 2px solid var(--FirstLinear, #94a03c);
  background: #21221c;
  .data-charts-stast-holder {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 24px;
    .data-charts-stast-title {
      flex: 0 0 100%;
      color: #fbe2b7;
      font-family: 'Jost', sans-serif;
      font-size: 54px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
    .data-charts-stats-nav {
      flex: 0 0 100%;
      list-style: none;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
      .data-charts-stats-link-btn {
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
}
</style>
