<script lang="ts">
	import type { ComponentType } from 'svelte';
	import Spinner from './Spinner.svelte';

	export let as: 'a' | 'button' = 'button';
	export let size: 's' | 'l' = 'l';
	export let variant: 'square' | 'squarish' | 'rounded' = 'rounded';
	export let theme: 'primary' | 'vibrant' | 'transparent' | string = 'primary';
	export let type = 'button';
	export let disabled = false;
	export let pending = false;
	export let icon: ComponentType | undefined = undefined;
	export let iconRight = false;

	$: _theme = ['primary', 'vibrant', 'transparent'].includes(theme) ? theme : 'custom';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<svelte:element
	this={as}
	{type}
	on:click
	disabled={as === 'button' ? disabled || pending : undefined}
	class="button {variant} {_theme} {size}"
	style:--custom-color={_theme === 'custom' ? theme : undefined}
	class:disabled
	class:icon
	class:icon-and-text={icon && $$slots.default}
	class:pending
	class:icon-right={iconRight}
	{...$$restProps}
>
	{#if pending}
		<Spinner />
	{:else if icon}
		<svelte:component this={icon} />
	{/if}

	<slot />
</svelte:element>

<style>
	.s {
		--height: 32px;
		--padding: 0 16px;

		--spinner-size: 16px;
	}

	.l {
		--height: 40px;
		--padding: 0 24px;

		--spinner-width: 3px;
		--spinner-size: 24px;
	}
	.pending.s:not(.icon) {
		--padding: 0 16px 0 8px;
	}
	.pending.l:not(.icon) {
		--padding: 0 24px 0 12px;
	}

	.icon {
		min-width: var(--height);
		--padding: 0;
	}

	.s.icon-and-text {
		--padding: 0 16px 0 8px;
	}

	.s.icon-and-text.icon-right {
		--padding: 0 8px 0 16px;
	}

	.l.icon-and-text {
		--padding: 0 24px 0 12px;
	}

	.l.icon-and-text.icon-right {
		--padding: 0 12px 0 24px;
	}

	.squarish {
		--border-radius: 8px;
	}

	.rounded {
		--border-radius: calc(var(--height) / 2);
	}

	.primary {
		--bg: var(--primary-color);
		--color: #fff;
		--border: 1px solid var(--primary-color);
		--spinner-color: #fff;
	}

	.primary:hover,
	.vibrant:hover {
		--bg: var(--bg-color);
		--color: var(--text-color);
	}

	.custom {
		--bg: var(--custom-color);
		--color: var(--text-color);
	}

	.transparent {
		--bg: transparent;
	}

	.vibrant {
		--bg: var(--secondary-color);
		--color: #fff;
		--border: 1px solid var(--secondary-color);
	}

	.custom:hover,
	.transparent:hover {
		--bg: var(--primary-color);
		--color: white;
	}

	.disabled,
	.disabled:hover {
		--bg: var(--secondary-color);
		--color: var(--text-color);
		--border: 1px solid var(--secondary-color);
		--cursor: default;
	}

	.button {
		display: inline-flex;
		flex-shrink: 0;
		gap: 8px;
		justify-content: center;
		height: var(--height);
		border-radius: var(--border-radius);
		padding: var(--padding);
		align-items: center;
		cursor: var(--cursor, pointer);
		color: var(--color, var(--text-color));
		background-color: var(--bg, var(--primary-color));
		border: var(--border, none);
		transition:
			color 0.2s,
			background-color 0.2s;
		vertical-align: middle;
		margin-bottom: 3px;
		text-decoration: none;
	}

	.icon-right {
		flex-direction: row-reverse;
	}

	:focus-visible {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
</style>
