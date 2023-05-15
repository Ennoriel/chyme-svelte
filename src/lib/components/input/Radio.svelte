<script lang="ts">
	import type { InnerOption, SelectableValue, ValueOfOption } from './input.type';
	import { rewriteOption } from './utils';

	type T = $$Generic<SelectableValue>;

	export let label: string;
	export let name: string;
	export let required = false;
	export let value: ValueOfOption<T> | undefined = undefined;
	export let options: Array<T> = [];
	export let disabled = false;

	let _options: Array<InnerOption<T>>;

	$: _options = options.map(rewriteOption);
</script>

<fieldset>
	<legend>{label}{(disabled && ' (inactif)') || ''}</legend>
	<div>
		{#each _options as option}
			<label class:selected={value === option.value} class:disabled>
				{option.label}
				<input
					type="radio"
					{name}
					{required}
					on:click
					bind:group={value}
					value={option.value}
					{disabled}
				/>
			</label>
		{/each}
	</div>
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-direction: column;
		border: none;
		font-size: 14px;
		gap: 10px;
		margin: 0 0 16px 0;
		padding: 0;
	}
	legend {
		margin-bottom: 10px;
		font-weight: 700;
	}
	label {
		display: inline-block;
		background-color: #f7f7fa;
		border-radius: 5px;
		padding: 6px 12px;
		margin: 0 5px 5px 0;
		font-size: 14px;
		cursor: pointer;
		transition: color 0.2s, background-color 0.2s, filter 0.2s;
		outline: none;
		user-select: none;
	}
	label:last-of-type {
		margin: 0;
	}
	.selected {
		background-color: var(--primary-color);
		color: white;
	}
	label:hover {
		filter: brightness(90%);
	}
	:global(.keyboard-user) label:focus-within {
		outline: 2px solid var(--focus-color);
		outline-offset: 2px;
	}
	input {
		opacity: 0;
		position: absolute;
		pointer-events: none;
	}
	.disabled {
		cursor: not-allowed;
		background-color: #eeeeee;
		color: var(--text-color);
	}
	:not(.selected).disabled {
		color: #4f4f4f;
	}
</style>
