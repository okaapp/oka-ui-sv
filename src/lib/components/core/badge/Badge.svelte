<script lang="ts">
    import IconContext from "phosphor-svelte/lib/IconContext";

    let {
        children,
        color = "gray",
        size = "md",
        variant = "default",
    } = $props();

    const colors = {
        success:
            "text-content-success bg-surface-success border-stroke-success",
        error: "text-content-error bg-surface-error border-stroke-error",
        severe: "text-content-severe bg-surface-severe border-stroke-severe",
        warning:
            "text-content-warning bg-surface-warning border-stroke-warning",
        gray: "text-palette-gray-content bg-palette-gray-surface border-palette-gray-highlight",
        blue: "text-palette-blue-content bg-palette-blue-surface border-palette-blue-highlight",
        cyan: "text-palette-cyan-content bg-palette-cyan-surface border-palette-cyan-highlight",
        emerald:
            "text-palette-emerald-content bg-palette-emerald-surface border-palette-emerald-highlight",
        fuchsia:
            "text-palette-fuchsia-content bg-palette-fuchsia-surface border-palette-fuchsia-highlight",
        indigo: "text-palette-indigo-content bg-palette-indigo-surface border-palette-indigo-highlight",
        lime: "text-palette-lime-content bg-palette-lime-surface border-palette-lime-highlight",
        pink: "text-palette-pink-content bg-palette-pink-surface border-palette-pink-highlight",
        purple: "text-palette-purple-content bg-palette-purple-surface border-palette-purple-highlight",
        rose: "text-palette-rose-content bg-palette-rose-surface border-palette-rose-highlight",
        sky: "text-palette-sky-content bg-palette-sky-surface border-palette-sky-highlight",
        teal: "text-palette-teal-content bg-palette-teal-surface border-palette-teal-highlight",
        violet: "text-palette-violet-content bg-palette-violet-surface border-palette-violet-highlight",
        yellow: "text-palette-yellow-content bg-palette-yellow-surface border-palette-yellow-highlight",
    };
    const variants = {
        default: "border-0",
        outline: "border-1 bg-transparent!",
    };
    const sizes = {
        md: "px-3 py-2 rounded-xl text-base",
        sm: "px-2 py-1.5 rounded-lg text-sm",
    };
    const iconSizes = {
        md: 24,
        sm: 16,
    };
</script>

<div
    class={`${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]} ${colors[color as keyof typeof colors]} w-fit h-fit flex items-center gap-1`}
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
