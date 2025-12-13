<script lang="ts">
    import Button from "$lib/components/core/button/Button.svelte";
    import Download from "phosphor-svelte/lib/Download";
</script>

<h1>Button</h1>
<p>
    A versatile button component with multiple variants and sizes. Built on top
    of Bits UI's button primitive.
</p>

<h2>Preview</h2>

<div class="component-preview">
    <Button variant="primary" size="lg">Primary Button</Button>
    <Button variant="secondary" size="lg">Secondary Button</Button>
    <Button variant="tertiary" size="lg">Tertiary Button</Button>
    <Button variant="destructive" size="lg">Destructive Button</Button>
</div>

<h2>Sizes</h2>

<div class="component-preview">
    <Button variant="primary" size="sm">Small</Button>
    <Button variant="primary" size="md">Medium</Button>
    <Button variant="primary" size="lg">Large</Button>
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { Button } from '@okaapp/oka-ui-sv';
</script>

<Button variant="primary" size="lg">
  Click me
</Button>`}</code
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
            <td><code>variant</code></td>
            <td
                ><span class="badge-inline"
                    >"primary" | "secondary" | "tertiary" | "destructive"</span
                ></td
            >
            <td><span class="badge-inline">"primary"</span></td>
            <td>The visual style variant of the button</td>
        </tr>
        <tr>
            <td><code>size</code></td>
            <td><span class="badge-inline">"sm" | "md" | "lg"</span></td>
            <td><span class="badge-inline">"lg"</span></td>
            <td>The size of the button</td>
        </tr>
        <tr>
            <td><code>disabled</code></td>
            <td><span class="badge-inline">boolean</span></td>
            <td><span class="badge-inline">false</span></td>
            <td>Whether the button is disabled</td>
        </tr>
        <tr>
            <td><code>onclick</code></td>
            <td><span class="badge-inline">function</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Click event handler</td>
        </tr>
        <tr>
            <td><code>ref</code></td>
            <td><span class="badge-inline">HTMLButtonElement</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Bindable reference to the button element</td>
        </tr>
    </tbody>
</table>

<h2>Examples</h2>

<h3>With Icon</h3>
<div class="component-demo">
    <Button>
        <Download />
        Download
    </Button>
    <pre><code
            >{`<script>
  import { Button } from '@okaapp/oka-ui-sv';
  import Download from 'phosphor-svelte/lib/Download';
</script>

<Button>
  <Download />
  Download
</Button>`}</code
        ></pre>
</div>

<h3>Disabled State</h3>
<div class="component-demo">
    <Button variant="primary" size="lg" disabled>Disabled Button</Button>
    <pre><code
            >{`<Button variant="primary" size="lg" disabled>
  Disabled Button
</Button>`}</code
        ></pre>
</div>
