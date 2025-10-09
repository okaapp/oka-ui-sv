<script lang="ts">
    import Button from "$lib/components/button/Button.svelte";
    import SingleSelect from "$lib/components/select/SingleSelect.svelte";
    import Input from "$lib/components/input/Input.svelte";
    import type { SelectItem } from "$lib/components/select/Types.js";

    let xmplItems: SelectItem[] = [
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3.14" },
    ];
</script>

<h1>Welcome to your library project</h1>
<p>
    Create your package using @sveltejs/package and preview/showcase your work
    with SvelteKit
</p>
<p>
    Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the
    documentation
</p>

<div class="p-10 flex flex-col gap-4 w-96">
    <Button size="sm">Húp</Button>
    <Button variant="secondary">Húp</Button>
    <Button variant="outline" size="lg">Húp</Button>
    <SingleSelect items={xmplItems} placeholder="Chọn mau lên" />
    <Input placeholder="???" />
    <Input type="number" />
</div>
