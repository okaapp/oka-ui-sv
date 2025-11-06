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

    let currentRoute = $derived(page.url.pathname);
</script>

<div class={`${className} sidebar`}>
    {#each items as i}
        <a
            href={i.Route}
            class={`sidebar-item ${currentRoute.startsWith(i.Route) ? "sidebar-item--active" : "sidebar-item--inactive"}`}
        >
            {#if i.Icon}
                <IconContext
                    values={{ size: 24, mirrored: false, weight: "duotone" }}
                >
                    <i.Icon></i.Icon>
                </IconContext>
            {/if}
            <span class="sidebar-item__label">{i.Label}</span>
        </a>
    {/each}
</div>
