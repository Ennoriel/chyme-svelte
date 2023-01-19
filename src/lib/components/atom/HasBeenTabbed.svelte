<script lang="ts">
	function keydown(e: KeyboardEvent) {
		if (e.key === 'Tab') document.body.classList.add('has-been-tabbed');
	}
</script>

<svelte:window on:keydown={keydown} />
