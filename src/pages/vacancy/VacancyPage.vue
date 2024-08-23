<template>
    <Wrapper>

        <SearchVacancy @search="handleSearch"></SearchVacancy>

        <div class="main-container">
            <div class="flex items-center justify-between py-7">
                <div class="flex items-center">
                    <h1 class="font-bold text-3xl mr-3">Natijalar: </h1>
                    <div class="text-center p-2 text-white bg-customOrange w-fit rounded-xl min-w-10">
                        {{ filteredVacancies.length }}
                    </div>
                </div>
                <button type="button" @click="hideForm = true" class="elon-berish">E’lon berish</button>
            </div>


            <VacancyList v-if="filteredVacancies != ''" :vacancies="vacancies" :filteredVacancies="filteredVacancies"
                @hideSendFunc="hideSend = true">
            </VacancyList>
            <div v-else class="flex justify-center py-8 font-bold text-xl">
                Siz izlagan ish o'rini topilmadi!
            </div>


            <Transition>
                <VacancyForm v-if="hideForm" @formClose="hideForm = false"></VacancyForm>
            </Transition>

            <Transition>
                <send-vacancy v-if="hideSend" @closeSend="hideSend = false"> </send-vacancy>
            </Transition>
        </div>
    </Wrapper>
</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue'

import { ref, computed } from 'vue';
import VacancyList from '@/pages/vacancy/components/VacancyList.vue';
import VacancyForm from '@/pages/vacancy/components/VacancyForm.vue';
import SendVacancy from '@/pages/vacancy/components/SendVacancy.vue';
import SearchVacancy from '@/pages/vacancy/components/SearchVacancy.vue';

// Form hiding vacancy
const hideForm = ref(false);
// Form send vacancy
const hideSend = ref(false);

// Vacancies
const vacancies = ref([
    {
        vacancyId: 1,
        job: 'Kulol',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'kulolchilik',
        city: 'Sirdaryo ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 2,
        job: 'Tikuvchi',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'tikuvchi',
        city: 'Toshkent viloyati  ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 3,
        job: 'Frontend',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Sirdaryo ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 4,
        job: 'UX/UI',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Namangan ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 5,
        job: 'Backend',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Namangan',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 1,
        job: 'Kulol',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'kulolchilik',
        city: 'Samarqand ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 2,
        job: 'Tikuvchi',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'tikuvchi',
        city: 'Toshkent viloyati  ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 3,
        job: 'Frontend',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Sirdaryo ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 4,
        job: 'UX/UI',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Namangan ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 5,
        job: 'Backend',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Namangan',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 1,
        job: 'Kulol',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'kulolchilik',
        city: 'Toshkent shahri ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 2,
        job: 'Tikuvchi',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'tikuvchi',
        city: 'Toshkent viloyati  ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 3,
        job: 'Frontend',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Sirdaryo ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 4,
        job: 'UX/UI',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Namangan ',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
    {
        vacancyId: 5,
        job: 'Backend',
        salary: 3000000,
        workPlace: 'Ideal MCHJ',
        STIR: 23984329,
        subject: 'IT',
        city: 'Namangan',
        address: 'Yunusobod tumani, Amir Temur 124-uy:',
        phone: '+998 71 123 45 67',
        date: '01.06.2024'
    },
]);

const filters = ref({
    job: '',
    yonalish: '',
    shahar: ''
});

const filteredVacancies = computed(() => {
    return vacancies.value.filter((vacancy) => {
        const matchesJob = !filters.value.job || vacancy.job.includes(filters.value.job);
        const matchesYonalish = !filters.value.yonalish || vacancy.subject.includes(filters.value.yonalish);
        const matchesShahar = !filters.value.shahar || vacancy.city.includes(filters.value.shahar);
        return matchesJob && matchesYonalish && matchesShahar;
    });
});
const handleSearch = (newFilters) => {
    filters.value = newFilters;
};

</script>


<style scoped>
.divmain {
    background: linear-gradient(135deg, #F5F7FA 0%, #C3CFE2 100%);
}

.searchbar {
    width: 100%;
    padding: 14px 40px;
    border: 1px solid #d9d9d9;
    position: relative;
    outline: none;
}

.lupa {
    position: absolute;
    top: 14px;
    left: 20px;
}

.elon-berish {
    box-shadow: 0px 16px 21.5px 0px #47CD8973;
    background: #47CD89;
    color: white;
    border-radius: 4px;
    padding: 20px;
}

:deep(.ant-select-selector) {
    height: auto !important;
    padding: 9px 11px !important;
}

:deep(.ant-select-selector .ant-select-selection-search) {}

:deep(.ant-select-selector .ant-select-selection-search .ant-select-selection-search-input) {
    padding: 24px;
}

:deep(.ant-pagination .ant-pagination-item-active) {
    border: none !important;
}

:deep(.ant-pagination .ant-pagination-item-active a) {
    font-weight: 600 !important;
    color: black !important;
}

/* prev next chekkada */
:deep(.ant-pagination) {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center
}

:deep(.ant-pagination .ant-pagination-prev) {
    position: absolute;
    top: 0;
    left: 0;
}

:deep(.ant-pagination .ant-pagination-next) {
    position: absolute;
    top: 0;
    right: 0;
}

/* transition */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
