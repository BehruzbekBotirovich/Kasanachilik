<template>

    <navbar></navbar>
    <slot />
    <footer-end></footer-end>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import FooterEnd from '@/components/FooterEnd.vue'

</script>

<style lang="scss" scoped></style>