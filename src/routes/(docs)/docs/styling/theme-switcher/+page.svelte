<script lang="ts">
    import ThemeSwitcher from "$lib/components/styling/theme-switcher/ThemeSwitcher.svelte";
</script>

<h1>Theme Switcher</h1>
<p>
    A dropdown component that allows users to change the visual theme of your
    application.
</p>

<h2>Preview</h2>

<div class="component-preview">
    <ThemeSwitcher />
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { ThemeSwitcher } from '@okaapp/oka-ui-sv';
</script>

<ThemeSwitcher />`}</code
    ></pre>

<h2>Features</h2>

<ul>
    <li>Beautiful dropdown with theme previews</li>
    <li>Persists user selection to localStorage</li>
    <li>Organized by theme families (Light, Dark, Feng Shui)</li>
    <li>Color indicators for each theme</li>
    <li>Smooth theme transitions</li>
</ul>

<h2>Available Themes</h2>

<h3>Default Themes</h3>
<ul>
    <li>
        <strong>Appta Light (Default)</strong> - Default branding color of the Appta
        platform
    </li>
    <li>
        <strong>Appta Dark</strong> - Dark theme of the Appta branding
    </li>
</ul>

<h3>Neutral Themes</h3>
<ul>
    <li>
        <strong>Neutral Light</strong> - For whenever you feel edgy
    </li>
    <li><strong>Neutral Dark</strong> - Even more edgy-feeling day</li>
</ul>

<h3>Nord Themes</h3>
<ul>
    <li>
        <strong>Nord Light</strong> - Arctic-inspired theme (author's personal favorite)
    </li>
    <li>
        <strong>Nord Dark</strong> - Cozy dark theme based on the Nord color palette
    </li>
</ul>

<h3>Feng Shui Themes</h3>
<p>Five element-inspired themes based on traditional Chinese philosophy:</p>
<ul>
    <li>
        <strong>Kim (Metal)</strong> - Gold and yellow tones representing metal
    </li>
    <li>
        <strong>Mộc (Wood)</strong> - Green tones representing wood and growth
    </li>
    <li>
        <strong>Thủy (Water)</strong> - Blue tones representing water and flow
    </li>
    <li>
        <strong>Hỏa (Fire)</strong> - Red tones representing fire and energy
    </li>
    <li>
        <strong>Thổ (Earth)</strong> - Brown tones representing earth and stability
    </li>
</ul>

<h2>How It Works</h2>

<p>The ThemeSwitcher component:</p>
<ol>
    <li>Reads the current theme from localStorage on mount</li>
    <li>
        Applies the theme by adding/removing classes on the <code
            >&lt;body&gt;</code
        > element
    </li>
    <li>Saves theme changes to localStorage for persistence</li>
    <li>Provides a searchable dropdown interface</li>
</ol>

<h2>Example: In a Header</h2>

<pre><code
        >{`<script>
  import { ThemeSwitcher } from '@okaapp/oka-ui-sv';
</script>

<header style="
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: var(--surface-primary);
  border-bottom: 1px solid var(--stroke-light);
">
  <h1 class="display-font" style="margin: 0; color: var(--content-primary);">
    My App
  </h1>
  
  <ThemeSwitcher />
</header>`}</code
    ></pre>

<h2>Example: With Other Controls</h2>

<pre><code
        >{`<div style="display: flex; gap: 12px; align-items: center;">
  <Button variant="secondary" size="md">
    Settings
  </Button>
  <ThemeSwitcher />
  <Button variant="primary" size="md">
    Sign Out
  </Button>
</div>`}</code
    ></pre>

<h2>Programmatic Theme Switching</h2>

<p>
    You can also change themes programmatically without the ThemeSwitcher
    component:
</p>

<pre><code
        >{`<script>
  function setTheme(themeName: string) {
    // Get current theme class
    const currentTheme = localStorage.getItem('theme') || 'default-light';
    
    // Remove old theme class
    document.body.classList.remove(currentTheme);
    
    // Add new theme class
    document.body.classList.add(themeName);
    
    // Save to localStorage
    localStorage.setItem('theme', themeName);
  }
  
  // Usage
  setTheme('nord-dark');
</script>`}</code
    ></pre>

<h2>Storage</h2>

<p>
    Theme preference is saved in <code>localStorage</code> under the key
    <code>"theme"</code>. The theme is automatically applied when the user
    returns to your site.
</p>

<h2>Related</h2>

<ul>
    <li>
        <a href="/docs/styling/oka-style-provider">OKA Style Provider</a> - Required
        wrapper component
    </li>
    <li>
        <a href="/docs/styling/css-variables">CSS Variables</a> - Theming system
        reference
    </li>
</ul>
