<script lang="ts">
    import "./checkbox.css";
    import {
        Checkbox,
        // Label,
        useId,
        type WithoutChildrenOrChild,
    } from "bits-ui";
    import Check from "phosphor-svelte/lib/Check";
    import Minus from "phosphor-svelte/lib/Minus";

    let {
        id = useId(),
        checked = $bindable(false),
        ref = $bindable(null),
        // labelRef = $bindable(null),
        // labelText,
        ...restProps
    }: WithoutChildrenOrChild<Checkbox.RootProps> & {
        // labelText?: string;
        // labelRef?: HTMLLabelElement | null;
    } = $props();
</script>

<Checkbox.Root {id} bind:checked bind:ref {...restProps} class="checkbox">
    {#snippet children({ checked, indeterminate })}
        {#if indeterminate}
            <Minus class="checkbox__icon" />
        {:else if checked}
            <Check class="checkbox__icon" />
        {/if}
    {/snippet}
</Checkbox.Root>
<!-- <Label.Root for={id} bind:ref={labelRef}>
  {labelText}
</Label.Root> -->
