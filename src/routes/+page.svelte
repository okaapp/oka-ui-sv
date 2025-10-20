<script lang="ts">
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
</script>

<div class="m-10 flex flex-col gap-4 w-[560px]">
    <div class="flex gap-6 items-center h-fit">
        <Loading />
        <div class="flex flex-col gap-0 h-fit">
            <h1 class="display-font text-5xl text-content-secondary">Oka UI</h1>
            <h3 class="display-font text-2xl text-content-primary">
                Components Library
            </h3>
        </div>
    </div>
    <ThemeSwitcher />
    <Separator orientation="horizontal" />
    <div class="flex items-center gap-3 w-full">
        <Button>Húp</Button>
        <Button variant="secondary">Húp</Button>
        <Button variant="tertiary">Húp</Button>
        <Button disabled>Húp</Button>
    </div>
    <SingleSelect items={xmplItems} class=" w-56" />
    <MultiSelect items={xmplItems} class=" w-56" />
    <Input />
    <Input placeholder="Nhập số" type="number" />
    <Separator orientation="vertical" />
    <div class="flex items-center gap-2">
        <Avatar src="img/test_avatar.jpg" />
        <Avatar fallback="AB" />
        <Avatar iconFallback />
        <Avatar iconFallback size="lg" />
    </div>
    <div class="flex items-center gap-2 flex-wrap">
        <Badge color="blue">Mì tôm</Badge>
        <Badge color="pink" variant="outline">Mì tôm</Badge>
        <Badge color="severe" size="sm">Mì tôm</Badge>
        <Badge color="success"><Smiley />Mì tôm</Badge>
        <Badge color="indigo" size="sm" variant="outline"
            ><Smiley />Mì tôm</Badge
        >
        {#each badgeItemExample as i}
            <Badge
                color={badgeColorMapExample[
                    i.label as keyof typeof badgeColorMapExample
                ]}>{i.label}</Badge
            >
        {/each}
    </div>
</div>
