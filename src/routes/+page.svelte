<script lang="ts">
    import "./page.css";
    import Button from "$lib/components/core/button/Button.svelte";
    import SingleSelect from "$lib/components/core/select/SingleSelect.svelte";
    import Input from "$lib/components/core/input/Input.svelte";
    import type { SelectItem } from "$lib/components/core/select/Types.js";
    import MultiSelect from "$lib/components/core/select/MultiSelect.svelte";
    import Separator from "$lib/components/core/separator/Separator.svelte";
    import Loading from "$lib/components/core/loading/Loading.svelte";
    import Avatar from "$lib/components/core/avatar/Avatar.svelte";
    import { Smiley } from "phosphor-svelte";
    import Badge from "$lib/components/core/badge/Badge.svelte";
    import ThemeSwitcher from "$lib/components/styling/theme-switcher/ThemeSwitcher.svelte";
    import Pagination from "$lib/components/core/pagination/Pagination.svelte";
    import Sidebar from "$lib/components/core/sidebar/Sidebar.svelte";
    import type { SidebarItem } from "$lib/components/core/sidebar/Types.js";
    import { Package } from "phosphor-svelte";
    import { Warehouse } from "phosphor-svelte";

    let xmplItems: SelectItem[] = [
        { value: "1", label: "1", subLabel: "Một" },
        { value: "2", label: "2", subLabel: "Hai" },
        { value: "3", label: "3.14", subLabel: "pi" },
    ];
    const badgeColorMapExample = {
        "Thành công": "success",
        "Thất bại": "error",
        "Xuất sắc": "purple",
    };
    const badgeItemExample: { id: number; label: string }[] = [
        { id: 1, label: "Thành công" },
        { id: 2, label: "Thất bại" },
        { id: 3, label: "Xuất sắc" },
        { id: 4, label: "Không xác định" },
    ];
    const xmplSidebar: SidebarItem[] = [
        { Label: "Sản phẩm", Icon: Package, Route: "/" },
        { Label: "Kho hàng", Icon: Warehouse, Route: "/abc" },
    ];
</script>

<div class="page-container">
    <div class="header">
        <Loading />
        <div class="header__title">
            <h1 class="header__title-main">Oka UI</h1>
            <h3 class="header__title-sub">Components Library</h3>
        </div>
    </div>
    <ThemeSwitcher />
    <Separator orientation="horizontal" />
    <div class="button-group">
        <Button>Húp</Button>
        <Button variant="secondary">Húp</Button>
        <Button variant="tertiary">Húp</Button>
        <Button disabled>Húp</Button>
    </div>
    <SingleSelect items={xmplItems} class="select-container" />
    <MultiSelect items={xmplItems} class="select-container" />
    <Input />
    <Separator orientation="vertical" />
    <div class="avatar-group">
        <Avatar src="img/test_avatar.jpg" />
        <Avatar fallback="AB" />
        <Avatar iconFallback />
        <Avatar iconFallback size="lg" />
    </div>
    <div class="badge-group">
        <Badge color="blue">Mì tôm</Badge>
        <Badge color="pink" variant="outline">Mì tôm</Badge>
        <Badge color="severe" size="sm">Mì tôm</Badge>
        <Badge color="success"><Smiley />Mì tôm</Badge>
        <Badge color="indigo" size="sm" variant="outline">
            <Smiley />Mì tôm
        </Badge>
        {#each badgeItemExample as i}
            <Badge
                color={badgeColorMapExample[
                    i.label as keyof typeof badgeColorMapExample
                ]}>{i.label}</Badge
            >
        {/each}
    </div>
    <Pagination count={96} />
    <Sidebar items={xmplSidebar} class="sidebar-demo" />
</div>
