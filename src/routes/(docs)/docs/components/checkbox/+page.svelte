<script lang="ts">
    import Checkbox from "$lib/components/core/checkbox/Checkbox.svelte";

    let checked1 = $state(false);
    let checked2 = $state(true);
    let checked3 = $state(false);
</script>

<h1>Checkbox</h1>
<p>
    A checkbox component for boolean input. Built on top of Bits UI's checkbox
    primitive.
</p>

<h2>Preview</h2>

<div
    class="component-preview"
    style="flex-direction: column; align-items: flex-start;"
>
    <label
        style="display: flex; align-items: center; gap: 8px; cursor: pointer;"
    >
        <Checkbox bind:checked={checked1} />
        <span style="color: var(--content-primary);">Unchecked by default</span>
    </label>
    <label
        style="display: flex; align-items: center; gap: 8px; cursor: pointer;"
    >
        <Checkbox bind:checked={checked2} />
        <span style="color: var(--content-primary);">Checked by default</span>
    </label>
    <label
        style="display: flex; align-items: center; gap: 8px; cursor: pointer;"
    >
        <Checkbox disabled />
        <span style="color: var(--content-tertiary);">Disabled</span>
    </label>
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { Checkbox } from '@okaapp/oka-ui-sv';
  
  let checked = $state(false);
</script>

<label>
  <Checkbox bind:checked />
  Accept terms and conditions
</label>`}</code
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
            <td><code>checked</code></td>
            <td><span class="badge-inline">boolean | "indeterminate"</span></td>
            <td><span class="badge-inline">false</span></td>
            <td>The checked state (bindable)</td>
        </tr>
        <tr>
            <td><code>disabled</code></td>
            <td><span class="badge-inline">boolean</span></td>
            <td><span class="badge-inline">false</span></td>
            <td>Whether the checkbox is disabled</td>
        </tr>
        <tr>
            <td><code>onCheckedChange</code></td>
            <td><span class="badge-inline">function</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Callback when checked state changes</td>
        </tr>
        <tr>
            <td><code>name</code></td>
            <td><span class="badge-inline">string</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Name attribute for form submission</td>
        </tr>
        <tr>
            <td><code>value</code></td>
            <td><span class="badge-inline">string</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Value attribute for form submission</td>
        </tr>
    </tbody>
</table>

<h2>Examples</h2>

<h3>With Labels</h3>
<div class="component-demo" style="align-items: flex-start;">
    <label
        style="display: flex; align-items: center; gap: 8px; cursor: pointer;"
    >
        <Checkbox bind:checked={checked3} />
        <span style="color: var(--content-primary);"
            >I agree to the terms and conditions</span
        >
    </label>
    <pre><code
            >{`<label style="display: flex; align-items: center; gap: 8px;">
  <Checkbox bind:checked />
  I agree to the terms and conditions
</label>`}</code
        ></pre>
</div>

<h3>Disabled States</h3>
<div class="component-demo" style="align-items: flex-start;">
    <label style="display: flex; align-items: center; gap: 8px;">
        <Checkbox disabled checked={false} />
        <span style="color: var(--content-tertiary);">Disabled unchecked</span>
    </label>
    <label style="display: flex; align-items: center; gap: 8px;">
        <Checkbox disabled checked={true} />
        <span style="color: var(--content-tertiary);">Disabled checked</span>
    </label>
</div>

<h3>Form Integration</h3>
<div class="component-demo" style="align-items: stretch; max-width: 400px;">
    <form style="display: flex; flex-direction: column; gap: 16px;">
        <label
            style="display: flex; align-items: center; gap: 8px; cursor: pointer;"
        >
            <Checkbox name="newsletter" value="yes" />
            <span style="color: var(--content-primary);"
                >Subscribe to newsletter</span
            >
        </label>
        <label
            style="display: flex; align-items: center; gap: 8px; cursor: pointer;"
        >
            <Checkbox name="notifications" value="yes" />
            <span style="color: var(--content-primary);"
                >Enable notifications</span
            >
        </label>
    </form>
    <pre><code
            >{`<form>
  <label>
    <Checkbox name="newsletter" value="yes" />
    Subscribe to newsletter
  </label>
  <label>
    <Checkbox name="notifications" value="yes" />
    Enable notifications
  </label>
</form>`}</code
        ></pre>
</div>
