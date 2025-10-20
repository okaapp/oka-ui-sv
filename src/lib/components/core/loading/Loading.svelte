<script>
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
        class="rim"
        style={`border:${rimThickness}px solid ${rimColor};`}
    ></div>

    <div
        class="ball"
        style={`width:${ballSize}px; height:${ballSize}px; background:${ballColor}; margin:-${ballSize / 2}px 0 0 -${ballSize / 2}px;`}
    ></div>
</div>

<style>
    .loader {
        position: relative;
        display: inline-block;
    }

    .rim {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        opacity: 0.8;
    }

    .ball {
        position: absolute;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        animation: revolve 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        --amplitude: 40px;
        --x: calc(cos(var(--angle)) * var(--amplitude));
        --y: calc(sin(var(--angle)) * var(--amplitude));
        translate: var(--x) var(--y);
    }

    @property --angle {
        syntax: "<angle>";
        inherits: true;
        initial-value: 0deg;
    }

    @keyframes revolve {
        0% {
            --angle: 0deg;
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
        100% {
            --angle: 360deg;
            opacity: 1;
        }
    }
</style>
