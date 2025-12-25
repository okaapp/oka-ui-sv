<script lang="ts">
    import { Sidebar, ThemeSwitcher, type SidebarItem } from "$lib/index.ts";
    import SquaresFour from "phosphor-svelte/lib/SquaresFour";
    import Table from "phosphor-svelte/lib/Table";
    import GridFour from "phosphor-svelte/lib/GridFour";
    import Notepad from "phosphor-svelte/lib/Notepad";
    import Chats from "phosphor-svelte/lib/Chats";

    let { children } = $props();

    const SIDEBAR_ITEMS: SidebarItem[] = [
        {
            Label: "Tổng quan",
            Route: "/demo-pages/dashboard",
            Icon: SquaresFour,
        },
        {
            Label: "Bảng dữ liệu",
            Route: "/demo-pages/table",
            Icon: Table,
        },
        {
            Label: "Lưới thẻ",
            Route: "/demo-pages/cards",
            Icon: GridFour,
        },
        {
            Label: "Biểu mẫu",
            Route: "/demo-pages/form",
            Icon: Notepad,
        },
        {
            Label: "Hộp thoại",
            Route: "/demo-pages/dialogs",
            Icon: Chats,
        },
    ];
</script>

<div class="layout-container">
    <!-- Header -->
    <div class="demo-header">
        <div class="header-left">
            <a href="/">
                <img
                    src="/branding/oka_48.svg"
                    alt="OKA Logo"
                    class="logo-img"
                />
            </a>
            <span class="app-name">Trang Demo</span>
        </div>
        <div class="header-right">
            <ThemeSwitcher />
        </div>
    </div>

    <!-- Main Content Area -->
    <div class="demo-layout">
        <Sidebar items={SIDEBAR_ITEMS} />
        <div class="demo-content">
            {@render children()}
        </div>
    </div>
</div>

<style>
    .layout-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        background: linear-gradient(to top, var(--appbg-from), var(--appbg-to));
    }

    .demo-header {
        display: flex;
        padding: 16px 24px;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 80px;
    }

    .header-left {
        display: flex;
        gap: 16px;
        align-items: center;
        justify-content: flex-start;
        width: max-content;
        height: 100%;
    }

    .logo-img {
        height: 48px;
        width: auto;
    }

    .app-name {
        flex-shrink: 0;
        width: fit-content;
        line-clamp: 1;
        color: var(--content-primary);
        font-weight: 600;
        font-size: 20px;
    }

    .header-right {
        display: flex;
        gap: 8px;
        align-items: center;
        justify-content: flex-start;
        width: max-content;
        height: 100%;
    }

    .demo-layout {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        width: 100%;
        flex: 1;
        overflow: hidden;
    }

    .demo-content {
        padding: 32px;
        width: 100%;
        height: 100%;
        background: var(--surface-primary);
        border-top-left-radius: 24px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
</style>
