<script lang="ts">
    import "./input.css";
    import type {
        HTMLInputAttributes,
        HTMLInputTypeAttribute,
    } from "svelte/elements";
    import type { WithElementRef } from "bits-ui";
    type InputType = Exclude<HTMLInputTypeAttribute, "file">;
    type Props = WithElementRef<
        Omit<HTMLInputAttributes, "type"> &
            (
                | { type: "file"; files?: FileList }
                | { type?: InputType; files?: undefined }
            )
    >;
    let {
        placeholder = "Nhập vào đây",
        ref = $bindable(null),
        value = $bindable(),
        invalid = $bindable(false),
        class: className,
        ...restProps
    }: Props & {
        invalid?: boolean;
    } = $props();
</script>

<input
    {placeholder}
    bind:this={ref}
    data-slot="input"
    class="input focus-override"
    class:input--invalid={invalid}
    style="font: inherit;"
    bind:value
    {...restProps}
/>
