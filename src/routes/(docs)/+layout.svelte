<script lang="ts">
    import "./docs-layout.css";
    import ThemeSwitcher from "$lib/components/styling/theme-switcher/ThemeSwitcher.svelte";
    import { page } from "$app/state";
    import Button from "$lib/components/core/button/Button.svelte";
    import GithubLogo from "phosphor-svelte/lib/GithubLogo";
    import { afterNavigate } from "$app/navigation";

    let { children } = $props();

    let container: HTMLElement;

    afterNavigate(() => {
        if (container) {
            container.scrollTo(0, 0);
        } else {
            window.scrollTo(0, 0);
        }
    });

    const sidebarSections = [
        {
            sectionName: "Getting Started",
            items: [
                { label: "Introduction", href: "/docs" },
                { label: "Installation", href: "/docs/installation" },
            ],
        },
        {
            sectionName: "Styling & Theming",
            items: [
                {
                    label: "OKA Style Provider",
                    href: "/docs/styling/oka-style-provider",
                },
                {
                    label: "Theme Switcher",
                    href: "/docs/styling/theme-switcher",
                },
                { label: "CSS Variables", href: "/docs/styling/css-variables" },
            ],
        },
        {
            sectionName: "Core Components",
            items: [
                { label: "Avatar", href: "/docs/components/avatar" },
                { label: "Badge", href: "/docs/components/badge" },
                { label: "Button", href: "/docs/components/button" },
                { label: "Checkbox", href: "/docs/components/checkbox" },
                { label: "Dialog", href: "/docs/components/dialog" },
                { label: "Input", href: "/docs/components/input" },
                { label: "Loading", href: "/docs/components/loading" },
                { label: "Pagination", href: "/docs/components/pagination" },
                { label: "Pin Input", href: "/docs/components/pin-input" },
                { label: "Select", href: "/docs/components/select" },
                { label: "Separator", href: "/docs/components/separator" },
                { label: "Tooltips", href: "/docs/components/tooltips" },
            ],
        },
        {
            sectionName: "AA Engine",
            items: [
                { label: "Auto Button", href: "/docs/aaengine/auto-button" },
                { label: "Engine Orb", href: "/docs/aaengine/engine-orb" },
            ],
        },
    ];

    let currentPath = $derived(page.url.pathname);
</script>

<div class="docs-layout-wrapper">
    <div id="docs-header">
        <a href="/" class="header-group">
            <img src="/branding/oka_48.svg" alt="" />
            <div class="header__title">
                <h1 class="header__title-main">Oka UI</h1>
                <h3 class="header__title-sub">Components Library</h3>
            </div>
        </a>
        <!-- mid group -->
        <!--  -->
        <div class="header-group">
            <ThemeSwitcher />
            <Button
                variant="tertiary"
                href="https://github.com/okaapp/oka-ui-sv"
                ><GithubLogo
                    style="width: 24px; height: 24px; flex-shrink: 0"
                />Github</Button
            >
        </div>
    </div>
    <div class="docs-layout">
        <aside class="docs-sidebar">
            <nav class="docs-nav">
                {#each sidebarSections as section}
                    <div class="docs-nav-section">
                        <div class="docs-nav-section__header">
                            <h3 class="docs-nav-section__title">
                                {section.sectionName}
                            </h3>
                        </div>
                        <div class="docs-nav-section__items">
                            {#each section.items as item}
                                <a
                                    href={item.href}
                                    class={`docs-nav-item ${currentPath === item.href ? "docs-nav-item--active" : ""}`}
                                >
                                    {item.label}
                                </a>
                            {/each}
                        </div>
                    </div>
                {/each}
            </nav>
        </aside>

        <main bind:this={container} class="docs-main">
            <div class="docs-content">
                {@render children()}
            </div>
        </main>
    </div>
</div>
