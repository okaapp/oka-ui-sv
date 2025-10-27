<script lang="ts">
    import "./pagination.css";
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
        <div class="pagination">
            <span class="pagination__info">
                Tổng cộng {count}
                {itemName ? itemName : "mục"}.
            </span>
            <div class="pagination__controls">
                <Pagination.PrevButton class="pagination__button">
                    <CaretLeft class="pagination__button-icon" />
                </Pagination.PrevButton>
                {#each pages as page (page.key)}
                    {#if page.type === "ellipsis"}
                        <div class="pagination__ellipsis">...</div>
                    {:else}
                        <Pagination.Page
                            {page}
                            class="pagination__page pagination__button"
                        >
                            {page.value}
                        </Pagination.Page>
                    {/if}
                {/each}
                <Pagination.NextButton class="pagination__button">
                    <CaretRight class="pagination__button-icon" />
                </Pagination.NextButton>
            </div>
        </div>
    {/snippet}
</Pagination.Root>
