<template>
    <div class="bg-white rounded p-2 md:p-4 main-container ">
        <div class="flex items-center gap-2 lg:gap-6">
            <div>
                <a-button type="button"
                    class="w-full px-1 flex items-center bg-gray-800 hover:bg-gray-700 text-white rounded p-4 md:py-6 gap-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="white" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <span class="text-sm lg:!block !hidden">Barcha kategoriyalar</span>

                </a-button>
            </div>

            <div class="w-full  relative">
                <svg class="lupa" width="20" height="20" viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19 19L14.65 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                        stroke="#98A2B3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <input class="w-full py-1 md:py-3 border-2 rounded px-12 bg-gray-100 "
                    placeholder="Mahsulotni izlash..."></input>
            </div>

            <div>
                <a-button type="submit"
                    class="bg-customOrange py-4  px-2 lg:px-8 lg:py-6    text-sm hover:bg-orange-400 text-white flex items-center justify-center">
                    Izlash

                </a-button>
            </div>

            <div class="hidden sm:block">
                <div class="flex justify-center px-1 py-1 md:px-3 lg:px-6 ">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.2503 12.5719L12.7503 19.9999L5.2503 12.5719C4.75561 12.0905 4.36594 11.5119 4.10585 10.8726C3.84575 10.2332 3.72086 9.54688 3.73904 8.85687C3.75721 8.16685 3.91806 7.48807 4.21146 6.86327C4.50485 6.23847 4.92444 5.68119 5.44379 5.22651C5.96314 4.77184 6.57101 4.42962 7.22911 4.22141C7.88722 4.01321 8.58131 3.94352 9.26767 4.01673C9.95403 4.08995 10.6178 4.30449 11.2172 4.64684C11.8166 4.98919 12.3385 5.45193 12.7503 6.00593C13.1638 5.45595 13.6864 4.99725 14.2854 4.65854C14.8844 4.31982 15.5468 4.10838 16.2312 4.03745C16.9157 3.96652 17.6074 4.03763 18.2631 4.24632C18.9188 4.45502 19.5243 4.79681 20.0419 5.2503C20.5594 5.70379 20.9777 6.25922 21.2707 6.88182C21.5637 7.50443 21.725 8.18082 21.7446 8.86864C21.7642 9.55647 21.6416 10.2409 21.3844 10.8792C21.1273 11.5174 20.7412 12.0958 20.2503 12.5779"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

                <h1 class=" hidden md:block text-center text-sm">Tanlanganlar</h1>
            </div>

            <div class="hidden sm:block">
                <div class="flex justify-center px-1 py-1 md:px-3 lg:px-6 ">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.25 17C6.78043 17 7.28914 17.2107 7.66421 17.5858C8.03929 17.9609 8.25 18.4696 8.25 19C8.25 19.5304 8.03929 20.0391 7.66421 20.4142C7.28914 20.7893 6.78043 21 6.25 21C5.71957 21 5.21086 20.7893 4.83579 20.4142C4.46071 20.0391 4.25 19.5304 4.25 19C4.25 18.4696 4.46071 17.9609 4.83579 17.5858C5.21086 17.2107 5.71957 17 6.25 17ZM6.25 17H17.25M6.25 17V3H4.25M17.25 17C17.7804 17 18.2891 17.2107 18.6642 17.5858C19.0393 17.9609 19.25 18.4696 19.25 19C19.25 19.5304 19.0393 20.0391 18.6642 20.4142C18.2891 20.7893 17.7804 21 17.25 21C16.7196 21 16.2109 20.7893 15.8358 20.4142C15.4607 20.0391 15.25 19.5304 15.25 19C15.25 18.4696 15.4607 17.9609 15.8358 17.5858C16.2109 17.2107 16.7196 17 17.25 17ZM6.25 5L20.25 6L19.25 13H6.25"
                            stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <h1 class="hidden md:block  text-center text-sm"> Savat</h1>
            </div>




        </div>
        <div ref="myDiv">
            <ul
                class="scrollbar-none overflow-x-scroll  flex gap-0 md:gap-4 justify-between mt-4 text-nowrap text-gray-500 ">
                <li v-for=" item in showLi" class="categoryLi ">{{ item }}</li>

                <li class="categoryLi ">
                    <a-dropdown :trigger="['click']" class="cursor-pointer">
                        <a class="ant-dropdown-link items-center flex gap-1" @click.prevent>
                            Yana
                            <DownOutlined />
                        </a>
                        <template #overlay>
                            <a-menu v-if="hiddenLi != ''">

                                <a-menu-item v-for="(item, index)  in hiddenLi" :key="index">
                                    <a href="#">{{ item }}</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </li>
            </ul>
        </div>

    </div>



</template>

<script setup>
import { DownOutlined } from '@ant-design/icons-vue';
import { ref, onMounted } from 'vue'
const li = ['Elektronika', 'Maishiy', 'avtomobil', 'qurilish ', 'poyabzal', 'kiyim', 'kulolchilik', 'oziq-ovqat ', 'Elektronika', 'Maishiy texnika', 'avtomobil', 'qurilish ', 'poyabzal', 'kiyim', 'kulolchilik', 'oziq-ovqat ']

const showLi = ref([]);
const hiddenLi = ref([]);
const half = ref(0);
// Создаем реф для элемента
const myDiv = ref(null);
onMounted(() => {
    if (myDiv.value.offsetWidth > 500) {

        // Получаем длину (ширину) элемента
        const divWidth = myDiv.value.offsetWidth;
        console.log(`Ширина дива: ${divWidth}px`);

        half.value = Math.floor(divWidth / 100); // Используем длину массива для вычисления половины
        showLi.value = li.slice(0, half.value);
        hiddenLi.value = li.slice(half.value);

        console.log(showLi)
        console.log(half.value)
    } else {
        showLi.value = li.slice(0, 10)
        hiddenLi.value = li.slice(10)
    }

});

</script>

<style scoped>
.lupa {
    position: absolute;
    top: 14px;
    left: 20px;

    @media (max-width:640px) {
        top: 6px;
        left: 10px
    }
}

.add-tovar {
    color: white;
    padding: 20px 30px;
    background: #47CD89;
    box-shadow: 0px 16px 21.5px 0px #47CD8930;
    border-radius: 6px;
}

.categoryLi {
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
}

.categoryLi:hover {
    background: #daebff;
}
</style>