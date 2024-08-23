<template>
    <div class="video-container">
        <video ref="videoPlayer" class="video-player" controls>
            <source :src="videoSrc" type="video/mp4" />
            Ваш браузер не поддерживает элемент video.
        </video>
        <div class="video-overlay" v-if="!isPlaying" @click="togglePlay">
            <i class="play-icon">▶</i>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
    videoSrc: {
        type: String,
        required: true
    }
});

const videoPlayer = ref(null);
const isPlaying = ref(false);

const togglePlay = () => {
    if (videoPlayer.value.paused) {
        videoPlayer.value.play();
        isPlaying.value = true;
    } else {
        videoPlayer.value.pause();
        isPlaying.value = false;
    }
};

onMounted(() => {
    videoPlayer.value.addEventListener('play', () => isPlaying.value = true);
    videoPlayer.value.addEventListener('pause', () => isPlaying.value = false);
});
</script>

<style scoped>
.video-container {
    position: relative;
    width: 100%;
    max-width: 640px;
    /* Вы можете изменить это значение, если нужно */
    margin: auto;
}

.video-player {
    width: 100%;
    height: auto;
}

.video-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    color: white;
    cursor: pointer;
}

.play-icon {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>