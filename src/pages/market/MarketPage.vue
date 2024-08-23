<template>
    <Wrapper>
        <div class=" main-container my-6">
            <NavbarMarket> </NavbarMarket>
            <UserItem v-for="user in users" :key="user.id" :user="user" @remove="$emit('remove', user)"></UserItem>
            <div class="flex justify-between items-center py-5">
                <h1 class="text-xl xl:text-2xl font-bold">Eng ommabop mahsulotlar</h1>
                <button type="primary" class="green-btn " @click="showModal">Mahsulot qo'shish</button>
            </div>
            <a-modal v-model:visible="isModalVisible" title="Mahsulot qo'shish" :footer="null"
                wrapClassName="custom-modal" @cancel="handleCancel">
                <AddProduct />
            </a-modal>
            <ProductsLIst :products="products" @openForm="AddProductForm = true"></ProductsLIst>
        </div>
    </Wrapper>

</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue'

import { ref, } from 'vue'
import NavbarMarket from '@/pages/market/components/NavbarMarket.vue'
import AddProduct from '@/pages/market/components/AddProduct.vue'
import ProductsLIst from '@/pages/market/components/ProductsList.vue'
// modal 
const isModalVisible = ref(false);
const showModal = () => {
    isModalVisible.value = true;
};
const handleCancel = () => {
    isModalVisible.value = false;
};
// data
const AddProductForm = ref(false)
const products = [
    {
        productId: 1,
        name: 'Kukmara quyuq marmarli qozon',
        saller: 'KUKMARA',
        price: 120000, liked: true,
        img: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsbJHP-wo_05jAOw1fVzFzx6wUl1BsfQSM_g&s',
            'https://i.ebayimg.com/images/g/feUAAOSwz5Vk9Z08/s-l1200.webp',
            'https://i.ebayimg.com/images/g/feUAAOSwz5Vk9Z08/s-l1200.webp'
        ]
    },
    {
        productId: 2,
        name: 'Tapki',
        saller: 'ShippakUz',
        price: 190000, liked: false,
        img: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpp7JZN_voM95GSpUBMWkJsAw4pPzrazJWOg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpp7JZN_voM95GSpUBMWkJsAw4pPzrazJWOg&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpp7JZN_voM95GSpUBMWkJsAw4pPzrazJWOg&s'

        ]
    },

    {
        productId: 3,
        name: 'Lagan',
        saller: 'Kulol',
        price: 100000, liked: false,
        img: ['https://cdn.shopify.com/s/files/1/0070/7032/files/product-label-design.jpg?v=1680902906',
            'https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png',
            'https://cdn.shopify.com/s/files/1/0070/7032/files/product-label-design.jpg?v=1680902906']
    }

] 
</script>


<style scoped>
/* transition */
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>