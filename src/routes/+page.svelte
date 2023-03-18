<script lang="ts">
	import BookButtons from './buttons.svelte';

	import Link from '$lib/components/atom/Link.svelte';
	import Spinner from '$lib/components/atom/Spinner.svelte';
	import TextInput from '$lib/components/input/TextInput.svelte';
	import Radio from '$lib/components/input/Radio.svelte';
	import Checkbox from '$lib/components/input/Checkbox.svelte';
	import EmailInput from '$lib/components/input/EmailInput.svelte';
	import PasswordInput from '$lib/components/input/PasswordInput.svelte';
	import LeftRight from '$lib/components/layout/LeftRight.svelte';
	import LinkIcon from '$lib/components/svg/LinkIcon.svelte';

	import * as Svgs from '$lib/components/svg';

	import TextArea from '$lib/components/input/TextArea.svelte';
	import FileInput from '$lib/components/input/FileInput.svelte';
	import Panel from '$lib/components/layout/Panel.svelte';
	import HasBeenTabbed from '$lib/components/atom/HasBeenTabbed.svelte';

	let open = false;

	type Name = { name: string };

	let str: string | undefined;
	let nbr: number | undefined;
	let obj: Name | undefined;

	const optionsStr = ['option 1', 'option 2', 'option 3'];
	const optionsNbr = [1, 2, 3];
	const optionsObj = [
		{ label: 'Max', value: { name: 'Max' } },
		{ label: 'Eti', value: { name: 'Eti' } }
	];
</script>

<HasBeenTabbed />

<div id="wrapper">
	<h1>Storybook</h1>

	<h2>Landing page</h2>
	<a href="/landing-page">Link to landing page</a>

	<h2>Panels</h2>
	<label>
		toggle panels
		<input type="checkbox" bind:checked={open} />
		<button on:click|stopPropagation={() => (open = true)} hidden={open}>Toggle panels</button>
	</label>

	<BookButtons />

	<h2>Links</h2>
	<div class="container">
		<Link href="https://www.machyme.fr">Link</Link>
		<span style:width="20px" />
		<Link href="https://www.machyme.fr" svg={LinkIcon}>Link with icon</Link>
	</div>

	<h2>Spinner</h2>
	<div class="container" style:color="var(--primary-color)">
		<Spinner />
	</div>

	<h2>Input</h2>

	<LeftRight>
		<TextInput slot="left" label="text input" name="text" variant="square" />
		<TextInput slot="right" label="text input" name="text" />
	</LeftRight>
	<LeftRight>
		<EmailInput slot="left" variant="square" />
		<EmailInput slot="right" />
	</LeftRight>
	<LeftRight>
		<PasswordInput slot="left" variant="square" />
		<PasswordInput slot="right" />
	</LeftRight>
	<LeftRight>
		<TextArea slot="left" label="textarea" name="textarea" variant="square" />
		<TextArea slot="right" label="textarea" name="textarea" />
	</LeftRight>
	<LeftRight>
		<FileInput slot="left" csrf="square" />
		<FileInput slot="right" csrf="textarea" />
	</LeftRight>

	<Radio label="radio input" name="radio" options={optionsStr} bind:value={str} />
	<Radio label="radio input" name="radio" options={optionsNbr} bind:value={nbr} />
	<Radio label="radio input" name="radio" options={optionsObj} bind:value={obj} />

	<Checkbox label="checkbox input" name="checkbox" options={['option 1', 'option 2', 'option 3']} />
</div>

<Panel bind:open>yolo</Panel>
<Panel bind:open right>yolo</Panel>

<ul>
	{#each Object.entries(Svgs).filter(([k]) => k !== 'Icon') as [name, Svg]}
		<li><svelte:component this={Svg} width={18} height={18} /> {name}</li>
	{/each}
</ul>

<style>
	#wrapper {
		max-width: 900px;
		margin: 0 auto;
	}
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 8px 8px 64px;
		gap: 8px;
	}
	.container :global(button) {
		flex-grow: 0;
	}

	:global(body) {
		--header-height: 60px;
	}
</style>
