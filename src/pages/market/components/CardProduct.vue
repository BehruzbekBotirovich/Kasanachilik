<template>
    <a-col :span="12" :sm="12" :md="8" :lg="6">
        <a-card hoverable style="width: 100%">
            <template #cover>
                <a-carousel :after-change="onChange">
                
                    <div class="slide-div">
                        <img class="object-cover" :src="product.img[0]" alt="">
                    </div>
                    <div class="slide-div">
                        <img class="object-cover" :src="product.img[1]" alt="">
                    </div>
                    <div class="slide-div">
                        <img class="object-cover" :src="product.img[2]" alt="">
                    </div>
                </a-carousel>
                <button class="liked-btn" @click="product.liked = !product.liked">
                    <svg width="24" height="25" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg"
                        :fill="product.liked ? '#EB4143' : 'none'" :stroke="product.liked ? 'none' : '#98A2B3'">
                        <path
                            d="M12.62 21.3102C12.28 21.4302 11.72 21.4302 11.38 21.3102C8.48 20.3202 2 16.1902 2 9.19022C2 6.10022 4.49 3.60022 7.56 3.60022C9.38 3.60022 10.99 4.48022 12 5.84022C13.01 4.48022 14.63 3.60022 16.44 3.60022C19.51 3.60022 22 6.10022 22 9.19022C22 16.1902 15.52 20.3202 12.62 21.3102Z"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </template>
            <a-card-meta :title="product.name" />
            <div class="my-2">Sotuvchi: <span class="underline">{{ product.saller }}</span></div>
            <div class="font-semibold mb-3">
                {{ product.price }} UZS
            </div>

            <!-- link page->page   -->
            <router-link :to="`/market/${product.productId}`">
                <a-button class="bg-gray-50 flex gap-1 w-full justify-center items-center h-12">
                    <bascet-icon></bascet-icon>
                    <div>
                        Savatga qo'shish
                    </div>
                </a-button>
            </router-link>
            
        </a-card>
    </a-col>
</template>

<script setup>
import { ref } from 'vue';
import BascetIcon from '@/components/icons/BascetIcon.vue';

const props = defineProps({
    product: {
        type: Object,
        required: true
    },
    loading: {
        type: Boolean,
        default: false
    }
});
</script>

<style scoped>
.ant-card-cover {
    position: relative;
}

:deep(.ant-card .ant-card-meta-title) {
    height: 50px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: wrap;
    font-size: 1.25rem;
    font-weight: 600;
    font-size: 20px;
    font-weight: 600;
    line-height: 24.2px;


    @media(max-width:610px) {
        font-size: 1rem;
        line-height: normal;
        height: 40px;
    }
}

.liked-btn {
    width: fit-content;
    position: absolute;
    top: 30px;
    right: 30px;

    @media(max-width:610px) {
        top: 14px;
        right: 14px;
        scale: 0.9;
    }
}

:deep(.ant-carousel) {
    height: 100%;
}

:deep(.ant-card-cover) {
    height: 100%;
    padding: 20px 20px 0px 20px;
    margin-bottom: 20px;

    @media (max-width: 610px) {
        padding: 10px 10px 0px 10px;
    }
}

:deep(.ant-card) {
    border-radius: 20px;

    @media (max-width: 610px) {
        border-radius: 10px;
    }
}

:deep(.ant-card-body) {
    padding: 0 20px 20px 20px;

    @media(max-width:610px) {
        padding: 0 10px 10px 10px;
    }
}

:deep(.ant-card .ant-card-cover img) {
    border-radius: 10px;
    height: 100%;
    width: 100%;
}

/* For demo */
/* сard cover h w ========== */
:deep(.slick-slide) {
    border-radius: 15px;
    aspect-ratio: 4/3;
    overflow: hidden;
}

:deep(.slick-slide>div) {
    height: 100%;
}

:deep(.slick-slide>div .slide-div) {
    height: 100%;
    display: flex !important;
    align-items: center;
}

:deep(.slick-slide h3) {
    color: #fff;
}

:deep(.slick-slider .slick-dots li button) {
    background: #CDD1D6;
    border-radius: 50%;
    height: 11px;
    width: 11px;
}

:deep(.ant-carousel .slick-dots li.slick-active) {
    width: auto;
}

:deep(.slick-slider .slick-dots li.slick-active button) {
    background: #DE9551;
    width: 12px !important;
}

:deep(.slick-slider .slick-dots) {
    bottom: 1.25rem;


}
</style>