<template>
    <div class="py-7 flex justify-between items-center">
        <h1 class="font-bold text-4xl ">Onlayn kutubxona</h1>
        <button class="green-btn">Kitob qo'shish</button>
    </div>

    <a-row  :gutter="[16, 16]">
        <BookCard></BookCard>
        <BookCard></BookCard>
        

    </a-row>

    <div class="flex justify-center  mt-20  mb-16">
        <button @click="" :loading="loading"
            class="text-white bg-customOrange py-4 rounded px-6 ">Ko’proq yuklash</button>
    </div>
</template>

<script setup>
import BookCard from './BookCard.vue'
</script>

<style scoped></style>