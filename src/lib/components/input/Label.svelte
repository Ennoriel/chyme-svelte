<script lang="ts">
	export let variant: 'square' | 'rounded' = 'rounded';
	export let align: 'left' | 'center' = 'left';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="{variant} {align}" {...$$restProps}>
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
		--font-weight: 100;
		--input-color: var(--text-color);
	}

	label.center {
		--text-align: center;
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
		transition: box-shadow 0.2s;
	}

	:global(.keyboard-user) label :global(:focus) {
		outline: 2px solid var(--keyboard-focus-color, red);
		outline-offset: 2px;
	}

	:global(.mouse-user) label :global(:focus) {
		outline: none;
		box-shadow: 0 0 4px var(--mouse-focus-color, #777);
	}
</style>
