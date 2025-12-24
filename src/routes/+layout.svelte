<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
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
		font-family: 'Fig Tree', sans-serif;
		font-size: 18px;
	}
</style>
