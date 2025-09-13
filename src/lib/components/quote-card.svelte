<script lang="ts">
	import { onMount } from 'svelte';
	import { config } from '$lib';
	import { Quote } from '$lib/components';

	let quote = $state('');

	onMount(() => {
		const randomIndex = Math.floor(Math.random() * config.quotes.length);
		quote = config.quotes[randomIndex];
	});
</script>

<div class="mt-auto py-8">
	<Quote text={quote} />
</div>
