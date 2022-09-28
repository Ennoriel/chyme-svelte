<script lang="ts">
	import { fly } from 'svelte/transition';

	export let open = false;
	export let right: boolean | undefined = undefined;
	
	let pageRef: HTMLElement;

	function click({ target }: MouseEvent) {
		if (open && target && pageRef && !pageRef.contains(target as Node)) open = false;
	}

	function keydown(e: KeyboardEvent) {
		if (e.key === 'Escape') open = false;
	}
</script>

<svelte:window on:click={click} on:keydown={keydown} />

{#if open}
	<div
		bind:this={pageRef}
		transition:fly|local={{ x: right ? 200 : -200, duration: 400 }}
		style:right={right ? "0" : undefined}
		style:box-shadow={`${right && "-"}5px 0 20px -5px #333`}
	>
		<slot/>
	</div>
{/if}

<style>
	div {
		background-color: white;
		position: fixed;
		top: var(--header-height, 0);
		width: 300px;
		transition: all 0.4s;
		box-shadow: 5px 0 20px -5px #333;
		overflow-y: auto;
		overflow-x: hidden;
		bottom: 0;

		z-index: 1001;
	}
</style>
