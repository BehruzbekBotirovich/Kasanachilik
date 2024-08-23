<template>
    <Wrapper>

        <div class="main-container">
            <div class="flex  justify-between items-center my-8">
                <h1 class="text-4xl font-bold ">Yo’riqnoma</h1>
                <button class="green-btn" @click="showModal"> Savol berish </button>
                <a-modal v-model:visible="isModalVisible" title="Savol berish" :footer="null"
                    wrapClassName="custom-modal" @cancel="handleCancel">
                    <QuestionForm />
                </a-modal>
            </div>
            <div>
                <dropdown-answer v-for="el in savolJavob">
                    <template #question> {{ el.savol }} </template>
                    <template #answer> {{ el.javob }}</template>
                </dropdown-answer>
            </div>
        </div>

    </Wrapper>
</template>

<script setup>
import { ref } from 'vue'
import Wrapper from '@/components/Wrapper.vue'

import DropdownAnswer from '@/components/GlobalUI/DropdownAnswer.vue';
import QuestionForm from './components/QuestionForm.vue';
const savolJavob = [
    { savol: 'Bo’sh ish o’rinlarini qanday qo’shish mumkin?', javob: 'bu yerda javob yozilgan boladi' },
    { savol: 'Bo’sh ish o’rinlarini faqat yuridik shaxslar berishi mumkinmi?', javob: 'bu yerda javob yozilgan boladi' },
    { savol: 'Kasanachilik mahsulotlari qanday tartibda qo’shiladi?', javob: 'bu yerda javob yozilgan boladi' },
    { savol: 'Imtiyozli kredit nima?', javob: 'bu yerda javob yozilgan boladi' },
    { savol: 'Imtiyozli kreditni kimlar olishi mumkin?', javob: 'bu yerda javob yozilgan boladi' },
    { savol: 'Subsidiya berish tartibi qanday', javob: 'bu yerda javob yozilgan boladi' },

]

// modal 
const isModalVisible = ref(false);
const showModal = () => {
    isModalVisible.value = true;
};
const handleCancel = () => {
    isModalVisible.value = false;
};
</script>

<style scoped></style>