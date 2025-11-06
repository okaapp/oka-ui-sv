<script lang="ts">
    import "./select.css";
    import type { SelectItem } from "./Types.js";
    import { Select } from "bits-ui";
    import CaretDown from "phosphor-svelte/lib/CaretDown";
    import CaretDoubleUp from "phosphor-svelte/lib/CaretDoubleUp";
    import CaretDoubleDown from "phosphor-svelte/lib/CaretDoubleDown";
    import Checkbox from "../checkbox/Checkbox.svelte";

    let {
        value = $bindable([]),
        items = [] as SelectItem[],
        placeholder = "Chọn ở đây",
        ...props
    } = $props();

    // let value = $state<string[]>([]);
    const selectedLabel = $derived(
        value.length > 0 ? `Đã chọn ${value.length}` : placeholder,
    );
</script>

<Select.Root
    type="multiple"
    onValueChange={(v) => (value = v)}
    {items}
    allowDeselect={true}
    {...props}
>
    <Select.Trigger
        class="select-trigger focus-override"
        aria-label="Chọn ở đây"
    >
        <span class="select-trigger-text">
            {selectedLabel}
        </span>
        <CaretDown class="select-trigger-icon" />
    </Select.Trigger>
    <Select.Portal>
        <Select.Content class="select-content" sideOffset={12}>
            <Select.ScrollUpButton class="select-scroll-button">
                <CaretDoubleUp class="select-scroll-button-icon" />
            </Select.ScrollUpButton>
            <Select.Viewport class="select-viewport">
                {#each items as item, i (i + item.value)}
                    <Select.Item
                        class="select-item select-item--multi"
                        value={item.value}
                        label={item.label}
                        disabled={item.disabled}
                        aria-label={item.value}
                    >
                        {#snippet children({ selected })}
                            <Checkbox checked={selected} />
                            <div class="select-item-content">
                                <span>{item.label}</span>
                                {#if item.subLabel}
                                    <span class="select-item-sublabel"
                                        >{item.subLabel}</span
                                    >
                                {/if}
                            </div>
                        {/snippet}
                    </Select.Item>
                {/each}
            </Select.Viewport>
            <Select.ScrollDownButton class="select-scroll-button">
                <CaretDoubleDown class="select-scroll-button-icon" />
            </Select.ScrollDownButton>
        </Select.Content>
    </Select.Portal>
</Select.Root>
