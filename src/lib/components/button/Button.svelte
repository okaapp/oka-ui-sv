<script lang="ts">
    import { Button } from "bits-ui";

    let {
        ref = $bindable(null),
        children,
        variant = "primary",
        size = "md",
        ...props
    } = $props();

    const variants = {
        primary: "bg-dark text-background hover:bg-dark/95",
        secondary: "bg-gray-200 text-dark hover:bg-gray-300",
        outline: "border border-dark text-dark bg-transparent hover:bg-dark/5",
    };

    const sizes = {
        sm: "h-8 px-3 text-sm",
        md: "h-12 px-5 text-base",
        lg: "h-14 px-6 text-lg",
    };
</script>

<Button.Root
    class={`rounded-input shadow-mini inline-flex items-center justify-center font-semibold active:scale-[0.98] active:transition-all duration-300 ${variants[variant as keyof typeof variants]} ${sizes[size as keyof typeof sizes]}`}
    {...props}
    bind:ref
>
    {@render children?.()}
</Button.Root>
