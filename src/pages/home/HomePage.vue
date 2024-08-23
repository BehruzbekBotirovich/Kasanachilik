<template>
    <Wrapper>
        <main class="">
            <!-- <skelet></skelet> -->
            <main-head></main-head>

            <transition name="slide-fade">
                <video-player v-if="ShowVideo == true" @videoStop="ShowVideo = false"></video-player>
            </transition>
            <about-us @playVideo="ShowVideo = true"></about-us>


            <div class="main-container py-4 lg:py-8 space-y-4">
                <h3 class="text-customOrange ">Vakansiyalar</h3>
                <h1 class="title-lg"> Bo'sh ish o'rinlari</h1>
                <a-row :gutter="[gutter, gutter]">
                    <vacancy-item v-for="vacancy in Vacancies" :key="vacancy.vacancyId"
                        :vacancy="vacancy"></vacancy-item>
                </a-row>

            </div>
            <qaror-elon></qaror-elon>
            <question-form></question-form>
            <faq></faq>
        </main>
    </Wrapper>
</template>

<script setup>

import { ref } from "vue";
import Wrapper from '@/components/Wrapper.vue'
import MainHead from '@/pages/home/components/MainHead.vue'
import AboutUs from "@/pages/home/components/AboutUs.vue";
import VacancyItem from "@/pages/home/components/VacancyItem.vue";
import QarorElon from "@/pages/home/components/QarorElon.vue";
import QuestionForm from "@/pages/home/components/QuestionForm.vue";
import VideoPlayer from "@/pages/home/components/VideoPlayer.vue"
import Faq from "./components/Faq.vue";

import skelet from './components/skelet.vue'
const ShowVideo = ref(false)

const gutter = ref({
    xs: 8,
    sm: 12,
    md: 18,
    lg: 20,
    xl: 24,
    xxl: 24
})


const Vacancies = [
    {
        vacancyId: 1,
        job: 'Kulol',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'kulolchilik',
        city: 'Toshkent shahri ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 2,
        job: 'Tikuvchi',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'tikuvchi',
        city: 'Toshkent viloyati  ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 3,
        job: 'Frontend',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Sirdaryo ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 4,
        job: 'UX/UI',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Namangan ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 5,
        job: 'Backend',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Namangan',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },

]
</script>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>
