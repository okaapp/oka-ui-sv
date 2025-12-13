<script lang="ts">
    import PinInput from "$lib/components/core/pin-input/PinInput.svelte";

    let pin1 = $state("");
    let pin2 = $state("");
</script>

<h1>Pin Input</h1>
<p>
    A specialized input component for entering PIN codes, verification codes, or
    OTP (One-Time Password).
</p>

<h2>Preview</h2>

<div class="component-preview" style="flex-direction: column; gap: 24px;">
    <div style="display: flex; flex-direction: column; gap: 8px;">
        <span style="color: var(--content-primary); font-weight: 500;"
            >Enter 4-digit PIN</span
        >
        <PinInput maxlength={4} bind:value={pin1} />
        <p style="margin: 0; font-size: 14px; color: var(--content-tertiary);">
            Value: {pin1}
        </p>
    </div>

    <div style="display: flex; flex-direction: column; gap: 8px;">
        <span style="color: var(--content-primary); font-weight: 500;"
            >Enter 6-digit code</span
        >
        <PinInput maxlength={6} bind:value={pin2} />
        <p style="margin: 0; font-size: 14px; color: var(--content-tertiary);">
            Value: {pin2}
        </p>
    </div>
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { PinInput } from '@okaapp/oka-ui-sv';
  
  let pin = $state("");
</script>

<PinInput maxlength={4} bind:value={pin} />`}</code
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
            <td><code>value</code></td>
            <td><span class="badge-inline">string</span></td>
            <td><span class="badge-inline">""</span></td>
            <td>The PIN value (bindable)</td>
        </tr>
        <tr>
            <td><code>maxlength</code></td>
            <td><span class="badge-inline">number</span></td>
            <td><span class="badge-inline">6</span></td>
            <td>Number of input fields</td>
        </tr>
        <tr>
            <td><code>disabled</code></td>
            <td><span class="badge-inline">boolean</span></td>
            <td><span class="badge-inline">false</span></td>
            <td>Whether the input is disabled</td>
        </tr>
        <tr>
            <td><code>ref</code></td>
            <td><span class="badge-inline">HTMLInputElement</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Bindable reference to the input element</td>
        </tr>
    </tbody>
</table>

<h2>Examples</h2>

<h3>Custom Length</h3>
<div
    class="component-demo"
    style="flex-direction: column; align-items: flex-start;"
>
    <PinInput maxlength={8} />
    <pre><code>{`<PinInput maxlength={8} />`}</code></pre>
</div>

<h3>Disabled State</h3>
<div class="component-demo">
    <PinInput maxlength={4} disabled value="1234" />
</div>

<h2>Keyboard Behavior</h2>
<ul>
    <li>Numbers automatically advance to next field</li>
    <li>Backspace moves to previous field when current is empty</li>
    <li>Arrow keys navigate between fields</li>
    <li>Paste support - distributes content across fields</li>
    <li>Auto-focus on first field when mounted</li>
</ul>
