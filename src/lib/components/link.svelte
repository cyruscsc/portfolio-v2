<script lang="ts">
	let { url, text } = $props();
</script>

<a href={url} target="_blank" class="text-sm duration-300 hover:opacity-75">{text}</a>
