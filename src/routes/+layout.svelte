<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/manrope';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
	{@render children()}
</div>

<style>
	:global(html),
	:global(body) {
		height: 100vh;
		width: 100vw;
		padding: 0;
		margin: 0;
	}

	:global(body) {
		font-family: 'Manrope Variable', sans-serif;
		font-size: 18px;
	}

	.container {
		height: 100vh;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	/* Ironstone: #865040 
		Polar:  #f5f5f5 or pure #ffffff
		Glade Green: #61845F 
		Pale Slate: #C3BEBB */
</style>
