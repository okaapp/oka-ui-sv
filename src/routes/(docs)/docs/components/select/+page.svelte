<script lang="ts">
    import SingleSelect from "$lib/components/core/select/SingleSelect.svelte";
    import MultiSelect from "$lib/components/core/select/MultiSelect.svelte";

    const fruits = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "orange", label: "Orange" },
        { value: "grape", label: "Grape" },
        { value: "mango", label: "Mango" },
        { value: "strawberry", label: "Strawberry" },
    ];

    let selectedFruit = $state("");
    let selectedFruits = $state<string[]>([]);
</script>

<h1>Select</h1>
<p>
    Dropdown select components for single or multiple selection. Built on Bits
    UI Select primitive.
</p>

<h2>Single Select</h2>

<div
    class="component-preview"
    style="flex-direction: column; align-items: stretch; max-width: 300px;"
>
    <SingleSelect
        items={fruits}
        bind:value={selectedFruit}
        placeholder="Choose a fruit"
    />
    <p
        style="margin: 8px 0 0 0; font-size: 14px; color: var(--content-tertiary);"
    >
        Selected: {selectedFruit || "None"}
    </p>
</div>

<h2>Multi Select</h2>

<div
    class="component-preview"
    style="flex-direction: column; align-items: stretch; max-width: 300px;"
>
    <MultiSelect
        items={fruits}
        bind:value={selectedFruits}
        placeholder="Choose fruits"
    />
    <p
        style="margin: 8px 0 0 0; font-size: 14px; color: var(--content-tertiary);"
    >
        Selected: {selectedFruits.length > 0
            ? selectedFruits.join(", ")
            : "None"}
    </p>
</div>

<h2>Usage</h2>

<h3>Single Select</h3>
<pre><code
        >{`<script>
  import { SingleSelect } from '@okaapp/oka-ui-sv';
  
  const items = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];
  
  let value = $state("");
</script>

<SingleSelect 
  items={items}
  bind:value
  placeholder="Select an option"
/>`}</code
    ></pre>

<h3>Multi Select</h3>
<pre><code
        >{`<script>
  import { MultiSelect } from '@okaapp/oka-ui-sv';
  
  const items = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];
  
  let value = $state<string[]>([]);
</script>

<MultiSelect 
  items={items}
  bind:value
  placeholder="Select options"
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
            <td><code>items</code></td>
            <td><span class="badge-inline">SelectItem[]</span></td>
            <td><span class="badge-inline">[]</span></td>
            <td>Array of items with value and label</td>
        </tr>
        <tr>
            <td><code>value</code></td>
            <td><span class="badge-inline">string | string[]</span></td>
            <td><span class="badge-inline">""</span></td>
            <td>Selected value(s) (bindable)</td>
        </tr>
        <tr>
            <td><code>placeholder</code></td>
            <td><span class="badge-inline">string</span></td>
            <td><span class="badge-inline">"Select..."</span></td>
            <td>Placeholder text</td>
        </tr>
        <tr>
            <td><code>disabled</code></td>
            <td><span class="badge-inline">boolean</span></td>
            <td><span class="badge-inline">false</span></td>
            <td>Whether the select is disabled</td>
        </tr>
        <tr>
            <td><code>name</code></td>
            <td><span class="badge-inline">string</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Name attribute for form submission</td>
        </tr>
    </tbody>
</table>

<h2>Types</h2>

<pre><code
        >{`type SelectItem = {
  value: string;
  label: string;
  disabled?: boolean;
};`}</code
    ></pre>

<h2>Examples</h2>

<h3>Disabled Options</h3>
<div class="component-demo" style="align-items: stretch; max-width: 300px;">
    <SingleSelect
        items={[
            { value: "1", label: "Available Option" },
            { value: "2", label: "Disabled Option", disabled: true },
            { value: "3", label: "Another Available" },
        ]}
        placeholder="Select with disabled option"
    />
</div>

<h3>Disabled Select</h3>
<div class="component-demo" style="align-items: stretch; max-width: 300px;">
    <SingleSelect items={fruits} placeholder="Disabled select" disabled />
</div>
