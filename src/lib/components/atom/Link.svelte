<script lang="ts">
	import type { ComponentType } from 'svelte';

	export let target: string | undefined = undefined;
	export let href: string;
	export let svg: ComponentType | undefined = undefined;
	export let inline = false;
</script>

<a {target} {href} style:display={`${inline ? 'inline-' : ''}flex`}>
	{#if svg}
		<svelte:component this={svg} />
	{/if}
	<slot />
</a>

<style>
	a {
		align-items: center;
		justify-content: center;
		gap: 4px;

		line-height: 17px;
		text-decoration: none;
		outline: none;
		cursor: pointer;
		transition: all 0.1s;
	}
	a:hover,
	a:focus-visible {
		color: var(--secondary-color);
	}
	a > :global(*) {
		flex-shrink: 0;
	}
</style>
