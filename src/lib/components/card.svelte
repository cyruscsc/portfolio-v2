<script lang="ts">
	import { Title } from '$lib/components';

	let { title, children } = $props();
</script>

<div class="my-auto space-y-2 py-12 lg:max-w-1/2">
	<Title text={title} />
	<div class="space-y-2">
		{@render children?.()}
	</div>
</div>
