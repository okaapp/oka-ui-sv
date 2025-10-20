<script lang="ts">
    import type { SelectItem } from "./Types.ts";
    import { Select } from "bits-ui";
    import Check from "phosphor-svelte/lib/Check";
    import CaretDown from "phosphor-svelte/lib/CaretDown";
    import CaretDoubleUp from "phosphor-svelte/lib/CaretDoubleUp";
    import CaretDoubleDown from "phosphor-svelte/lib/CaretDoubleDown";

    let {
        items = [] as SelectItem[],
        placeholder = "Chọn ở đây",
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
        class="group inline-flex gap-1 min-w-40 w-full h-12 rounded-xl items-center border p-3 text-base text-content-primary font-medium border-stroke-light bg-surface-primary touch-none data-placeholder:text-content-tertiary data-placeholder:font-normal data-[state=open]:border-transparent data-[state=open]:ring-[1.5px] data-[state=open]:ring-accent-primary disabled:cursor-not-allowed disabled:bg-surface-tertiary disabled:border-stroke-muted invalid:border-transparent invalid:ring-[1.5px] invalid:ring-stroke-error transition-all duration-300 hover:bg-surface-secondary hover:border-stroke-medium cursor-pointer"
        aria-label="Chọn ở đây"
    >
        <span class="text-ellipsis line-clamp-1 text-start"
            >{selectedLabel}</span
        >
        <CaretDown
            class="text-content-primary group-disabled:text-content-muted ml-auto size-6 group-data-[state=open]:rotate-180 transition-all duration-300"
        />
    </Select.Trigger>
    <Select.Portal>
        <Select.Content
            class="rounded-xl border p-2 gap-0 focus-override border-stroke-light bg-surface-primary outline-hidden z-50 h-80 max-h-[var(--bits-select-content-available-height)] w-[var(--bits-select-anchor-width)] min-w-[var(--bits-select-anchor-width)] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            sideOffset={8}
        >
            <Select.ScrollUpButton
                class="flex w-full items-center justify-center"
            >
                <CaretDoubleUp class="size-3" />
            </Select.ScrollUpButton>
            <Select.Viewport class="p-1">
                {#each items as item, i (i + item.value)}
                    <Select.Item
                        class="rounded-lg data-highlighted:bg-surface-secondary outline-hidden data-disabled:text-content-muted flex h-fit w-full select-none items-center py-2 px-3 text-base font-medium data-selected:bg-accent-primary-surface cursor-pointer hover:bg-surface-secondary"
                        value={item.value}
                        label={item.label}
                        disabled={item.disabled}
                        aria-label={item.value}
                    >
                        {#snippet children({ selected })}
                            <div class="flex flex-col">
                                <span>{item.label}</span>
                                {#if item.subLabel}
                                    <span
                                        class="text-base font-normal text-content-secondary"
                                        >{item.subLabel}</span
                                    >
                                {/if}
                            </div>
                            {#if selected}
                                <div class="ml-auto">
                                    <Check
                                        aria-label="Đang được chọn"
                                        class="text-accent-primary-content size-6"
                                    />
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
