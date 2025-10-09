<script lang="ts">
    import type { SelectItem } from "./Types.ts";
    import { Select } from "bits-ui";
    import {
        Check,
        CaretDown,
        CaretDoubleUp,
        CaretDoubleDown,
    } from "phosphor-svelte";

    let {
        items = [] as SelectItem[],
        placeholder = "Chọn một",
        ...props
    } = $props();

    let value = $state<string>("");
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
        class="group h-input rounded-9px border-border-input bg-background data-placeholder:text-foreground-alt/50 inline-flex min-w-[296px] touch-none select-none items-center border px-[11px] text-sm transition-colors"
        aria-label="Chọn một"
    >
        {selectedLabel}
        <CaretDown
            class="text-muted-foreground ml-auto size-6 group-data-[state=open]:rotate-180 transition-all duration-500"
        />
    </Select.Trigger>
    <Select.Portal>
        <Select.Content
            class="focus-override border-muted bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 outline-hidden z-50 h-96 max-h-[var(--bits-select-content-available-height)] w-[var(--bits-select-anchor-width)] min-w-[var(--bits-select-anchor-width)] select-none rounded-xl border px-1 py-3 data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"
            sideOffset={10}
        >
            <Select.ScrollUpButton
                class="flex w-full items-center justify-center"
            >
                <CaretDoubleUp class="size-3" />
            </Select.ScrollUpButton>
            <Select.Viewport class="p-1">
                {#each items as item, i (i + item.value)}
                    <Select.Item
                        class="rounded-button data-highlighted:bg-muted outline-hidden data-disabled:opacity-50 flex h-10 w-full select-none items-center py-3 pl-5 pr-1.5 text-sm capitalize"
                        value={item.value}
                        label={item.label}
                        disabled={item.disabled}
                        aria-label={item.value}
                    >
                        {#snippet children({ selected })}
                            {item.label}
                            {#if selected}
                                <div class="ml-auto">
                                    <Check aria-label="Đang được chọn" />
                                </div>
                            {/if}
                        {/snippet}
                    </Select.Item>
                {/each}
            </Select.Viewport>
            <Select.ScrollDownButton
                class="flex w-full items-center justify-center"
            >
                <CaretDoubleDown class="size-3" />
            </Select.ScrollDownButton>
        </Select.Content>
    </Select.Portal>
</Select.Root>
