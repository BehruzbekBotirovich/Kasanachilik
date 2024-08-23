<template>
    <div class="form-keeper" @click.self="$emit('formClose')">
        <a-form :model="form" :rules="rules" ref="formRef" class="bg-white rounded p-8 space-y-4">
            <div class="flex justify-between p-2 border-b-slate-200 border-b-2 mb-4 items-center">
                <h1 class="font-bold text-2xl">E'lon berish</h1>
                <krestik-icon @click.self="$emit('formClose')"></krestik-icon>
            </div>

            <a-form-item label="Korxona tashkilot nomi" name="organization">
                <a-input v-model:value="form.organization" placeholder="Istamov Xurshid YATT"
                    class="p-3  focus:bg-gray-100" />
            </a-form-item>

            <a-form-item label="STIR" name="stir">
                <a-input v-model:value="form.stir" placeholder="254789658" class="p-3   focus:bg-gray-100" />
            </a-form-item>

            <a-form-item label="Yo’nalish" name="subject">
                <a-auto-complete v-model:value="form.subject" @search="handleSearch" :options="optionsSubject" class=" "
                    placeholder="Tanlang" :filter-option="filterOption" />
            </a-form-item>

            <a-form-item label="Manzil" name="address">
                <a-input v-model:value="form.address" placeholder="Istamov Xurshid YATT"
                    class="p-3   focus:bg-gray-100" />
            </a-form-item>

            <a-form-item label="Maosh" name="salary">
                <a-input v-model:value="form.salary" placeholder="Kiriting" class="p-3    focus:bg-gray-100" />
            </a-form-item>

            <a-form-item>
                <a-button type="primary" class="h-10 bg-customOrange hover:bg-orange-400" html-type="submit"
                    @click="handleSubmit">Joylashtirish</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>
<script setup>
import { ref, defineEmits } from 'vue'
import KrestikIcon from '@/components/icons/KrestikIcon.vue'

const formRef = ref(null)
const form = ref({
    organization: '',
    stir: '',
    subject: '',
    address: '',
    salary: ''
})

const rules = {
    organization: [{ required: true, message: "Korxona tashkilot nomi is required", trigger: "blur" }],
    stir: [{ required: true, message: "STIR is required", trigger: "blur" }],
    subject: [{ required: true, message: "Yo’nalish is required", trigger: "change" }],
    address: [{ required: true, message: "Manzil is required", trigger: "blur" }],
    salary: [{ required: true, message: "Maosh is required", trigger: "blur" }]
}

const optionsSubject = ref([
    { value: 'Frontend' },
    { value: 'Dizayner' },
    { value: 'Sartaroj' },
    { value: 'Kulol' },
    { value: 'Tikuvchi' },
    { value: 'Backend' },
    { value: 'Rassom' }
])

const handleSearch = (value) => {
    console.log('Search:', value)
}

const handleSubmit = () => {
    formRef.value.validate((valid) => {
        if (valid) {
            console.log('Submit!', form.value)
        } else {
            console.log('Error occurred during form validation')
            return false
        }
    })
}
</script>
<style scoped>
body {
    position: relative;
}

.form-keeper {
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 100vh;
    top: 0px;
    left: 0px;
    background: #20324295;
    width: 100vw;
}

form {
    align-items: center;
    max-width: 592px;
    min-width: 360px;
    width: 40%;
}

:deep(.ant-row) {
    display: block;
}

:deep(.ant-form-item-required) {
    font-weight: 600;
    line-height: 19.36px;
}

:deep(.ant-form-item-required::before) {
    display: none !important;
}

:deep(.ant-select-selector .ant-select-selection-search .ant-select-selection-search-input) {
    padding-left: 0px !important;
}
</style>