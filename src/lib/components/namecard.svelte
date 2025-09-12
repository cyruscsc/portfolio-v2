<script lang="ts">
	import { config } from '$lib';
	import { Title } from '$lib/components';
	import { Paragraph } from '$lib/components';
</script>

<div class="namecard">
	<Title text={config.namecard.title} />
	{#each config.namecard.paragraphs as paragraph}
		<Paragraph text={paragraph} />
	{/each}
</div>
