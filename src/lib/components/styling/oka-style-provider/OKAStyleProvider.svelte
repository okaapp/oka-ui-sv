<script lang="ts">
    import "./oka-style.css";
    let { children, ...props } = $props();
</script>

<div id="oka-style-container" {...props}>
    {@render children()}
</div>
