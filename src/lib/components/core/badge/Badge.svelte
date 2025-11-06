<script lang="ts">
    import "./badge.css";
    import IconContext from "phosphor-svelte/lib/IconContext";

    let {
        children,
        color = "gray",
        size = "md",
        variant = "default",
    } = $props();

    const iconSizes = {
        lg: 24,
        md: 16,
        sm: 12,
    };
</script>

<div
    class={`badge focus-override badge--${variant} badge--${size} badge--${color}`}
>
    <IconContext
        values={{
            mirrored: false,
            weight: "regular",
            size: iconSizes[size as keyof typeof iconSizes],
        }}
    >
        {@render children?.()}
    </IconContext>
</div>
