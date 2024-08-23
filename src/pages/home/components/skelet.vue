<template>
    <div class="card-wrapper">
        <a-skeleton :loading="loading" active>
            <a-card class="custom-card">
                <a-skeleton-image :style="{ width: '100%', height: 'auto', aspectRatio: '4 / 3' }" />
                <a-card-meta :title="product.title" :description="product.description" class="custom-card-meta" />
            </a-card>
        </a-skeleton>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const loading = ref(true);
const product = ref({
    title: '',
    description: ''
});

const fetchProduct = async () => {
    // Симулируйте загрузку данных
    setTimeout(() => {
        product.value = {
            title: 'Product Title',
            description: 'This is a description of the product that might span multiple lines, up to 4 lines or more depending on the content.'
        };
        loading.value = false;
    }, 2000); // Задержка в 2 секунды
};

onMounted(() => {
    fetchProduct();
});
</script>

<style>
.card-wrapper {
    width: 33.33%;
    /* 1/3 блока */
    padding: 10px;
}

.custom-card {
    width: 100%;
}

.custom-card-meta {
    padding-top: 10px;
}

.custom-card-meta .ant-card-meta-title {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    /* Ограничение на 4 строки */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}

.custom-card-meta .ant-card-meta-description {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    /* Ограничение на 4 строки */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>