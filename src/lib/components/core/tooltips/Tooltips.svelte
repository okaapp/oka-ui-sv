<script lang="ts">
    import "./tooltips.css";
    import { Tooltip } from "bits-ui";
    import type { Snippet } from "svelte";

    let {
        children,
        trigger,
        delayDuration = 200,
        ...props
    }: Tooltip.RootProps & {
        trigger: Snippet;
        children: Snippet;
    } = $props();
</script>

<Tooltip.Provider delayDuration={200}>
    <Tooltip.Root {delayDuration} {...props}>
        <Tooltip.Trigger class="tooltip-trigger">
            {@render trigger()}
        </Tooltip.Trigger>
        <Tooltip.Portal>
            <Tooltip.Content class="tooltip-content" sideOffset={8}>
                {@render children()}
            </Tooltip.Content>
        </Tooltip.Portal>
    </Tooltip.Root>
</Tooltip.Provider>
