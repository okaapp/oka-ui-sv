<script lang="ts">
    import "./auto-button.css";
    import EngineOrb from "../engine-orb/EngineOrb.svelte";

    type props = {
        label: string;
        onclick?: any;
        isLoading?: boolean;
        disabled?: boolean;
    };

    let {
        label,
        onclick,
        isLoading = false,
        disabled = false,
        ...restProps
    }: props = $props();
</script>

<button
    class={`auto-button ${isLoading && "auto-button__loading"} ${disabled && "auto-button__disabled"}`}
    {onclick}
    disabled={disabled || isLoading}
    {...restProps}
>
    <div
        class={`auto-button-inner ${isLoading && "auto-button-inner__loading"}`}
    >
        <EngineOrb />
        <div class="auto-button__content">
            <span
                class={`auto-button__title ${isLoading && "auto-button__title__loading"} ${disabled && "auto-button__title__disabled"}`}
            >
                {#if isLoading}
                    Chờ chút nha...
                {:else}
                    {label}
                {/if}
            </span>
            <span
                class={`auto-button__subtitle ${isLoading && "auto-button__subtitle__loading"} ${disabled && "auto-button__subtitle__disabled"}`}
                >Powered by AA.Engine</span
            >
        </div>
    </div>
</button>
