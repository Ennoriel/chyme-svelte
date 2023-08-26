<script lang="ts">
	import { fly } from 'svelte/transition';

	/**
	 * !! If triggered by a button, use 'stopPropagation' event modifier
	 */

	export let open = false;
	export let right = false;

	let pageRef: HTMLElement;
	let scrollY = 0;

	function click({ target }: MouseEvent) {
		if (open && target && pageRef && !pageRef.contains(target as Node)) {
			open = false;
		}
	}

	function keydown(e: KeyboardEvent) {
		if (e.key === 'Escape') open = false;
	}
</script>

<svelte:window on:click={click} on:keydown={keydown} bind:scrollY />

{#if open}
	<div
		bind:this={pageRef}
		transition:fly|local={{ x: right ? 200 : -200, duration: 400 }}
		style:right={right ? '0' : undefined}
		style:box-shadow={`${right ? '-' : ''}6px 0 6px -6px #333`}
		style:top="max(0px, calc(var(--header-height, 0) - {scrollY}px))"
	>
		<slot />
	</div>
{/if}

<style>
	div {
		background-color: white;
		position: fixed;
		top: var(--header-height, 0);
		width: 300px;
		transition:
			all 0.4s,
			top 0;
		overflow-y: auto;
		overflow-x: hidden;
		bottom: 0;

		z-index: 1001;
	}
</style>
