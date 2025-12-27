<script lang="ts">
    import {
        Badge,
        Button,
        Input,
        Loading,
        Pagination,
        SingleSelect,
        SVG31,
        type SelectItem,
    } from "$lib/index.ts";
    import Table from "phosphor-svelte/lib/Table";
    import MagnifyingGlass from "phosphor-svelte/lib/MagnifyingGlass";
    import PlusCircle from "phosphor-svelte/lib/PlusCircle";
    import WarningCircle from "phosphor-svelte/lib/WarningCircle";

    type Product = {
        id: number;
        name: string;
        category: string;
        price: number;
        stock: number;
        status: "active" | "low-stock" | "out-of-stock";
        lastUpdated: Date;
    };

    let products: Product[] = $state([
        {
            id: 1,
            name: "Cà phê hạt cao cấp",
            category: "Đồ uống",
            price: 599000,
            stock: 156,
            status: "active",
            lastUpdated: new Date("2024-12-20"),
        },
        {
            id: 2,
            name: "Trà xanh hữu cơ",
            category: "Đồ uống",
            price: 319000,
            stock: 8,
            status: "low-stock",
            lastUpdated: new Date("2024-12-19"),
        },
        {
            id: 3,
            name: "Hộp socola thủ công",
            category: "Đồ ăn vặt",
            price: 499000,
            stock: 0,
            status: "out-of-stock",
            lastUpdated: new Date("2024-12-18"),
        },
        {
            id: 4,
            name: "Bánh mì ngũ cốc",
            category: "Bánh mì",
            price: 119000,
            stock: 245,
            status: "active",
            lastUpdated: new Date("2024-12-21"),
        },
        {
            id: 5,
            name: "Bánh croissant tươi",
            category: "Bánh mì",
            price: 79000,
            stock: 89,
            status: "active",
            lastUpdated: new Date("2024-12-22"),
        },
        {
            id: 6,
            name: "Bơ hạnh nhân",
            category: "Sản phẩm phết",
            price: 259000,
            stock: 34,
            status: "active",
            lastUpdated: new Date("2024-12-17"),
        },
        {
            id: 7,
            name: "Lọ mật ong",
            category: "Sản phẩm phết",
            price: 179000,
            stock: 5,
            status: "low-stock",
            lastUpdated: new Date("2024-12-23"),
        },
        {
            id: 8,
            name: "Hỗn hợp sinh tố trái cây",
            category: "Đồ uống",
            price: 379000,
            stock: 122,
            status: "active",
            lastUpdated: new Date("2024-12-16"),
        },
    ]);

    let isLoading = $state(false);
    let error: string | null = $state(null);
    let totalCount = $state(8);
    let currentPage = $state(1);
    let searchQuery = $state("");
    let sortQuery = $state("");
    let selectedProduct: Product | null = $state(null);

    const SORTOPTIONS: SelectItem[] = [
        { label: "Tên (A-Z)", value: "name-asc" },
        { label: "Tên (Z-A)", value: "name-desc" },
        { label: "Giá (Thấp đến Cao)", value: "price-asc" },
        { label: "Giá (Cao đến Thấp)", value: "price-desc" },
        { label: "Tồn kho (Thấp đến Cao)", value: "stock-asc" },
        { label: "Tồn kho (Cao đến Thấp)", value: "stock-desc" },
    ];

    function handlePageChange(newPage: number): void {
        if (newPage > 0 && newPage <= Math.ceil(totalCount / 10)) {
            currentPage = newPage;
        }
    }

    function getStatusBadge(status: Product["status"]) {
        switch (status) {
            case "active":
                return { color: "success" as const, label: "Hoạt động" };
            case "low-stock":
                return { color: "warning" as const, label: "Tồn kho thấp" };
            case "out-of-stock":
                return { color: "error" as const, label: "Hết hàng" };
        }
    }
</script>

<div class="page-container">
    <!-- Header -->
    <div class="page-header">
        <div class="page-header__title">
            <Table
                weight="duotone"
                style="width: 24px; height: auto; color: var(--content-primary);"
            />
            <h1 class="page-heading">Quản lý tồn kho</h1>
        </div>
        <Button
            ><PlusCircle style="width: 24px; height: 24px;" />Thêm sản phẩm mới</Button
        >
    </div>

    {#if error}
        <div class="error-message">
            <WarningCircle style="width: 24px; height: 24px;" />
            {error}
        </div>
    {/if}

    {#if isLoading}
        <div class="loading-container">
            <Loading />
        </div>
    {:else}
        <!-- Search & Filter Bar -->
        <div class="toolbar">
            <div class="toolbar__search">
                <Input
                    placeholder="Tìm kiếm theo tên sản phẩm"
                    bind:value={searchQuery}
                />
                <Button
                    disabled={searchQuery === null || searchQuery === ""}
                    variant="secondary"
                    ><MagnifyingGlass
                        style="width: 24px; height: 24px;"
                    /></Button
                >
            </div>
            <div class="toolbar__sort">
                <SingleSelect
                    placeholder="Sắp xếp theo..."
                    bind:value={sortQuery}
                    items={SORTOPTIONS}
                />
            </div>
        </div>

        <!-- Table -->
        <div class="table-container">
            {#if products.length === 0}
                <div class="empty-state">
                    <SVG31 />
                    <span class="empty-state__text"
                        >Không tìm thấy sản phẩm.</span
                    >
                </div>
            {:else}
                <table class="data-table">
                    <thead>
                        <tr class="data-table__header-row">
                            <th class="data-table__header">Tên sản phẩm</th>
                            <th class="data-table__header">Danh mục</th>
                            <th class="data-table__header">Giá</th>
                            <th class="data-table__header">Tồn kho</th>
                            <th class="data-table__header">Trạng thái</th>
                            <th class="data-table__header">Cập nhật lần cuối</th
                            >
                        </tr>
                    </thead>
                    <tbody>
                        {#each products as product (product.id)}
                            <tr
                                class="data-table__row"
                                onclick={() => (selectedProduct = product)}
                            >
                                <td
                                    class="data-table__cell data-table__cell--primary"
                                >
                                    {product.name}
                                </td>
                                <td
                                    class="data-table__cell data-table__cell--primary"
                                >
                                    {product.category}
                                </td>
                                <td
                                    class="data-table__cell data-table__cell--primary"
                                >
                                    {product.price.toLocaleString("vi-VN")} ₫
                                </td>
                                <td
                                    class="data-table__cell data-table__cell--primary"
                                >
                                    {product.stock}
                                </td>
                                <td class="data-table__cell">
                                    <Badge
                                        color={getStatusBadge(product.status)
                                            .color}
                                    >
                                        {getStatusBadge(product.status).label}
                                    </Badge>
                                </td>
                                <td
                                    class="data-table__cell data-table__cell--secondary"
                                >
                                    {product.lastUpdated.toLocaleDateString()}
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
                <Pagination
                    count={totalCount}
                    page={currentPage}
                    perPage={10}
                    onPageChange={handlePageChange}
                    class="border-t border-stroke-light!"
                />
            {/if}
        </div>
    {/if}
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 24px;
    }

    .page-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .page-header__title {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .page-heading {
        font-size: 24px;
        line-height: 1.2;
        font-weight: 600;
        color: var(--content-primary);
        margin: 0;
    }

    .error-message {
        padding: 16px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        background-color: var(--surface-error);
        color: var(--content-error);
        gap: 8px;
    }

    .loading-container {
        min-height: 384px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .toolbar__search {
        width: 320px;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .toolbar__sort {
        width: 256px;
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .table-container {
        border-radius: 12px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 640px;
        justify-content: space-between;
        gap: 0;
        border: 1px solid var(--stroke-light);
    }

    .empty-state {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 4px;
        justify-content: center;
        align-items: center;
        min-height: 360px;
    }

    .empty-state__text {
        color: var(--content-tertiary);
    }

    .data-table {
        width: 100%;
        height: fit-content;
        border-collapse: collapse;
    }

    .data-table__header-row {
        background: var(--surface-secondary);
    }

    .data-table__header {
        text-align: left;
        font-size: 14px;
        font-weight: 400;
        color: var(--content-secondary);
        padding: 12px 16px;
    }

    .data-table__row {
        transition: background-color 300ms;
        background: var(--surface-primary);
        cursor: pointer;
    }

    .data-table__row:hover {
        background: var(--surface-tertiary);
    }

    .data-table__cell {
        padding: 12px 16px;
    }

    .data-table__cell--primary {
        font-weight: 500;
        color: var(--content-primary);
    }

    .data-table__cell--secondary {
        font-weight: 500;
        color: var(--content-secondary);
    }
</style>
