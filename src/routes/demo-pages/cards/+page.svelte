<script lang="ts">
    import { Badge, Button, Separator } from "$lib/index.ts";
    import GridFour from "phosphor-svelte/lib/GridFour";
    import MapPin from "phosphor-svelte/lib/MapPin";
    import CalendarBlank from "phosphor-svelte/lib/CalendarBlank";
    import User from "phosphor-svelte/lib/User";
    import Clock from "phosphor-svelte/lib/Clock";
    import Star from "phosphor-svelte/lib/Star";
    import Heart from "phosphor-svelte/lib/Heart";
    import ShoppingCart from "phosphor-svelte/lib/ShoppingCart";

    type Location = {
        id: number;
        name: string;
        address: string;
        manager: string;
        openHours: string;
        rating: number;
        status: "active" | "closed" | "maintenance";
        createdAt: Date;
    };

    const locations: Location[] = [
        {
            id: 1,
            name: "Cửa hàng Trung tâm",
            address: "123 Phố Chính, Quận Trung tâm, TP. Hồ Chí Minh",
            manager: "Nguyễn Văn An",
            openHours: "8:00 - 22:00",
            rating: 4.8,
            status: "active",
            createdAt: new Date("2024-01-15"),
        },
        {
            id: 2,
            name: "Chi nhánh Phía Bắc",
            address: "456 Đường Sồi, Khu Bắc, Quận 1",
            manager: "Trần Thị Bình",
            openHours: "9:00 - 21:00",
            rating: 4.6,
            status: "active",
            createdAt: new Date("2024-03-22"),
        },
        {
            id: 3,
            name: "Cửa hàng Phía Tây",
            address: "789 Đường Liễu, Quận Tây, Trung tâm mua sắm",
            manager: "Lê Minh Cường",
            openHours: "10:00 - 20:00",
            rating: 4.5,
            status: "maintenance",
            createdAt: new Date("2024-02-10"),
        },
        {
            id: 4,
            name: "Chợ Phía Đông",
            address: "321 Phố Thông, Quận Đông, Chợ Trung tâm",
            manager: "Phạm Thị Dương",
            openHours: "7:00 - 23:00",
            rating: 4.9,
            status: "active",
            createdAt: new Date("2024-05-08"),
        },
        {
            id: 5,
            name: "Quảng trường Phía Nam",
            address: "654 Đường Phong, Quận Nam, Trung tâm Plaza",
            manager: "Hoàng Văn Em",
            openHours: "Đóng cửa để sửa chữa",
            rating: 4.3,
            status: "closed",
            createdAt: new Date("2024-04-18"),
        },
        {
            id: 6,
            name: "Trung tâm Chính",
            address: "987 Phố Tùng, Lõi Thành phố, Khu Kinh doanh",
            manager: "Võ Thị Phương",
            openHours: "24/7",
            rating: 4.7,
            status: "active",
            createdAt: new Date("2024-06-30"),
        },
    ];

    function getStatusBadge(status: Location["status"]) {
        switch (status) {
            case "active":
                return { color: "success" as const, label: "Hoạt động" };
            case "closed":
                return { color: "error" as const, label: "Đóng cửa" };
            case "maintenance":
                return { color: "yellow" as const, label: "Bảo trì" };
        }
    }
</script>

<div class="page-container">
    <!-- Header -->
    <div class="page-header">
        <div class="page-header__title">
            <GridFour
                weight="duotone"
                style="width: 24px; height: auto; color: var(--content-primary);"
            />
            <h1 class="page-heading">Vị trí cửa hàng</h1>
        </div>
        <Button>Thêm vị trí mới</Button>
    </div>

    <!-- Cards Grid -->
    <div class="cards-grid">
        {#each locations as location}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
                class="location-card"
                onclick={() => {
                    console.log(`Selected location: ${location.id}`);
                }}
            >
                <!-- Header -->
                <div class="location-card__header">
                    <span class="location-card__title">{location.name}</span>
                    <Badge color={getStatusBadge(location.status).color}>
                        {getStatusBadge(location.status).label}
                    </Badge>
                </div>

                <Separator />

                <!-- Details -->
                <div class="location-card__details">
                    <div class="detail-row">
                        <MapPin
                            style="width: 20px; height: 20px; color: var(--content-secondary); flex-shrink: 0;"
                        />
                        <span class="detail-row__label">Địa chỉ</span>
                        <span class="detail-row__value">{location.address}</span
                        >
                    </div>

                    <div class="detail-row">
                        <User
                            style="width: 20px; height: 20px; color: var(--content-secondary); flex-shrink: 0;"
                        />
                        <span class="detail-row__label">Quản lý</span>
                        <span class="detail-row__value">{location.manager}</span
                        >
                    </div>

                    <div class="detail-row">
                        <Clock
                            style="width: 20px; height: 20px; color: var(--content-secondary); flex-shrink: 0;"
                        />
                        <span class="detail-row__label">Giờ mở cửa</span>
                        <span class="detail-row__value"
                            >{location.openHours}</span
                        >
                    </div>

                    <div class="detail-row">
                        <Star
                            weight="fill"
                            style="width: 20px; height: 20px; color: var(--content-secondary); flex-shrink: 0;"
                        />
                        <span class="detail-row__label">Đánh giá</span>
                        <span class="detail-row__value"
                            >{location.rating} / 5.0</span
                        >
                    </div>

                    <div class="detail-row">
                        <CalendarBlank
                            style="width: 20px; height: 20px; color: var(--content-secondary); flex-shrink: 0;"
                        />
                        <span class="detail-row__label">Ngày mở</span>
                        <span class="detail-row__value"
                            >{location.createdAt.toLocaleDateString()}</span
                        >
                    </div>
                </div>

                <Separator />

                <!-- Actions -->
                <div class="location-card__actions">
                    <Button variant="secondary"
                        ><Heart style="width: 20px; height: 20px;" />Yêu thích</Button
                    >
                    <Button variant="tertiary"
                        ><ShoppingCart style="width: 20px; height: 20px;" />Đặt
                        hàng</Button
                    >
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

    .cards-grid {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .location-card {
        cursor: pointer;
        width: 384px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        border-radius: 12px;
        border: 1px solid var(--stroke-light);
        background: var(--surface-primary);
        padding: 16px;
        transition: all 300ms;
    }

    .location-card:hover {
        background: var(--surface-secondary);
        border-color: var(--accent-primary);
    }

    .location-card__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .location-card__title {
        font-weight: 600;
        color: var(--content-primary);
    }

    .location-card__details {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .detail-row {
        display: flex;
        align-items: start;
        gap: 8px;
        width: 100%;
        min-height: 24px;
    }

    .detail-row__label {
        width: 80px;
        color: var(--content-secondary);
        font-size: 14px;
        line-height: 1.5;
    }

    .detail-row__value {
        flex: 1;
        color: var(--content-primary);
        font-size: 14px;
        font-weight: 500;
        line-height: 1.44;
    }

    .location-card__actions {
        display: flex;
        align-items: center;
        gap: 8px;
    }
</style>
