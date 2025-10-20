<script lang="ts">
	import "../app.css";
	import OKAStyleProvider from "$lib/components/styling/oka-style-provider/OKAStyleProvider.svelte";

	let { children } = $props();
</script>

<OKAStyleProvider>
	{@render children()}
</OKAStyleProvider>
