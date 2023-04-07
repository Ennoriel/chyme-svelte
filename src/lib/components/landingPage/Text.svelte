<script lang="ts">
	import { Button } from '../atom';
	import { ButtonGroup } from '../layout';
	import Wrapper from './Wrapper.svelte';
	import type { SvelteComponent } from 'svelte';

	export let title: string;
	export let header: 'h1' | 'h2' | 'h3' = 'h2';
	export let buttons: Array<{ label: string }> | undefined = undefined;
	export let img: typeof SvelteComponent | undefined = undefined;
	export let src: string | undefined = undefined;
	export let theme: 'primary' | 'transparent' = 'primary';
	export let reverse = false;
	export let tight = false;
	export let center = false;
</script>

<Wrapper {theme} {tight} col={img || src ? 2 : undefined}>
	{#if img}
		<div class:right={reverse} class:left={!reverse}>
			<svelte:component this={img} maxwidth={250} maxheight={250} />
		</div>
	{:else if src}
		<div class:right={reverse} class:left={!reverse}>
			<img {src} alt="" width="250" height="250" />
		</div>
	{/if}
	<div
		class="content"
		class:left={(img || src) && reverse}
		class:right={(img || src) && !reverse}
		class:center
	>
		<svelte:element this={header} style:margin={title && !$$slots && !img ? '0' : undefined}
			>{title}</svelte:element
		>
		<div style:margin="16px 0">
			<slot />
		</div>
		{#if buttons && buttons.length}
			<ButtonGroup justify="center">
				{#each buttons as { label }, index}
					<Button theme={index ? 'secondary' : 'primary'}>
						{label}
					</Button>
				{/each}
			</ButtonGroup>
		{/if}
	</div>
</Wrapper>

<style>
	.left {
		grid-column: left;
	}

	.right {
		grid-column: right;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
	}

	.content :global(h1),
	.content :global(h2),
	.content :global(h3),
	.center {
		margin: 0;
		text-align: center;
	}

	.content :global(br) {
		margin-bottom: 16px;
	}
</style>
