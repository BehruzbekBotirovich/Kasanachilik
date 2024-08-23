<template>
    <wrapper>
        {{ gap }}
        <div class="main-container">
            <div class="flex gap-2 items-center py-6 text-nowrap">
                <router-link to="/">
                    <home-icon />
                </router-link>
                <chevron-right-icon></chevron-right-icon>
                <div> <router-link to="/"> Bosh sahifa </router-link> </div>
                <chevron-right-icon></chevron-right-icon>
                <div>
                    <router-link to="/market"> Market place</router-link>
                </div>
                <chevron-right-icon></chevron-right-icon>
                <div> Poyabzal</div>
                <chevron-right-icon></chevron-right-icon>
                <div class="text-customOrange">Erkaklar poyabzali</div>
            </div>

            <div class="block  lg:flex   gap-6 space-y-6 lg:space-y-0 mb-6">
                <!-- tovar lar carousel img -->
                <div class="w-full h-fit lg:w-2/5   relative">
                    <a-carousel arrows dots-class="slick-dots slick-thumb" ref="carousel">
                        <template #customPaging="{ i }">
                            <a>
                                <img :src="images[i]" class="nav-img" />
                            </a>
                        </template>
                        <div v-for="(image, index) in images" :key="index">
                            <img :src="image">
                        </div>


                    </a-carousel>
                    <!-- Кнопки навигации -->
                    <div class="nav-btns">
                        <button @click="prev" class="prev ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 18L9 12L15 6" stroke="black" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>

                        <button @click="next" class="next ">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="w-full  lg:w-3/5    p-8 bg-white  rounded-lg mb-8 ">
                    <h1 class="text-xl font-bold mb-2"> Eng ommabop mahsulotlar</h1>

                    <div class="mb-2">
                        <h1 class="text-gray-600">Sotuvchi</h1>
                        <p class="font-semibold">Ecocharm</p>
                    </div>

                    <div class="mb-2">
                        <h1 class="text-gray-600">Yetkazib berish:</h1>
                        <p class="font-semibold">1 kun, butun O’zbekiston bo’ylab</p>
                    </div>
                    <div class="mb-2">
                        Rang: <span>Jigarrang</span>
                    </div>
                    <!-- tovar mini img  -->
                    <div class="flex gap-4 mb-2">
                        <img class="w-12 h-14 object-fill rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MRf9z3u-vHBfT6Fx-D5WAz-NqQsPG3vF9Q&s"
                            alt="">

                        <img class="w-12 h-14 object-fill rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MRf9z3u-vHBfT6Fx-D5WAz-NqQsPG3vF9Q&s"
                            alt="">


                        <img class="w-12 h-14 object-fill rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrAJKx1d9cve3g_sdcOxvgfK5yNf1VoRw8QA&s"
                            alt="">


                        <img class="w-12 h-14 object-fill rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MRf9z3u-vHBfT6Fx-D5WAz-NqQsPG3vF9Q&s"
                            alt="">

                        <img class="w-12 h-14 object-fill rounded"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MRf9z3u-vHBfT6Fx-D5WAz-NqQsPG3vF9Q&s"
                            alt="">

                    </div>
                    <!-- razmerlar -->
                    <h1 class="text-gray-600 mb-2">O'lchamlar:</h1>
                    <ul class="flex gap-4 mb-2">
                        <li
                            class=" border-1     h-12  w-12 border-gray-200 rounded-md flex items-center justify-center text-gray-600 ">
                            40
                        </li>
                        <li
                            class=" border-1     h-12  w-12 border-gray-200 rounded-md flex items-center justify-center text-gray-600 ">
                            40
                        </li>
                        <li
                            class=" border-1     h-12  w-12 border-gray-200 rounded-md flex items-center justify-center text-gray-600 ">
                            40
                        </li>
                        <li
                            class=" border-1     h-12  w-12 border-gray-200 rounded-md flex items-center justify-center text-gray-600 ">
                            40
                        </li>
                        <li
                            class=" border-1     h-12  w-12 border-gray-200 rounded-md flex items-center justify-center text-gray-600 ">
                            40
                        </li>
                        <li
                            class=" border-1     h-12  w-12 border-gray-200 rounded-md flex items-center justify-center text-gray-600 ">
                            40
                        </li>
                        <li class="rounded-lg border-1 flex items-center px-4 border-customOrange">Barchasidan</li>
                    </ul>

                    <h1 class="text-gray-600 mb-2">Miqdori</h1>

                    <ul class="flex shadow-md w-fit rounded-xl mb-2">
                        <li @click="decrement"
                            class="py-2 cursor-pointer    rounded-l-xl	 px-4 border-1 border-gray-200 m-0    hover:shadow-lg ">
                            - </li>
                        <li class="py-2  px-4 border-t-1 border-b-1 border-gray-200 m-0">{{ count }}</li>
                        <li @click="count++"
                            class="py-2  cursor-pointer      rounded-r-xl	 px-4 border-1 border-gray-200 m-0    hover:shadow-lg ">
                            + </li>
                    </ul>

                    <h1 class="text-gray-600 ">Narhi</h1>
                    <p class="text-lg font-semibold mb-4"> 140 000 UZS</p>

                    <a-button size="large" class="bg-customOrange  text-white hover:text-white " type="primary">
                        Buyurtma
                        qilish</a-button>
                </div>
            </div>

            <div class="bg-white py-5 px-8 mb-16">
                <div class=" flex gap-4 mb-4 ">
                    <h1 class="font-semibold p-3 bg-gray-50 w-fit rounded-md">Qo'shimcha tafsilotlar </h1>
                    <div class="text-gray-700 p-3 w-fit rounded-md   bg-gray-50">Izohlar</div>
                </div>
                <div>
                    <p class="mb-3">Erkaklar charm shippaklari - bu qulaylik va uslubning ajoyib kombinatsiyasi.
                        Ularning
                        ko'p
                        qirrali
                        dizayni ularni har qanday ko'rinish uchun ajoyib tanlov qiladi.</p>
                    <p class="mb-3">Oyoq kiyimlarini tanlayotganda, oyoqlaringizning xususiyatlarini hisobga oling, bu
                        poyabzal
                        baland
                        pog'onalarga mos kelmaydi, ular bir o'lchamda kichik ishlaydi</p>
                </div>

            </div>
        </div>
    </wrapper>

</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue';
import { ref, onMounted } from 'vue';
import HomeIcon from '@/components/icons/HomeIcon.vue'
import ChevronRightIcon from '@/components/icons/ChevronRightIcon.vue'

import { useRoute } from 'vue-router';
const route = useRoute();
// counter of product count
const decrement = () => {
    if (count.value > 0) { count.value-- }
}

const gap = ref('bu yerda text')

const fetchProduct = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    gap.value = data;
};
onMounted(() => {
    setTimeout(() => {
        fetchProduct(route.params.id);
    }, 1500)
});



// carousel navigator
const carousel = ref(null);
const next = () => {
    carousel.value.next();
};
const prev = () => {
    carousel.value.prev();
};
const images = ref([
    'https://texrio.ru/upload/iblock/5df/41204q320w7mkfyqkasozkr5pt3lymuu.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhdYyW1kp7CoqZ-tKo4NramPj1Hf6reKahVg&s',
    'https://texrio.ru/upload/iblock/5df/41204q320w7mkfyqkasozkr5pt3lymuu.jpg',
    'https://texrio.ru/upload/iblock/5df/41204q320w7mkfyqkasozkr5pt3lymuu.jpg',
    'https://texrio.ru/upload/iblock/5df/41204q320w7mkfyqkasozkr5pt3lymuu.jpg',

]);

const count = ref(0)
</script>


<style scoped>
/* carousel product images */
/* For demo */
:deep(.slick-slider) {
    display: flex;
    position: relative;
    min-width: 100%;
    gap: 20px;
    width: 100%;
    /* padding-left: 5rem; */
}

:deep(.slick-list) {
    width: 530%;
}

:deep(.slick-dots) {
    display: grid !important;
    grid-template-rows: repeat(5, minmax(0, 1fr));
    position: relative;
    gap: 1rem;
    /* position: absolute;
    top: 0;
    left: 0px; */
    width: fit-content;
}

.carousel-img {
    height: fit-content;
}

.nav-img {
    height: auto;
    aspect-ratio: 1/1;
    width: 100%;
    object-fit: cover;
    border-radius: 8px;
    display: block;
}

:deep(.slick-slide img) {
    height: 100%;
    display: block;
    aspect-ratio: 1/1;
    margin: auto;
    width: 100%;
    border-radius: 10px;
}


:deep(.slick-arrow) {
    display: none !important;
    background: gray;
}

/*  navigator next prev */
.nav-btns {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    bottom: 20px;
    left: calc(50% - 90px);
}

.prev,
.next {
    padding: 6px;
    background: rgb(255, 255, 255);
    border-radius: 50%;
}


.next:hover,
.prev:hover {
    background: rgba(226, 226, 226, 0.834);
}

:deep(.slick-thumb) {
    bottom: 0px;
}

:deep(.slick-thumb li) {
    width: fit-content;
    height: auto;
}

:deep(.ant-carousel .slick-dots li) {
    display: block;
}


:deep(.slick-thumb li.slick-active) {
    width: fit-content;
    border-radius: 8px;
}
</style>