<script lang="ts">
	import Label from './Label.svelte';

	export let label = 'E-mail';
	export let name = 'email';
	export let value = '';
	export let variant: 'square' | 'rounded' = 'rounded';
	export let align: 'left' | 'center' = 'left';
</script>

<Label {variant} {align}>
	{label}
	<input type="email" {name} bind:value />
</Label>
