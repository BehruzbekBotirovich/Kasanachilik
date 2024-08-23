<template>

    <div class="  bg-gray-900  py-12">

        <div class="main-container  block  sm:flex  mb- justify-between items-center">
            <router-link to="/">
                <div class="flex gap-2 mb-4">
                    <img src="../assets/logo.svg">
                    <div class="text-white">
                        <h1 class="font-semibold">Kasanachilar</h1>
                        <h3 class="font-sm">maktabi</h3>
                    </div>
                </div>
            </router-link>


            <div class="text-customGray flex  gap-6 list">
                <div class="sm:block   xl:flex items-center  gap-6 ">
                    <div>
                        <router-link to="/vacansy"> Bo’sh ish o’rinlari </router-link>
                    </div>

                    <div>
                        <router-link to="/market"> Kasanachilik mahsulotlari</router-link>
                    </div>
                    <div>
                        <router-link to="/platform">O’quv platformasi </router-link>
                    </div>
                </div>

                <div class="sm:block   xl:flex items-center  gap-6 ">
                    <div>
                        <router-link to="/faqs"> Yo’riqnoma </router-link>
                    </div>
                    <div>
                        <router-link to="/credits"> Kreditlar </router-link>
                    </div>
                    <div>
                        <router-link to="/subsidiya"> Subsidiya </router-link>
                    </div>
                </div>




            </div>

        </div>
    </div>

</template>

<script setup>

</script>

<style scoped>
.list>div>div:hover {
    cursor: pointer;
    color: white;
}

@media only screen and (max-width: 1100px) {}
</style>