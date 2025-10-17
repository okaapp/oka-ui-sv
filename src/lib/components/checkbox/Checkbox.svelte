<script lang="ts">
    import {
        Checkbox,
        Label,
        useId,
        type WithoutChildrenOrChild,
    } from "bits-ui";
    import { Check, Minus } from "phosphor-svelte";

    let {
        id = useId(),
        checked = $bindable(false),
        ref = $bindable(null),
        labelRef = $bindable(null),
        labelText,
        ...restProps
    }: WithoutChildrenOrChild<Checkbox.RootProps> & {
        labelText?: string;
        labelRef?: HTMLLabelElement | null;
    } = $props();
</script>

<Checkbox.Root
    {id}
    bind:checked
    bind:ref
    {...restProps}
    class="flex items-center justify-center w-6 h-6 rounded-md border border-stroke-medium data-[state=checked]:bg-content-primary data-[state=indeterminate]:bg-content-primary data-[state=checked]:border-transparent data-[state=indeterminate]:border-transparent"
>
    {#snippet children({ checked, indeterminate })}
        {#if indeterminate}
            <Minus class="size-5 text-content-inversed" />
        {:else if checked}
            <Check class="size-5 text-content-inversed" />
        {/if}
    {/snippet}
</Checkbox.Root>
<!-- <Label.Root for={id} bind:ref={labelRef}>
  {labelText}
</Label.Root> -->
