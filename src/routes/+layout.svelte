<script lang="ts">
	import "../app.css";
	import OKAStyleProvider from "$lib/components/styling/oka-style-provider/OKAStyleProvider.svelte";

	let { children } = $props();
</script>

<svelte:head>
	<title>OKA UI</title>
	<meta
		name="description"
		content="Svelte Component Library built by OKA Tech for the Appta software platform."
	/>
	<meta property="og:title" content="OKA UI" />
	<meta
		property="og:description"
		content="Svelte Component Library built by OKA Tech for the Appta software platform"
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="application-name" content="OKA UI" />
	<meta name="theme-color" content="#58c4f5" />
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<OKAStyleProvider>
	<div class="bg-override">
		{@render children()}
	</div>
</OKAStyleProvider>
