<template>
    <div class="form-keeper" @click.self="$emit('closeSend')">


        <form action="" class="bg-white rounded p-8">
            <div class="flex justify-between p-2 border-b-slate-200 border-b-2   mb-4 items-center">
                <h1 class="font-bold text-2xl">Qiziqish bildirish</h1>
                <krestik-icon @click="$emit('closeSend')"></krestik-icon>
            </div>

            <h3 class="font-semibold">F.I.SH</h3>
            <a-input placeholder="Istamov Xurshid YATT" class="p-3 mb-4"></a-input>

            <h3 class="font-semibold">Rezyume</h3>

            <a-upload v-model:file-list="fileList2" :max-count="1"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                <a-button class="flex items-center border-1 border-gray-200 text-gray-600">
                    <upload-icon></upload-icon>
                    Yuklash 1ta
                </a-button>
                <span v-if="fileList2.length == 0"> Fayl tanlanmadi</span>
            </a-upload>
            <button type="submit" class="bg-customOrange p-4 text-white  rounded mt-6">Yuborish</button>

        </form>
    </div>

</template>

<script setup>
import { ref, defineEmits } from 'vue'
import KrestikIcon from '@/components/icons/KrestikIcon.vue'
import UploadIcon from '@/components/icons/UploadIcon.vue'
const hideForm = ref(false)
// file upload
const fileList2 = ref([]);
console.log(fileList2)
const token = 'your_auth_token'; // Замените на ваш токен авторизации

const handleChange = (info) => {
    fileList.value = [...info.fileList];

    // Пример обработки успешной загрузки
    if (info.file.status === 'done') {
        console.log(`${info.file.name} успешно загружен`);
    } else if (info.file.status === 'error') {
        console.error(`${info.file.name} ошибка загрузки.`);
    }
};
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