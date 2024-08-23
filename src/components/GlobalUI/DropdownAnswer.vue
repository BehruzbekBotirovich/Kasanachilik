<template>
    <div class=" mb-6 bg-white px-6 py-4 rounded-lg  divkottasi">
        <div class="flex justify-between items-center font-lg font-semibold " @click="toggleInfo">
            <h3 :class="{ active: showInfo }">
                <slot name="question"></slot>
            </h3>

            <button class="p-1 rounded-full hover:bg-customLightGray">
                <svg v-if="showInfo == false" width="16" height="16" viewBox="0 0 16 17" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1.18506V15.1851M1 8.18506H15" stroke="black" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>

                <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="#DE9551" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>

            </button>
        </div>
        <Transition name="slide-fade">
            <div v-if="showInfo" class="mt-4 answer">
                <slot name="answer"></slot>
            </div>
        </Transition>
    </div>

</template>


<script setup>
import { ref } from 'vue'
const showInfo = ref(false)
const toggleInfo = () => {
    showInfo.value = !showInfo.value
}


</script>


<style scoped>
.divkottasi {
    height: auto;
    transition: all 0.3s ease;

}

.active {
    color: #DE9551;
}

.answer {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>
