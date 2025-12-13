<script lang="ts">
    import Input from "$lib/components/core/input/Input.svelte";

    let textValue = $state("");
    let emailValue = $state("");
    let passwordValue = $state("");
    let invalidValue = $state("");
</script>

<h1>Input</h1>
<p>
    A text input component for collecting user data. Supports various input
    types and validation states.
</p>

<h2>Preview</h2>

<div
    class="component-preview"
    style="flex-direction: column; align-items: stretch; max-width: 400px;"
>
    <Input
        placeholder="Enter your name"
        bind:value={textValue}
        autocomplete="off"
    />
    <Input
        type="text"
        placeholder="Enter your email"
        bind:value={emailValue}
        autocomplete="off"
    />
    <Input
        type="text"
        placeholder="Enter password"
        bind:value={passwordValue}
        autocomplete="off"
    />
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { Input } from '@okaapp/oka-ui-sv';
  
  let value = $state("");
</script>

<Input placeholder="Enter text" bind:value />`}</code
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
            <td>The input value (bindable)</td>
        </tr>
        <tr>
            <td><code>placeholder</code></td>
            <td><span class="badge-inline">string</span></td>
            <td><span class="badge-inline">"Nhập vào đây"</span></td>
            <td>Placeholder text</td>
        </tr>
        <tr>
            <td><code>type</code></td>
            <td><span class="badge-inline">HTMLInputTypeAttribute</span></td>
            <td><span class="badge-inline">"text"</span></td>
            <td>Input type (text, email, password, etc.)</td>
        </tr>
        <tr>
            <td><code>invalid</code></td>
            <td><span class="badge-inline">boolean</span></td>
            <td><span class="badge-inline">false</span></td>
            <td>Whether the input is in an invalid state</td>
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
