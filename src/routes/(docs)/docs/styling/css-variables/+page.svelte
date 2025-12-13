<h1>CSS Variables</h1>
<p>
    OKA UI uses a comprehensive CSS variable system for theming. All components
    reference these variables, allowing you to customize the entire look and
    feel by switching themes or overriding specific variables.
</p>

<h2>Color System</h2>
<p>
    The theming system is organized into semantic categories that adapt to
    different themes (light, dark, neutral, nord, fengshui).
</p>

<h2>Accent Colors</h2>
<p>Primary and secondary accent colors used throughout the UI:</p>

<table class="props-table">
    <thead>
        <tr>
            <th>Variable</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>--accent-primary</code></td>
            <td>Primary accent color for highlights and emphasis</td>
        </tr>
        <tr>
            <td><code>--accent-primary-content</code></td>
            <td>Text color on primary accent background</td>
        </tr>
        <tr>
            <td><code>--accent-primary-surface</code></td>
            <td>Light background using primary accent</td>
        </tr>
        <tr>
            <td><code>--accent-secondary</code></td>
            <td>Secondary accent color</td>
        </tr>
        <tr>
            <td><code>--accent-secondary-content</code></td>
            <td>Text color on secondary accent background</td>
        </tr>
        <tr>
            <td><code>--accent-secondary-surface</code></td>
            <td>Light background using secondary accent</td>
        </tr>
    </tbody>
</table>

<h2>Action Colors</h2>
<p>Colors for interactive elements like buttons:</p>

<table class="props-table">
    <thead>
        <tr>
            <th>Variable</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>--action-primary</code></td>
            <td>Primary button background</td>
        </tr>
        <tr>
            <td><code>--action-primary-hover</code></td>
            <td>Primary button hover state</td>
        </tr>
        <tr>
            <td><code>--action-primary-press</code></td>
            <td>Primary button pressed state</td>
        </tr>
        <tr>
            <td><code>--action-primary-muted</code></td>
            <td>Disabled primary button</td>
        </tr>
        <tr>
            <td><code>--action-secondary</code></td>
            <td>Secondary button background</td>
        </tr>
        <tr>
            <td><code>--action-secondary-hover</code></td>
            <td>Secondary button hover state</td>
        </tr>
        <tr>
            <td><code>--action-secondary-press</code></td>
            <td>Secondary button pressed state</td>
        </tr>
        <tr>
            <td><code>--action-error</code></td>
            <td>Error action color (destructive buttons)</td>
        </tr>
    </tbody>
</table>

<h2>Content Colors</h2>
<p>Text colors for different hierarchies:</p>

<table class="props-table">
    <thead>
        <tr>
            <th>Variable</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>--content-primary</code></td>
            <td>Primary text color (headings, important text)</td>
        </tr>
        <tr>
            <td><code>--content-secondary</code></td>
            <td>Secondary text color (body text)</td>
        </tr>
        <tr>
            <td><code>--content-tertiary</code></td>
            <td>Tertiary text color (subtle text, placeholders)</td>
        </tr>
        <tr>
            <td><code>--content-inversed</code></td>
            <td>Text color on dark backgrounds</td>
        </tr>
        <tr>
            <td><code>--content-muted</code></td>
            <td>Muted/disabled text color</td>
        </tr>
        <tr>
            <td><code>--content-error</code></td>
            <td>Error text color</td>
        </tr>
        <tr>
            <td><code>--content-success</code></td>
            <td>Success text color</td>
        </tr>
        <tr>
            <td><code>--content-warning</code></td>
            <td>Warning text color</td>
        </tr>
        <tr>
            <td><code>--content-severe</code></td>
            <td>Severe/critical text color</td>
        </tr>
    </tbody>
</table>

<h2>Surface Colors</h2>
<p>Background colors for containers and surfaces:</p>

<table class="props-table">
    <thead>
        <tr>
            <th>Variable</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>--surface-primary</code></td>
            <td>Primary background (cards, modals)</td>
        </tr>
        <tr>
            <td><code>--surface-secondary</code></td>
            <td>Secondary background (page background)</td>
        </tr>
        <tr>
            <td><code>--surface-tertiary</code></td>
            <td>Tertiary background (subtle emphasis)</td>
        </tr>
        <tr>
            <td><code>--surface-error</code></td>
            <td>Error background</td>
        </tr>
        <tr>
            <td><code>--surface-success</code></td>
            <td>Success background</td>
        </tr>
        <tr>
            <td><code>--surface-warning</code></td>
            <td>Warning background</td>
        </tr>
        <tr>
            <td><code>--surface-severe</code></td>
            <td>Severe/critical background</td>
        </tr>
    </tbody>
</table>

<h2>Stroke Colors</h2>
<p>Border and divider colors:</p>

<table class="props-table">
    <thead>
        <tr>
            <th>Variable</th>
            <th>Usage</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>--stroke-light</code></td>
            <td>Light borders and dividers</td>
        </tr>
        <tr>
            <td><code>--stroke-medium</code></td>
            <td>Medium emphasis borders</td>
        </tr>
        <tr>
            <td><code>--stroke-bold</code></td>
            <td>Bold borders (focus states)</td>
        </tr>
        <tr>
            <td><code>--stroke-xtrabold</code></td>
            <td>Extra bold borders</td>
        </tr>
        <tr>
            <td><code>--stroke-muted</code></td>
            <td>Very subtle borders</td>
        </tr>
        <tr>
            <td><code>--stroke-error</code></td>
            <td>Error borders</td>
        </tr>
        <tr>
            <td><code>--stroke-success</code></td>
            <td>Success borders</td>
        </tr>
        <tr>
            <td><code>--stroke-warning</code></td>
            <td>Warning borders</td>
        </tr>
    </tbody>
</table>

<h2>Palette Colors</h2>
<p>
    Extended color palette for badges and other colorful components. Each color
    has three variants:
    <code>content</code>, <code>highlight</code>, and <code>surface</code>.
</p>

<p>Available palette colors:</p>
<ul>
    <li>Blue, Cyan, Emerald, Fuchsia, Gray</li>
    <li>Indigo, Lime, Pink, Purple, Rose</li>
    <li>Sky, Teal, Violet, Yellow</li>
</ul>

<p>
    Example: <code>--palette-blue-content</code>,
    <code>--palette-blue-highlight</code>, <code>--palette-blue-surface</code>
</p>

<h2>Usage Example</h2>

<pre><code
        >{`/* Override variables globally */
:root {
  --accent-primary: #0066ff;
  --content-primary: #1a1a1a;
}

/* Override for specific component */
.my-button {
  background: var(--action-primary);
  color: var(--content-inversed);
  border: 1px solid var(--stroke-light);
}

/* Use palette colors */
.my-badge {
  background: var(--palette-blue-surface);
  color: var(--palette-blue-content);
  border: 1px solid var(--palette-blue-highlight);
}`}</code
    ></pre>

<h2>Theme Classes</h2>
<p>
    Apply different themes by adding a class to the <code>&lt;body&gt;</code> element:
</p>
<ul>
    <li><code>default-light</code> - Default light theme</li>
    <li><code>default-dark</code> - Default dark theme</li>
    <li><code>neutral-light</code> - Neutral light theme</li>
    <li><code>neutral-dark</code> - Neutral dark theme</li>
    <li><code>nord-light</code> - Nord light theme</li>
    <li><code>nord-dark</code> - Nord dark theme</li>
    <li>
        <code>fengshui-kim</code>, <code>fengshui-moc</code>,
        <code>fengshui-thuy</code>, <code>fengshui-hoa</code>,
        <code>fengshui-tho</code> - Feng Shui themed variations
    </li>
</ul>

<p>
    Use the <a href="/docs/styling/theme-switcher">ThemeSwitcher</a> component to
    let users change themes dynamically.
</p>
