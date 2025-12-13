<script lang="ts">
    import "./button.css";
    import { Button } from "bits-ui";

    let {
        ref = $bindable(null),
        children,
        variant = "primary",
        size = "lg",
        ...props
    } = $props();

    const variants = {
        primary: "button--primary",
        secondary: "button--secondary",
        tertiary: "button--tertiary",
        destructive: "button--destructive",
    };

    const sizes = {
        lg: "height: 48px; padding: 12px; font-size: 16px;",
        md: "height: 40px; padding: 8px; font-size: 14px;",
        sm: "height: 36px; padding: 6px 8px; font-size: 12px;",
    };
</script>

<Button.Root
    class={`button ${variants[variant as keyof typeof variants]}`}
    style={sizes[size as keyof typeof sizes]}
    {...props}
    bind:ref
>
    {@render children?.()}
</Button.Root>
