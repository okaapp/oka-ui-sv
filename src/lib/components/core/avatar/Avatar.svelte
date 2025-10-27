<script lang="ts">
    import "./avatar.css";
    import { Avatar, type WithoutChildrenOrChild } from "bits-ui";
    import Smiley from "phosphor-svelte/lib/Smiley";

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

<Avatar.Root {...restProps} bind:ref class={`avatar avatar--${size}`}>
    {#if src}
        <Avatar.Image {src} {alt} bind:ref={imageRef} />
    {:else}
        <Avatar.Fallback bind:ref={fallbackRef} class="avatar__fallback">
            {#if iconFallback}
                <Smiley class={`avatar__icon--${size}`} />
            {:else}
                {fallback}
            {/if}
        </Avatar.Fallback>
    {/if}
</Avatar.Root>
