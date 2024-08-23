<template>

    <div class=" px-6 py-4 bg-white rounded-lg">
        <h1 class="text-lg md:text-2xl font-semibold mb-3">"YUKSALISH" iste'mol krediti</h1>
        <div class="flex mb-3 justify-between" style="max-width: 300px;">
            <div class="text-base">
                <h1>Foiz stavkasi</h1>
                <div class="font-semibold md:text-lg">24%</div>
            </div>
            <div class="text-base">
                <h1>Kredit muddati</h1>
                <div class="font-semibold md:text-lg">36 oy</div>
            </div>
        </div>
        <h3>Kredit miqdori</h3>
        <p class="font-semibold md:text-lg mb-2">Bazaviy Hisoblash Miqdori (BHM)ning 300 barobarigacha</p>
        <a-button type="primary" class="orange-btn mb-4"> Batafsil</a-button>
        <div class="flex border-1  p-4  gap-4 rounded-xl">
            <info-icon></info-icon>
            <div>
                <h3 class="font-semibold text-sm text-gray-700">Kredit kimlar uchun</h3>
                <p class="text-gray-500  text-sm">O’zbekiston Respublikasi oliy o’quv yurtlarida to’lov-kontrakt asosida
                    o’qish, shu jumladan,
                    oshirilgan kontrakt stavkalari bilan, O’zbekiston Respublikasi oliy o’quv yurtlari kunduzgi,
                    sirtqi va kechki bo’limlarida o’qish, shuningdek boshqa ta’lim xizmatlari ko’rsatuvchi
                    tashkilotlarda ta’lim olish  (kurslar, seminarlar, treninglar va h.k) uchun.</p>
            </div>
        </div>
    </div>



</template>

<script setup>
import InfoIcon from '@/components/icons/InfoIcon.vue'


</script>

<style scoped>
.orange-btn {
    height: 40px;
    padding: 0 30px;
    background-color: #DE9551;
    border-color: #DE9551;

    @media (max-width :760px) {
        height: 30px;
        padding: 0 12px;
        font-size: 14px;
    }
}

.orange-btn:hover {
    background-color: #e59400;
    border-color: #e59400;
}
</style>