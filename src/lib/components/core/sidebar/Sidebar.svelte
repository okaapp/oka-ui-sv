<script lang="ts">
    import "./sidebar.css";
    import type { SidebarItem } from "./Types.js";
    import { IconContext } from "phosphor-svelte";
    import { page } from "$app/state";

    type Props = {
        items: SidebarItem[];
        class?: string;
    };

    let { items, class: className }: Props = $props();

    let activeItem = $state(page.url.pathname);
    $effect(() => {
        activeItem = page.url.pathname;
    });
</script>

<div class={`${className} sidebar`}>
    {#each items as i}
        <div
            class={`sidebar-item ${i.Route === activeItem ? "sidebar-item--active" : "sidebar-item--inactive"}`}
        >
            {#if i.Icon}
                <IconContext
                    values={{ size: 24, mirrored: false, weight: "duotone" }}
                >
                    <i.Icon></i.Icon>
                </IconContext>
            {/if}
            <span class="sidebar-item__label">{i.Label}</span>
        </div>
    {/each}
</div>
