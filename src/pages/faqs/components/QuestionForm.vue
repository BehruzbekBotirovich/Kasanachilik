<template>
    <a-form @submit.prevent="handleSubmit" class="rounded-md bg-white">

        <h1 class="text-lg font-semibold mb-2">Savol</h1>
        <a-form-item name="question" :rules="[{ required: true, message: 'Iltimos savolingizni kiriting!' }]">
            <a-input v-model:value="question" class="h-12 " placeholder="Kiriting" />
        </a-form-item>
        <br>
        <a-button type="primary" html-type="submit" class="orange-btn ">Yuborish</a-button>
    </a-form>
</template>

<script setup>
import { ref } from 'vue';

const question = ref('');
const form = ref(null);

const emit = defineEmits(['hide'])



const handleSubmit = () => {
    form.value
        .validate()
        .then(() => {
            // Здесь можно выполнить отправку данных на сервер или любую другую логику
            console.log('Форма успешно отправлена:', question.value);
            message.success('Ваш вопрос был успешно отправлен!');
            // Очистка поля после успешной отправки
            question.value = '';
        })
        .catch(errorInfo => {
            console.log('Ошибка при отправке формы:', errorInfo);
        });
};
</script>

<style scoped>

</style>