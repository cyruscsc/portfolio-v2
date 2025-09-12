<script>
	import { config } from '$lib';
	import { NameCard } from '$lib/components';
</script>

<svelte:head>
	<title>{config.pages.home.title}</title>
</svelte:head>

<NameCard />
