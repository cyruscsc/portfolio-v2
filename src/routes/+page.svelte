<script>
	import { onMount } from 'svelte';
	import { NameCard } from '$lib/components';
	import { getActive, getConfig } from '$lib/context';

	const config = getConfig();
	const active = getActive();

	onMount(() => {
		active.path = window.location.pathname;
	});
</script>

<svelte:head>
	<title>{config.pages.home.title}</title>
</svelte:head>

<NameCard />
