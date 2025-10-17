<script lang="ts">
    import Button from "$lib/components/button/Button.svelte";
    import SingleSelect from "$lib/components/select/SingleSelect.svelte";
    import Input from "$lib/components/input/Input.svelte";
    import type { SelectItem } from "$lib/components/select/Types.js";
    import MultiSelect from "$lib/components/select/MultiSelect.svelte";
    import Separator from "$lib/components/separator/Separator.svelte";
    import Loading from "$lib/components/loading/Loading.svelte";

    let xmplItems: SelectItem[] = [
        { value: "1", label: "1", subLabel: "Một" },
        { value: "2", label: "2", subLabel: "Hai" },
        { value: "3", label: "3.14", subLabel: "pi" },
    ];
</script>

<div class="p-10 flex flex-col gap-4 w-96">
    <Button>Húp</Button>
    <Button variant="secondary">Húp</Button>
    <Button variant="tertiary">Húp</Button>
    <Button disabled>Húp</Button>
    <Separator orientation="horizontal" />
    <SingleSelect items={xmplItems} placeholder="Chọn mau lên" />
    <MultiSelect items={xmplItems} placeholder="Chọn mau lên" />
    <Input placeholder="???" />
    <Input type="number" />
    <Separator orientation="vertical" />
    <Loading></Loading>
</div>
