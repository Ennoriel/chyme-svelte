<script lang="ts">
	import Label from './Label.svelte';

	export let label: string;
	export let name: string;
	export let required = false;
	export let placeholder: string | undefined = undefined;
	export let value = '';
	export let variant: 'square' | 'rounded' = 'rounded';
	export let align: 'left' | 'center' = 'left';
</script>

<Label {variant} {align}>
	{label}
	<input type="text" {name} {required} bind:value {placeholder} />
</Label>
