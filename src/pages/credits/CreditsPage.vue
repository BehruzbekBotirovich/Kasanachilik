<template>
    <Wrapper>
        <div class="main-container">
            <div class="flex justify-between items-center py-6 md:py-12">
                <h1 class="text-4xl font-bold ">Kreditlar</h1>
                <button class="green-btn" @click="showModal">Kredit uchun ariza</button>
                <a-modal v-model:visible="isModalVisible" title="Kredit olish uchun ariza" :footer="null">
                    <CreditForm />
                </a-modal>
            </div>
            <div class="person_type mb-8">
                <div :class="{ active: personType === 'jismoniy' }" @click="personType = 'jismoniy'">
                    Jismoniy shaxs
                </div>
                <div :class="{ active: personType === 'yuridik' }" @click="personType = 'yuridik'">
                    Yuridik shaxs
                </div>
            </div>



            <!-- credit offer cards -->
            <div class="space-y-4 md:space-y-8 mb-8">
                <credit-card> </credit-card>
                <credit-card> </credit-card>
            </div>
        </div>
    </Wrapper>

</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue'

import { ref } from 'vue'
import CreditCard from './components/CreditCard.vue'
import CreditForm from './components/CreditForm.vue'


const checked2 = ref(false)
const showForm = ref(false)

const personType = ref('yuridik')

// modal credit form
const isModalVisible = ref(false);

const showModal = () => {
    isModalVisible.value = true;
};


</script>

<style scoped>
:deep(.modalka>.ant-modal-content> .ant-modal-footer) {
    display: none;
}

.person_type {
    display: flex;
    width: fit-content;
    background: white;
    color: #98A2B3;
    border-radius: 10000px;
    transition: all 1s ease;
    padding: 8px;

    @media(max-width:760px) {
        padding: 6px;

    }
}

.person_type>div {
    cursor: pointer;
    font-weight: 600;
    padding: 12px 24px;
    border-radius: 1000px;
    transition: all 0.5s ease;
    width: fit-content;

    @media(max-width:760px) {
        padding: 4px 12px;
    }
}




.active {
    color: white;
    background: #DE9551;
}
</style>