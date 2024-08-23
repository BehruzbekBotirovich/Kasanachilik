<template>
    <a-col :lg="8" :md="12" :sm="24">
        <a-card hoverable>

            <template #cover>
                <img alt="example" :src=course.coverImg />
            </template>
            <a-card-meta :title=course.author class="flex items-center">

                <template #avatar>
                    <a-avatar :src=course.authorImg />
                    <button class="like" @click="course.rating = !course.liked">

                        <svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg"
                            :fill="course.liked ? '#EB4143' : 'none'" :stroke="course.liked ? 'none' : '#98A2B3'">
                            <path
                                d="M12.62 21.3102C12.28 21.4302 11.72 21.4302 11.38 21.3102C8.48 20.3202 2 16.1902 2 9.19022C2 6.10022 4.49 3.60022 7.56 3.60022C9.38 3.60022 10.99 4.48022 12 5.84022C13.01 4.48022 14.63 3.60022 16.44 3.60022C19.51 3.60022 22 6.10022 22 9.19022C22 16.1902 15.52 20.3202 12.62 21.3102Z"
                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </template>
            </a-card-meta>
            <div :style="{ background: course.category.color }" class="card-name">{{ course.category.title }}</div>
            <h3 class="font-semibold text-lg mt-4 mb-2">Frontend Dasturlash</h3>
            <p class="text-gray-500 ">{{ course.subtitle }}
            </p>
            <div class="flex items-center gap-3 mb-2 border-gray-100">
                <a-rate v-model:value="course.rating" allow-half />
                <div class="text-gray-500 ">({{ course.rating }})</div>
            </div>

            <router-link :to="`/platform/${course.id}`">
                <div class="pt-2 border-t-1">
                    <h3 class="text-gray-500">Kurs narxi:</h3>
                    <div class="font-bold text-lg">{{ course.price }} UZS</div>
                </div>
            </router-link>

        </a-card>




    </a-col>
</template>

<script setup>
import { ref } from 'vue';

import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps({
    course: {
        type: Object,
        required: true
    }
})


</script>

<style scoped>
:deep(.ant-rate) {
    display: flex;
    align-items: center;
}

.ant-card-meta {
    position: relative;
}

.card-name {
    position: absolute;
    top: 20px;
    padding: 8px 20px;
    color: white;
    left: 20px;
    border-radius: 4rem;
    opacity: 0px;

}

.like {
    position: absolute;
    top: 5px;
    right: 10px;
}
</style>