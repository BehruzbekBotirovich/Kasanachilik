<template>
    <div class="py-4 lg:py-8 md:mb-0 lg:mb-12 main-container">
        <p class="title-lg"> Kasanachilik maktabi haqida qisqacha</p>
        <div class="grid  grid-cols-10 gap-8">

            <div class="col-span-10 md:col-span-5  lg:col-span-4  relative">
                <!-- przident image -->
                <div class="w-full   md:absolute   h-auto  ">

                    <img class="rounded-3xl" src="@/assets/img/maktab.jpg" alt="">
                    <div class="  mini-img ">
                        <img class="rounded-2xl" src="@/assets/img/maktabMini.png" alt="">
                    </div>
                </div>

                <div class="btn-keeper">
                    <button class="play" @click="$emit('playVideo')">
                        <play-icon></play-icon>
                        <div class="semibold mx-1 ">Video</div>
                    </button>
                </div>
            </div>

            <div class=" col-span-10 md:col-span-5   lg:col-span-6 lg:pb-10 ">
                <h1 class="text-customOrange">Statistika</h1>
                <h3 class="font-bold text-2xl py-6 w-auto lg:w-5/6 ">Kasanachilik maktabimiz faoliyati davomida erishgan
                    yutuqlar</h3>
                <p>Kasanachilarga qulay soliq rejimini joriy etish, faoliyatini yo‘lga qo‘yish uchun ularni moliyaviy
                    qo‘llab-quvvatlash choralarini kengaytirish, tadbirkorlik subyektlari tomonidan o‘z faoliyatiga
                    kasanachilarni keng jalb qilishni rag‘batlantirish orqali aholining bandligini ta’minlash va
                    daromadlarini
                    ko‘paytirish maqsadida tashkil qilingan</p>
                <ul class="flex justify-between gap-2  py-8 ">
                    <li> <span class="font-bold text-2xl mb-2"> 56+</span> <br> Loyihalar</li>
                    <li> <span class="font-bold text-2xl mb-2"> 800+</span><br> Azolar </li>
                    <li> <span class="font-bold text-2xl mb-2"> 100+</span><br> Tadbirlar</li>
                    <li> <span class="font-bold text-2xl mb-2"> 500+</span><br> Xalqaro investitsiyalar </li>
                </ul>
                <orange-btn>A'zo bo'lish</orange-btn>
            </div>
        </div>

    </div>
</template>

<script setup>
import PlayIcon from '@/components/icons/PlayIcon.vue'
</script>

<style scoped>
.mini-img {

    position: absolute;
    right: -1px;
    bottom: 30px;
    background-image: url('@/assets/Polygon5.svg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 36px 2px 30px 20px;
}

.mobile-video img {
    width: 100%;
    height: auto;
}

.play-video-mobile {
    position: absolute;
    height: 36%;
    top: 0px;
    left: 0px;

}


.btn-keeper {
    top: 44px;
    left: -47px;
    transform: rotate(270deg);
    padding: 0px 0px 30px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    position: relative;
    background-image: url('@/assets/Polygon2.svg');
    background-repeat: no-repeat;
    background-size: fill;
}

.play {
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    padding: 12px 30px;
    border: 2px solid orange;
}

@media only screen and (max-width:768px) {
    .btn-keeper {
        position: absolute;
    }

}
</style>