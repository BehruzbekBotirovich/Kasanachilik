<template>
    <a-comment>
        <template #actions>
            <span key="comment-basic-like">
                <a-tooltip title="Like">
                    <template v-if="action === 'liked'">
                        <LikeFilled @click="like" />
                    </template>
                    <template v-else>
                        <LikeOutlined @click="like" />
                    </template>
                </a-tooltip>
                <span style="padding-left: 8px; margin-top: 10px; cursor: auto ; font-size: 16px; color:black ">
                    {{ likes }}
                </span>
            </span>
            <span key="comment-basic-dislike">
                <a-tooltip title="Dislike">
                    <template v-if="action === 'disliked'">
                        <DislikeFilled @click="dislike" />
                    </template>
                    <template v-else>
                        <DislikeOutlined @click="dislike" />
                    </template>
                </a-tooltip>
                <span style="padding-left: 8px; cursor: auto ; font-size: 16px; color:black ">
                    {{ dislikes }}
                </span>
            </span>
            <span key="comment-basic-reply-to" style="font-size: 14px; color:black ; font-weight: 600;">Javob
                berish</span>
        </template>
        <template #author><a>Han Solo</a></template>
        <template #avatar>
            <a-avatar
                src="https://s3-alpha-sig.figma.com/img/4bba/79ba/0b935953c0b4ade9f67d4a95de4f9657?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Iq-Mku1ayZ7BzgTPfXMX34eqkS6etRxhEMSWiWhOTBJR~CpKc57I-IoN7LaufqiMnnzB5qVdE8PDnF9U9TR0NO0jJwbyQGPZAExwVR6t8kC4RiBcHfGN5JV1Px9kLMVIUdv9zxpWnEk8R8jb2qaAjqlieQGGjawpxuVpL-gwKHntKVg239VqLLfR7N4mnmiHlvOh-BgjIxTUtIqXbADwcWKBK4Q7eNngYGiDz4i2DYxfx98HUoXlKpnHSLBaQSNSIf9Qi0rpipAZP2N9vs579Nu0T~uVbhsGwHa1ASOuhsS3oWiwOu1oITjqFxEk0HcL00CdtLt3P-JmtIDECl~ulQ__"
                alt="Han Solo" />
        </template>
        <template #content>
            <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully and
                efficiently.
            </p>
        </template>
      
    </a-comment>
</template>
<script setup>
import dayjs from 'dayjs';
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const likes = ref(12);
const dislikes = ref(0);
const action = ref('');

const like = () => {
    likes.value = 1;
    dislikes.value = 0;
    action.value = 'liked';
};

const dislike = () => {
    likes.value = 0;
    dislikes.value = 1;
    action.value = 'disliked';
};
</script>

<style scoped>
:deep(.ant-avatar) {

    width: 44px;
    height: 44px;
}

:deep(.ant-avatar>img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

:deep(.ant-comment-content-author-name>a) {
    color: #667085;
    font-size: 14px;
    font-weight: 600;
    line-height: 16.94px;
}

:deep(.ant-comment-content) {
    padding-top: 12px;
}

:deep(.anticon>svg) {
    fill: #292D32;
    width: 20px;
    height: 20px;
}
</style>
