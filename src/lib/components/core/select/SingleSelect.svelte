<script lang="ts">
    import "./select.css";
    import type { SelectItem } from "./Types.js";
    import { Select } from "bits-ui";
    import Check from "phosphor-svelte/lib/Check";
    import CaretDown from "phosphor-svelte/lib/CaretDown";
    import CaretDoubleUp from "phosphor-svelte/lib/CaretDoubleUp";
    import CaretDoubleDown from "phosphor-svelte/lib/CaretDoubleDown";

    let {
        value = $bindable(),
        items = [] as SelectItem[],
        placeholder = "Chọn ở đây",
        class: className,
        ...props
    } = $props();

    // let value = $state<string>("");
    const selectedLabel = $derived(
        value ? items.find((item) => item.value === value)?.label : placeholder,
    );
</script>

<Select.Root
    type="single"
    onValueChange={(v) => (value = v)}
    {items}
    {...props}
>
    <Select.Trigger
        class={`select-trigger focus-override`}
        aria-label="Chọn ở đây"
    >
        <span class="select-trigger-text">{selectedLabel}</span>
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
                        class="select-item"
                        value={item.value}
                        label={item.label}
                        disabled={item.disabled}
                        aria-label={item.value}
                    >
                        {#snippet children({ selected })}
                            <div class="select-item-content">
                                <span>{item.label}</span>
                                {#if item.subLabel}
                                    <span class="select-item-sublabel"
                                        >{item.subLabel}</span
                                    >
                                {/if}
                            </div>
                            {#if selected}
                                <div class="ml-auto">
                                    <Check
                                        aria-label="Đang được chọn"
                                        class="select-item-check"
                                    />
                                </div>
                            {/if}
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
