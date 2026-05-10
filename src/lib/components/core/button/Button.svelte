<script lang="ts">
    import "./button.css";
    import { Button } from "bits-ui";
    import { IconContext } from "phosphor-svelte";

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
        lg: "height: 48px; padding: 12px 16px; font-size: 16px; gap: 8px;",
        md: "height: 40px; padding: 12px 8px; font-size: 14px; gap: 8px;",
        sm: "height: 36px; padding: 6px 8px; font-size: 12px; gap: 4px;",
    };

    const iconSizes = {
        lg: 24,
        md: 20,
        sm: 16,
    };
</script>

<Button.Root
    class={`button ${variants[variant as keyof typeof variants]}`}
    style={sizes[size as keyof typeof sizes]}
    {...props}
    bind:ref
>
    <IconContext
        values={{
            size: sizes[size as keyof typeof iconSizes],
            mirrored: false,
            weight: "regular",
        }}
    >
        {@render children?.()}
    </IconContext>
</Button.Root>
