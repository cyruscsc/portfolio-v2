<script lang="ts">
	import { onMount } from 'svelte';
	import { Copyright, Paragraph, Quote } from '$lib/components';
	import { getConfig } from '$lib/context';

	let quote = $state('');
	const config = getConfig();

	onMount(() => {
		const randomIndex = Math.floor(Math.random() * config.content.quotes.length);
		quote = config.content.quotes[randomIndex];
	});
</script>

<footer class="flex w-full items-center justify-between">
	<div class="space-y-2">
		<div>
			{#each config.content.footer as paragraph}
				<Paragraph text={paragraph} />
			{/each}
		</div>
		<Copyright text={config.content.copyright} />
	</div>
	<div class="hidden lg:block">
		<Quote text={quote} />
	</div>
</footer>
