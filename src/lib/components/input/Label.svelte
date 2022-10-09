<script lang="ts">
	export let variant: 'square' | 'rounded' = 'rounded';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class:square={variant === 'square'} class:rounded={variant === 'rounded'} {...$$restProps}>
	<slot />
</label>

<style>
	label.square {
		--height: 33px;
		--border-radius: 5px;
		--text-align: left;
		--font-weight: 500;
		--input-color: var(--text-color);
	}

	label.rounded {
		--height: 41px;
		--border-radius: 21px;
		--text-align: center;
		--font-weight: 100;
		--input-color: var(--primary-color);
	}

	label {
		display: flex;
		flex-direction: column;
		gap: 10px;
		text-align: var(--text-align);
		margin-bottom: 16px;
		font-weight: var(--font-weight);
	}

	label :global(input),
	label :global(textarea),
	label :global(select) {
		height: var(--height);
		border-radius: var(--border-radius);
		text-align: var(--text-align);
		color: var(--input-color);
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
		border: none;
		padding: 0 16px;
		margin: 0;
		background-color: white;
	}

	label :focus-visible,
	label :focus-visible {
		outline: 1px solid var(--focus-color);
	}
</style>
