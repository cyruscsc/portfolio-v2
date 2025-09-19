<script lang="ts">
	import { Title } from '$lib/components';
	import { Paragraph } from '$lib/components';
	import { getConfig } from '$lib/context';

	const config = getConfig();
</script>

<div class="my-auto space-y-2 py-12 lg:max-w-1/2">
	<Title text={config.content.headline} />
	<div class="space-y-2">
		{#each config.content.introduction as paragraph}
			<Paragraph text={paragraph} />
		{/each}
	</div>
</div>
