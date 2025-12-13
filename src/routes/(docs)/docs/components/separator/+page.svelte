<script lang="ts">
    import Separator from "$lib/components/core/separator/Separator.svelte";
</script>

<h1>Separator</h1>
<p>
    A visual divider to separate content sections. Supports both horizontal and
    vertical orientations.
</p>

<h2>Preview</h2>

<div
    class="component-preview"
    style="flex-direction: column; align-items: stretch; gap: 24px;"
>
    <div>
        <p style="margin: 0;">Content above</p>
        <Separator orientation="horizontal" />
        <p style="margin: 0;">Content below</p>
    </div>
</div>

<h2>Orientations</h2>

<h3>Horizontal</h3>
<div class="component-preview" style="flex-direction: column; width: 100%;">
    <Separator orientation="horizontal" />
</div>

<h3>Vertical</h3>
<div class="component-preview" style="height: 120px;">
    <span>Left content</span>
    <Separator orientation="vertical" />
    <span>Right content</span>
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { Separator } from '@okaapp/oka-ui-sv';
</script>

<div>
  <p>Section 1</p>
  <Separator orientation="horizontal" />
  <p>Section 2</p>
</div>`}</code
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
            <td><code>orientation</code></td>
            <td><span class="badge-inline">"horizontal" | "vertical"</span></td>
            <td><span class="badge-inline">"horizontal"</span></td>
            <td>The orientation of the separator</td>
        </tr>
        <tr>
            <td><code>decorative</code></td>
            <td><span class="badge-inline">boolean</span></td>
            <td><span class="badge-inline">true</span></td>
            <td>Whether the separator is purely decorative</td>
        </tr>
    </tbody>
</table>

<h2>Examples</h2>

<h3>In a Layout</h3>
<div class="component-demo" style="align-items: stretch; max-width: 600px;">
    <div
        style="padding: 16px; background: var(--surface-primary); border: 1px solid var(--stroke-light); border-radius: 8px;"
    >
        <h3 style="margin: 0 0 16px 0; color: var(--content-primary);">
            User Profile
        </h3>
        <Separator orientation="horizontal" />
        <div style="margin: 16px 0;">
            <p style="margin: 8px 0;"><strong>Name:</strong> John Doe</p>
            <p style="margin: 8px 0;">
                <strong>Email:</strong> john@example.com
            </p>
        </div>
        <Separator orientation="horizontal" />
        <div style="margin-top: 16px; display: flex; gap: 8px;">
            <button
                style="padding: 8px 16px; background: var(--action-primary); color: var(--content-inversed); border-radius: 6px;"
            >
                Edit
            </button>
            <button
                style="padding: 8px 16px; background: var(--action-secondary); color: var(--content-primary); border-radius: 6px;"
            >
                Cancel
            </button>
        </div>
    </div>
</div>

<h3>Vertical in Navigation</h3>
<div class="component-demo">
    <nav style="display: flex; gap: 16px; align-items: center;">
        <a href="/docs" style="color: var(--content-primary);">Home</a>
        <Separator orientation="vertical" />
        <a href="/docs" style="color: var(--content-primary);">About</a>
        <Separator orientation="vertical" />
        <a href="/docs" style="color: var(--content-primary);">Contact</a>
    </nav>
</div>
