<script lang="ts">
    import { Badge, Button, Dialog, Separator, Tooltips } from "$lib/index.ts";
    import Chats from "phosphor-svelte/lib/Chats";
    import Info from "phosphor-svelte/lib/Info";
    import Question from "phosphor-svelte/lib/Question";
    import WarningCircle from "phosphor-svelte/lib/WarningCircle";
    import CheckCircle from "phosphor-svelte/lib/CheckCircle";
    import Trash from "phosphor-svelte/lib/Trash";
    import FloppyDisk from "phosphor-svelte/lib/FloppyDisk";
    import X from "phosphor-svelte/lib/X";
    import ShieldCheck from "phosphor-svelte/lib/ShieldCheck";

    let deleteConfirmed = $state(false);
    let settingsSaved = $state(false);
</script>

<div class="page-container">
    <!-- Header -->
    <div class="page-header">
        <div class="page-header__title">
            <Chats
                weight="duotone"
                style="width: 24px; height: auto; color: var(--content-primary);"
            />
            <h1 class="page-heading">Hộp thoại & Chú thích</h1>
        </div>
    </div>

    <!-- Tooltips Section -->
    <div class="section-container">
        <h2 class="section-title">Ví dụ chú thích</h2>

        <div class="tooltips-grid">
            <div class="tooltip-item">
                <span class="tooltip-item__label">Chú thích thông tin</span>
                <Tooltips>
                    {#snippet trigger()}
                        <Button variant="secondary">
                            <Info style="width: 20px; height: 20px;" />
                            Di chuột để xem thêm
                        </Button>
                    {/snippet}
                    Đây là thông tin hữu ích xuất hiện khi bạn di chuột qua phần
                    tử.
                </Tooltips>
            </div>

            <div class="tooltip-item">
                <span class="tooltip-item__label">Chú thích câu hỏi</span>
                <Tooltips>
                    {#snippet trigger()}
                        <div class="tooltip-trigger">
                            <span class="tooltip-trigger__text">Đây là gì?</span
                            >
                            <Question
                                style="width: 20px; height: 20px; color: var(--content-tertiary);"
                            />
                        </div>
                    {/snippet}
                    Tính năng này giúp bạn quản lý cài đặt tài khoản và tùy chọn
                    hiệu quả hơn.
                </Tooltips>
            </div>

            <div class="tooltip-item">
                <span class="tooltip-item__label">Chú thích hộp</span>
                <Tooltips>
                    {#snippet trigger()}
                        <Badge color="blue">Gói chuyên nghiệp</Badge>
                    {/snippet}
                    Gói đăng ký đang hoạt động với quyền truy cập đầy đủ các tính
                    năng cao cấp
                </Tooltips>
            </div>

            <div class="tooltip-item">
                <span class="tooltip-item__label">Chú thích biểu tượng</span>
                <Tooltips>
                    {#snippet trigger()}
                        <div class="icon-box">
                            <ShieldCheck
                                weight="fill"
                                style="width: 24px; height: 24px; color: var(--content-success);"
                            />
                        </div>
                    {/snippet}
                    Tài khoản của bạn đã được xác minh và bảo mật
                </Tooltips>
            </div>
        </div>
    </div>

    <!-- Dialog Examples Section -->
    <div class="section-container">
        <h2 class="section-title">Ví dụ hộp thoại</h2>

        <div class="dialogs-grid">
            <!-- Simple Info Dialog -->
            <Dialog size="md">
                {#snippet trigger()}
                    <Button variant="secondary">
                        <Info style="width: 20px; height: 20px;" />
                        Hộp thoại đơn giản
                    </Button>
                {/snippet}
                {#snippet title()}
                    Thông tin
                {/snippet}
                {#snippet description()}
                    <p style="margin: 0; color: var(--content-secondary);">
                        Đây là hộp thoại đơn giản với thông tin cơ bản.
                    </p>
                {/snippet}

                <div style="padding: 16px;">
                    <p style="margin: 0; color: var(--content-secondary);">
                        Hộp thoại là cửa sổ modal tập trung sự chú ý của người
                        dùng vào thông tin hoặc hành động quan trọng. Chúng có
                        thể chứa văn bản, biểu mẫu, hoặc các phần tử tương tác.
                    </p>
                </div>
            </Dialog>

            <!-- Confirmation Dialog -->
            <Dialog size="md">
                {#snippet trigger()}
                    <Button variant="secondary" disabled={deleteConfirmed}>
                        <Trash style="width: 20px; height: 20px;" />
                        Xóa mục
                    </Button>
                {/snippet}
                {#snippet title()}
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <WarningCircle
                            weight="fill"
                            style="width: 24px; height: 24px; color: var(--content-error);"
                        />
                        Xác nhận xóa
                    </div>
                {/snippet}
                {#snippet description()}
                    <p style="margin: 0; color: var(--content-secondary);">
                        Hành động này không thể hoàn tác. Bạn có chắc chắn muốn
                        tiếp tục?
                    </p>
                {/snippet}

                <div
                    style="padding: 16px; display: flex; flex-direction: column; gap: 16px;"
                >
                    <div
                        style="padding: 12px; border-radius: 8px; background: var(--surface-error); border: 1px solid var(--stroke-error);"
                    >
                        <p
                            style="margin: 0; font-size: 14px; color: var(--content-error);"
                        >
                            Cảnh báo: Hành động này sẽ xóa vĩnh viễn mục đã chọn
                            và tất cả dữ liệu liên quan.
                        </p>
                    </div>
                </div>

                {#snippet actionButtons()}
                    <div
                        style="display: flex; align-items: center; justify-content: flex-end; gap: 12px;"
                    >
                        <Button variant="tertiary">
                            <X style="width: 20px; height: 20px;" />
                            Hủy
                        </Button>
                        <Button onclick={() => (deleteConfirmed = true)}>
                            <Trash style="width: 20px; height: 20px;" />
                            Xóa vĩnh viễn
                        </Button>
                    </div>
                {/snippet}
            </Dialog>

            <!-- Form Dialog -->
            <Dialog size="md">
                {#snippet trigger()}
                    <Button variant="secondary" disabled={settingsSaved}>
                        <FloppyDisk style="width: 20px; height: 20px;" />
                        Lưu cài đặt
                    </Button>
                {/snippet}
                {#snippet title()}
                    Lưu cài đặt của bạn
                {/snippet}
                {#snippet description()}
                    <p style="margin: 0; color: var(--content-secondary);">
                        Cài đặt của bạn sẽ được áp dụng ngay lập tức và lưu vào
                        hồ sơ của bạn.
                    </p>
                {/snippet}

                <div
                    style="padding: 16px; display: flex; flex-direction: column; gap: 16px;"
                >
                    <div
                        style="display: flex; flex-direction: column; gap: 8px;"
                    >
                        <span
                            style="font-size: 14px; font-weight: 500; color: var(--content-secondary);"
                            >Tên cài đặt</span
                        >
                        <input
                            type="text"
                            placeholder="Nhập tên cài đặt"
                            style="padding: 12px; border-radius: 8px; border: 1px solid var(--stroke-light); background: var(--surface-primary);"
                        />
                    </div>

                    <div
                        style="display: flex; flex-direction: column; gap: 8px;"
                    >
                        <span
                            style="font-size: 14px; font-weight: 500; color: var(--content-secondary);"
                            >Mô tả</span
                        >
                        <textarea
                            placeholder="Nhập mô tả"
                            rows="3"
                            style="padding: 12px; border-radius: 8px; border: 1px solid var(--stroke-light); background: var(--surface-primary); resize: none;"
                        ></textarea>
                    </div>
                </div>

                {#snippet actionButtons()}
                    <div
                        style="display: flex; align-items: center; justify-content: space-between; width: 100%;"
                    >
                        <span
                            style="font-size: 14px; color: var(--content-tertiary);"
                        >
                            Thay đổi sẽ được lưu vào hồ sơ của bạn
                        </span>
                        <Button onclick={() => (settingsSaved = true)}>
                            <CheckCircle style="width: 20px; height: 20px;" />
                            Lưu thay đổi
                        </Button>
                    </div>
                {/snippet}
            </Dialog>

            <!-- Nested Content Dialog -->
            <Dialog size="md">
                {#snippet trigger()}
                    <Button variant="secondary">
                        <Info style="width: 20px; height: 20px;" />
                        Nội dung phong phú
                    </Button>
                {/snippet}
                {#snippet title()}
                    Tổng quan tính năng
                {/snippet}
                {#snippet description()}
                    <p style="margin: 0; color: var(--content-secondary);">
                        Tìm hiểu về các tính năng và khả năng chính của nền tảng
                        chúng tôi.
                    </p>
                {/snippet}

                <div
                    style="padding: 16px; display: flex; flex-direction: column; gap: 16px;"
                >
                    <div
                        style="display: flex; flex-direction: column; gap: 12px;"
                    >
                        <div
                            style="display: flex; align-items: flex-start; gap: 12px;"
                        >
                            <div
                                style="padding: 8px; border-radius: 8px; background: var(--surface-tertiary); flex-shrink: 0;"
                            >
                                <CheckCircle
                                    weight="fill"
                                    style="width: 20px; height: 20px; color: var(--content-success);"
                                />
                            </div>
                            <div
                                style="display: flex; flex-direction: column; gap: 4px;"
                            >
                                <span
                                    style="font-weight: 600; color: var(--content-primary);"
                                    >Tích hợp dễ dàng</span
                                >
                                <span
                                    style="font-size: 14px; color: var(--content-secondary);"
                                >
                                    Kết nối liền mạch với các công cụ và quy
                                    trình hiện tại của bạn.
                                </span>
                            </div>
                        </div>

                        <div
                            style="display: flex; align-items: flex-start; gap: 12px;"
                        >
                            <div
                                style="padding: 8px; border-radius: 8px; background: var(--surface-tertiary); flex-shrink: 0;"
                            >
                                <CheckCircle
                                    weight="fill"
                                    style="width: 20px; height: 20px; color: var(--content-success);"
                                />
                            </div>
                            <div
                                style="display: flex; flex-direction: column; gap: 4px;"
                            >
                                <span
                                    style="font-weight: 600; color: var(--content-primary);"
                                    >Cập nhật theo thời gian thực</span
                                >
                                <span
                                    style="font-size: 14px; color: var(--content-secondary);"
                                >
                                    Nhận thông báo ngay lập tức và đồng bộ dữ
                                    liệu trực tiếp.
                                </span>
                            </div>
                        </div>

                        <div
                            style="display: flex; align-items: flex-start; gap: 12px;"
                        >
                            <div
                                style="padding: 8px; border-radius: 8px; background: var(--surface-tertiary); flex-shrink: 0;"
                            >
                                <CheckCircle
                                    weight="fill"
                                    style="width: 20px; height: 20px; color: var(--content-success);"
                                />
                            </div>
                            <div
                                style="display: flex; flex-direction: column; gap: 4px;"
                            >
                                <span
                                    style="font-weight: 600; color: var(--content-primary);"
                                    >Phân tích nâng cao</span
                                >
                                <span
                                    style="font-size: 14px; color: var(--content-secondary);"
                                >
                                    Nhận thông tin chi tiết với các công cụ báo
                                    cáo và trực quan hóa mạnh mẽ.
                                </span>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    <div
                        style="padding: 12px; border-radius: 8px; background: color-mix(in srgb, var(--accent-primary) 10%, transparent); border: 1px solid var(--accent-primary);"
                    >
                        <p
                            style="margin: 0; font-size: 14px; color: var(--content-primary);"
                        >
                            <strong>Mẹo chuyên nghiệp:</strong> Kết hợp nhiều tính
                            năng để đạt hiệu suất và năng suất tối đa.
                        </p>
                    </div>
                </div>
            </Dialog>
        </div>

        <!-- Status Messages -->
        {#if deleteConfirmed}
            <div class="status-message status-message--error">
                <CheckCircle
                    style="width: 20px; height: 20px; color: var(--content-error);"
                    weight="fill"
                />
                <span class="status-message__text">Đã xóa mục thành công</span>
            </div>
        {/if}

        {#if settingsSaved}
            <div class="status-message status-message--success">
                <CheckCircle
                    weight="fill"
                    style="width: 20px; height: 20px; color: var(--content-success);"
                />
                <span class="status-message__text"
                    >Đã lưu cài đặt thành công</span
                >
            </div>
        {/if}
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

    .section-container {
        border-radius: 24px;
        background: linear-gradient(
            to bottom,
            var(--surface-secondary),
            var(--surface-primary)
        );
        padding: 24px;
        border: 1px solid var(--stroke-light);
    }

    .section-title {
        font-size: 18px;
        font-weight: 600;
        color: var(--content-primary);
        margin: 0 0 16px 0;
    }

    .tooltips-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
    }

    .tooltip-item {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .tooltip-item__label {
        font-size: 14px;
        color: var(--content-secondary);
    }

    .tooltip-trigger {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .tooltip-trigger__text {
        color: var(--content-primary);
    }

    .icon-box {
        padding: 8px;
        border-radius: 8px;
        background: var(--surface-tertiary);
        cursor: pointer;
        transition: background-color 300ms;
    }

    .icon-box:hover {
        background: var(--surface-secondary);
    }

    .dialogs-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 16px;
    }

    .dialog-content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .dialog-text {
        color: var(--content-secondary);
        margin: 0;
    }

    .dialog-title-with-icon {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .warning-box {
        padding: 12px;
        border-radius: 8px;
        background: var(--surface-error);
        border: 1px solid var(--stroke-error);
    }

    .warning-text {
        font-size: 14px;
        color: var(--content-error);
        margin: 0;
    }

    .dialog-actions {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 12px;
    }

    .dialog-form {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .form-field {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .form-field__label {
        font-size: 14px;
        font-weight: 500;
        color: var(--content-secondary);
    }

    .form-input {
        padding: 12px;
        border-radius: 8px;
        border: 1px solid var(--stroke-light);
        background: var(--surface-primary);
        color: var(--content-primary);
        font-size: 14px;
    }

    .form-textarea {
        padding: 12px;
        border-radius: 8px;
        border: 1px solid var(--stroke-light);
        background: var(--surface-primary);
        color: var(--content-primary);
        font-size: 14px;
        resize: none;
    }

    .dialog-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .dialog-footer__text {
        font-size: 14px;
        color: var(--content-tertiary);
    }

    .features-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .feature-item {
        display: flex;
        align-items: flex-start;
        gap: 12px;
    }

    .feature-icon {
        padding: 8px;
        border-radius: 8px;
        background: var(--surface-tertiary);
        flex-shrink: 0;
    }

    .feature-info {
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    .feature-title {
        font-weight: 600;
        color: var(--content-primary);
    }

    .feature-description {
        font-size: 14px;
        color: var(--content-secondary);
    }

    .pro-tip-box {
        padding: 12px;
        border-radius: 8px;
        background: color-mix(in srgb, var(--accent-primary) 10%, transparent);
        border: 1px solid var(--accent-primary);
    }

    .pro-tip-text {
        font-size: 14px;
        color: var(--content-primary);
        margin: 0;
    }

    .status-message {
        margin-top: 16px;
        padding: 12px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .status-message--error {
        background: var(--surface-error);
        border: 1px solid var(--stroke-error);
    }

    .status-message--success {
        background: var(--surface-success);
        border: 1px solid var(--stroke-success);
    }

    .status-message__text {
        font-size: 14px;
    }

    .status-message--error .status-message__text {
        color: var(--content-error);
    }

    .status-message--success .status-message__text {
        color: var(--content-success);
    }
</style>
