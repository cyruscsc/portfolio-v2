<script lang="ts">
	import { Card } from '$lib/components';
	import { Paragraph } from '$lib/components';
	import { getConfig } from '$lib/context';

	const config = getConfig();
</script>

<Card title={config.content.headline}>
	{#each config.content.introduction as paragraph}
		<Paragraph text={paragraph} />
	{/each}
</Card>
