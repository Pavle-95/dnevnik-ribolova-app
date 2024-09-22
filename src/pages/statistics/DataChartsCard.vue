<script setup>
// Imports
  import { Chart } from 'chart.js/auto'
  import { ref, onMounted, defineProps, watch } from 'vue'

// Props
  const props = defineProps({
    dataStats: Object
  })

/// Varibles
  const pieChartCanvas = ref(null)
  const barChartCanvas = ref(null)
  const backgroundColorCustom = [
    'rgba(87, 117, 24, 1)',
    'rgba(185, 151, 64, 1)',
    'rgba(54, 118, 47, 1)',
    'rgba(148, 160, 60, 0.62)',
    'rgba(87, 117, 24, 0.8)', // Slightly transparent version of the first color
    'rgba(185, 151, 64, 0.8)', // Slightly transparent version of the second color
    'rgba(54, 118, 47, 0.8)', // Slightly transparent version of the third color
    'rgba(148, 160, 60, 0.5)', // More transparent version of the fourth color
    'rgba(87, 117, 24, 0.5)'
  ]

/// Sorted data from passed props for nicer look on chart
  let sortedData = ref([...props.dataStats.data].sort((a, b) => b.value - a.value))

/// data witch will be displayed in chart
  const dataForDisplay = ref({
    labels: sortedData.value.map((item) => item.name),
    datasets: [
      {
        data: sortedData.value.map((item) => item.value),
        backgroundColor: backgroundColorCustom,
        hoverOffset: 4,
        borderWidth: 1,
        borderColor: 'rgba(24, 24, 24, 0.15)'
      }
    ]
  })

//// Function
//// Function that will handle when user input new data from backend
  function dataUpdateHandler(dataToSort) {
    // Sorting new data
    sortedData.value = [...dataToSort.data].sort((a, b) => b.value - a.value)

    // Adding new data to dataForDisplay varibles so my chart get new data to display
    dataForDisplay.value = {
      labels: sortedData.value.map((item) => item.name),
      datasets: [
        {
          data: sortedData.value.map((item) => item.value),
          backgroundColor: [
            'rgba(87, 117, 24, 1)',
            'rgba(185, 151, 64, 1)',
            'rgba(54, 118, 47, 1)',
            'rgba(148, 160, 60, 0.62)',
            'rgba(87, 117, 24, 0.8)', // Slightly transparent version of the first color
            'rgba(185, 151, 64, 0.8)', // Slightly transparent version of the second color
            'rgba(54, 118, 47, 0.8)', // Slightly transparent version of the third color
            'rgba(148, 160, 60, 0.5)', // More transparent version of the fourth color
            'rgba(87, 117, 24, 0.5)'
          ],
          hoverOffset: 4,
          borderWidth: 1,
          borderColor: 'rgba(24, 24, 24, 0.15)'
        }
      ]
    }
  }

//// data chart handler function so when data are update it will rerender new chart with new data
  function dataChartHandler(data) {
    if (pieChartCanvas.value) {
      const ctp = pieChartCanvas.value.getContext('2d')
      const ctb = barChartCanvas.value.getContext('2d')

      // Destroy the existing chart if it exists
      const existingPieChart = Chart.getChart(ctp);
      const existingBarChart = Chart.getChart(ctb);
      if (existingPieChart && existingBarChart) {
        existingPieChart.destroy();
        existingBarChart.destroy();
      }

      const legendPosition = window.innerWidth < 550 ? 'bottom' : 'right';

      // Create a new Chart instance
      new Chart(ctp, {
        type: 'pie',
        data: data,
        options: {
          plugins: {
            legend: {
              position: legendPosition,
              labels: {
                padding: 15,
                color: '#FFFFFF',
                family: 'Lato, sans-serif',
                font: {
                  size: 12
                }
              }
            }
          }
        }
      })
      new Chart(ctb, {
        type: 'bar',
        data: data,
        options: {
          plugins: {
            legend: {
              display: false,
            },
          }
        }
      })
    }
  }

// Watch for changes in the dataStats.data prop
  watch(() => props.dataStats, (newDataStats) => {
      dataUpdateHandler(newDataStats)
      dataChartHandler(dataForDisplay.value)
    }
  )

// render chart on mount
  onMounted(() => {
    dataChartHandler(dataForDisplay.value)
  })
</script>

<template>
  <section class="charts-container">
    <canvas class="data-chart-canvas" ref="pieChartCanvas"></canvas>
    <canvas class="data-chart-canvas" ref="barChartCanvas"></canvas>
  </section>
</template>

<style lang="scss" scoped>
.charts-container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .data-chart-canvas {
    flex: 0 0 45%;
    max-width: 45% !important;
    max-height: 450px !important;
    padding: 24px;
    border-radius: 32px;
    border: 1px solid #303030;
    background: rgba(24, 24, 24, 0.15);
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: stretch;
    gap: 25px;
    .data-chart-canvas {
      flex: 0 0 100%;
      max-width: 100% !important;
      width: auto !important;
      height: auto !important;
    }
  }
}
</style>
