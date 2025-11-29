<script lang="ts">
    import "./oka-style.css";
    import { Tooltip } from "bits-ui";
    let { children, ...props } = $props();
</script>

<div id="oka-style-container" {...props}>
    <Tooltip.Provider>
        {@render children()}
    </Tooltip.Provider>
</div>
