<script lang="ts">
	import { page } from '$app/stores';

	export let title: string;
	export let description: string;
	export let image = 'cover.png';
	export let author = 'Maxime Dupont';
	export let date: string | undefined = undefined; // '2022-10-29'
	export let type: 'website' | 'article' = 'website';

	$: url = $page.url.toString();
	$: imageUrl = `${$page.url.host}/${image}`;
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={description} />

	{#if type === 'article' && author}
		<meta name="author" content={author} />
	{/if}

	{#if type === 'article' && date}
		<meta property="article:published_time" content={date} />
	{/if}

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={url} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:locale" content="en_GB" />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={url} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={imageUrl} />
</svelte:head>
