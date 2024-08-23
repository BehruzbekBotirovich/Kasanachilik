<template>
    <div class="bg-white py-6 px-8 rounded-xl mb-8">
        <h1 class="font-semibold text-lg md:text-2xl mb-3">Kasanachilik ishchilarini kasbiy o'qitish xarajatlarini
            qoplash uchun
            subsidiya </h1>
        <p class="mb-3 text-base">Vazirlar Mahkamasining 22.07.2023 yildagi “Oʻzbekiston
            Respublikasi Kambagʻallikni qisqartirish va bandlik
            vazirligi huzuridagi Hunarmandchilik va kasanachilikni qoʻllab-quvvatlash jamgʻarmasi faoliyatini tashkil
            etish chora-tadbirlari toʻgʻrisida”gi  307-son qarori qabul qilindi.</p>

        <div class="border-1  rounded-lg border-gray-200 mb-3">
            <dropdown-answer>
                <template #question> Bu qanday ishlaydi </template>
                <template #answer> Ariza beruvchi YIDXPda ro‘yxatdan va/yoki avtorizatsiyadan o‘tadi va so‘rov
                    yuboradi</template>
            </dropdown-answer>
        </div>

        <div class="border-1  rounded-lg border-gray-200 mb-3">
            <dropdown-answer>
                <template #question>Tashkilot </template>
                <template #answer>tashkilot nomi</template>
            </dropdown-answer>
        </div>

        <div class="border-1  rounded-lg border-gray-200 mb-3">
            <dropdown-answer>
                <template #question> Bog’lanish</template>
                <template #answer> +998 90 000 00 00 omad</template>
            </dropdown-answer>
        </div>
        <a-button type="primary" class="orange-btn">Xizmatdan foydalanish </a-button>
    </div>
</template>

<script setup>
import DropdownAnswer from '@/components/GlobalUI/DropdownAnswer.vue';

</script>

<style scoped>
.divkottasi {
    margin-bottom: 0px;
}

.orange-btn {
    height: 40px;
    padding: 0 30px;
    background-color: #DE9551;
    border-color: #DE9551;
}

.orange-btn:hover {
    background-color: #e59400;
    border-color: #e59400;
}
</style>