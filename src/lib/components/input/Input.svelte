<script lang="ts">
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
        ref = $bindable(null),
        value = $bindable(),
        class: className,
        ...restProps
    }: Props = $props();
</script>

<input
    bind:this={ref}
    data-slot="input"
    class="text-base focus-override border border-stroke-light bg-surface-primary selection:bg-accent-primary selection:text-content-inversed placeholder:text-content-tertiary flex h-12 w-fit min-w-40 rounded-xl px-3 py-3 outline-none cursor-text disabled:cursor-not-allowed disabled:bg-surface-tertiary disabled:border-stroke-muted invalid:border-transparent invalid:ring-[1.5px] invalid:ring-stroke-error focus-visible:border-transparent focus-visible:ring-[1.5px] focus-visible:ring-accent-primary transition-all duration-300"
    bind:value
    {...restProps}
/>
