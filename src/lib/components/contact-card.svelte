<script lang="ts">
	import { Card } from '$lib/components';
	import { Link, Paragraph } from '$lib/components';
	import { getConfig } from '$lib/context';

	const config = getConfig();
</script>

<Card title="Contact">
	{#each config.content.contact as paragraph}
		<Paragraph text={paragraph} />
	{/each}
	<ul class="flex gap-4">
		<li><Link url={config.content.linkedin} text="LinkedIn" /></li>
		<li><Link url={config.content.github} text="GitHub" /></li>
	</ul>
</Card>
