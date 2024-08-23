<template>
    <div class="main-container content">
        <Carousel></Carousel>

        <p class="title-lg">TOP kasanachilik turlari</p>
        <!-- Top turlar -->
        <div class="flex gap-2 ">
            <!-- gap????????-->
            <div class="w-1/5 rounded bg-white  hover:bg-gray-50  lg:py-8  py-4 space-y-2 tur">
                <div class="flex justify-center ">
                    <div class="img-keeper"> <img src="@/assets/img/handcraft.png" /></div>
                </div>
                <p class="font-semibold text-sm md:text-base flex justify-center ">Handcraft</p>
            </div>

            <div class="w-1/5 rounded bg-white  hover:bg-gray-50 lg:py-8  py-4 space-y-2">
                <div class="flex justify-center">
                    <div class="img-keeper"><img src="@/assets/img/programming.png" /></div>
                </div>
                <p class="font-semibold text-sm md:text-base flex justify-center ">Dasturlash</p>
            </div>

            <div class="w-1/5 rounded bg-white  hover:bg-gray-50 lg:py-8  py-4 space-y-2">
                <div class="flex justify-center">
                    <div class="img-keeper"><img src="@/assets/img/sewing-machine.png" /></div>
                </div>
                <p class="font-semibold text-sm md:text-base flex justify-center  ">Tikuvchilik</p>
            </div>

            <div class="w-1/5 rounded bg-white  hover:bg-gray-50 lg:py-8  py-4 space-y-2">
                <div class="flex justify-center">
                    <div class="img-keeper"><img src="@/assets/img/pero.png" /></div>
                </div>
                <p class="font-semibold text-sm md:text-base flex justify-center  ">Design</p>
            </div>

            <div class="w-1/5 rounded bg-white hover:bg-gray-50  lg:py-8   py-4 space-y-2">
                <div class="flex justify-center">
                    <div class="img-keeper"><img src="@/assets/img/other.png" /></div>
                </div>
                <p class="font-semibold text-sm md:text-base px-4 flex justify-center text-center">Barchasi</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Carousel from '@/pages/home/components/Carousel.vue'

</script>

<style scoped>
.content {
    padding-top: 60px;
}

.img-keeper img {
    width: 100%;

}
</style>