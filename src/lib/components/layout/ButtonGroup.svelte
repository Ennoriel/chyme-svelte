<script lang="ts">
	export let direction: 'horizontal' | 'vertical' = 'horizontal';
	export let display: 'flex' | 'inline-flex' = 'inline-flex';
</script>

<div class="button-group {direction}" style="display: {display};">
	<slot />
</div>

<style>
	.vertical {
		flex-direction: column;
		align-items: center;
	}
	.button-group {
		margin-top: 10px;
		gap: 10px;
		margin-bottom: 24px;
	}
</style>
