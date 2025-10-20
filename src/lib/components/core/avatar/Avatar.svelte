<script lang="ts">
    import { Avatar, type WithoutChildrenOrChild } from "bits-ui";
    import Smiley from "phosphor-svelte/lib/Smiley";

    const sizes = {
        xs: "size-6 text-xs",
        sm: "size-8 text-sm",
        md: "size-10 text-base",
        lg: "size-12 text-lg",
        xl: "size-14 text-xl",
    };
    const iconSizes = {
        xs: "size-4",
        sm: "size-5",
        md: "size-6",
        lg: "size-7",
        xl: "size-8",
    };

    let {
        size = "md",
        src,
        alt = "Ảnh đại diện",
        fallback,
        iconFallback = false,
        ref = $bindable(null),
        imageRef = $bindable(null),
        fallbackRef = $bindable(null),
        ...restProps
    }: WithoutChildrenOrChild<Avatar.RootProps> & {
        size?: "xs" | "sm" | "md" | "lg" | "xl";
        src?: string;
        alt?: string;
        fallback?: string;
        iconFallback?: boolean;
        imageRef?: HTMLImageElement | null;
        fallbackRef?: HTMLElement | null;
    } = $props();
</script>

<Avatar.Root
    {...restProps}
    bind:ref
    class={`rounded-full flex items-center justify-center text-center text-content-primary bg-stroke-muted overflow-clip select-none ${sizes[size as keyof typeof sizes]}`}
>
    {#if src}
        <Avatar.Image {src} {alt} bind:ref={imageRef} />
    {:else}
        <Avatar.Fallback bind:ref={fallbackRef} class="select-none">
            {#if iconFallback}
                <Smiley
                    class={`${iconSizes[size as keyof typeof iconSizes]}`}
                />
            {:else}
                {fallback}
            {/if}
        </Avatar.Fallback>
    {/if}
</Avatar.Root>
