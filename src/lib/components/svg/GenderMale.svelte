<script>
	import Icon from './Icon.svelte';

	export let color = 'currentColor';
</script>

<Icon viewBox="0 0 16 24" {...$$props} strokeWidth={0}>
	<path
		d="M 7.75 9.15 L 7.75 2.58 L 9.52 4.33 C 9.82 4.62 10.32 4.62 10.62 4.33 C 10.92 4.03 10.92 3.55 10.62 3.25 L 7.52 0.22 C 7.21 -0.07 6.73 -0.07 6.42 0.22 L 3.32 3.25 C 3.02 3.55 3.02 4.03 3.32 4.33 C 3.62 4.62 4.12 4.62 4.42 4.33 L 6.19 2.58 L 6.19 9.15 C 2.71 9.53 0 12.42 0 15.94 C 0 19.73 3.12 22.82 6.97 22.82 C 10.83 22.82 14 19.71 14 15.94 C 14 12.42 11.25 9.52 7.75 9.15 Z M 6.97 21.30 C 3.98 21.30 1.55 18.89 1.55 15.94 C 1.55 13.01 3.98 10.62 6.97 10.62 C 9.99 10.62 12.44 13.01 12.44 15.94 C 12.44 18.89 9.99 21.30 6.97 21.30 Z M 6.97 21.30"
		fill={color}
	/>
</Icon>
