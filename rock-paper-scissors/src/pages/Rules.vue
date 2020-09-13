<template>
    <div class="rules">
        <h1 class="title">
            REGRAS
        </h1>
        <img src="@/assets/image-rules-bonus.svg" alt="Regras do Jogo" class="image" />
        <BackButton />
    </div>
</template>

<script>
    import BackButton from '@/components/Buttons/Back.vue';
    export default {
        name: 'Rules',
        components: {
            BackButton,
        }
    };
</script>

<style lang="scss" scoped>
    .rules {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 100%;

        .title {
            color: white;
            letter-spacing: 2px;
        }
        .image {
            max-width: 55%;

            @media(max-width: 600px) {
                max-width: 90%;
            }
        }
        .image {
            margin-top: rfs(25px);
        }
    }
</style>