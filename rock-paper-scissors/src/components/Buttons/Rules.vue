<template>
    <button class="rules" @click="$router.push('/rules')">
        Regras
    </button>
</template>

<script>
    export default {
        name: 'RulesButton',
    }
</script>

<style lang="scss" scoped>
    .rules {
        background: none;
		font-size: rfs(1.5rem);
		text-align: center;
		text-decoration: none;
		border: 1px solid $header-outline;
		border-radius: 10px;
		padding: rfs(5px 10px);
		cursor: pointer;
		width: 150px;
		color: white;
		font-weight: 500;
		margin-top: rfs(50px);
		transition: background .3s linear, color .3s linear;

		&:hover,
		&:focus {
			outline: none;
			background: $header-outline;
			color: $score-text;
		}
	}
</style>