<script lang="ts">
    import {
        Badge,
        Button,
        Checkbox,
        Input,
        MultiSelect,
        PinInput,
        SingleSelect,
        type SelectItem,
    } from "$lib/index.ts";
    import Notepad from "phosphor-svelte/lib/Notepad";
    import PaperPlaneTilt from "phosphor-svelte/lib/PaperPlaneTilt";
    import X from "phosphor-svelte/lib/X";

    // Form state
    let fullName = $state("");
    let email = $state("");
    let phoneNumber = $state("");
    let department = $state("");
    let role = $state("");
    let skills: string[] = $state([]);
    let newsletter = $state(false);
    let terms = $state(false);
    let privacy = $state(false);
    let pinCode = $state("");

    // Select options
    const departmentOptions: SelectItem[] = [
        { label: "Kỹ thuật", value: "engineering" },
        { label: "Thiết kế", value: "design" },
        { label: "Tiếp thị", value: "marketing" },
        { label: "Bán hàng", value: "sales" },
        { label: "Hỗ trợ", value: "support" },
        { label: "Vận hành", value: "operations" },
    ];

    const roleOptions: SelectItem[] = [
        { label: "Quản lý", value: "manager" },
        { label: "Lập trình viên cao cấp", value: "senior-dev" },
        { label: "Lập trình viên", value: "developer" },
        { label: "Lập trình viên mới", value: "junior-dev" },
        { label: "Thực tập sinh", value: "intern" },
    ];

    const skillOptions: SelectItem[] = [
        { label: "JavaScript", value: "javascript" },
        { label: "TypeScript", value: "typescript" },
        { label: "Python", value: "python" },
        { label: "React", value: "react" },
        { label: "Svelte", value: "svelte" },
        { label: "Node.js", value: "nodejs" },
        { label: "SQL", value: "sql" },
        { label: "Docker", value: "docker" },
        { label: "AWS", value: "aws" },
    ];

    function handleSubmit() {
        console.log("Form submitted:", {
            fullName,
            email,
            phoneNumber,
            department,
            role,
            skills,
            newsletter,
            terms,
            privacy,
            pinCode,
        });
    }

    function handleReset() {
        fullName = "";
        email = "";
        phoneNumber = "";
        department = "";
        role = "";
        skills = [];
        newsletter = false;
        terms = false;
        privacy = false;
        pinCode = "";
    }

    $effect(() => {
        console.log("Selected skills:", skills);
    });
</script>

<div class="page-container">
    <!-- Header -->
    <div class="page-header">
        <div class="page-header__title">
            <Notepad
                weight="duotone"
                style="width: 24px; height: auto; color: var(--content-primary);"
            />
            <h1 class="page-heading">Đăng ký nhân viên</h1>
        </div>
    </div>

    <!-- Form Container -->
    <div class="form-container">
        <div class="form-wrapper">
            <!-- Personal Information Section -->
            <div class="form-section">
                <div class="form-section__header">
                    <h2 class="form-section__title">Thông tin cá nhân</h2>
                    <Badge color="gray">Bắt buộc</Badge>
                </div>

                <div class="form-fields">
                    <div class="form-field">
                        <label for="fullName" class="form-label"
                            >Họ và tên *</label
                        >
                        <Input
                            id="fullName"
                            placeholder="Nhập họ và tên của bạn"
                            bind:value={fullName}
                        />
                    </div>

                    <div class="form-grid">
                        <div class="form-field">
                            <label for="email" class="form-label"
                                >Địa chỉ email *</label
                            >
                            <Input
                                id="email"
                                type="email"
                                placeholder="ten@example.com"
                                bind:value={email}
                            />
                        </div>

                        <div class="form-field">
                            <label for="phone" class="form-label"
                                >Số điện thoại</label
                            >
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="+84 (901) 234-567"
                                bind:value={phoneNumber}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Work Information Section -->
            <div class="form-section">
                <h2 class="form-section__title">Thông tin công việc</h2>

                <div class="form-grid">
                    <div class="form-field">
                        <label for="department" class="form-label"
                            >Phòng ban *</label
                        >
                        <SingleSelect
                            id="department"
                            placeholder="Chọn phòng ban"
                            bind:value={department}
                            items={departmentOptions}
                        />
                    </div>

                    <div class="form-field">
                        <label for="role" class="form-label">Chức vụ *</label>
                        <SingleSelect
                            id="role"
                            placeholder="Chọn chức vụ"
                            bind:value={role}
                            items={roleOptions}
                        />
                    </div>
                </div>

                <div class="form-field">
                    <label for="skills" class="form-label"
                        >Kỹ năng & Chuyên môn</label
                    >
                    <MultiSelect
                        id="skills"
                        placeholder="Chọn kỹ năng của bạn"
                        bind:value={skills}
                        items={skillOptions}
                    />
                    {#if skills.length > 0}
                        <div class="skills-badges">
                            {#each skills as skill}
                                <Badge color="blue">{skill}</Badge>
                            {/each}
                        </div>
                    {/if}
                </div>
            </div>

            <!-- Security Section -->
            <div class="form-section">
                <h2 class="form-section__title">Cài đặt bảo mật</h2>

                <div class="form-field">
                    <label for="pin" class="form-label">Mã PIN truy cập *</label
                    >
                    <PinInput maxlength={6} bind:value={pinCode} />
                    <span class="form-help-text"
                        >Tạo mã PIN gồm 6 chữ số để truy cập an toàn</span
                    >
                </div>
            </div>

            <!-- Preferences Section -->
            <div class="form-section">
                <h2 class="form-section__title">Tùy chọn & Chấp thuận</h2>

                <div class="form-checkboxes">
                    <div class="checkbox-field">
                        <Checkbox id="newsletter" bind:checked={newsletter} />
                        <label for="newsletter" class="checkbox-label">
                            Đăng ký nhận bản tin và cập nhật của công ty
                        </label>
                    </div>

                    <div class="checkbox-field">
                        <Checkbox id="terms" bind:checked={terms} />
                        <label for="terms" class="checkbox-label">
                            Tôi đồng ý với <a href="#" class="form-link"
                                >Điều khoản và Điều kiện</a
                            > *
                        </label>
                    </div>

                    <div class="checkbox-field">
                        <Checkbox id="privacy" bind:checked={privacy} />
                        <label for="privacy" class="checkbox-label">
                            Tôi đã đọc và chấp nhận <a
                                href="#"
                                class="form-link">Chính sách bảo mật</a
                            > *
                        </label>
                    </div>
                </div>
            </div>

            <!-- Form Actions -->
            <div class="form-actions">
                <Button variant="tertiary" onclick={handleReset}>
                    <X style="width: 20px; height: 20px;" />Xóa biểu mẫu</Button
                >
                <Button
                    onclick={handleSubmit}
                    disabled={!fullName ||
                        !email ||
                        !department ||
                        !role ||
                        !terms ||
                        !privacy ||
                        pinCode.length !== 6}
                >
                    <PaperPlaneTilt style="width: 20px; height: 20px;" />
                    Gửi đăng ký
                </Button>
            </div>
        </div>
    </div>
</div>

<style>
    .page-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 24px;
        align-items: center;
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

    .form-container {
        border-radius: 24px;
        background: var(--surface-secondary);
        padding: 32px;
        width: max-content;
    }

    .form-wrapper {
        width: 960px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .form-section {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .form-section__header {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .form-section__title {
        font-size: 18px;
        font-weight: 600;
        color: var(--content-primary);
        margin: 0;
    }

    .form-fields {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    .form-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }

    .form-field {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .form-label {
        font-size: 14px;
        font-weight: 500;
        color: var(--content-secondary);
    }

    .form-help-text {
        font-size: 12px;
        color: var(--content-tertiary);
    }

    .skills-badges {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 8px;
    }

    .form-checkboxes {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .checkbox-field {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .checkbox-label {
        font-size: 14px;
        color: var(--content-primary);
        cursor: pointer;
    }

    .form-link {
        color: var(--accent-primary);
        text-decoration: none;
    }

    .form-link:hover {
        text-decoration: underline;
    }

    .form-actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 16px;
        border-top: 1px solid var(--stroke-light);
    }
</style>
