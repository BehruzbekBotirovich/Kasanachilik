<template>
    <div class="timer-container py-2">
        <!-- Progress bar -->
        <div id="progressBar">
            <div :style="{ width: progressBarWidth }"></div>
        </div>

        <!-- Timer display -->
        <div id="timer">
            <span class="timer-text">{{ formattedTime }}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const totalSeconds = 2 * 60; // 2 minutes in seconds
const remainingTime = ref(totalSeconds);
const progressBarWidth = ref('100%');

const formattedTime = computed(() => {
const minutes = Math.floor(remainingTime.value / 60);
const seconds = remainingTime.value % 60;
return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
});

onMounted(() => {
function updateTimer() {
    if (remainingTime.value > 0) {
        remainingTime.value -= 1;
        const progressWidth = (remainingTime.value / totalSeconds) * 100 + '%';
        progressBarWidth.value = progressWidth;
    }
}

// Update timer every second
const timerInterval = setInterval(() => {
    updateTimer();
    if (remainingTime.value <= 0) {
        clearInterval(timerInterval);
    }
}, 1000);

updateTimer(); // Initial call
});
</script>

<style scoped>


.timer-container {
display: flex;
width: 100%;
align-items: center;
gap: 10px;
}

#progressBar {
width: 100%;
margin: 10px 0;
height: 10px;
background-color: #EAECF0;
border-radius: 11px;
overflow: hidden;
}

#progressBar div {
height: 100%;
border-radius: 11px;
background-color: #DE9551;
box-sizing: border-box;
}

#timer {
width: fit-content;
font-size: 14px;
font-weight: 500;
line-height: 20px;

}

.timer-text {
display: block;
color: #2e2d2d;
}
</style>