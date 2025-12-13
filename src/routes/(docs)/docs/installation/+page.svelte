<h1>Installation</h1>
<p>Get started with OKA UI in your Svelte project.</p>

<h2>Prerequisites</h2>
<p>Before installing OKA UI, make sure you have:</p>
<ul>
    <li>Node.js 18 or higher</li>
    <li>A SvelteKit project (version 2.22.0 or higher)</li>
    <li>Svelte 5.0 or higher</li>
</ul>

<h2>Install Package</h2>
<p>
    Install OKA UI and its required peer dependencies using your preferred
    package manager:
</p>

<pre><code>npm install @okaapp/oka-ui-sv bits-ui phosphor-svelte</code></pre>

<h3>Peer Dependencies Explained</h3>
<p>OKA UI requires these peer dependencies:</p>
<ul>
    <li>
        <strong>bits-ui</strong> (^2.9.8) - Headless component primitives that provide
        accessibility and behavior for components like Dialog, Select, and Checkbox
    </li>
    <li>
        <strong>phosphor-svelte</strong> (^3.0.1) - Icon library used throughout
        the component library for consistent iconography
    </li>
</ul>
<p>
    These are not bundled with OKA UI to avoid version conflicts and give you
    control over which versions to use in your project.
</p>

<h2>Setup Style Provider</h2>
<p>
    Wrap your application with the <code>OKAStyleProvider</code> component in
    your root layout file (<code>+layout.svelte</code>) to enable the theming
    system:
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

<h2>Import Components</h2>
<p>Now you can import and use any OKA UI component in your Svelte files:</p>

<pre><code
        >{`<script>
  import { Button, Input, Badge } from '@okaapp/oka-ui-sv';
</script>

<Button variant="primary">Click me</Button>
<Input placeholder="Enter text" />
<Badge color="blue">New</Badge>`}</code
    ></pre>

<h2>Prevent Flash of Unstyled Content (FOUC)</h2>
<p>
    To avoid theme flickering on page load, add this script to your <code
        >app.html</code
    > file:
</p>

<pre><code
        >{`<!-- src/app.html -->
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    %sveltekit.head%
  </head>
  <body>
    <div>%sveltekit.body%</div>
    <script>
      // Load saved theme before page renders to prevent FOUC
      const savedTheme = localStorage.getItem('theme') || 'default-light';
      document.body.classList.add(savedTheme);
    </script>
  </body>
</html>`}</code
    ></pre>

<p>
    This script runs immediately, applying the saved theme class before the page
    renders, preventing any flash of unstyled content when users reload the
    page.
</p>

<h2>Add Theme Switcher (Optional)</h2>
<p>
    To allow users to change themes, add the <code>ThemeSwitcher</code> component:
</p>

<pre><code
        >{`<script>
  import { ThemeSwitcher } from '@okaapp/oka-ui-sv';
</script>

<ThemeSwitcher />`}</code
    ></pre>

<h2>Next Steps</h2>
<ul>
    <li>
        Explore the <a href="/docs/components/button">component documentation</a
        >
    </li>
    <li>
        Learn about <a href="/docs/styling/css-variables"
            >theming and customization</a
        >
    </li>
    <li>
        Check out the <a href="/docs/styling/theme-switcher">available themes</a
        >
    </li>
</ul>
