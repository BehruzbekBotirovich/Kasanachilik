<template>
    <Wrapper>
        <div class="main-container blocks-keeper sm:flex relative  gap-2 sm:gap-4 lg:gap-10 py-8">
            <!-- chap -->
            <div class="w-full md:w-2/5  blocks  bg-white rounded-lg px-6 py-4">
                <div @click="" class="flex  hover:bg-gray-50 p-2 items-center justify-between">
                    <BacklistIcon></BacklistIcon>
                    <span class="font-bold text-lg ">Frontend dasturlash</span>
                </div>
                <div class=" space-y-4">
                    <VideoList> </VideoList>
                    <VideoList> </VideoList>
                    <VideoList> </VideoList>
                    <VideoList> </VideoList>
                    <VideoList> </VideoList>
                </div>


            </div>

            <!-- ong vidoe player -->
            <div class="w-full   md:w-3/5 blocks bg-white rounded-lg px-6 py-4">
                <div class="flex items-center justify-between mb-4">
                    <h1 class="text-lg font-bold">Nimadan boshlash kerak?</h1>
                    <button class="orange-btn"> Keyingi dars</button>
                </div>
                <!-- vidoe player -->
                <!-- <div class="video-container">
                    <video ref="videoPlayer" class="video-player" controls :poster="poster">
                        <source src="@/assets/img/video.mp4" type="video/mp4">
                        Ваш браузер не поддерживает видео тег.
                    </video>
                    <div class="play-button" @click="togglePlay">
                        <svg v-if="!isPlaying" width="64" height="64" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="12" fill="black" fill-opacity="0.4" />
                            <path d="M10 8L16 12L10 16V8Z" fill="white" />
                        </svg>
                    </div>
                </div> -->

                <h1 class="text-xl font-bold mt-6 mb-2 text-center">Darsni boholashni istaysizmi?</h1>
                <div class="flex justify-center">
                    <a-rate v-model:value="value" allow-half />
                </div>
                <LessonVideo>  </LessonVideo>


            </div>

        </div>
    </Wrapper>

</template>

<script setup>
// comps
import LessonVideo from './components/LessonVideo.vue'
import Wrapper from '@/components/Wrapper.vue';
import { ref } from 'vue';
import VideoList from './components/VideoList.vue'
//icons
import BacklistIcon from '@/components/icons/BacklistIcon.vue';

// const videoSrc = ref('https://www.example.com/path/to/your/video.mp4');
const poster = ref('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSelbEevyCKh9dMPbqYVYUDoqV_AOSwJ18pKA&s');
const isPlaying = ref(false);
const videoPlayer = ref(null);

const togglePlay = () => {
    if (videoPlayer.value) {
        if (videoPlayer.value.paused) {
            videoPlayer.value.play();
            isPlaying.value = true;
        } else {
            videoPlayer.value.pause();
            isPlaying.value = false;
        }
    }
};

const onVideoPlay = () => {
    isPlaying.value = true;
};

const onVideoPause = () => {
    isPlaying.value = false;
};
const value = ref(4.5);
</script>

<style scoped>
@media (max-width: 760px) {
    .blocks-keeper {
        display: grid;
        grid-template-areas:
            "second"
            "first";
    }

    .blocks-keeper>div:first-child {
        grid-area: first;
        position: sticky;
        top: 0;
        left: 0;
    }

    .blocks-keeper>div:last-child {
        grid-area: second;
    }
}


.video-container {
    position: relative;
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
}

.video-player {
    width: 100%;
    display: block;
    border-radius: 8px;
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    width: 64px;
    height: 64px;
    transition: opacity 0.3s;
}


.play-button svg {
    fill: white;
}

.video-container:hover .play-button {
    opacity: 0.8;
}
</style>