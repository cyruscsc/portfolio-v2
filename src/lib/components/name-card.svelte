<script lang="ts">
	import { config } from '$lib';
	import { Title } from '$lib/components';
	import { Paragraph } from '$lib/components';
</script>

<div class="my-auto space-y-2 py-12 lg:max-w-1/2">
	<Title text={config.namecard.title} />
	<div class="space-y-2">
		{#each config.namecard.paragraphs as paragraph}
			<Paragraph text={paragraph} />
		{/each}
	</div>
</div>
