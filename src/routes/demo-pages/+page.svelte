<script lang="ts">
    import { Button } from "$lib/index.ts";
    import { goto } from "$app/navigation";
    import SquaresFour from "phosphor-svelte/lib/SquaresFour";
    import ArrowRight from "phosphor-svelte/lib/ArrowRight";

    const demoPages = [
        {
            title: "Tổng quan",
            description: "Thẻ thống kê, biểu đồ và cảnh báo",
            path: "/demo-pages/dashboard",
        },
        {
            title: "Bảng dữ liệu",
            description: "Bảng với phân trang, tìm kiếm và sắp xếp",
            path: "/demo-pages/table",
        },
        {
            title: "Lưới thẻ",
            description: "Bố cục dạng thẻ với huy hiệu và đường phân cách",
            path: "/demo-pages/cards",
        },
        {
            title: "Biểu mẫu",
            description: "Các thành phần nhập liệu, chọn lựa, hộp kiểm và nút",
            path: "/demo-pages/form",
        },
        {
            title: "Hộp thoại",
            description: "Hộp thoại và chú giải công cụ",
            path: "/demo-pages/dialogs",
        },
    ];
</script>

<div class="page-container">
    <div class="page-header">
        <div class="header-title">
            <SquaresFour
                weight="duotone"
                style="width: 24px; height: auto; color: var(--content-primary);"
            />
            <h1>Demo Pages</h1>
        </div>
    </div>

    <div class="description">
        <p>
            Khám phá các bố cục trang và mẫu thành phần khác nhau được sử dụng
            trong ứng dụng OKA. Mỗi demo trình bày các phương pháp hay nhất về
            styling, sử dụng thành phần và cấu trúc bố cục.
        </p>
    </div>

    <div class="cards-grid">
        {#each demoPages as page}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="demo-card" onclick={() => goto(page.path)}>
                <div class="card-content">
                    <div class="card-text">
                        <span class="card-title">{page.title}</span>
                        <span class="card-description">{page.description}</span>
                    </div>
                    <ArrowRight
                        style="width: 20px; height: 20px; color: var(--accent-primary); flex-shrink: 0;"
                    />
                </div>
            </div>
        {/each}
    </div>
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

    .header-title {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .header-title h1 {
        font-size: 24px;
        line-height: 1.2;
        font-weight: 600;
        color: var(--content-primary);
        margin: 0;
    }

    .description {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .description p {
        color: var(--content-secondary);
        margin: 0;
    }

    .cards-grid {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .demo-card {
        cursor: pointer;
        width: 320px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        border-radius: 12px;
        border: 1px solid var(--stroke-light);
        background: var(--surface-primary);
        transition: all 0.3s ease;
        padding: 24px;
    }

    .demo-card:hover {
        background: var(--surface-secondary);
        border-color: var(--accent-primary);
    }

    .card-content {
        display: flex;
        align-items: start;
        justify-content: space-between;
        gap: 12px;
    }

    .card-text {
        display: flex;
        flex-direction: column;
        gap: 8px;
        flex: 1;
    }

    .card-title {
        font-weight: 600;
        font-size: 18px;
        color: var(--content-primary);
    }

    .card-description {
        font-size: 14px;
        color: var(--content-secondary);
    }
</style>
