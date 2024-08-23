<template>
    <div class="  bg-customBlack py-20">
        <div class="main-container">
            <!--title-->
            <div class="flex justify-between mb-8">
                <h1 class="text-white text-2xl">Kasanachilik bo‘yicha qarorlar </h1>
                <button class="bg-transparent text-white">Barchasini ko'rish</button>
            </div>
            <!-- qaror card -->
            <div v-for="qaror in Qarorlar" :key="index"
                class="flex gap-2 p-4 border-2 mb-4 border-customGray rounded items-center">
                <a :href=qaror.linkFile target="_blank">
                    <img src="@/assets/img/file.png">
                </a>
                <div class=" text-white">
                    <a :href=qaror.linkFile target="_blank"
                        class="text-white text-lg font-semibold hover:text-gray-300">{{
                qaror.title }} </a>
                    <p class="text-customGray">{{ qaror.serie }}-son {{ qaror.date }}</p>
                </div>

            </div>



        </div>
    </div>
    <!-- e’lonlar -->
    <!-- cardlar div -->
    <div class="main-container">
        <h3 class="text-customOrange semibold mt-12 ">Media</h3>
        <h1 class="font-bold text-2xl mb-8">Yangilik va e’lonlar</h1>
        <!-- cardlar -->
        <a-row :gutter="[24, 24]">
            <a-col v-for="elon in Elonlar" :key="index" :xs="24" :sm="12" :md="8">
                <div class="card relative rounded-xl overflow-hidden  bg-white ">
                    <div>
                        <img class="elon-img" :src=elon.image>
                    </div>
                    <div class="p-5">
                        <h3 class="font-bold text-bold text-xl mb-2"> {{ elon.title }}
                        </h3>
                        <p class="text-customGray text-2qator">{{ elon.text }}</p>
                    </div>
                    <div class="date text-customGray"> {{ elon.date }}</div>
                </div>
            </a-col>

        </a-row>
    </div>

    <div class="flex justify-center mt-10 mb-16">
        <orange-btn>Barchasini ko'rish</orange-btn>
    </div>


</template>

<script setup>
// script
const Qarorlar = [
    {
        title: "Kichik biznesni uzluksiz qo‘llab-quvvatlash kompleks dasturini amalga oshirish chora- tadbirlari to‘g‘risida",
        serie: '32',
        date: '20.01.2024',
        linkFile: 'https://online.publuu.com/605424/1355333'
    },
    {
        title: "Kichik biznesni uzluksiz qo‘llab-quvvatlash kompleks dasturini amalga oshirish chora- tadbirlari to‘g‘risida",
        serie: '32',
        date: '20.01.2024',
        linkFile: 'https://online.publuu.com/605424/1355333'
    }, {
        title: "Kichik biznesni uzluksiz qo‘llab-quvvatlash kompleks dasturini amalga oshirish chora- tadbirlari to‘g‘risida",
        serie: '32',
        date: '20.01.2024',
        linkFile: 'https://online.publuu.com/605424/1355333'
    }, {
        title: "Kichik biznesni uzluksiz qo‘llab-quvvatlash kompleks dasturini amalga oshirish chora- tadbirlari to‘g‘risida",
        serie: '32',
        date: '20.01.2024',
        linkFile: 'https://online.publuu.com/605424/1355333'
    }, {
        title: "Kichik biznesni uzluksiz qo‘llab-quvvatlash kompleks dasturini amalga oshirish chora- tadbirlari to‘g‘risida",
        serie: '32',
        date: '20.01.2024',
        linkFile: 'https://online.publuu.com/605424/1355333'
    },
]
const Elonlar = [
    {
        title: 'Bu yerda title boladi',
        text: ' bu yerda yangilik matni bolashi kerak ',
        date: '12.12.2024',
        image: 'https://images.unsplash.com/photo-1718965107564-daa12e777876?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Bu yerda title boladi',
        text: ' bu yerda yangilik matni bolashi kerak ',
        date: '12.12.2024',
        image: 'https://images.unsplash.com/photo-1718965107564-daa12e777876?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Bu yerda title boladi',
        text: ' bu yerda yangilik matni bolashi kerak ',
        date: '12.12.2024',
        image: 'https://images.unsplash.com/photo-1718965107564-daa12e777876?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        title: 'Bu yerda title boladi',
        text: ' bu yerda yangilik matni bolashi kerakmsd mds fmd f, sd,f ,sd,fs,d f,sd,f,sdf,d,f d,f sdfsd fmdfsd mnf dbf dshfdhfdbsfhdsbfdshf dsf sdhfdfdsfdsfsd f ',
        date: '12.12.2024',
        image: 'https://images.unsplash.com/photo-1718965107564-daa12e777876?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }

]
</script>

<style scoped>
.demo-loadmore-list {
    min-height: 350px;
}



.card {
    position: relative;
    padding: 0 !important;
}

.elon-img {
    width: 100%;
    aspect-ratio: 4/3;
    height: 100%;
}

.date {
    transform: rotate(270deg);
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    z-index: 90;
    padding: 10px 30px;
    border-radius: 16px;
    top: 80px;
    left: -55px;
    background-image: url('@/assets/Polygon.svg');
    background-repeat: no-repeat;
    background-size: cover;
}
</style>