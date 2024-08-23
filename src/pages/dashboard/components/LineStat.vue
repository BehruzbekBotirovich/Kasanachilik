<template>
    <div class="flex gap-3 justify-end mb-3">
        <div v-for="item in stats" :key="item.index" class="flex gap-1 items-center">
            <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: item.color }"></div>
            <div>{{ item.label }} </div>
        </div>
    </div>
    <div>
        <canvas ref="lineChart"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

// Register the necessary components
Chart.register(...registerables);

const lineChart = ref(null);

const stats = ref([
    {
        label: 'Tasdiklangan',
        color: 'rgba(75, 192, 192, 1)',
        data: [347, 615, 723, 512, 278, 832, 699, 284, 451, 361, 888, 503],


    },
    {
        label: 'Rad etilgan',
        color: 'rgba(255, 99, 132, 1)',
        data: [719, 832, 244, 381, 792, 437, 508, 645, 311, 841, 223, 781],
    },
    {
        label: 'Jarayonda',
        color: 'rgba(255, 206, 86, 1)',
        data: [491, 602, 307, 741, 568, 833, 678, 496, 214, 522, 649, 845]
        ,
    },
]);

onMounted(() => {
    const ctx = lineChart.value.getContext('2d');
    // arr bilan data-chart  ni boglash
    const datasets = stats.value.map(stat => ({
        label: stat.label,
        data: stat.data,
        borderColor: stat.color,
        fill: false,
    }));

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
            datasets: datasets,
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month',
                    },
                    grid: {
                        display: false, // Disable grid lines along the x-axis
                    },
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Ajratilgan mablag’lar statistikasi',
                    },
                    ticks: {
                        stepSize: 200, // Set the step size to 100
                    },
                },
            },
            plugins: {
                legend: {
                    display: false, // Hide the legend
                },
            },
        },
    });
});
</script>

<style scoped></style>