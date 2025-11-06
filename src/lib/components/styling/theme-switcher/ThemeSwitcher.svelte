<script lang="ts">
    import "./theme-switcher.css";
    import { Select } from "bits-ui";
    import { Themes } from "./Themes.js";
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
    <Select.Trigger class="theme-switcher" aria-label="Giao diện">
        <Palette class="theme-switcher__icon" />
        <span class="theme-switcher__label">Giao diện</span>
    </Select.Trigger>
    <Select.Portal>
        <Select.Content class="theme-content" sideOffset={12}>
            <Select.ScrollUpButton class="theme-scroll-button">
                <CaretDoubleUp class="theme-scroll-button__icon" />
            </Select.ScrollUpButton>
            <Select.Viewport class="theme-viewport">
                {#each Themes as themeGroup}
                    <Select.Group class="theme-group">
                        <div class="theme-group__header">
                            <Separator orientation="horizontal" />
                            <Select.GroupHeading class="theme-group__title">
                                {themeGroup.DisplayName}
                            </Select.GroupHeading>
                            <Separator orientation="horizontal" />
                        </div>
                        <div class="theme-group__items">
                            {#each themeGroup.Themes as theme}
                                <Select.Item
                                    value={theme.ClassName}
                                    label={theme.DisplayName}
                                    aria-label={theme.DisplayName}
                                    class="theme-item"
                                >
                                    {#if theme.DisplayImage}
                                        <img
                                            src={theme.DisplayImage}
                                            alt=""
                                            class="theme-item__image"
                                        />
                                    {:else if theme.MainAccent}
                                        <div
                                            class="theme-item__color"
                                            style={`background: ${theme.MainAccent};`}
                                        ></div>
                                    {:else}
                                        <Palette class="theme-item__image" />
                                    {/if}
                                    {theme.DisplayName}
                                </Select.Item>
                            {/each}
                        </div>
                    </Select.Group>
                {/each}
            </Select.Viewport>
            <Select.ScrollDownButton class="theme-scroll-button">
                <CaretDoubleDown class="theme-scroll-button__icon" />
            </Select.ScrollDownButton>
        </Select.Content>
    </Select.Portal>
</Select.Root>
