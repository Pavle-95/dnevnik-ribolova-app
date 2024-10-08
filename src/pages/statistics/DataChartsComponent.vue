<script setup>
// Imports
import { ref } from 'vue'
import DataChartsCard from './DataChartsCard.vue';
import { useCatchStore } from '../../stores/catchList';


let catchStore = useCatchStore();

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
async function isActive(e, category) {
  // Remove 'quick-stats-link-btn-active' class from all li elements
  const allTimeDefines = document.querySelectorAll('.data-charts-nav-links button')
  allTimeDefines.forEach((link) => link.classList.remove('quick-stats-link-btn-active'))

  // Toggle the class on the clicked button
  e.target.classList.add('quick-stats-link-btn-active')

  // Update the categoryDefine.value
  categoryDefine.value = category

  const retrivedData = await catchStore.retrieveUniqueFishingData(categoryDefine.value); 

  // Update stats.value.data with retrieved data
  stats.value.data = retrivedData;
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
  @media (max-width: 1280px) {
    .data-charts-stast-holder {
      .data-charts-stats-nav {
        min-width: 105%;
        overflow: scroll;
        justify-content: flex-start;
        gap: 16px;
        padding-right: 5%;
        padding-bottom: 16px;
      }
    }
  }
  @media (max-width: 1280px) {
    padding: 25px 0px;
    .data-charts-stast-holder {
      .data-charts-stast-title {
        font-size: 34px;
      }
      .data-charts-stats-nav {
        .data-charts-nav-links {
          button {
            padding: 12px 18px;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
