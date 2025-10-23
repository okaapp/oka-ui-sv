<script lang="ts">
    import { Pagination, type PaginationRootProps } from "bits-ui";
    import CaretLeft from "phosphor-svelte/lib/CaretLeft";
    import CaretRight from "phosphor-svelte/lib/CaretRight";

    type Props = PaginationRootProps & {
        count: number;
        perPage?: number;
        itemName?: string;
    };
    let { count, perPage = 10, itemName, ...restProps }: Props = $props();
</script>

<Pagination.Root {count} {perPage} {...restProps}>
    {#snippet children({ pages, range })}
        <div
            class="p-6 flex items-center justify-between bg-surface-primary w-full h-fit min-w-[600px] transition-all duration-300"
        >
            <span
                class=" text-sm text-content-secondary transition-all duration-300 w-fit line-clamp-1 shrink-0"
            >
                Tổng cộng {count}
                {itemName ? itemName : "mục"}.
            </span>
            <div class="flex items-center w-full gap-1 justify-end">
                <Pagination.PrevButton
                    class="hover:bg-action-secondary-hover disabled:text-content-muted inline-flex size-10 items-center justify-center rounded-xl bg-transparent text-accent-primary-content active:scale-[0.98] active:bg-action-secondary-press disabled:cursor-not-allowed hover:disabled:bg-transparent transition-all duration-300"
                >
                    <CaretLeft class="size-6" />
                </Pagination.PrevButton>
                {#each pages as page (page.key)}
                    {#if page.type === "ellipsis"}
                        <div
                            class="flex items-center justify-center text-accent-primary-content select-none text-base size-10 rounded-xl transition-all duration-300"
                        >
                            ...
                        </div>
                    {:else}
                        <Pagination.Page
                            {page}
                            class="hover:bg-action-secondary-hover disabled:text-content-muted text-base data-selected:bg-accent-primary-content data-selected:text-content-inversed inline-flex select-none size-10 items-center justify-center rounded-xl bg-transparent text-accent-primary-content active:scale-[0.98] active:bg-action-secondary-press disabled:cursor-not-allowed hover:disabled:bg-transparent transition-all duration-300"
                        >
                            {page.value}
                        </Pagination.Page>
                    {/if}
                {/each}
                <Pagination.NextButton
                    class="hover:bg-action-secondary-hover disabled:text-content-muted inline-flex size-10 items-center justify-center rounded-xl bg-transparent text-accent-primary-content active:scale-[0.98] active:bg-action-secondary-press disabled:cursor-not-allowed hover:disabled:bg-transparent transition-all duration-300"
                >
                    <CaretRight class="size-6" />
                </Pagination.NextButton>
            </div>
        </div>
    {/snippet}
</Pagination.Root>
