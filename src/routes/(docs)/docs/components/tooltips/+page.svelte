<script lang="ts">
    import Tooltips from "$lib/components/core/tooltips/Tooltips.svelte";
    import Button from "$lib/components/core/button/Button.svelte";
    import Info from "phosphor-svelte/lib/Info";
</script>

<h1>Tooltips</h1>
<p>
    Display helpful information when hovering over or focusing on an element.
    Built with Svelte 5 snippets.
</p>

<h2>Preview</h2>

<div class="component-preview" style="gap: 32px;">
    <Tooltips delayDuration={200}>
        {#snippet trigger()}
            <Button variant="secondary">Hover me</Button>
        {/snippet}
        {#snippet children()}
            This is a tooltip
        {/snippet}
    </Tooltips>

    <Tooltips delayDuration={200}>
        {#snippet trigger()}
            <Button variant="primary">Hover me too</Button>
        {/snippet}
        {#snippet children()}
            Another helpful message
        {/snippet}
    </Tooltips>
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { Tooltips, Button } from '@okaapp/oka-ui-sv';
</script>

<Tooltips delayDuration={200}>
  {#snippet trigger()}
    <Button>Hover me</Button>
  {/snippet}
  {#snippet children()}
    Helpful information
  {/snippet}
</Tooltips>`}</code
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
            <td><code>trigger</code></td>
            <td><span class="badge-inline">Snippet</span></td>
            <td><span class="badge-inline">required</span></td>
            <td>Snippet for the trigger element</td>
        </tr>
        <tr>
            <td><code>children</code></td>
            <td><span class="badge-inline">Snippet</span></td>
            <td><span class="badge-inline">required</span></td>
            <td>Snippet for tooltip content</td>
        </tr>
        <tr>
            <td><code>delayDuration</code></td>
            <td><span class="badge-inline">number</span></td>
            <td><span class="badge-inline">200</span></td>
            <td>Delay before showing tooltip (ms)</td>
        </tr>
        <tr>
            <td
                colspan="4"
                style="color: var(--content-secondary); font-style: italic;"
            >
                Plus all props from Bits UI Tooltip.Root (side, align, etc.)
            </td>
        </tr>
    </tbody>
</table>

<h2>Examples</h2>

<h3>Different Positions</h3>
<div class="component-preview" style="gap: 48px; padding: 64px;">
    <Tooltips side="top">
        {#snippet trigger()}
            <Button variant="secondary" size="sm">Top</Button>
        {/snippet}
        {#snippet children()}
            Top tooltip
        {/snippet}
    </Tooltips>

    <Tooltips side="right">
        {#snippet trigger()}
            <Button variant="secondary" size="sm">Right</Button>
        {/snippet}
        {#snippet children()}
            Right tooltip
        {/snippet}
    </Tooltips>

    <Tooltips side="bottom">
        {#snippet trigger()}
            <Button variant="secondary" size="sm">Bottom</Button>
        {/snippet}
        {#snippet children()}
            Bottom tooltip
        {/snippet}
    </Tooltips>

    <Tooltips side="left">
        {#snippet trigger()}
            <Button variant="secondary" size="sm">Left</Button>
        {/snippet}
        {#snippet children()}
            Left tooltip
        {/snippet}
    </Tooltips>
</div>

<h3>With Icons</h3>
<div class="component-preview">
    <Tooltips>
        {#snippet trigger()}
            <button
                style="
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    background: var(--accent-primary-surface);
                    color: var(--accent-primary);
                    cursor: help;
                "
            >
                <Info weight="bold" size={20} />
            </button>
        {/snippet}
        {#snippet children()}
            Click for more information
        {/snippet}
    </Tooltips>
</div>

<h3>On Text</h3>
<div class="component-preview" style="flex-direction: column;">
    <p style="margin: 0; color: var(--content-primary);">
        This is a sentence with a
        <Tooltips>
            {#snippet trigger()}
                <span
                    style="text-decoration: underline; text-decoration-style: dotted; cursor: help;"
                >
                    technical term
                </span>
            {/snippet}
            {#snippet children()}
                This term needs explanation
            {/snippet}
        </Tooltips>
        in it.
    </p>
</div>

<h3>Instant Show (No Delay)</h3>
<div class="component-demo">
    <Tooltips delayDuration={0}>
        {#snippet trigger()}
            <Button variant="primary">No delay</Button>
        {/snippet}
        {#snippet children()}
            Shows instantly!
        {/snippet}
    </Tooltips>

    <pre><code
            >{`<Tooltips delayDuration={0}>
  {#snippet trigger()}
    <Button>No delay</Button>
  {/snippet}
  {#snippet children()}
    Shows instantly!
  {/snippet}
</Tooltips>`}</code
        ></pre>
</div>

<h3>Long Tooltip Content</h3>
<div class="component-demo">
    <Tooltips>
        {#snippet trigger()}
            <Button variant="secondary">Detailed info</Button>
        {/snippet}
        {#snippet children()}
            This is a longer tooltip with more detailed information that might
            span multiple lines to help users understand the feature better.
        {/snippet}
    </Tooltips>
</div>
