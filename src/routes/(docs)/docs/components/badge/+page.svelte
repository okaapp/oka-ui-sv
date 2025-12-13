<script lang="ts">
    import Badge from "$lib/components/core/badge/Badge.svelte";
    import Plus from "phosphor-svelte/lib/Plus";
    import X from "phosphor-svelte/lib/X";
    import Check from "phosphor-svelte/lib/Check";
</script>

<h1>Badge</h1>
<p>
    A small badge component for displaying status, labels, or counts. Supports
    multiple colors, sizes, and variants.
</p>

<h2>Preview</h2>

<div class="component-preview">
    <Badge color="gray">Gray</Badge>
    <Badge color="blue">Blue</Badge>
    <Badge color="cyan">Cyan</Badge>
    <Badge color="emerald">Emerald</Badge>
    <Badge color="pink">Pink</Badge>
    <Badge color="purple">Purple</Badge>
</div>

<h2>Variants</h2>

<div class="component-preview">
    <Badge color="blue" variant="default">Default</Badge>
    <Badge color="blue" variant="outline">Outline</Badge>
    <Badge color="blue" variant="solid">Solid</Badge>
</div>

<h2>Sizes</h2>

<div class="component-preview">
    <Badge color="blue" size="sm">Small</Badge>
    <Badge color="blue" size="md">Medium</Badge>
    <Badge color="blue" size="lg">Large</Badge>
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { Badge } from '@okaapp/oka-ui-sv';
</script>

<Badge color="blue" variant="default" size="md">
  New
</Badge>`}</code
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
            <td><code>color</code></td>
            <td><span class="badge-inline">string</span></td>
            <td><span class="badge-inline">"gray"</span></td>
            <td>Color scheme (gray, blue, cyan, emerald, pink, purple, etc.)</td
            >
        </tr>
        <tr>
            <td><code>variant</code></td>
            <td
                ><span class="badge-inline"
                    >"default" | "outline" | "solid"</span
                ></td
            >
            <td><span class="badge-inline">"default"</span></td>
            <td>Visual style variant</td>
        </tr>
        <tr>
            <td><code>size</code></td>
            <td><span class="badge-inline">"sm" | "md" | "lg"</span></td>
            <td><span class="badge-inline">"md"</span></td>
            <td>Size of the badge</td>
        </tr>
    </tbody>
</table>

<h2>Examples</h2>

<h3>All Colors</h3>
<div class="component-preview">
    <Badge color="gray">Gray</Badge>
    <Badge color="blue">Blue</Badge>
    <Badge color="cyan">Cyan</Badge>
    <Badge color="emerald">Emerald</Badge>
    <Badge color="fuchsia">Fuchsia</Badge>
    <Badge color="indigo">Indigo</Badge>
    <Badge color="lime">Lime</Badge>
    <Badge color="pink">Pink</Badge>
    <Badge color="purple">Purple</Badge>
    <Badge color="rose">Rose</Badge>
    <Badge color="sky">Sky</Badge>
    <Badge color="teal">Teal</Badge>
    <Badge color="violet">Violet</Badge>
    <Badge color="yellow">Yellow</Badge>
</div>

<h3>With Icons</h3>
<div class="component-preview">
    <Badge color="emerald" size="md">
        <Check weight="bold" />
        Verified
    </Badge>
    <Badge color="rose" size="md">
        <X weight="bold" />
        Error
    </Badge>
    <Badge color="blue" size="md">
        <Plus weight="bold" />
        Add
    </Badge>
</div>

<pre><code
        >{`<script>
  import { Badge } from '@okaapp/oka-ui-sv';
  import Check from 'phosphor-svelte/lib/Check';
</script>

<Badge color="emerald" size="md">
  <Check weight="bold" />
  Verified
</Badge>`}</code
    ></pre>

<h3>Status Indicators</h3>
<div class="component-preview">
    <Badge color="emerald" variant="solid" size="sm">Active</Badge>
    <Badge color="yellow" variant="solid" size="sm">Pending</Badge>
    <Badge color="gray" variant="solid" size="sm">Inactive</Badge>
    <Badge color="rose" variant="solid" size="sm">Error</Badge>
</div>

<h3>Count Badges</h3>
<div class="component-preview">
    <Badge color="blue" variant="solid" size="sm">3</Badge>
    <Badge color="rose" variant="solid" size="sm">99+</Badge>
    <Badge color="emerald" variant="solid" size="sm">12</Badge>
</div>
