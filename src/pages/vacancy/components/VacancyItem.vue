<template>

    <a-col :sm="12" :lg="24">
        <div class=" p-8 rounded-xl bg-white">

            <div class="lg:flex justify-between sm:block  text-xl ">
                <p class="font-semibold">{{ vacancy.job }}</p>
                <p class="lg:font-semibold sm:font-normal">{{ vacancy.salary }}</p>
            </div>

            <ul class="flex flex-wrap sm:block lg:flex justify-between   my-4 ">
                <li class="font-semibold">
                    <h1 class="text-customGray   font-normal "> Korxona tashkilot nomi:</h1>
                    <p class="font-semibold ">{{ vacancy.workPlace }}</p>
                </li>
                <li class="font-semibold">
                    <h1 class="text-customGray   font-normal "> STIR:</h1>
                    <p class="font-semibold ">{{ vacancy.STIR }}</p>
                </li>


                <li class="font-semibold">
                    <h1 class="text-customGray   font-normal "> Yo’nalish:</h1>
                    <p class="font-semibold "> {{ vacancy.subject }}</p>
                </li>


                <li class="font-semibold">
                    <h1 class="text-customGray   font-normal ">Manzil</h1>
                    <p class="font-semibold ">{{ vacancy.city }}  {{ vacancy.address }}</p>
                </li>

                <li class="font-semibold">
                    <h1 class="text-customGray    font-normal ">Aloqa </h1>
                    <p class="font-semibold ">{{ vacancy.phone }}</p>
                </li>

            </ul>

            <div class="lg:flex gap-2 sm:block items-center   justify-between">
                <div class="gap-2 flex ">
                    <orange-btn @click="$emit('handleClicktoSent')">Qiziqish bildirish</orange-btn>
                    <button class="p-2 bg-customLightGray rounded-md">
                        <like-icon></like-icon>
                    </button>
                </div>
                <div class="text-customGray sm:mt-4 ">{{ vacancy.date }}</div>
            </div>
        </div>
    </a-col>
</template>

<script setup>
import LikeIcon from '@/components/icons/LikeIcon.vue'

const props = defineProps({
    vacancy: {
        typeof: Object,
        required: true
    }

})
</script>

<style lang="scss" scoped></style>