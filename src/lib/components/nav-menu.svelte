<script lang="ts">
	import { onMount } from 'svelte';
	import { config } from '$lib';
	let pages = $state(Object.entries(config.pages));
	let active = $state('');

	onMount(() => {
		active = window.location.pathname;
	});
</script>

<nav>
	<ul class="hidden h-full w-full flex-col items-end justify-center gap-2 text-right lg:flex">
		{#each pages as [name, page]}
			<li class="text-sm font-light">
				{#if active === page.path}
					<a href={page.path} class="pointer-events-none cursor-default opacity-75">
						{name}
						<span>&#9675;</span>
					</a>
				{:else}
					<a href={page.path} class="hover:underline">
						{name}
						<span>&#9675;</span>
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
