<script lang="ts">
    let { orientation = "horizontal" } = $props();

    const orientations = {
        horizontal: "w-full h-[1px]",
        vertical: "w-[1px] h-full",
    };
</script>

<div
    class={`bg-stroke-light ${orientation as keyof typeof orientations}`}
></div>
