<script lang="ts">
    import {
        Badge,
        Button,
        Dialog,
        EngineOrb,
        Loading,
        Separator,
        Tooltips,
    } from "$lib/index.ts";
    import SquaresFour from "phosphor-svelte/lib/SquaresFour";
    import TrendUp from "phosphor-svelte/lib/TrendUp";
    import TrendDown from "phosphor-svelte/lib/TrendDown";
    import Users from "phosphor-svelte/lib/Users";
    import ShoppingCart from "phosphor-svelte/lib/ShoppingCart";
    import CurrencyCircleDollar from "phosphor-svelte/lib/CurrencyCircleDollar";
    import Package from "phosphor-svelte/lib/Package";
    import WarningCircle from "phosphor-svelte/lib/WarningCircle";
    import ChartLine from "phosphor-svelte/lib/ChartLine";
    import Question from "phosphor-svelte/lib/Question";

    const stats = [
        {
            label: "Tổng doanh thu",
            value: "310.000.000",
            trend: "+12.5%",
            trendUp: true,
            icon: CurrencyCircleDollar,
        },
        {
            label: "Tổng đơn hàng",
            value: "2,543",
            trend: "+8.2%",
            trendUp: true,
            icon: ShoppingCart,
        },
        {
            label: "Người dùng hoạt động",
            value: "8,492",
            trend: "-3.1%",
            trendUp: false,
            icon: Users,
        },
        {
            label: "Sản phẩm tồn kho",
            value: "1,234",
            trend: "+5.4%",
            trendUp: true,
            icon: Package,
        },
        {
            label: "Tỷ lệ chuyển đổi",
            value: "3.24%",
            trend: "+1.2%",
            trendUp: true,
            icon: ChartLine,
        },
        {
            label: "Giá trị đơn TB",
            value: "1.220.000 ₫",
            trend: "+6.8%",
            trendUp: true,
            icon: CurrencyCircleDollar,
        },
    ];

    const topProducts = [
        { name: "Cà phê hạt cao cấp", sales: 856, value: "25.680.000 ₫" },
        { name: "Bộ sưu tập trà hữu cơ", sales: 742, value: "18.550.000 ₫" },
        { name: "Hộp sô-cô-la thủ công", sales: 689, value: "20.670.000 ₫" },
        { name: "Bộ cà phê rang đặc biệt", sales: 523, value: "15.690.000 ₫" },
        { name: "Gói ăn vặt cao cấp", sales: 412, value: "8.240.000 ₫" },
    ];

    const alerts = [
        {
            title: "Cảnh báo tồn kho thấp",
            message: "Cà phê hạt cao cấp sắp hết - còn 15 đơn vị",
            type: "warning",
        },
        {
            title: "Cập nhật hệ thống",
            message: "Bảo trì theo lịch vào đêm nay lúc 2:00 sáng",
            type: "info",
        },
        {
            title: "Lỗi thanh toán",
            message: "3 giao dịch thanh toán thất bại cần xem xét",
            type: "error",
        },
    ];

    let isLoading = $state(false);
</script>

<div class="page-container">
    <!-- Header -->
    <div class="page-header">
        <div class="header-content">
            <div class="header-title">
                <SquaresFour
                    weight="duotone"
                    style="width: 24px; height: auto; color: var(--content-primary);"
                />
                <h1>Tổng quan</h1>
            </div>
            <div class="header-subtitle">
                <span>Phân tích và chỉ số hiệu suất thời gian thực</span>
                <Tooltips>
                    {#snippet trigger()}
                        <Question style="width: 20px; height: 20px;" />
                    {/snippet}
                    Bảng điều khiển này trình bày các thẻ thống kê, thanh tiến độ
                    và thành phần cảnh báo theo mẫu thiết kế OKA.
                </Tooltips>
            </div>
        </div>
        <Dialog>
            {#snippet trigger()}
                <Button>Xem báo cáo đầy đủ</Button>
            {/snippet}
            {#snippet title()}
                Báo cáo phân tích đầy đủ
            {/snippet}
            {#snippet description()}
                Phân tích chi tiết và thông tin chuyên sâu cho giai đoạn đã
                chọn. Có sẵn tùy chọn xuất và lọc nâng cao.
            {/snippet}
            <div style="padding: 16px;">
                <p style="color: var(--content-secondary); margin: 0;">
                    Nội dung này sẽ chứa các biểu đồ, đồ thị và trực quan hóa dữ
                    liệu chi tiết.
                </p>
            </div>
        </Dialog>
    </div>

    {#if isLoading}
        <div class="loading-container">
            <Loading />
        </div>
    {:else}
        <!-- Stats Grid -->
        <div class="stats-grid">
            {#each stats as stat, i}
                <div class="stat-card" style="animation-delay: {i * 50}ms;">
                    <div class="stat-header">
                        <stat.icon
                            style="width: 20px; height: 20px; flex-shrink: 0; color: var(--content-secondary);"
                        ></stat.icon>
                        <span class="stat-label">{stat.label}</span>
                    </div>
                    <div class="stat-content">
                        <p class="stat-value">{stat.value}</p>
                        <div class="stat-trend">
                            {#if stat.trendUp}
                                <TrendUp
                                    style="width: 16px; height: 16px; color: var(--content-success);"
                                    weight="bold"
                                />
                                <span class="trend-up">{stat.trend}</span>
                            {:else}
                                <TrendDown
                                    style="width: 16px; height: 16px; color: var(--content-error);"
                                    weight="bold"
                                />
                                <span class="trend-down">{stat.trend}</span>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}
        </div>

        <div class="content-grid">
            <!-- Top Products -->
            <div class="top-products-card">
                <span class="section-title">Sản phẩm bán chạy</span>
                <div class="products-list">
                    {#each topProducts as item}
                        <div class="product-item">
                            <div class="product-header">
                                <p class="product-name">{item.name}</p>
                                <div class="product-info">
                                    <Badge color="gray"
                                        >{item.sales} đã bán</Badge
                                    >
                                    <p class="product-value">{item.value}</p>
                                </div>
                            </div>
                            <div class="progress-bar-bg">
                                <div
                                    class="progress-bar-fill"
                                    style="width: {(item.sales /
                                        topProducts[0].sales) *
                                        100}%;"
                                ></div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>

            <!-- Alerts -->
            <div class="alerts-card">
                <span class="section-title">Cảnh báo hệ thống</span>
                <div class="alerts-container">
                    {#each alerts as alert}
                        <div class="alert-item alert-{alert.type}">
                            <div class="alert-content">
                                <WarningCircle
                                    style="width: 20px; height: 20px; flex-shrink: 0; color: {alert.type ===
                                    'error'
                                        ? 'var(--content-error)'
                                        : alert.type === 'warning'
                                          ? 'var(--content-warning)'
                                          : 'var(--content-secondary)'};"
                                />
                                <div class="alert-text">
                                    <span class="alert-title"
                                        >{alert.title}</span
                                    >
                                    <span class="alert-message"
                                        >{alert.message}</span
                                    >
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </div>

        <!-- Additional Info Section -->
        <div class="info-section">
            <div class="info-content">
                <EngineOrb />
                <div class="info-text">
                    <span class="info-title">Cần thêm thông tin chi tiết?</span>
                    <span class="info-description"
                        >Nâng cấp lên gói Pro để có phân tích nâng cao, dự báo
                        và gợi ý</span
                    >
                </div>
                <Button variant="secondary">Tìm hiểu thêm</Button>
            </div>
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

    .header-content {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
    }

    .header-title {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
    }

    .header-title h1 {
        font-size: 24px;
        line-height: 1.2;
        font-weight: 600;
        color: var(--content-primary);
        margin: 0;
    }

    .header-subtitle {
        display: flex;
        align-items: center;
        gap: 4px;
        color: var(--content-tertiary);
    }

    .header-subtitle span {
        font-size: 14px;
    }

    .loading-container {
        min-height: 384px;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .stats-grid {
        width: 100%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
    }

    .stat-card {
        display: flex;
        flex-direction: column;
        gap: 8px;
        width: 252px;
        padding: 24px;
        border-radius: 24px;
        background: linear-gradient(
            to top,
            var(--surface-secondary),
            var(--surface-primary)
        );
        animation: card-entrance 0.3s ease-out forwards;
        opacity: 0;
    }

    @keyframes card-entrance {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .stat-header {
        display: flex;
        gap: 4px;
        align-items: center;
    }

    .stat-label {
        font-size: 14px;
        font-weight: 500;
        color: var(--content-tertiary);
    }

    .stat-content {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
    }

    .stat-value {
        font-size: 20px;
        font-weight: 600;
        color: var(--content-primary);
        margin: 0;
    }

    .stat-trend {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .trend-up {
        font-size: 14px;
        font-weight: 500;
        color: var(--content-success);
    }

    .trend-down {
        font-size: 14px;
        font-weight: 500;
        color: var(--content-error);
    }

    .content-grid {
        display: grid;
        grid-template-columns: 7fr 5fr;
        gap: 24px;
    }

    .top-products-card {
        border-radius: 24px;
        background: linear-gradient(
            to bottom,
            var(--surface-secondary),
            var(--surface-primary)
        );
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        animation: card-entrance 0.3s ease-out forwards;
    }

    .alerts-card {
        border-radius: 24px;
        background: linear-gradient(
            to bottom,
            var(--surface-secondary),
            var(--surface-primary)
        );
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        animation: card-entrance 0.3s ease-out forwards;
    }

    .section-title {
        font-size: 20px;
        font-weight: 600;
        color: var(--content-primary);
        margin-bottom: 16px;
        display: block;
    }

    .products-list {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 20px;
        margin-top: 8px;
    }

    .product-item {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 4px;
        min-width: 0;
    }

    .product-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 4px;
    }

    .product-name {
        font-size: 16px;
        color: var(--content-secondary);
        margin: 0;
    }

    .product-info {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .product-value {
        font-size: 16px;
        font-weight: 600;
        color: var(--content-primary);
        margin: 0;
    }

    .progress-bar-bg {
        height: 8px;
        border-radius: 9999px;
        background: var(--stroke-muted);
    }

    .progress-bar-fill {
        height: 100%;
        border-radius: 9999px;
        background: var(--accent-primary);
        transition: all 0.5s ease;
    }

    .alerts-container {
        background: var(--surface-primary);
        height: 100%;
        border-radius: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .alert-item {
        padding: 12px;
        border-radius: 8px;
        border: 1px solid;
    }

    .alert-item.alert-error {
        border-color: var(--stroke-error);
        background: var(--surface-error);
    }

    .alert-item.alert-warning {
        border-color: var(--stroke-warning);
        background: var(--surface-warning);
    }

    .alert-item.alert-info {
        border-color: var(--stroke-light);
        background: var(--surface-secondary);
    }

    .alert-content {
        display: flex;
        align-items: flex-start;
        gap: 8px;
    }

    .alert-text {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .alert-title {
        font-weight: 600;
        font-size: 14px;
        color: var(--content-primary);
    }

    .alert-message {
        font-size: 14px;
        color: var(--content-secondary);
    }

    .info-section {
        border-radius: 24px;
        background: linear-gradient(
            to right,
            var(--surface-primary) 0%,
            var(--surface-secondary) 30%,
            var(--surface-primary) 100%
        );
        padding: 24px;
        border: 1px solid var(--accent-primary);
        animation: card-entrance 0.3s ease-out forwards;
    }

    .info-content {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    .info-text {
        display: flex;
        flex-direction: column;
        gap: 4px;
        width: 100%;
    }

    .info-title {
        font-size: 20px;
        font-weight: 600;
        color: var(--content-primary);
    }

    .info-description {
        font-size: 14px;
        color: var(--content-secondary);
    }
</style>
