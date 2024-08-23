<template>
    <div class="flex bg-gray-200 h-screen">
        <div class="w-1/2 flex justify-center items-center">
            <div class="bg-white rounded-xl p-6 space-y-4" style="width: 520px;">
                <h1 class="text-3xl font-bold text-center">Kasanachilik Maktabi</h1>
                <p class="text-gray-600 text-center">tizimga kirish</p>


                <!-- way1 -->
                <div v-if="!ways" class="space-y-4">
                    <div class="flex gap-4">
                        <div class="">
                            <a-qrcode :value="text" />
                        </div>
                        <div class="w-auto space-y-2">
                            <h1 class="font-semibold text-xl text-center text-black">QR kodni skanerlang</h1>
                            <p class="text-center text-sm">Solishtirish uchun HASH kod</p>
                            <p>4 2 5 l k 8 7 i o 9 6 h g b j 0 0 p r w q 1 f d h g t r b 6 5 4 g t 7 j f d e 5 4 e t i 8
                                7 u 8 o 0 p k j 0 0 p l m n b 7 6 g 5 f 8 j h g f a</p>
                        </div>
                    </div>
                    <Timer></Timer>
                    <a-button type=""
                        class="w-full bg-orange-400 hover:bg-orange-500 rounded-lg text-white text-lg font-semibold h-12">
                        OneID orqali kirish</a-button>
                    <a-button type="" @click="ways = true"
                        class="font-semibold w-full bg-gray-200 hover:bg-gray-300 font-semibold text-lg rounded-lg h-12">
                        ERI kalitni tanlash</a-button>
                </div>

                <!-- way2 -->
                <div v-if="ways">
                    <div class="border-2 rounded-xl p-6 mb-4">
                        <h1 class="text-2xl font-bold text-center mb-4">ERI kalitni tanlang</h1>
                        <div class="eri-cards-holder space-y-2">
                            <EriCard></EriCard>
                            <EriCard></EriCard>
                            <EriCard></EriCard>
                        </div>
                        <button class="w-full bg-orange-300 rounded-lg text-white text-lg font-semibold py-2">
                            Kirish
                        </button>
                    </div>
                    <button @click="ways = false" class="font-semibold w-full border-2 rounded-lg py-2">QR kod orqali
                        kirish</button>
                </div>

            </div>
        </div>

        <div class="w-1/2 h-full overflow-hidden relative p-6 ">
            <a-carousel :autoplay="false" class="h-full rounded-2xl  overflow-hidden" ref="carousel" :dots="false">
                <a-carousel-item v-for="(item, index) in kasana" :key="index" class="h-full ">
                    <div class="carousel-slide h-full" :style="{ backgroundImage: `url(${item.img})` }">

                        <div class=" text-white filter-blur p-8 rounded h-fit w-full ">
                            <div class="flex items-center justify-between">
                                <h3 class="font-semibold text-3xl mb-3">{{ item.title }}</h3>
                                <a-rate v-model:value="item.rating" />
                            </div>
                            <p class="text-info">{{ item.text }}</p>
                        </div>
                    </div>
                </a-carousel-item>
            </a-carousel>






            <div class="nav-btns ">
                <button class="prev  p-3  border-2 border-white rounded-full  mr-8" @click="prevSlide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <button class="next p-3 border-2 border-white rounded-full  " @click="nextSlide">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import EriCard from './components/EriCard.vue';
import Timer from './components/Timer.vue'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons-vue';


// enter ways 
const ways = ref(false)

// nav- btns slider
const carousel = ref(null);
const nextSlide = () => {
    if (carousel.value) {
        carousel.value.next();
    }
};
const prevSlide = () => {
    if (carousel.value) {
        carousel.value.prev();
    }
};

// qr code
const text = ref('https://www.youtube.com/');




const kasana = ref([
    {
        title: 'Kulolchilik haqida',
        text: 'Kulolchilik – Oʼzbekiston xalq amaliy sanʼatinig eng qadimiy, gʼoyat qiziqarli turlaridan biri. Mamlakatimiz hududida kulolchiliknig koʼplab asosiy maktab va markazlari mavjud. Rishton, Buxoro, Gʼurumsaroy, Toshkent, Xorazm, Samarqand va Qashqadaryo kulolchilik maktablarini sanash mumkin. Ushbu kulolchilik maktablari bir biridan yaratilgan mahsulotlarni tayyorlanish uslubi, naqsh-gullari, rangi va pardozi bilan biri-biridan farqlanadi.',
        img: 'https://storage.kun.uz/source/7/gtq6ryn3kUOFrPVtor_aZPxvW0X0iIMj.jpg', rating: 5,
    },
    {
        title: 'Kulolchilik haqida',
        text: 'Kulolchilik – Oʼzbekiston xalq amaliy sanʼatinig eng qadimiy, gʼoyat qiziqarli turlaridan biri. Mamlakatimiz hududida kulolchiliknig koʼplab asosiy maktab va markazlari mavjud. Rishton, Buxoro, Gʼurumsaroy, Toshkent, Xorazm, Samarqand va Qashqadaryo kulolchilik maktablarini sanash mumkin. Ushbu kulolchilik maktablari bir biridan yaratilgan mahsulotlarni tayyorlanish uslubi, naqsh-gullari, rangi va pardozi bilan biri-biridan farqlanadi.',
        img: 'https://storage.kun.uz/source/7/gtq6ryn3kUOFrPVtor_aZPxvW0X0iIMj.jpg', rating: 5,
    },
    {
        title: 'Kulolchilik haqida',
        text: 'Kulolchilik – Oʼzbekiston xalq amaliy sanʼatinig eng qadimiy, gʼoyat qiziqarli turlaridan biri. Mamlakatimiz hududida kulolchiliknig koʼplab asosiy maktab va markazlari mavjud. Rishton, Buxoro, Gʼurumsaroy, Toshkent, Xorazm, Samarqand va Qashqadaryo kulolchilik maktablarini sanash mumkin. Ushbu kulolchilik maktablari bir biridan yaratilgan mahsulotlarni tayyorlanish uslubi, naqsh-gullari, rangi va pardozi bilan biri-biridan farqlanadi.',
        img: 'https://storage.kun.uz/source/7/gtq6ryn3kUOFrPVtor_aZPxvW0X0iIMj.jpg', rating: 5,
    },
]);
</script>
<style scoped>
.eri-cards-holder {
    margin-bottom: 1.5rem;
    max-height: 250px;
    overflow-y: scroll;
}

/* Стиль скроллбара */
.eri-cards-holder::-webkit-scrollbar {
    width: 12px;
    /* Ширина скроллбара */
}

/* Стиль ползунка скроллбара */
.eri-cards-holder::-webkit-scrollbar-thumb {
    background-color: #888;
    /* Цвет ползунка */
    border-radius: 10px;
    /* Скругленные углы */
    border: 3px solid #fff;
    /* Отступы внутри скроллбара */
}

/* Стиль фона скроллбара */
.eri-cards-holder::-webkit-scrollbar-track {
    background: #f1f1f1;
    /* Цвет фона */
    border-radius: 10px;
    /* Скругленные углы */
}

/* Стиль при наведении на ползунок скроллбара */
.eri-cards-holder::-webkit-scrollbar-thumb:hover {
    background: #555;
    /* Цвет ползунка при наведении */
}

.carousel-slide {
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    display: flex;
    align-items: end;
}

:deep(.slick-slider) {
    height: 100%;
}

:deep(.slick-list) {
    height: 100%;
}

:deep(.slick-track) {
    height: 100%;
}

:deep(.slick-slide >div) {
    height: 100%;
}

/* rete color white */
:deep(.ant-rate-star-full svg) {
    fill: white;
}

.filter-blur {
    backdrop-filter: blur(20px);
}

.text-info {
    width: calc(100% - 150px);
    height: 100px;
    overflow-y: scroll;
    font-size: 16px;
    line-height: 24px;
}

.text-info::-webkit-scrollbar {
    display: none;
}

.nav-btns {
    position: absolute;
    right: 56px;
    bottom: 80px;
}


.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>