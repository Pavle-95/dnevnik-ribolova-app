<script setup>
  import { Chart } from 'chart.js/auto';
  import { ref, onMounted, defineProps } from 'vue';

  const props = defineProps({
    dataStats: Object,
  });

  const myChartCanvas = ref(null);

  onMounted(() => {
    if (myChartCanvas.value) {
      const ctx = myChartCanvas.value.getContext('2d');

      new Chart(ctx, {
        type: 'pie',
        data: data.value,
      });
    }
  });

  const data = ref({
    labels: props.dataStats.data.map(item => item.name),

    datasets: [{
      data: props.dataStats.data.map(item => item.value),
      backgroundColor: [
      'rgba(87, 117, 24, 1)',
      'rgba(185, 151, 64, 1)',
      'rgba(185, 151, 64, 1)',
      'rgba(54, 118, 47, 1)',
      'rgba(148, 160, 60, 0.62)',
      'rgba(87, 117, 24, 0.8)',   // Slightly transparent version of the first color
      'rgba(185, 151, 64, 0.8)',  // Slightly transparent version of the second color
      'rgba(54, 118, 47, 0.8)',   // Slightly transparent version of the third color
      'rgba(148, 160, 60, 0.5)',  // More transparent version of the fourth color
      'rgba(87, 117, 24, 0.5)'  
      ],
      hoverOffset: 4,
      borderWidth: 1,
      borderColor: 'rgba(24, 24, 24, 0.15)',
    }]
  });

  console.log(props.dataStats.data);
  // data: props.dataStats,

</script>

<template>
  <section class="charts-container">
    <canvas class="data-chart-canvas" ref="myChartCanvas"></canvas>

  </section>

</template>

<style lang="scss" scoped>
  .data-chart-canvas {
    border-radius: 32px;
    border: 1px solid #303030;
    background: rgba(24, 24, 24, 0.15);
    display: flex !important;
  }
</style>