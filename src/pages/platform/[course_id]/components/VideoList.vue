<template>
    <a-collapse class="border-none overflow-hidden">
        <a-collapse-panel :key="1">
            <template #header>
                <h1 class="font-bold text-lg">Kirish</h1>
                <p class="text-gray-500">30 daqiqa</p>
            </template>
            <div class="pl-0  lg:pl-4 pt-0 rounded-lg">
                <div v-for="(video, index) in Videos" :key="index" class="flex py-2 justify-between">
                    <div class="flex gap-2">
                        <div>
                            <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.1 15.38 9.1 13.48V12V10.52C9.1 8.61 10.45 7.84 12.1 8.79L13.38 9.53L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73Z"
                                    fill="#DE9551" />
                            </svg>
                        </div>
                        <div>
                            <div class="font-bold">{{ video.lessonName }}</div>
                            <p class="text-gray-500">{{ video.time }}</p>
                        </div>
                    </div>

                    <div class="status-video w-fit">
                        <CheckOutlined v-if="video.isWatched" />
                        <!-- <RedoOutlined></RedoOutlined> -->
                        <CaretRightOutlined v-if="!video.isWatched" />
                    </div>
                </div>
            </div>
        </a-collapse-panel>
    </a-collapse>

</template>

<script setup>
import { CheckOutlined, RedoOutlined, CaretRightOutlined } from '@ant-design/icons-vue';


const Videos = [
    {
        lessonName: 'Frontend dasturlash nima?',
        time: '10 daqiqa',
        isWatched: true,
    },
    {
        lessonName: 'IT Live akademiyasi haqida',
        time: '10 daqiqa',
        isWatched: false,
    },
    {
        lessonName: 'Nimadan boshlash kerak?',
        time: '10 daqiqa',
        isWatched: false,
    },
]
</script>

<style scoped>
:deep(.status-video svg) {
    width: 1.25rem;
    height: 1.25rem;
}

:deep(.ant-collapse) {
    border: 2px solid red;
}

:deep(.ant-collapse-expand-icon) {
    position: absolute;
    right: 0;
    top: 25px;
}

:deep(.ant-collapse-header) {
    background: white;
    overflow: hidden;
    border-radius: 8px 8px 0 0 !important;
    border: none;
    position: relative;
}


:deep(.ant-collapse-content) {
    border-top: none;
}

:deep(.ant-collapse-item) {
    border-bottom: none;
}

:deep(.ant-collapse-item-active>.ant-collapse-content) {
    background: #F7F7F8;
}

:deep(.ant-collapse-item-active>.ant-collapse-header) {
    background: #F7F7F8;
}

:deep(.ant-collapse-content-box) {
    padding-top: 0 !important;
}
</style>