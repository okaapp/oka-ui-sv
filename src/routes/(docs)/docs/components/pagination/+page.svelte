<script lang="ts">
    import Pagination from "$lib/components/core/pagination/Pagination.svelte";

    let currentPage1 = $state(1);
    let currentPage2 = $state(1);
</script>

<h1>Pagination</h1>
<p>Navigate through multiple pages of content with a pagination component.</p>

<h2>Preview</h2>

<div class="component-preview" style="flex-direction: column; gap: 24px;">
    <Pagination count={100} perPage={10} bind:page={currentPage1} />
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { Pagination } from '@okaapp/oka-ui-sv';
  
  let currentPage = $state(1);
</script>

<Pagination 
  count={100}
  perPage={10}
  bind:page={currentPage}
/>`}</code
    ></pre>

<h2>Props</h2>

<table class="props-table">
    <thead>
        <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>count</code></td>
            <td><span class="badge-inline">number</span></td>
            <td><span class="badge-inline">0</span></td>
            <td>Total number of items</td>
        </tr>
        <tr>
            <td><code>perPage</code></td>
            <td><span class="badge-inline">number</span></td>
            <td><span class="badge-inline">10</span></td>
            <td>Number of items per page</td>
        </tr>
        <tr>
            <td><code>page</code></td>
            <td><span class="badge-inline">number</span></td>
            <td><span class="badge-inline">1</span></td>
            <td>Current page number (bindable)</td>
        </tr>
        <tr>
            <td><code>siblingCount</code></td>
            <td><span class="badge-inline">number</span></td>
            <td><span class="badge-inline">1</span></td>
            <td>Number of page buttons to show on each side</td>
        </tr>
        <tr>
            <td><code>onPageChange</code></td>
            <td><span class="badge-inline">function</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Callback when page changes</td>
        </tr>
    </tbody>
</table>
