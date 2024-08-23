<template>
    <Wrapper>
        <div class="naqsh-bg">
            <div class="main-container pt-10 pb-20 md:py-20">
                <div class=" md:w-3/5">
                    <h1 class="text-4xl font-bold mb-8">Frontend dasturlash</h1>
                    <p class="mb-4">Asosiy tushunchalarning mustahkam?AZI? poydevoriga ega bo'ling va qiziqarli va
                        foydali
                        ilovalar
                        yara
                        ting! </p>
                    <div class="info-bar">
                        <div>
                            <clock-icon></clock-icon>
                            <div>20 soat 56 daqiqa</div>
                        </div>
                        <div>
                            <user-icon></user-icon>
                            <div>255 marta ko’rildi</div>
                        </div>
                        <div>
                            <antennabar-icon></antennabar-icon>
                            <div>Daraja: Beginner</div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div class="wrapper md:flex md:gap-8 main-container">
            <div class=" md:w-3/5 div-1">
                <!-- course sostavi -->
                <div class="bg-white rounded-lg p-5">
                    <!-- dars vidoe ssilka -->
                    <Dropdown></Dropdown>
                    <Dropdown></Dropdown>
                    <Dropdown></Dropdown>

                    <a-button>
                        <router-link :to="`/platform/1/learn`"> videolarga o'tish</router-link>
                    </a-button>

                </div>

                <div class="bg-white  rounded-lg p-5 mb-16 mt-6">
                    <h3 class="font-bold text-xl mb-4">Muhokomalar soni: 25 ta</h3>
                    <!-- commment qoldirish input -->
                    <div class="flex items-center relative mb-4 gap-2">
                        <div class="overflow-hidden rounded-full" style="width: 48px; height: 44px;">
                            <img class="h-full w-full object-cover"
                                src="https://s3-alpha-sig.figma.com/img/4bba/79ba/0b935953c0b4ade9f67d4a95de4f9657?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Iq-Mku1ayZ7BzgTPfXMX34eqkS6etRxhEMSWiWhOTBJR~CpKc57I-IoN7LaufqiMnnzB5qVdE8PDnF9U9TR0NO0jJwbyQGPZAExwVR6t8kC4RiBcHfGN5JV1Px9kLMVIUdv9zxpWnEk8R8jb2qaAjqlieQGGjawpxuVpL-gwKHntKVg239VqLLfR7N4mnmiHlvOh-BgjIxTUtIqXbADwcWKBK4Q7eNngYGiDz4i2DYxfx98HUoXlKpnHSLBaQSNSIf9Qi0rpipAZP2N9vs579Nu0T~uVbhsGwHa1ASOuhsS3oWiwOu1oITjqFxEk0HcL00CdtLt3P-JmtIDECl~ulQ__"
                                alt="">
                        </div>
                        <div class="w-full">
                            <input class="w-full  comment-input" placeholder="Fikringizni yozib qoldiring"></input>
                        </div>
                        <button class="send-btn"><send-icon></send-icon> </button>
                    </div>

                    <!-- comments -->
                    <Comment v-for="comment in Comments " :key="id" :comment="comment"> </Comment>
                </div>
            </div>

            <div class="md:w-2/5  div-2">
                <a-card>
                    <template #cover>
                        <img alt="example"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOt8yVPy6GGZ4tjCXHpImPPqpNoEwJGeE2Q&s" />
                    </template>
                    <a-card-meta title="750 000 UZS"
                        description="Asosiy tushunchalarning mustahkam poydevoriga ega bo'ling va qiziqarli va foydali ilovalar yarating!">
                    </a-card-meta>

                    <a-rate v-model:value="valueStars" allow-half />

                    <span class="text-gray-500 ml-2"> ({{ valueStars }}) </span>
                    <div class="bg-customOrange text-white rounded-lg py-3 text-center">Sotib olish </div>

                </a-card>

                <div class="py-3 px-6  bg-white rounded mt-5">
                    <div class="flex gap-3 mb-2">
                        <div class="w-fit">
                            <img class="rounded-full" width="70" height="70"
                                src="https://cdn.pixabay.com/photo/2021/02/27/16/25/woman-6055084_1280.jpg">
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">Dinora Mutalipova</h3>
                            <p class="text-gray-500">Front-end Developer, Designer</p>
                            <div class="flex  text-gray-500 gap-1">
                                <StarIcon></StarIcon>
                                <div>4.5</div>
                            </div>
                        </div>
                    </div>

                    <div class="flex ">
                        <div class="w-1/3 pl-5 border-r-1">
                            <h1 class="font-semibold">100</h1>
                            <p class="text-gray-500">O’quvchilar</p>
                        </div>
                        <div class="w-1/3 pl-5 border-r-1">
                            <h1 class="font-semibold">2</h1>
                            <p class="text-gray-500">Kurslar</p>
                        </div>
                        <div class="w-1/3 pl-5">
                            <h1 class="font-semibold">245</h1>
                            <p class="text-gray-500">Ko’rishlar</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </Wrapper>





</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue'
import ClockIcon from '@/components/icons/ClockIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import AntennabarIcon from '@/components/icons/AntennabarIcon.vue'
import SendIcon from '@/components/icons/SendIcon.vue'
import StarIcon from '@/components/icons/StarIcon.vue'

import { ref, computed } from 'vue';
import { DownOutlined, UpOutlined } from '@ant-design/icons-vue';

import Dropdown from './components/Dropdown.vue';
import Comment from './components/Comment.vue'
const visible = ref(false);

const handleVisibleChange = (flag) => {
    visible.value = flag;
};
const valueStars = 2;
const iconType = computed(() => (visible.value ? UpOutlined : DownOutlined));



const Comments = [
    {
        commentId: 1,
        username: 'Oybek Safarov',
        text: 'zor ekan darsi maslahat beraman',
        liked: 123,
    },
    {
        commentId: 2,
        username: 'Beha Behruz',
        text: '))))))))',
        liked: 123,
    },
    {
        commentId: 3,
        username: 'Javohir Rustamov ',
        text: 'zor ekan darsi maslahat beraman',
        liked: 123,
    },
]
</script>



<style scoped>
.comment-input {
    padding: 0.5rem;
    outline: none;
    border-bottom: 2px solid #EAECF0;
    font-weight: 400;
    line-height: 16.94px;
}

.comment-input:focus,
.comment-input:hover {
    border-color: #947D67;
}

.naqsh-bg {
    color: white;
    background-color: #947D67;
    background-image: url('@/assets/img/BG.png');
}



.info-bar {
    align-items: center;
    display: flex;
    gap: 20px;

}

.send-btn {
    top: 6px;
    right: 10px;
    border-radius: 50%;
    padding: 0.25rem;
    position: absolute;
}

.send-btn:hover {
    background: rgba(228, 226, 226, 0.636);
}

.info-bar>div {
    display: flex;
    align-items: center;
    gap: 6px;
}

:deep(.ant-card) {
    padding: 12px;
}

:deep(.ant-card-body) {
    margin-top: 20px;
    padding: 0;
}

:deep(.ant-card-cover img) {
    border-radius: 4px;
}

:deep(.ant-rate) {
    margin: 10px 0;
}

.div-1 {
    transform: translateY(-60px);
}

.div-2 {
    transform: translateY(-210px)
}

@media (max-width:770px) {
    .wrapper {
        display: grid;

        grid-template-rows: auto auto;

    }

    .div-1 {
        transform: translateY(-30px);
        grid-row: 2;
    }

    .div-2 {
        transform: translateY(-50px);
        grid-row: 1;
    }
}
</style>