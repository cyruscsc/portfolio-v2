<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { config } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{config.site.title}</title>
	<meta name="description" content={config.site.description} />
	<meta name="author" content={config.site.author} />
</svelte:head>

{@render children?.()}
