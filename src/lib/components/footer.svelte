<script lang="ts">
	import { onMount } from 'svelte';
	import { config } from '$lib';
	import { Copyright, Paragraph, Quote } from '$lib/components';

	let quote = $state('');

	onMount(() => {
		const randomIndex = Math.floor(Math.random() * config.quotes.length);
		quote = config.quotes[randomIndex];
	});
</script>

<footer class="flex w-full items-center justify-between">
	<div class="space-y-2">
		<div>
			{#each config.footer.paragraphs as paragraph}
				<Paragraph text={paragraph} />
			{/each}
		</div>
		<Copyright text={config.footer.copyright} />
	</div>
	<div class="hidden lg:block">
		<Quote text={quote} />
	</div>
</footer>
