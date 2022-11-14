<script lang="ts">
	import { fdtoFromObject } from 'chyme';

	export let name: string;
	export let value: Record<string, unknown> | string | number | boolean;

	$: _value = Object.entries(fdtoFromObject(name === '$' ? value || {} : { [name]: value }) || {});
</script>

{#if _value}
	{#each _value as [key, v]}
		<input type="hidden" name={key} value={v} />
	{/each}
{/if}
