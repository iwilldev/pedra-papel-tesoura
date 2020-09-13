<template>
    <div class="result">
        <template v-if="gameIsFinished">
            <div class="tokens">
                <div class="player">
                    <h2>VOCÊ JOGOU</h2>
                    <Token :name="playerToken" :src="playerSrc" />
                </div>
                <div class="player">
                    <h2>PC JOGOU</h2>
                    <Token :name="computerToken" :src="computerSrc" />
                </div>
            </div>
            <h2 class="game-result">
                {{ gameResult }}
            </h2>
            <button class="reset" @click="$emit('reset')">
                JOGAR DE NOVO
            </button>
        </template>
        <p v-else class="loading">
            Pedra... Papel... Tesoura... Lagarto... Spock...
        </p>
    </div>
</template>

<script>
    import VueTypes from 'vue-types';
    import { mapMutations } from 'vuex';
    import { SET_SCORE } from '@/store/modules/score/mutations';
    import Token from '@/components/Token/Token.vue';
    import { randomToken, getResult } from '@/utils';
    const enemyToken = randomToken();
    export default {
        name: 'Result',
        components: {
            Token,
        },
        props: {
            playerToken: VueTypes.string.isRequired,
        },
        data() {
            return {
                gameIsFinished: false,
                computerToken: '',
                result: 0
            }
        },
        computed: {
            playerSrc() {
                return require(`@/assets/icon-${this.playerToken}.svg`);
            },
            computerSrc() {
                return require(`@/assets/icon-${this.computerToken}.svg`);
            },
            gameResult() {
                const results = {
                    0: 'EMPATE',
                    1: 'VENCEU',
                    '-1': 'PERDEU',
                };

                return results[this.result];
            }
        },
        created() {
            this.computerToken = randomToken();
            setTimeout(() => {
                this.gameIsFinished = true;
                this.result = getResult(this.playerToken, this.computerToken);
                this.updateScore(this.result);
            }, 500);
        },
        methods: {
            ...mapMutations('Score', {
                updateScore: SET_SCORE,
            }),
        }
    }
</script>

<style lang="scss" scoped>
    .result {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 110%;

        .tokens {
            display: flex;
            justify-content: space-between;
            width: 100%;

            .player {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            h2 {
                font-size: rfs(1.25rem);
                margin-bottom: rfs(30px);
                color: white;
            }

            /deep/ .token {
                width: 280px;
                height: 280px;

                &:hover,
                &:focus {
                    transform: unset;
                    cursor: default;
                }

                &::after {
                    width: 230px;
                    height: 230px;
                }

                &--image {
                    width: 90px;
                    height: 95px;
                }

                @media (max-width: 700px) {
                    width: 200px;
                    height: 200px;

                    &::after {
                        width: 160px;
                        height: 160px;
                    }

                    &--image {
                        width: 70px;
                        height: 95px;
                    }
                }

                @media (max-width: 460px) {
                    width: 130px;
                    height: 130px;

                    &::after {
                        width: 100px;
                        height: 100px;
                    }

                    &--image {
                        width: 40px;
                        height: 45px;
                    }
                }
            }
        }

        .game-result {
            font-size: rfs(3rem);
            color: white;
            margin-top: rfs(50px);
        }

        .reset {
            font-size: rfs(1.25rem);
            font-weight: 500;
            background-color: white;
            color: $dark-text;
            border: none;
            padding: rfs(10px 25px);
            width: 180px;
            border: 2px solid transparent;
            border-radius: 10px;
            cursor: pointer;
            transition: background-color 0.3s linear, color 0.3s linear;

            &:hover,
            &:focus {
                outline: none;
                background-color: transparent;
                color: white;
                border-color: white;
            }

        }

        .loading {
            text-align: center;
            font-size: rds(1.25rem);
            color: white;
            font-weight: bold;
        }
    }
</style>