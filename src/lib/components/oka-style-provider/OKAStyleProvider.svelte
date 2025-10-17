<script lang="ts">
    import "./oka-style.css";
    let { children, ...props } = $props();
</script>

<div id="oka-style-theme-container" class="default-light" {...props}>
    {@render children()}
</div>
