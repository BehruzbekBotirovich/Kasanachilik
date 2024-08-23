import { createRouter, createWebHistory } from 'vue-router'

// pages
const Home = () => import('@/pages/home/HomePage.vue')
const Vacansy = () => import('@/pages/vacancy/VacancyPage.vue')
const MarketPlace = () => import('@/pages/market/MarketPage.vue')
const Platform = () => import('@/pages/platform/PlatformPage.vue')
const Faqs = () => import('@/pages/faqs/FaqsPage.vue')
const Credits = () => import('@/pages/credits/CreditsPage.vue')
const Subsidiya = () => import('@/pages/subsidiya/SubsidiyaPage.vue')
const Login = () => import('@/pages/login/LoginPage.vue')
const Dashboard = () => import('@/pages/dashboard/DashboardPage.vue')
// inner pages 
const AboutProduct = () => import('@/pages/market/[product_id]/AboutProduct.vue')
const AboutCourse = () => import('@/pages/platform/[course_id]/AboutCourse.vue')

// inner inner page
const LearnPage = () => import('@/pages/platform/[course_id]/LearnPage.vue');


const routes = [
    // pages
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/vacansy',
        name: 'Vacansy',
        component: Vacansy
    },
    {
        path: '/market',
        name: 'Market',
        component: MarketPlace
    },
    {
        path: '/platform',
        name: 'Platform',
        component: Platform
    },
    {
        path: '/faqs',
        name: 'Faqs',
        component: Faqs
    },
    {
        path: '/credits',
        name: 'credits',
        component: Credits
    },
    {
        path: '/subsidiya',
        name: 'subsidiya',
        component: Subsidiya
    },

    // inner pages
    {
        path: '/market/:id',
        name: 'AboutProduct',
        component: AboutProduct,
        props: true,
    },
    {
        path: '/platform/:id',
        name: 'AboutCourse',
        component: AboutCourse,
        props: true,
    },
    //inner inner page
    {
        path: '/platform/:id/learn',
        name: 'LearnPage',
        component: LearnPage,
        props: true,
    }
]

const router = createRouter({
    history: createWebHistory(), // Используем пустую строку по умолчанию
    routes
})

// errroorr ----->>>>>>>
// const router = createRouter({
//     history: createWebHistory('/my-base-url/'), // Замените '/my-base-url/' на ваш базовый URL
//     routes
// })  

export default router
