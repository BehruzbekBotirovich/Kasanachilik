<template>
    <div class="chart-container gap-12">
        <div class="chart">
            <canvas id="myDonutChart"></canvas>
        </div>
        <div class="stats ">
            <div class="stat-item-header  pb-3 border-b">
                <div class="2xl:w-1/2 pl-6 font-bold">Holati</div>
                <div class="font-bold">Soni</div>
                <div class="font-bold">%</div>
            </div>
            <div class="stat-item py-3" v-for="item in stats" :key="item.label">
                <div class="color-indicator" :style="{ backgroundColor: item.color }"></div>
                <div class="label">{{ item.label }}</div>
                <div class="value">{{ item.value }}</div>
                <div class="percentage">{{ item.percentage }}</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const stats = ref([
    { label: 'Tasdiklangan', value: 32452, percentage: '78.6%', color: 'rgba(75, 192, 192, 1)' },
    { label: 'Rad etilgan', value: 1201, percentage: '42.9%', color: 'rgba(255, 99, 132, 1)' },
    { label: 'Jarayonda', value: 3566, percentage: '28.6%', color: 'rgba(255, 206, 86, 1)' }
]);

const chartData = computed(() => {
    return {
        labels: stats.value.map(item => item.label),
        datasets: [{
            label: 'Statistika',
            data: stats.value.map(item => item.value),
            backgroundColor: stats.value.map(item => item.color),
            borderWidth: 2
        }]
    };
});

const chartOptions = ref({
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
    }
});

onMounted(() => {
    const ctx = document.getElementById('myDonutChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: chartData.value,
        options: chartOptions.value
    });
});
</script>

<style scoped>
.chart-container {
    display: flex;
    justify-content: center;

}

.chart {
    width: 40%;
    margin-bottom: 20px;
}

.stats {
    width: 60%;
    display: flex;
    height: fit-content;
    flex-direction: column;
    justify-content: center;
}

.stat-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.stat-item-header {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
}

.color-indicator {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    margin-right: 10px;
}

.label {
    flex: 2;
}

.value,
.percentage {
    flex: 1;
    text-align: right;
}
</style>