<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '@fontsource-variable/manrope';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	:global(body) {
		padding: 0;
		margin: 0;
		font-family: 'Manrope Variable', sans-serif;
		font-size: 18px;
	}
	/* Ironstone: #865040 
		Polar:  #f5f5f5 or pure #ffffff
		Glade Green: #61845F 
		Pale Slate: #C3BEBB */
</style>
