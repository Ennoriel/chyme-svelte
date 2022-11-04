<script lang="ts">
	export let direction: 'horizontal' | 'vertical' = 'horizontal';
	export let display: 'flex' | 'inline-flex' = 'inline-flex';
	export let justify:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly' = 'flex-start';
</script>

<div class="button-group {direction}" style:display style:justify-content={justify}>
	<slot />
</div>

<style>
	.vertical {
		flex-direction: column;
		align-items: center;
	}
	.button-group {
		margin-top: 10px;
		gap: 16px;
		margin-bottom: 24px;
		width: 100%;
	}
</style>
