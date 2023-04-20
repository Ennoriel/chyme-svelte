<script lang="ts">
	import Button from '$lib/components/atom/Button.svelte';
	import ButtonGroup from '$lib/components/layout/ButtonGroup.svelte';
	import X from '$lib/components/svg/X.svelte';

	let pending = false;

	const variants = ['square', 'squarish', 'rounded'] as const;
	const sizes = ['s', 'l'] as const;
	const themes = ['primary', 'vibrant', '#ABCDEF', 'transparent'] as const;

	$: if (pending) setTimeout(() => (pending = false), 2000);
</script>

<h2>Buttons</h2>
<table>
	<thead>
		<tr>
			<th colspan="2" />
			{#each themes as theme}
				<th>{theme}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each sizes as size, size_i}
			{#each variants as variant, variant_i}
				<tr>
					{#if variant_i === 0}
						<td rowspan="3">
							{size}
						</td>
					{/if}
					<td>{variant}</td>
					{#each themes as theme, theme_i}
						<td>
							<Button
								{theme}
								{variant}
								{size}
								{pending}
								as="a"
								href="https://machyme.fr"
								target="_blank"
							>
								Click me
							</Button>
							<Button
								{theme}
								{variant}
								{size}
								icon={X}
								{pending}
								on:click={() => {
									pending = true;
								}}
							/>
							<Button
								{theme}
								{variant}
								{size}
								icon={X}
								iconRight={!!((size_i + variant_i + theme_i) % 2)}
								{pending}
								on:click={() => {
									pending = true;
								}}
							>
								Click me
							</Button>
						</td>
					{/each}
				</tr>
			{/each}
		{/each}
	</tbody>
</table>

<h2>Button Group</h2>
<ButtonGroup display="inline-flex">
	<Button icon={X} as="a" />
	<Button as="a" href="https://machyme.fr" target="_blank">Click me</Button>
	<Button
		icon={X}
		{pending}
		on:click={() => {
			pending = true;
		}}
	/>
</ButtonGroup>

<style>
	table {
		width: calc(100% + 400px);
		margin: 16px -200px;
	}
	table,
	th,
	td {
		border: 1px solid #ccc;
		border-collapse: collapse;
	}
	td,
	th {
		text-align: center;
		height: 50px;
		min-width: 25px;
	}
</style>
