<template>
    <div class="form-div">
        <a-form :model="formModel" @submit.prevent="handleSubmit" layout="vertical" ref="formRef" class="space-y-4">
            <a-form-item label="Kredit turi" name="type" :rules="[{ required: true, message: 'Tanlang' }]">
                <a-select v-model:value="formModel.type" placeholder="Tanlang">
                    <a-select-option value="type1">Тип 1</a-select-option>
                    <a-select-option value="type2">Тип 2</a-select-option>
                    <a-select-option value="type3">Тип 3</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item label="To’lov muddati" name="date"
                :rules="[{ required: true, message: 'Iltimos muddatni tanlang!' }]">
                <a-date-picker v-model:value="formModel.date" style="width: 100%;" placeholder="Tanlang" />
            </a-form-item>

            <a-form-item label="Summa" name="amount"
                :rules="[{ required: true, message: 'Iltimos, qiymatni tanlang!' }]">
                <a-input-number v-model:value="formModel.amount" style="width: 100%;" placeholder="0.00" />
            </a-form-item>

            <a-form-item>
                <a-button @click="handleSubmit" type="primary" html-type="submit">Отправить</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { message } from 'ant-design-vue';

const formRef = ref(null);
const formModel = ref({
    type: null,
    date: null,
    amount: null
});

const handleSubmit = async () => {
    try {
        await formRef.value.validate();
        console.log('Форма успешно отправлена:', formModel.value);
        message.success('Форма успешно отправлена!');
        formModel.value.type = null;
        formModel.value.date = null;
        formModel.value.amount = null;
    } catch (errorInfo) {
        console.log('Ошибка при отправке формы:', errorInfo);
    }
};
</script>


<style scoped>


.form-container {
    margin: 0 auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

main {
    position: relative;
}



.form-div {
    background: white;
    padding: 16px 0px;
    border-radius: 12px;
}
:deep(.ant-form-item-required::before){
    display: none !important;
}
:deep(.ant-form-item-label >label) {
    font-size: 16px;
    font-weight: 600;
    line-height: 19.36px;
}
</style>