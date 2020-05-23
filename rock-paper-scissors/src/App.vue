<template>
	<div id="app">
		<div id="nav" />
		<RouterView />
	</div>
</template>

<style lang="scss">
	@import './styles/reset';

	#app {
		height: 100%;
		font-family: 'Barlow Semi Condensed', Helvetica, Arial, sans-serif;
		background: radial-gradient(circle at top, $background-from, $background-to);
	}
</style>
