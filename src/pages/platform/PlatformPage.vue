<template>
    <Wrapper>
        <div class="main-container">
            <!-- <AboutCourse> </AboutCourse> -->
            <CoursesList></CoursesList>
            <BooksList></BooksList>
        </div>
    </Wrapper>

</template>

<script setup>
import Wrapper from '@/components/Wrapper.vue'

import CoursesList from './components/CoursesList.vue'
import BooksList from './components/BooksList.vue'
import AboutCourse from '@/pages/platform/[course_id]/AboutCourse.vue'

</script>

<style lang="scss" scoped></style>