<template>
    <div class="main-container">
        <h1 class="text-customOrange semibold pt-12">F.A.Q</h1>
        <h1 class="text-2xl font-bold  my-4">Ko'p beriladigan savollar</h1>

        <dropdown-answer v-for="el in savolJavob">
            <template #question> {{ el.savol }} </template>
            <template #answer> {{ el.javob }}</template>
        </dropdown-answer>
    </div>

</template>

<script setup>
import DropdownAnswer from '@/components/GlobalUI/DropdownAnswer.vue'
const savolJavob = [
    { savol: 'Bo’sh ish o’rinlarini qanday qo’shish mumkin?', javob: 'bu yerda javob yozilgan boladi' },
    { savol: 'Bo’sh ish o’rinlarini faqat yuridik shaxslar berishi mumkinmi?', javob: 'bu yerda javob yozilgan boladi' },
    { savol: 'Kasanachilik mahsulotlari qanday tartibda qo’shiladi?', javob: 'bu yerda javob yozilgan boladi' },
    { savol: 'Imtiyozli kredit nima?', javob: 'bu yerda javob yozilgan boladi' },
    { savol: 'Imtiyozli kreditni kimlar olishi mumkin?', javob: 'bu yerda javob yozilgan boladi' },
    { savol: 'Subsidiya berish tartibi qanday', javob: 'bu yerda javob yozilgan boladi' },

]
</script>

<style scoped></style>