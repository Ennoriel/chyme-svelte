<script lang="ts">
	import Label from './Label.svelte';
	import Button from '../atom/Button.svelte';
	import EyeOff from '../svg/EyeOff.svelte';
	import Eye from '../svg/Eye.svelte';
	export let label = 'Password';
	export let name = 'password';
	export let variant: 'square' | 'rounded' = 'rounded';

	let password: string;
	let showPassword = false;

	let input: HTMLInputElement;

	function changePasswordVisibility() {
		showPassword = !showPassword;
		setTimeout(() => {
			input.focus();
		}, 0);
	}
</script>

<Label {variant}>
	<span style:--button-pos={variant === 'rounded' ? '4.5px' : '0.5px'}>
		{label}
		{#if showPassword}
			<input type="text" {name} bind:value={password} bind:this={input} />
		{:else}
			<input type="password" {name} bind:value={password} bind:this={input} />
		{/if}
		<Button
			type="button"
			theme="transparent"
			icon={showPassword ? Eye : EyeOff}
			{variant}
			size="s"
			on:click={changePasswordVisibility}
		/>
	</span>
</Label>

<style>
	span {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	span :global(button) {
		position: absolute;
		bottom: var(--button-pos);
		right: var(--button-pos);
	}
</style>
