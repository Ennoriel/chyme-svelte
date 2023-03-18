<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let data: Array<{
		compo?: typeof SvelteComponent | undefined;
		number: string;
		description: string;
	}>;
	export let maxItemSm = 1;
	export let maxItemLg = 4;
	export let theme: 'primary' | 'transparent' = 'primary';
</script>

<ul style:--max-item-sm={maxItemSm} style:--max-item-lg={maxItemLg} class={theme}>
	{#each data as item}
		<li>
			{#if item.compo}
				<svelte:component this={item.compo} maxheight="48" />
			{/if}
			<strong>{item.number}</strong>
			<span>{@html item.description}</span>
		</li>
	{/each}
</ul>

<style>
	ul {
		--max-item: var(--max-item-sm);
		--gap: 16px;
		--box-shadow: 0 0 2px #ddd;
		--bg-color: white;
		--padding: 32px;

		padding: 0;
		list-style: none;
		padding: 16px;
		display: flex;
		flex-wrap: wrap;
		gap: var(--gap);
		justify-content: center;
		margin: 64px auto;
	}

	.transparent {
		--bg-color: transparent;
		--box-shadow: none;
		--padding: 16px;
	}

	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;

		padding: var(--padding);
		border-radius: 16px;
		background-color: var(--bg-color);
		box-shadow: var(--box-shadow);
		width: calc(100% / var(--max-item) - var(--gap) * (var(--max-item) - 1) / var(--max-item));
	}

	strong {
		font-size: 36px;
		font-weight: 400;
	}

	span {
		color: var(--text-color-secondary);
		text-align: center;
		flex-grow: 1;
		display: flex;
		align-items: center;
	}

	@media (min-width: 768px) {
		ul {
			--max-item: var(--max-item-lg);
		}
	}
</style>
