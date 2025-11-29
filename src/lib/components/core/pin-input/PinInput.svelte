<script lang="ts">
    import "./pin-input.css";
    import { PinInput, type WithoutChildrenOrChild } from "bits-ui";

    let {
        ref = $bindable(null),
        value = $bindable(""),
        maxlength = 6,
        disabled = false,
        ...props
    }: WithoutChildrenOrChild<PinInput.RootProps> = $props();
</script>

<PinInput.Root
    {maxlength}
    bind:value
    bind:ref
    {disabled}
    class={`pin-input-root ${disabled ? "pin-input--disabled" : ""}`}
    {...props}
>
    {#snippet children({ cells })}
        <div class="pin-input">
            {#each cells as cell, i (i)}
                <PinInput.Cell {cell} class="pin-input__cell">
                    {#if cell.char !== null}
                        <div class="pin-input__char">
                            {cell.char}
                        </div>
                    {/if}
                    {#if cell.hasFakeCaret}
                        <div class="pin-input__caret"></div>
                    {/if}
                </PinInput.Cell>
            {/each}
        </div>
    {/snippet}
</PinInput.Root>
