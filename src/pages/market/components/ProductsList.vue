<template>
    <div class="">
       
        <a-row :gutter="[gutter, gutter]">
            <CardProduct :loading="isLoading" v-for="product in products" :key="product.id" :product="product">
                <router-link :to="`/market/${product.id}`">{{ product.name }}</router-link>
            </CardProduct>
        </a-row>

        <div class="flex justify-center items-center mt-10">
            <a-button type="" @click="loadMore"
                class="bg-customOrange py-4  px-2 lg:px-8    text-sm hover:bg-orange-400 text-white flex items-center justify-center">
                Ko'proq yuklash
            </a-button>
            
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import CardProduct from '@/pages/market/components/CardProduct.vue'

const props = defineProps({
    products: {
        type: Array,
        required: true
    },
})

const isLoading = ref(false)

const gutter = ref({
    xs: 8,
    sm: 12,
    md: 18,
    lg: 20,
    xl: 24,
    xxl: 24
})

const loadMore = () => {
    // Logic to load more products
    console.log('Load more products')
}
</script>

<style scoped>
.green-btn {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;

    @media (max-width:610px) {
        padding: 6px 10px;
        font-size: 14px;
        max-width: 80px;
    }
}

.bg-customOrange {
    background-color: #ff6600;
}
</style>