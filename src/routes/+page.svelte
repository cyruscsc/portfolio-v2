<script>
	import { config } from '$lib';
	import { NameCard, Home } from '$lib/components';
</script>

<svelte:head>
	<title>{config.pages.home.title}</title>
</svelte:head>

<Home>
	<NameCard />
</Home>
