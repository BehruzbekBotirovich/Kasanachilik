<template>
    <div class="flex justify-between items-center mt-10 mb-6">
        <h1 class="font-bold text-4xl">Kurslar</h1>
        <button class="green-btn">Kurs joylashtirish</button>
    </div>
    <p class="text-gray-500 font-lg mb-8">Kasbga yo'nalitirilgan darslar yordamida eng tez va samarali yo'llar bilan
        mutaxassislar
        qatoriga qo'shiling. Har
        bir dars soha mutaxassislari tomonidan eng zamoaviy o'quv reja asosida tayyorlangan</p>
    <!-- navbar by subjects  -->

    <ul class="navbar-subjects scrollbar-none overflow-x-scroll ">
        <li class="active">Barcha kurslar</li>
        <li>Dasturlash</li>
        <li>Dizayn</li>
        <li>Hunarmandchilik</li>
        <li>Tikuvchilik</li>
        <li>Kulolchilik</li>
        <li>Haykaltaroshlik</li>
        <li>Loyiha boshqaruvi</li>
        <li>+</li>
    </ul>
    <!-- List   -->
    <a-row :gutter="[30, 30]">
        <CardCourse v-for="course in courses" :key="course.id" :course="course">

        </CardCourse>
    </a-row>


    <div class="flex justify-center  mt-20  mb-16">
        <button @click="loadMoreCourses" :loading="loading"
            class="text-white bg-customOrange py-4 rounded px-6 ">Ko’proq yuklash</button>
    </div>






</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardCourse from './CardCourse.vue'
import { useRouter } from 'vue-router';
const router = useRouter();

const loading = ref(false);
const page = ref(1);
const pageSize = ref(20);

const loadCourses = async () => {
    loading.value = true;
    try {
        // const response = await fetch(`https://api.example.com/courses?page=${page.value}&pageSize=${pageSize.value}`);
        // const data = await response.json();
        courses.value = [...courses.value, ...data];
        page.value++;
    } catch (error) {
        console.error('Failed to load courses:', error);
    } finally {
        loading.value = false;
    }
};

const loadMoreCourses = () => {
    loadCourses();
};

onMounted(loadCourses);

const courses = ref([

    {
        category: {
            title: 'Dasturlash',
            color: '#26BF56'
        },
        id: 1,
        authorImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GwkViOEunBePpydMn-mpr6mEIaK5MU-7w&s',
        coverImg: 'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1',
        author: 'Oybek Safarov',
        subject: 'Frontend dasturlash',
        subtitle: 'Loy orqali istalgan turdagi idishlarni o’z qo’llaringiz bilan yarating',
        rating: 4,
        price: 120000,
        liked: false,
    },
    {
        category: {
            title: 'Dasturlash',
            color: '#26BF56'
        },
        id: 2,
        authorImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GwkViOEunBePpydMn-mpr6mEIaK5MU-7w&s',
        coverImg: 'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1',
        author: 'Oybek Safarov',
        subject: 'Frontend dasturlash',
        subtitle: 'Loy orqali istalgan turdagi idishlarni o’z qo’llaringiz bilan yarating',
        rating: 4,
        price: 120000,
        liked: false,
    }, {
        category: {
            title: 'Dasturlash',
            color: '#26BF56'
        },
        id: 3,
        authorImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GwkViOEunBePpydMn-mpr6mEIaK5MU-7w&s',
        coverImg: 'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1',
        author: 'Oybek Safarov',
        subject: 'Frontend dasturlash',
        subtitle: 'Loy orqali istalgan turdagi idishlarni o’z qo’llaringiz bilan yarating',
        rating: 4,
        price: 120000,
        liked: false,
    }, {
        category: {
            title: 'Dasturlash',
            color: '#26BF56'
        },
        id: 4,
        authorImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ8GwkViOEunBePpydMn-mpr6mEIaK5MU-7w&s',
        coverImg: 'https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1',
        author: 'Oybek Safarov',
        subject: 'Frontend dasturlash',
        subtitle: 'Loy orqali istalgan turdagi idishlarni o’z qo’llaringiz bilan yarating',
        rating: 4,
        price: 120000,
        liked: false,
    },


])
</script>

<style scoped>
.navbar-subjects {
    display: flex;
    gap: 20px;
    margin-bottom: 32px;

}

.navbar-subjects>li {
    font-size: 14px;
    font-weight: 400;
    line-height: 16.94px;
    padding: 12px 20px;
    border: 1px solid #DE9551;
    border-radius: 4px;
    text-wrap: nowrap;
    cursor: pointer;
}

.navbar-subjects>.active {
    color: white;
    background: #DE9551;
}
</style>