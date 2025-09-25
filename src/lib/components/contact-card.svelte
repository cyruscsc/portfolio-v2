<script lang="ts">
	import { Link, Paragraph } from '$lib/components';
	import { getConfig } from '$lib/context';

	const config = getConfig();
</script>

<div class="my-auto space-y-2 py-12 lg:max-w-1/2">
	<div class="space-y-2">
		{#each config.content.contact as paragraph}
			<Paragraph text={paragraph} />
		{/each}
	</div>
	<ul>
		<li><Link url={config.content.linkedin} text="LinkedIn" /></li>
		<li><Link url={config.content.github} text="GitHub" /></li>
	</ul>
</div>
