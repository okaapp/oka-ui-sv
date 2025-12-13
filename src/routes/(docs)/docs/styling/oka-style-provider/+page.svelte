<h1>OKA Style Provider</h1>
<p>
    The OKAStyleProvider component is the foundation of the OKA UI theming
    system. It must wrap your entire application to enable CSS variables and
    theming functionality.
</p>

<h2>Overview</h2>
<p>The OKAStyleProvider component:</p>
<ul>
    <li>Injects global CSS variables for theming</li>
    <li>Loads custom fonts (Inter and DM Serif Display)</li>
    <li>Applies global styles and resets</li>
    <li>Enables theme switching functionality</li>
    <li>Provides consistent focus visible indicators</li>
</ul>

<h2>Usage</h2>
<p>
    Add the OKAStyleProvider to your root layout file (<code
        >+layout.svelte</code
    >):
</p>

<pre><code
        >{`<script lang="ts">
  import { OKAStyleProvider } from '@okaapp/oka-ui-sv';
  
  let { children } = $props();
</script>

<OKAStyleProvider>
  {@render children()}
</OKAStyleProvider>`}</code
    ></pre>

<h2>What It Provides</h2>

<h3>1. CSS Variables</h3>
<p>Access to the entire OKA theming system with semantic color tokens:</p>
<ul>
    <li>
        Accent colors (<code>--accent-primary</code>,
        <code>--accent-secondary</code>)
    </li>
    <li>
        Action colors (<code>--action-primary</code>,
        <code>--action-primary-hover</code>, etc.)
    </li>
    <li>
        Content colors (<code>--content-primary</code>,
        <code>--content-secondary</code>, etc.)
    </li>
    <li>
        Surface colors (<code>--surface-primary</code>,
        <code>--surface-secondary</code>, etc.)
    </li>
    <li>
        Stroke colors (<code>--stroke-light</code>, <code>--stroke-bold</code>,
        etc.)
    </li>
    <li>
        Palette colors (<code>--palette-blue-*</code>,
        <code>--palette-emerald-*</code>, etc.)
    </li>
</ul>

<h3>2. Typography</h3>
<p>Two custom font families are loaded:</p>
<ul>
    <li>
        <strong>Inter</strong> - Variable font (100-900 weight) for body text and
        UI
    </li>
    <li><strong>DM Serif Display</strong> - Display font for headings</li>
</ul>

<p>Use the display font with the <code>display-font</code> class:</p>
<pre><code>{`<h1 class="display-font">Heading Text</h1>`}</code></pre>

<h3>3. Global Styles</h3>
<p>Applies essential global styles:</p>
<ul>
    <li>Consistent box-sizing</li>
    <li>Font smoothing and text rendering optimization</li>
    <li>Focus visible indicators using theme colors</li>
    <li>Reset for buttons and links</li>
    <li>Custom scrollbar styling</li>
    <li>Text selection colors using theme accent</li>
    <li>Basic table styling</li>
</ul>

<h3>4. Theme Support</h3>
<p>Enables dynamic theme switching by detecting body class changes:</p>
<ul>
    <li><code>default-light</code> / <code>default-dark</code></li>
    <li><code>neutral-light</code> / <code>neutral-dark</code></li>
    <li><code>nord-light</code> / <code>nord-dark</code></li>
    <li>
        <code>fengshui-kim</code>, <code>fengshui-moc</code>,
        <code>fengshui-thuy</code>, <code>fengshui-hoa</code>,
        <code>fengshui-tho</code>
    </li>
</ul>

<h2>Default Theme</h2>
<p>
    The default theme (<code>default-light</code>) is applied automatically. To
    change the default theme, add a class to the body element before the app
    loads:
</p>

<pre><code
        >{`<!-- In your app.html -->
<body class="default-dark">
  %sveltekit.body%
</body>`}</code
    ></pre>

<h2>Example: Complete Setup</h2>

<pre><code
        >{`<!-- src/routes/+layout.svelte -->
<script lang="ts">
  import { OKAStyleProvider, ThemeSwitcher } from '@okaapp/oka-ui-sv';
  
  let { children } = $props();
</script>

<OKAStyleProvider>
  <div style="min-height: 100vh; display: flex; flex-direction: column;">
    <header style="padding: 16px; border-bottom: 1px solid var(--stroke-light);">
      <nav style="display: flex; justify-content: space-between; align-items: center;">
        <h1 class="display-font" style="margin: 0; color: var(--content-primary);">
          My App
        </h1>
        <ThemeSwitcher />
      </nav>
    </header>
    
    <main style="flex: 1; padding: 24px;">
      {@render children()}
    </main>
  </div>
</OKAStyleProvider>`}</code
    ></pre>

<h2>Without OKAStyleProvider</h2>
<p>
    If you don't use OKAStyleProvider, components will not have access to
    theming variables and may not render correctly. This component is <strong
        >required</strong
    > for OKA UI to work properly.
</p>

<h2>Performance</h2>
<p>The OKAStyleProvider has minimal performance impact:</p>
<ul>
    <li>CSS is loaded once at the top level</li>
    <li>Fonts use <code>font-display: swap</code> to prevent blocking</li>
    <li>No JavaScript runtime overhead</li>
    <li>CSS variables enable instant theme switching</li>
</ul>

<h2>Related</h2>
<ul>
    <li>
        <a href="/docs/styling/theme-switcher">Theme Switcher</a> - Allow users to
        change themes
    </li>
    <li>
        <a href="/docs/styling/css-variables">CSS Variables</a> - Full list of available
        variables
    </li>
</ul>
