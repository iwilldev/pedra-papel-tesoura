<template>
	<div class="result">
		<template v-if="gameIsFinished">
			<div class="tokens">
				<div class="player">
					<h2>YOU PICKED</h2>
					<Token :name="playerToken" :tabindex="-1" :src="playerSrc" />
				</div>
				<div class="player">
					<h2>HOUSE PICKED</h2>
					<Token :name="computerToken" :tabindex="-1" :src="computerSrc" />
				</div>
			</div>
			<h2 class="game-result">
				{{ gameResult }}
			</h2>
			<button class="reset" @click="$emit('reset')">
				PLAY AGAIN
			</button>
		</template>
		<p v-else class="loading">
			Rock... Paper... Scissors... Lizard... Spock...
		</p>
	</div>
</template>

<script>
	/* eslint-disable global-require */
	/* eslint-disable import/no-dynamic-require */
	import { mapMutations } from 'vuex';
	import VueTypes from 'vue-types';

	import { SET_SCORE } from '@/store/modules/score/mutations';
	import { randomToken, getResult } from '@/utils';

	import Token from '@/components/Token/Token.vue';

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
			};
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
					0: 'DRAW',
					1: 'YOU WIN',
					'-1': 'YOU LOSE',
				};

				return results[this.result];
			},
		},
		created() {
			this.computerToken = randomToken();
			setTimeout(() => {
				this.gameIsFinished = true;
				this.result = getResult(this.playerToken, this.computerToken);
				this.updateScore(this.result);
			}, 750);
		},
		methods: {
			...mapMutations('Score', {
				updateScore: SET_SCORE,
			}),
		},
	};
</script>

<style lang="scss" scoped>
	.result {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;

		.tokens {
			display: flex;
			justify-content: space-between;
			width: 100%;

			.player {
				display: flex;
				flex-direction: column;
				align-items: center;

				h2 {
					font-size: rfs(1.25rem);
					margin-bottom: rfs(30px);
					color: $white;
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
							height: 75px;
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
		}

		.game-result {
			font-size: rfs(5rem);
			color: $white;
			margin-top: rfs(50px);
		}

		.reset {
			font-size: rfs(1.25rem);
			font-weight: 500;
			background-color: $white;
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
				color: $white;
				border: 2px solid $white;
			}
		}

		.loading {
			text-align: center;
			font-size: rfs(1.5rem);
			color: $white;
			font-weight: bold;
		}
	}
</style>
