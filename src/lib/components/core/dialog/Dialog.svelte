<script lang="ts">
    import "./dialog.css";
    import type { Snippet } from "svelte";
    import { Dialog, type WithoutChild } from "bits-ui";
    import X from "phosphor-svelte/lib/X";
    import Separator from "../separator/Separator.svelte";

    type Props = Dialog.RootProps & {
        trigger: Snippet;
        title: Snippet;
        subtitle?: Snippet;
        description?: Snippet;
        contentProps?: WithoutChild<Dialog.ContentProps>;
        actionButtons?: Snippet;
    };

    let {
        open = $bindable(false),
        children,
        contentProps,
        trigger,
        title,
        subtitle,
        description,
        actionButtons,
        ...restProps
    }: Props = $props();
</script>

<Dialog.Root bind:open {...restProps}>
    <Dialog.Trigger>
        {@render trigger()}
    </Dialog.Trigger>
    <Dialog.Portal>
        <Dialog.Overlay class="dialog-overlay" />
        <Dialog.Content {...contentProps} class="dialog-content">
            <div class="dialog-topbar">
                <div class="dialog-topbar-content">
                    <Dialog.Title class="dialog-title">
                        {@render title()}
                    </Dialog.Title>
                    {#if subtitle}
                        <div class="dialog-subtitle">
                            {@render subtitle()}
                        </div>
                    {/if}
                </div>
                <Dialog.Close class="dialog-close">
                    <div>
                        <X class="dialog-close-icon" />
                        <span class="sr-only">Close</span>
                    </div>
                </Dialog.Close>
            </div>
            <Separator orientation="horizontal" />
            <div class="dialog-body">
                {#if description}
                    <Dialog.Description class="dialog-description">
                        {@render description()}
                    </Dialog.Description>
                {/if}
                {@render children?.()}
            </div>
            <Separator orientation="horizontal" />
            {#if actionButtons}
                <div class="dialog-botbar">
                    {@render actionButtons()}
                </div>
            {/if}
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>
