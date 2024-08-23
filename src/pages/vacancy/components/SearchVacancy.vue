<template>
    <div class=" divmain">
        <div class="main-container py-12">
            <h1 class="font-bold text-3xl mb-7">Bo'sh ish o'rinlari</h1>
            <a-row gutter="16">



                <a-col :sm="24" :md="7" :lg="10">
                    <a-auto-complete v-model:value="job" @search="handleSearch" :options="optionsJob" class="searchbar"
                        placeholder="Kasb, yo'nalish nomi bilan izlash" :filter-option="filterOption" />
                    <lupa-icon> </lupa-icon>
                </a-col>

                <a-col :sm="12" :md="7" :lg="6">
                    <a-select v-model:value="shahar" show-search placeholder="Butun O’zbekiston bo’ylab"
                        style="width: 100%" :options="optionsCity" :filter-option="filterOption" @focus="handleFocus"
                        @blur="handleBlur" @change="handleChange"></a-select>


                </a-col>

                <a-col  :md="7" :lg="6" >
                    <a-select v-model:value="yonalish" show-search placeholder="Kategoriya" style="width: 100%"
                        :options="optionsYonalish" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                        @change="handleChange"></a-select>
                </a-col>
                <button @click="handleSearchClick" type="submit" class=" orange-btn ">izlash</button>
            </a-row>

        </div>

    </div>
</template>

<script setup>
import LupaIcon from '@/components/icons/LupaIcon.vue'
import { ref } from 'vue';
import { defineEmits } from 'vue';

// Определение функции emit
const emit = defineEmits();

// input vipad spisok
const optionsYonalish = ref([
    { value: 'IT' },
    { value: 'Tikuvchilik' },
    { value: 'Kulolchilik' },
]);

const optionsCity = ref([
    { value: '', label: 'Butun O\'zbekiston bo\'ylab  ' },
    { value: 'Toshkent shahri', label: 'Toshkent shahri' },
    { value: 'Toshkent viloyati', label: 'Toshkent viloyati' },
    { value: 'Sirdaryo', label: 'Sirdaryo' },
    { value: 'Fargona', label: 'Fargona' },
    { value: 'Namangan', label: 'Namangan' },
    { value: 'Samarqand', label: 'Samarqand' },
    { value: 'Andijon', label: 'Andijon' }
]);



const filterOption = (input, option) => {
    return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
};

const optionsJob = ref([
    { value: 'Frontend' },
    { value: 'Dizayner' },
    { value: 'Sartaroj' },
    { value: 'Kulol' },
    { value: 'Tikuvchi' },
    { value: 'Backend' },
    { value: 'Rassom' }
]);




const job = ref(undefined)
const yonalish = ref(undefined);
const shahar = ref(undefined)


const handleSearchClick = () => {
    const filters = {
        job: job.value || null,
        yonalish: yonalish.value || null,
        shahar: shahar.value || null
    };
    emit('search', filters);
};
</script>

<style scoped>
:deep(.searchbar .ant-select-selector) {
    width: 100%;
    position: relative;
    outline: none;
    padding-left: 40px !important;
}

:deep(.searchbar) {
    width: 100%;
}

.lupa {
    position: absolute;
    top: 14px;
    left: 20px;
}
</style>