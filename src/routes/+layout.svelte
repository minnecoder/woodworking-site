<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	// @ts-ignore: side-effect import has no type declarations
	import '@fontsource-variable/manrope';
	let { children } = $props();
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="container">
	<Header />
	{@render children()}
	<Footer />
</div>

<style>
	:global(body) {
		font-family: 'Manrope Variable', sans-serif;
		font-size: 18px;
		padding: 0;
		margin: 0;
		overflow-x: hidden;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100vh;
		
	}
</style>
