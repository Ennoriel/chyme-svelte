<script lang="ts">
	import Label from './Label.svelte';

	export let label: string;
	export let name: string;
	export let required = false;
	export let placeholder: string | undefined = undefined;
	export let value: number | undefined = undefined;
	export let variant: 'square' | 'rounded' = 'rounded';
	export let align: 'left' | 'center' = 'left';
	export let min: string | number | undefined = undefined;
	export let max: string | number | undefined = undefined;
</script>

<Label {variant} {align}>
	{label}
	<input type="number" {name} {required} {min} {max} bind:value {placeholder} />
</Label>
