<script lang="ts">
	import FileInput from './FileInput.svelte';

	export let csrf: string;
	export let name = 'file';
	export let action: string | undefined = undefined;
</script>

<form method="post" {action} enctype="multipart/form-data">
	<FileInput {csrf} {name} />
	<slot />
	<input type="submit" />
</form>
