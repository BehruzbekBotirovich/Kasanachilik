<template>
    <div class="main-container">

        <a-carousel dot-position="bottom" class="custom-carousel ">
            <a-carousel-item v-for="(slide, index) in slides" :key="index">
                <div class="carousel-slide relative" :style="{ backgroundImage: `url(${slide.img})` }">
                    <div class="carousel-content space-y-4 md:space-y-6 lg:space-y-10 ">
                        <h1 class="text-lg md:text-3xl  lg:text-5xl font-bold">{{ slide.title }}</h1>
                        <p class="text-sm lg:text-base ">{{ slide.subtitle }}</p>
                        <a-button type="primary" class="carousel-button">Batafsil</a-button>
                    </div>
                    <div class="cover-darking"> </div>
                </div>
            </a-carousel-item>
        </a-carousel>
    </div>

</template>

<script setup>
import { ref } from 'vue';

const slides = ref([
    {
        title: 'Prezident Qarshi tumanidagi Kasanachilik markazida bo\'ldi',
        subtitle: 'Davlatimiz rahbari Qarshi tumanidagi Yangi Batosh mahallasida bo\'lib, aholi hayoti bilan yaqindan tanishdi. shuna qa yaxshi ishlar qilibdi ',
        img: 'https://anhor.uz/wp-content/uploads/2023/09/5a2467b6-ae37-4f42-03e6-36840782efde_lists_slider_6704.jpg',
    },
    {
        title: 'title uchun s ndsnd asd',
        subtitle: 'bu yerda yangilik boladi     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error eligendi, maxime neque rem dolorem aspernatur ut nam fugiat quia quaerat dolore ipsa nesciunt minus! Esse, voluptates? Tenetur voluptatum officia quaerat.',
        img: 'https://s3-alpha-sig.figma.com/img/9755/6fda/ada8c6d5813d9c01b4e694f0fd3af9b1?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UK~KJTcbx-LrCAh3tu9LFGGDZAUq1M1XACVa-HxjKHYSMYs57lpegNCbckJQ0mVSMF5DICcH1PeoIkAiPlhboftRvGJVE-BAblxnMdkqxQPDiniEwrkDutGPT78TqXjz~plutu8yOwmC7CBLa2LgUYcf8f7veA~xczwKcn7m-t5wDmG-yIMVUYDo9iiyvcxIpGSQ1YTIgvg9kVzTMq99E3xlUbGtfd3FB87rHAO1O7HWS5wZ2AoR5ptKiiJxjCp-dfKoBLv4qBMDA4ievIvssYsoGWj~iyjGvfC2yUOeT2yWXT5z4dH4jl69h3uG-8vVXMDtFXWvg7ITdMhCHMrIlQ__',
    },
    {
        title: 'bu ham title',
        subtitle: 'bu yerda yangilik boladi ',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnpMExO47mun0x0rH0zaLpdEM9iiuD5l_rXw&s',
    },
]);
</script>

<style scoped>
.custom-carousel {
    width: 100%;
    border-radius: 0.75rem;
    overflow: hidden;
}

.carousel-slide {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    height: 530px;
    color: white;

    @media(max-width:980px) {
        height: 450px;
    }

    @media(max-width:760px) {
        height: 400px;
    }

    @media(max-width:610px) {
        height: 350px;
    }

    @media(max-width:560px) {
        height: 300px;
    }
}

.carousel-content {
    position: relative;
    z-index: 2;
    max-width: 80%;
    padding: 4rem;
    border-radius: 8px;

    @media(max-width:980px) {
        padding: 3rem;
        max-width: 90%;
    }

    @media(max-width:780px) {
        padding: 2rem;
        max-width: 100%;
    }

    @media(max-width:560px) {
        padding: 1rem;
    }
}

.carousel-content p {}

.cover-darking {
    background: linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.75) 100%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}


/*btn  ================ */
.carousel-button {
    background-color: #DE9551;
    border-color: #DE9551;
    color: white;
    padding: 0 30px;
    height: 40px;
    font-weight: bold;
    margin-top: 20px;

    @media(max-width:610px) {
        padding: 0 16px;
        height: 30px;

    }
}

.carousel-button:hover {
    background-color: #e67e22;
    border-color: #e67e22;
}



/* dots */
:deep(.slick-dots) {
    justify-content: start;
    padding-left: 60px;

    @media(max-width:610px) {
        padding-left: 45px;
    }

    @media(max-width:560px) {
        padding-left: 1rem;
    }

}

:deep(.slick-dots> .slick-active>button) {
    background-color: #DE9551 !important;
}

:deep(.slick-dots>li>button) {
    height: 8px;
    border-radius: 999px;
}

:deep(.slick-dots) {
    bottom: 30px;
}
</style>