<script>
	import Edit from '$lib/components/svg/Edit.svelte';
	import EyeOff from '$lib/components/svg/EyeOff.svelte';
	import GenderFemale from '$lib/components/svg/GenderFemale.svelte';
	import Languages from '$lib/components/svg/Languages.svelte';
	import MenuSvg from '$lib/components/svg/MenuSvg.svelte';
	import Trash from '$lib/components/svg/Trash.svelte';
	import XOrMenu from '$lib/components/svg/XOrMenu.svelte';
	import Eye from '$lib/components/svg/Eye.svelte';
	import GenderAll from '$lib/components/svg/GenderAll.svelte';
	import GenderMale from '$lib/components/svg/GenderMale.svelte';
	import LinkIcon from '$lib/components/svg/LinkIcon.svelte';
	import Pin from '$lib/components/svg/Pin.svelte';
	import X from '$lib/components/svg/X.svelte';
</script>

<h2>Svg</h2>

{#each [Edit, EyeOff, GenderFemale, Languages, MenuSvg, Trash, XOrMenu, Eye, GenderAll, GenderMale, LinkIcon, Pin, X] as Svg}
	<Svg />
{/each}
