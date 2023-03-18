<script lang="ts">
	export let alt: string;
	export let format: [number, number];
	export let maxwidth: number | undefined = undefined;
	export let maxheight: number | undefined = undefined;

	let width: number | string;
	let height: number | string;

	$: {
		if (maxheight && !maxwidth) {
			width = ((format[0] * maxheight) / format[1]).toFixed(2);
			height = maxheight;
		} else if (maxwidth && !maxheight) {
			width = maxwidth;
			height = ((format[1] * maxwidth) / format[0]).toFixed(2);
		} else if (maxheight && maxwidth) {
			const w = maxwidth ? format[0] / maxwidth : Infinity;
			const h = maxheight ? format[1] / maxheight : Infinity;
			const ratio = Math.max(w, h);

			width = (format[0] / ratio).toFixed(2);
			height = (format[1] / ratio).toFixed(2);
		}
	}
</script>

<!-- {#if !maxheight && !maxwidth}
	<p>
		Please set maxheight or maxwidth
	</p>
{/if} -->
<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	viewBox="0 0 {format.join(' ')}"
	xmlns:xlink="http://www.w3.org/1999/xlink"
	role="img"
	aria-label={alt}
	{...$$props}
>
	<slot />
</svg>

<style>
	svg {
		color: var(--primary-color);
		display: block;
		margin: auto;
	}
</style>
