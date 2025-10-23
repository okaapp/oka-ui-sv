<script lang="ts">
    import { Select } from "bits-ui";
    import { Themes } from "./Themes.ts";
    import { onMount } from "svelte";
    import Palette from "phosphor-svelte/lib/Palette";
    import CaretDoubleUp from "phosphor-svelte/lib/CaretDoubleUp";
    import CaretDoubleDown from "phosphor-svelte/lib/CaretDoubleDown";
    import Separator from "$lib/components/core/separator/Separator.svelte";

    let currentTheme = $state("default-light");

    onMount(() => {
        let savedTheme = localStorage.getItem("theme") || "default-light";

        currentTheme = savedTheme;
    });

    function setTheme(v: string) {
        document.body.classList.remove(currentTheme);
        document.body.classList.add(v);

        currentTheme = v;

        localStorage.setItem("theme", v);
    }
</script>

<Select.Root type="single" onValueChange={setTheme} value={currentTheme}>
    <Select.Trigger
        class="group inline-flex gap-2 w-32 h-12 rounded-xl justify-start items-center p-3 text-base text-content-primary font-medium bg-transparent touch-none data-[state=open]:bg-surface-primary data-[state=open]:ring-[1.5px] data-[state=open]:ring-accent-primary disabled:cursor-not-allowed transition-all duration-300 hover:bg-surface-primary cursor-pointer"
        aria-label="Giao diện"
    >
        <Palette
            class="text-content-primary group-disabled:text-content-muted ml-auto size-6 transition-all duration-300"
        />
        <span class="text-ellipsis line-clamp-1 text-start text-content-primary"
            >Giao diện</span
        >
    </Select.Trigger>
    <Select.Portal>
        <Select.Content
            class="rounded-xl border p-4 gap-0 focus-override border-stroke-light bg-surface-primary outline-hidden z-50 h-80 min-h-[400px] max-h-[var(--bits-select-content-available-height)] w-[520px] min-w-[var(--bits-select-anchor-width)] data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1 duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
            sideOffset={8}
        >
            <Select.ScrollUpButton
                class="flex w-full items-center justify-center"
            >
                <CaretDoubleUp class="size-3" />
            </Select.ScrollUpButton>
            <Select.Viewport class="flex flex-col w-full gap-6">
                {#each Themes as themeGroup}
                    <Select.Group class="flex flex-col gap-1 w-full">
                        <div class="flex w-full items-center mx-2 gap-2">
                            <Separator orientation="horizontal" />
                            <Select.GroupHeading
                                class="text-xs text-content-secondary w-fit shrink-0"
                                >{themeGroup.DisplayName}</Select.GroupHeading
                            >
                            <Separator orientation="horizontal" />
                        </div>
                        <div class="flex flex-wrap w-full gap-2">
                            {#each themeGroup.Themes as theme}
                                <Select.Item
                                    value={theme.ClassName}
                                    label={theme.DisplayName}
                                    aria-label={theme.DisplayName}
                                    class=" rounded-xl flex items-center gap-2 p-2 text-base text-content-primary line-clamp-1 text-ellipsis w-fit h-fit data-highlighted:bg-surface-secondary data-selected:bg-accent-primary-surface cursor-pointer hover:bg-surface-secondary"
                                >
                                    {#if theme.DisplayImage}
                                        <img
                                            src={theme.DisplayImage}
                                            alt=""
                                            class="size-6 rounded-lg"
                                        />
                                    {:else if theme.MainAccent}
                                        <div
                                            class="size-6 rounded-lg"
                                            style={`background: ${theme.MainAccent};`}
                                        ></div>
                                    {:else}
                                        <Palette class="size-6" />
                                    {/if}
                                    {theme.DisplayName}
                                </Select.Item>
                            {/each}
                        </div>
                    </Select.Group>
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
