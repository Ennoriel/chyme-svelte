<script lang="ts">
	function keydown(e: KeyboardEvent) {
		if (e.key === 'Tab') {
			document.body.classList.add('keyboard-user');
			document.body.classList.remove('mouse-user');
		}
	}
	function mousedown() {
		document.body.classList.add('mouse-user');
		document.body.classList.remove('keyboard-user');
	}
</script>

<svelte:window on:keydown={keydown} on:mousedown={mousedown} />
