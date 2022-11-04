<script lang="ts">
	export let action: string;
	export let method: 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'POST';
</script>

<form {method} {action}>
	<button type="submit">
		<slot />
	</button>
</form>

<style>
	form {
		display: inline;
	}
</style>
