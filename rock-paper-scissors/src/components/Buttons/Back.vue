<template>
    <button class="back" @click="$router.back()">
        VOLTAR
    </button>
</template>

<script>
    export default {
        name: 'BackButton',
    }
</script>

<style lang="scss" scoped>
    .back {
        background: none;
        border: none;
        color: white;
        letter-spacing: 2px;
        text-decoration: none;
        font-size: rfs(1.25rem);
        cursor: pointer;
        margin-top: 25px;

        &:hover,
        &:focus {
            outline: none;
            text-decoration: underline;
        }
    }
</style>