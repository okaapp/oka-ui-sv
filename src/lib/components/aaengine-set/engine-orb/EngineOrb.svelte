<script lang="ts">
    import "./engine-orb.css";
</script>

<div class="spinning-container">
    <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-12 h-12 relative"
        preserveAspectRatio="xMidYMid meet"
    >
        <g clip-path="url(#clip0_761_1252)">
            <ellipse
                class="liquid-0"
                cx="24"
                cy="38.5"
                rx="16"
                ry="9.5"
                fill="url(#paint0_radial_761_1252)"
                style="animation: liquid1 8s linear infinite; filter: blur(4px);"
            ></ellipse>
            <ellipse
                class="liquid-1"
                cx="24"
                cy="13.5"
                rx="22"
                ry="13.5"
                fill="url(#paint1_radial_761_1252)"
                style="animation: liquid2 8s linear infinite; filter: blur(4px);"
            ></ellipse>
            <foreignObject x="-8" y="-8" width="63.9297" height="64"
                ><div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style="backdrop-filter:blur(4px);clip-path:url(#bgblur_1_761_1252_clip_path);height:100%;width:100%"
                ></div></foreignObject
            >
            <ellipse
                data-figma-bg-blur-radius="8"
                cx="23.9646"
                cy="24"
                rx="23.9646"
                ry="24"
                fill="var(--surface-primary, #fff)"
                fill-opacity="0.16"
            ></ellipse>
        </g>
        <defs>
            <clipPath
                id="bgblur_1_761_1252_clip_path"
                transform="translate(8 8)"
            >
                <ellipse cx="23.9646" cy="24" rx="23.9646" ry="24"></ellipse>
            </clipPath>
            <radialGradient
                id="paint0_radial_761_1252"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(24 38.5) rotate(90) scale(15.4375 26)"
            >
                <stop stop-color="var(--accent-secondary, #4750FF)"></stop>
                <stop
                    offset="1"
                    stop-color="var(--accent-secondary, #4750FF)"
                    stop-opacity="0"
                ></stop>
            </radialGradient>
            <radialGradient
                id="paint1_radial_761_1252"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(24 13.5) rotate(90) scale(20.25 33)"
            >
                <stop stop-color="var(--accent-primary, #58C4F5)"></stop>
                <stop
                    offset="1"
                    stop-color="var(--accent-primary, #58C4F5)"
                    stop-opacity="0"
                ></stop>
            </radialGradient>
            <clipPath id="clip0_761_1252">
                <rect
                    width="48"
                    height="48"
                    rx="24"
                    fill="var(--surface-primary, #fff)"
                ></rect>
            </clipPath>
        </defs>
    </svg>
</div>
