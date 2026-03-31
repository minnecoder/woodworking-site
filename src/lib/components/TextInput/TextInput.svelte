<script lang="ts">
	export let label: string;
	export let name: string;
	export let placeholder: string = '';
	export let type: string = '';
	export let value: string;
	export let required: boolean = false;
</script>

<div class="container">
	<label for={name}>
		{label}

		<input
			{type}
			class="input"
			{name}
			id={name}
			{placeholder}
			{value}
			{required}
		/>
	</label>
</div>

<style>
	.container {
		margin-top: 0.5rem;
		margin-bottom: 1rem;
		flex-grow: 1;
	}

	.container input {
		width: 100%;
		height: 3rem;
		margin-top: 0.5rem;
		border-radius: 5px;
	}

	.container label > input {
		display: flex;
		flex-direction: column;
		padding-left: 0.5rem;
		font-size: 1rem;
	}

	.input {
		border: solid 1px rgb(214, 214, 214);
	}
</style>