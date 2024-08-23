<template>
    <div @click="toggleVisibility" class="mb-5 flex justify-between items-center border-b-1 py-2">
        <div>Introduction</div>
        <DownOutlined :class="{ spin180: visible }" style="transition: all 0.3s;" />
    </div>

    <Transition name="slide-fade">
        <div v-if="visible">
            <div v-for="(item, index) in items" :key="index" class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2 mb-4">
                    <div class="p-3 bg-gray-50 w-fit rounded-full">
                        <component :is="item.locked ? LockopenIcon : LockIcon" />
                    </div>
                    <h3 class="text-sm">{{ item.title }}</h3>
                </div>
                <div class="text-sm mr-4">{{ item.time }}</div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import LockopenIcon from '@/components/icons/LockopenIcon.vue';
import LockIcon from '@/components/icons/LockIcon.vue';

const visible = ref(false);
const locked = false;

const items = ref([
    { title: 'Mavzu nomi', time: '9m 34s', locked: locked },
    { title: 'Mavzu nomi', time: '9m 34s', locked: locked },
    { title: 'Mavzu nomi', time: '9m 34s', locked: locked },
]);

const toggleVisibility = () => {
    visible.value = !visible.value;
};
</script>

<style scoped>
.spin180 {
    transform: rotate(180deg);
    transition: all 0.3s;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.2s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>