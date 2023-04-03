<script lang="ts">
	import Select from 'svelte-select';
	import Label from './Label.svelte';

	type Label = $$Generic;
	type Value = $$Generic;
	type Option = { label: Label | string; value: Value | string; created?: boolean };

	export let filterText = '';
	export let getLabel: (item: Option) => string = (item) =>
		typeof item.label === 'string' ? item.label : '';
	export let items: Array<Option> | undefined = undefined;
	export let justValue: Value | undefined = undefined;
	export let label = '';
	export let listOpen = false;
	export let listPlacement: 'top' | 'bottom' = 'bottom';
	export let loadOptions: (filterText: string) => Promise<Array<Option>>;
	export let name: string;
	export let placeholder = '';
	export let required = false;
	export let searchable = true;
	export let value: Option | undefined = undefined;
	export let variant: 'square' | 'rounded' = 'rounded';

	$: floatingConfig = {
		placement: listPlacement === 'top' ? 'top-start' : 'bottom-start'
	};

	function handleFilter(e: CustomEvent) {
		console.log(e, e.detail);
		if (e.detail.length === 0 && filterText.length > 0 && items) {
			const prev = items.filter((i) => !i.created);
			items = [...prev, { value: filterText, label: filterText, created: true }];
		}
	}

	function handleChange() {
		if (items) {
			items = items.map((i) => {
				delete i.created;
				return i;
			});
		}
	}
</script>

<Label {variant}>
	{label}
	<Select
		class={searchable ? 'searchable' : ''}
		listOffset={8}
		{floatingConfig}
		{items}
		{listOpen}
		{loadOptions}
		{name}
		{placeholder}
		{required}
		{searchable}
		bind:filterText
		bind:justValue
		bind:value
		on:blur
		on:change={handleChange}
		on:filter={handleFilter}
		on:focus
	>
		<svelte:fragment slot="item" let:item>
			{item.created ? 'Add new: ' : ''}
			{getLabel(item)}
		</svelte:fragment>
		<div slot="selection" let:selection>
			{getLabel(selection)}
		</div>
		<div slot="empty">Aucun résultat</div>
	</Select>
</Label>

<style>
	:global(.svelte-select) {
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
		--list-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
		--border: none;
		--border-hover: none;
		--border-focused: none;
		--font-size: 14px;
		--height: 33px;
		--input-color: var(--text-color);
		--item-hover-bg: #e8ebf9;
		--text-align: left;
		transition: box-shadow 0.2s;
	}

	:global(.svelte-select.focused) {
		outline: none;
		border: none;
	}

	:global(.keyboard-user .svelte-select.focused) {
		outline: 2px solid var(--keyboard-focus-color, red);
		outline-offset: 2px;
	}

	:global(.mouse-user .svelte-select.focused) {
		outline: none;
		box-shadow: 0 0 4px var(--mouse-focus-color, #777);
	}

	:global(label.rounded .svelte-select) {
		--height: 42px;
		--border-radius: 21px;
		--list-border-radius: 21px;
	}

	:global(.svelte-select .item) {
		text-align: left;
	}

	:global(.svelte-select.searchable input) {
		cursor: text !important;
	}

	:global(.svelte-select input) {
		box-shadow: none !important;
		font-family: var(--font-family);
	}

	[slot='empty'] {
		padding: 8px 8px 8px 16px;
	}
</style>
