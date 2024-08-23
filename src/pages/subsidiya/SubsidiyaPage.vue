<template>
    <Wrapper>
        <div class="main-container">
            <div class="flex justify-between items-center mt-16 mb-8">
                <h1 class="text-4xl font-bold ">Subsidiya</h1>
                <button class="green-btn" @click="showForm = true">Subsidiya uchun ariza</button>
            </div>
            <div class="person_type mb-8 ">
                <div :class="{ active: personType === 'jismoniy' }" @click="personType = 'jismoniy'">
                    Jismoniy shaxs
                </div>
                <div :class="{ active: personType === 'yuridik' }" @click="personType = 'yuridik'">
                    Yuridik shaxs
                </div>
            </div>
            <Dropdown-rule></Dropdown-rule>
            <Dropdown-rule></Dropdown-rule>
        </div>

    </Wrapper>

</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue'

import { ref } from 'vue'
import DropdownRule from './components/DropdownRule.vue';
const personType = ref('yuridik')

</script>

<style scoped>
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