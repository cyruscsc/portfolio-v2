<script>
	import { getActive, getConfig } from '$lib/context';
	import { onMount } from 'svelte';

	const active = getActive();
	const config = getConfig();

	onMount(() => {
		active.path = window.location.pathname;
	});
</script>

<svelte:head>
	<title>{config.pages.about.title}</title>
</svelte:head>
