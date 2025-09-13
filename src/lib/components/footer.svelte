<script lang="ts">
	import { config } from '$lib';
	import { Copyright, Paragraph } from '$lib/components';
</script>

<footer class="space-y-2">
	<div class="hidden md:block">
		{#each config.footer.paragraphs as paragraph}
			<Paragraph text={paragraph} />
		{/each}
	</div>
	<Copyright text={config.footer.copyright} />
</footer>
