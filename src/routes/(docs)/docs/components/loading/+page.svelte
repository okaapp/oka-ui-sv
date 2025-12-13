<script lang="ts">
    import Loading from "$lib/components/core/loading/Loading.svelte";
</script>

<h1>Loading</h1>
<p>
    Appta branded loading spinner for using when page load. Not recommended for
    other use cases such as button (use phosphor spinner instead) or sections
    (do simple skeleton with pulsing animation).
</p>

<h2>Preview</h2>

<div class="component-preview">
    <Loading />
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { Loading } from '@okaapp/oka-ui-sv';
</script>

<Loading />`}</code
    ></pre>
