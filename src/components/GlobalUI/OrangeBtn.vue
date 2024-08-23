<template>
    <div>
        <a-button type="primary" class="btn">
            <slot></slot>
        </a-button>



    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.btn {
    display: flex;
    background: #DE9551;
    color: white;
    padding: 0.75rem 1.25rem;
    font-size: 0.75rem;
    align-items: center;
}

.btn:hover {
    background: #ee8727;
}

@media only screen and (max-width:760px) {
    .btn {

    }
}
</style>