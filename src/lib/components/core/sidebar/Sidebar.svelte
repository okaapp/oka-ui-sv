<script lang="ts">
    import type { SidebarItem } from "./Types.ts";
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

<div class={`${className} flex flex-col gap-1 min-w-60 p-6`}>
    {#each items as i}
        <div
            class={`w-full h-fit flex items-center gap-2 p-3 rounded-xl text-base active:scale-[0.98] ${i.Route === activeItem ? "bg-accent-primary-content text-content-inversed font-bold" : "cursor-pointer text-content-secondary bg-transparent hover:bg-action-secondary-hover active:bg-action-secondary-press font-medium transition-all duration-300"}`}
        >
            {#if i.Icon}
                <IconContext
                    values={{ size: 24, mirrored: false, weight: "duotone" }}
                >
                    <i.Icon></i.Icon>
                </IconContext>
            {/if}
            <span
                class="line-clamp-1 text-ellipsis w-full text-left transition-all duration-300"
                >{i.Label}</span
            >
        </div>
    {/each}
</div>
