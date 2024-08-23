<template>
    <div>
        <a-row :gutter="[24, 24]">
            <VacancyItem v-for="vacancy in paginatedVacancies" :key="vacancy.vacancyId" :vacancy="vacancy"
                @handleClicktoSent="$emit('hideSendFunc')" />
        </a-row>
        <!-- Pagination -->
        <div class="flex items-center justify-center my-6 ">
            <a-pagination v-model:current="currentPage" :total="filteredVacancies.length" :pageSize="pageSize"
                :showSizeChanger="false" @change="handlePageChange">
                <template #itemRender="{ page, type, originalElement }">
                    <span v-if="type === 'prev'" class="text-gray-700 font-semibold text-sm items-center flex gap-1">
                        <ArrowLeftOutlined /> Oldingi
                    </span>
                    <span v-else-if="type === 'next'"
                        class="text-gray-700 font-semibold text-sm items-center flex gap-1">
                        Keyingisi
                        <ArrowRightOutlined />
                    </span>
                    <span v-else>{{ page }}</span>
                </template>
            </a-pagination>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import VacancyItem from '@/pages/vacancy/components/VacancyItem.vue';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons-vue';

const props = defineProps({
    vacancies: {
        type: Array,
        required: true
    },
    filteredVacancies: {
        type: Array,
        required: true
    }
});

const currentPage = ref(1);
const pageSize = ref(10);

const paginatedVacancies = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return props.filteredVacancies.slice(start, end);
});

const handlePageChange = (page) => {
    currentPage.value = page;
};
</script>

<style lang="scss" scoped></style>
