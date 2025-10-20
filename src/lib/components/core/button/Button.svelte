<script lang="ts">
    import { Button } from "bits-ui";

    let {
        ref = $bindable(null),
        children,
        variant = "primary",
        size = "lg",
        ...props
    } = $props();

    const variants = {
        primary:
            "bg-action-primary text-content-inversed hover:bg-action-primary-hover active:bg-action-primary-press disabled:bg-action-primary-muted",
        secondary:
            "bg-action-secondary text-content-primary hover:bg-action-secondary-hover active:bg-action-secondary-press disabled:text-content-muted",
        tertiary:
            "bg-none text-content-primary hover:bg-action-secondary-hover active:bg-action-secondary-press disabled:text-content-muted",
        destructive:
            "bg-action-error text-content-inversed hover:opacity-80 disabled:opacity-30",
    };

    const sizes = {
        lg: "h-12 px-3 py-3 text-base",
    };
</script>

<Button.Root
    class={`w-fit min-w-32 cursor-pointer disabled:cursor-not-allowed rounded-xl inline-flex items-center justify-center gap-2 font-medium active:scale-[0.98] ${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]} transition-all duration-300`}
    {...props}
    bind:ref
>
    {@render children?.()}
</Button.Root>
