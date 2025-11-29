<script lang="ts">
	import "../app.css";
	import OKAStyleProvider from "$lib/components/styling/oka-style-provider/OKAStyleProvider.svelte";
	import { Tooltip } from "bits-ui";

	let { children } = $props();
</script>

<OKAStyleProvider>
	{@render children()}
</OKAStyleProvider>
