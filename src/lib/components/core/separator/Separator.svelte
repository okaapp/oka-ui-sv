<script lang="ts">
    import "./separator.css";
    let { orientation = "horizontal" } = $props();
</script>

<div class={`separator separator--${orientation}`}></div>
