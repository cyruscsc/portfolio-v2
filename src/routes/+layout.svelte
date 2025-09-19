<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { config } from '$lib';
	import { AppContainer, MainContainer, Footer, NavMenu, ContentContainer } from '$lib/components';
	import { setActive, setConfig } from '$lib/context';

	let { children } = $props();
	let active = $state({ path: '' });

	setActive(active);
	setConfig(config);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{config.site.title}</title>
	<meta name="description" content={config.site.description} />
	<meta name="author" content={config.site.author} />
</svelte:head>

<AppContainer>
	<MainContainer>
		<ContentContainer>
			{@render children?.()}
		</ContentContainer>
		<NavMenu />
	</MainContainer>
	<Footer />
</AppContainer>
