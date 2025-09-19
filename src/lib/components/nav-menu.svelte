<script lang="ts">
	import { getActive, getConfig } from '$lib/context';

	const config = getConfig();
	const active = getActive();
</script>

<nav>
	<ul class="hidden h-full w-full flex-col items-end justify-center gap-2 text-right lg:flex">
		{#each Object.entries(config.pages) as [name, page]}
			<li class="text-sm font-light">
				{#if active.path === page.path}
					<a href={page.path} class="pointer-events-none cursor-default">
						{name}
						<span>&#9679;</span>
					</a>
				{:else}
					<a href={page.path} class="cursor-pointer opacity-50 duration-300 hover:opacity-75">
						{name}
						<span>&#9675;</span>
					</a>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
