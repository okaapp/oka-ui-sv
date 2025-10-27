<script>
    import "./loading.css";

    export let size = 100;
    export let rimColor = "#63caff";
    export let ballColor = "#384bff";

    const rimThickness = size * 0.2;
    const ballSize = size * 0.2;
    const orbitRadius = (size - ballSize) / 2 - rimThickness / 2;
</script>

<div
    class="loader"
    style={`--r:${orbitRadius}px; width:${size}px; height:${size}px;`}
>
    <div
        class="loader__rim"
        style={`border:${rimThickness}px solid ${rimColor};`}
    ></div>

    <div
        class="loader__ball"
        style={`width:${ballSize}px; height:${ballSize}px; background:${ballColor}; margin:-${ballSize / 2}px 0 0 -${ballSize / 2}px;`}
    ></div>
</div>
