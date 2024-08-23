<template>
    <nav class="py-5 justify-between">
        <div class="main-container flex justify-between items-center">

            <router-link to="/">
                <div class="flex gap-2 items-center">
                    <img src="../assets/logo.svg" alt="Logo" class="h-8">
                    <div>
                        <h1 class="font-bold">Kasanachilar</h1>
                        <h3>maktabi</h3>
                    </div>
                </div>
            </router-link>
            <!-- desktop------------------------- -->
            <div v-if="isMenuOpen" class="cover-menu" @click.self="closeMenu">
                <a-menu :mode="menuMode" class="nav-menu">
                    <a-menu-item key="/vacansy" @click="closeMenu"
                        :class="{ 'ant-menu-item-selected': $route.path === '/vacansy' }">
                        <router-link to="/vacansy">Bo'sh ish o'rinlari</router-link>
                    </a-menu-item>

                    <a-menu-item key="/market" @click="closeMenu"
                        :class="{ 'ant-menu-item-selected': $route.path.includes('/market') }">
                        <router-link to="/market">Kasanachilik mahsulotlari</router-link>
                    </a-menu-item>

                    <a-menu-item key="/platform" @click="closeMenu"
                        :class="{ 'ant-menu-item-selected': $route.path.includes('/platform') }">
                        <router-link to="/platform">O’quv platformasi</router-link>
                    </a-menu-item>

                    <a-menu-item key="/faqs" @click="closeMenu"
                        :class="{ 'ant-menu-item-selected': $route.path.includes('/faqs') }">
                        <router-link to="/faqs">Yo’riqnoma</router-link>
                    </a-menu-item>
                    <a-menu-item key="/credits" @click="closeMenu"
                        :class="{ 'ant-menu-item-selected': $route.path === '/credits' }">
                        <router-link to="/credits">Kreditlar</router-link>
                    </a-menu-item>
                    <a-menu-item key="/subsidiya" @click="closeMenu"
                        :class="{ 'ant-menu-item-selected': $route.path === '/subsidiya' }">
                        <router-link to="/subsidiya">Subsidiya</router-link>
                    </a-menu-item>
                </a-menu>
            </div>

            <div class="hidden lg:block">
                <router-link to="/login"><orange-btn> Kirish</orange-btn> </router-link>
            </div>

            <button @click="isMenuOpen = true" class="lg:hidden">
                <span class="text-xl">&#9776;</span> <!-- Hamburger Icon -->
            </button>
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isMenuOpen = ref(false);
const closeMenu = () => {
    if (window.innerWidth <= 1024) {
        isMenuOpen.value = false;
    }
};

// vertical & horizontal <a-menu>
const menuMode = ref('vertical');
const updateMenuMode = () => {
    if (window.innerWidth >= 1024) {
        isMenuOpen.value = true;
        menuMode.value = 'horizontal';
    } else {
        isMenuOpen.value = false;
        menuMode.value = 'vertical';
    }
};

onMounted(() => {
    updateMenuMode();
    window.addEventListener('resize', updateMenuMode);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateMenuMode);
});
</script>

<style scoped>
.ant-menu {
    background: #ffffff;
    border: none;
    color: gray;
}

/* slidefade */
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

:deep(.ant-menu .ant-menu-item-selected span) {
    color: black;
    font-weight: 500;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

nav {
    width: 100%;
    position: sticky;
    z-index: 99;
    background: #ffffff;
}

.nav-menu {
    width: 790px;
}

@media only screen and (max-width: 1024px) {
    .cover-menu {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        height: 100vh;
        background: #203242B0;
        display: flex;
        justify-content: end;
    }

    .nav-menu {
        padding: 20px 10px;
        width: fit-content;
    }
}
</style>
