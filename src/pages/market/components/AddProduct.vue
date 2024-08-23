<template>

    <form action="" class="bg-white rounded">
        <!-- mahsulot rasmi -->
        <h3 class="font-semibold  mt-2 mb-1">Mahsulot rasmi</h3>
        <a-upload v-model:file-list="fileList" :max-count="1" action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
            <a-button class="flex items-center border-1 border-gray-200 text-gray-600">
                <upload-icon></upload-icon>
                Yuklash 1ta
            </a-button>
            <span v-if="fileList.length == 0"> Fayl tanlanmadi</span>
        </a-upload>
        <!-- Nomi -->
        <h3 class="font-semibold mt-2 mb-1">Nomi</h3>
        <a-input placeholder="Kiriting" class="p-3 mb-4"></a-input>

        <!-- narhi -->
        <h3 class="font-semibold">Narxi</h3>
        <a-input-number id="inputNumber" v-model:value="price" class="w-full py-3 mb-4" placeholder="0.00" />

        <!-- Sana yetkazib berish    -->
        <h3 class="font-semibold  mb-1">Yetkazib berish vaqti</h3>
        <a-space direction="vertical" :size="14" class="mb-4">
            <a-date-picker v-model:value="deliveryDate" placeholder="Tanlang" />
        </a-space>




        <h3 class="font-semibold mb-1">O'lcham</h3>
        <a-input placeholder="Kiriting" v-model="size" class="p-3 mb-4"></a-input>

        <a-button type="submit" class="bg-customOrange px-4 text-white  rounded">Joylashtirish</a-button>

    </form>

</template>

<script setup>
import { ref, defineEmits } from 'vue'
import UploadIcon from '@/components/icons/UploadIcon.vue';

const deliveryDate = ref();
const price = ref()
const fileList = ref([])
const size = ref(null)

</script>

<style scoped>
body {
    position: relative;
}

:deep(.ant-space) {
    width: 100% !important;
}

:deep(.ant-space .ant-space-item) {
    width: 100% !important;
}

:deep(.ant-space .ant-space-item .ant-picker) {
    width: 100% !important;
    padding: 12px !important
}

/* file downloader */
:deep(.ant-upload-wrapper) {
    display: flex;
    width: 100%;
    align-items: center;
    background: rgb(246, 246, 246);
    border-radius: 8px;
    overflow: hidden
}

:deep(.ant-upload) {

    color: gray;
    display: flex !important;
    align-items: center;
    gap: 20px;
    border-radius: 6px;
    background: rgb(246, 246, 246);
    padding: 6px;

}

:deep(.ant-upload-list-item) {
    margin-top: 4px !important;
}
</style>