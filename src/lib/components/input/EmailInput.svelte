<script lang="ts">
	import Label from './Label.svelte';

	export let label = 'E-mail';
	export let name = 'email';
	export let value = '';
	export let variant: 'square' | 'rounded' = 'rounded';
</script>

<Label {variant}>
	{label}
	<input type="email" {name} bind:value />
</Label>
