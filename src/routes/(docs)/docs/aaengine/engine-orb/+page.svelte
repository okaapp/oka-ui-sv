<script lang="ts">
    import EngineOrb from "$lib/components/aaengine-set/engine-orb/EngineOrb.svelte";
</script>

<h1>Engine Orb</h1>
<p>
    An animated liquid orb visual element representing the Appta Automation
    Engine. Features fluid, organic animations using SVG gradients and blur
    effects.
</p>

<h2>Preview</h2>

<div class="component-preview" style="background: var(--surface-secondary);">
    <EngineOrb />
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { EngineOrb } from '@okaapp/oka-ui-sv';
</script>

<EngineOrb />`}</code
    ></pre>

<h2>Description</h2>

<p>
    The EngineOrb is a purely visual component that creates a mesmerizing liquid
    animation effect. It consists of:
</p>
<ul>
    <li>
        <strong>Liquid Elements</strong> - Two elliptical gradients that animate
        independently
    </li>
    <li>
        <strong>Blur Effects</strong> - Backdrop blur and filters create a glass-morphism
        effect
    </li>
    <li>
        <strong>Theme Colors</strong> - Uses your theme's accent colors for the gradients
    </li>
    <li>
        <strong>Continuous Animation</strong> - Smooth 8-second loop creating organic
        movement
    </li>
</ul>

<h2>Features</h2>

<ul>
    <li>Self-contained SVG animation (no JavaScript required)</li>
    <li>Theme-aware color scheme using CSS variables</li>
    <li>Optimized rendering with GPU acceleration</li>
    <li>Responsive and scalable</li>
    <li>Lightweight performance footprint</li>
</ul>

<h2>Examples</h2>

<h3>Different Sizes</h3>
<div class="component-preview" style="gap: 32px;">
    <div style="width: 32px; height: 32px;">
        <div style="transform: scale(0.67);">
            <EngineOrb />
        </div>
    </div>
    <EngineOrb />
    <div style="width: 72px; height: 72px;">
        <div style="transform: scale(1.5);">
            <EngineOrb />
        </div>
    </div>
</div>

<pre><code
        >{`<!-- Small -->
<div style="width: 32px; height: 32px; transform: scale(0.67);">
  <EngineOrb />
</div>

<!-- Medium (default) -->
<EngineOrb />

<!-- Large -->
<div style="width: 72px; height: 72px; transform: scale(1.5);">
  <EngineOrb />
</div>`}</code
    ></pre>

<h2>Animation Details</h2>

<p>The orb uses CSS keyframe animations with:</p>
<ul>
    <li><strong>Duration:</strong> 8 seconds per loop</li>
    <li>
        <strong>Timing:</strong> Linear easing for smooth, consistent motion
    </li>
    <li><strong>Layers:</strong> Two independently animated liquid layers</li>
    <li>
        <strong>Effects:</strong> 4px blur on liquid elements, backdrop blur on container
    </li>
</ul>

<h2>Color System</h2>

<p>The EngineOrb automatically adapts to your theme:</p>
<ul>
    <li>
        <strong>Primary gradient:</strong> <code>--accent-primary</code> (typically
        cyan/blue)
    </li>
    <li>
        <strong>Secondary gradient:</strong> <code>--accent-secondary</code> (typically
        purple)
    </li>
    <li>
        <strong>Background:</strong> <code>--surface-primary</code> with transparency
    </li>
</ul>

<p>
    This means the orb will look different in each theme, maintaining visual
    coherence with your application.
</p>

<h2>Performance</h2>

<p>The EngineOrb is optimized for performance:</p>
<ul>
    <li>Pure CSS animations (no JavaScript overhead)</li>
    <li>GPU-accelerated transforms and filters</li>
    <li>Minimal DOM elements</li>
    <li>No external dependencies</li>
    <li>Does not trigger layout reflows</li>
</ul>

<h2>Use Cases</h2>

<ul>
    <li>Branding element for AA Engine features</li>
    <li>Loading indicator for automation tasks</li>
    <li>Visual accent in dashboards</li>
    <li>Status indicator for active processes</li>
    <li>Decorative element in empty states</li>
</ul>

<h2>Customization</h2>

<p>You can customize the orb's appearance using CSS:</p>

<pre><code
        >{`<div style="filter: hue-rotate(45deg);">
  <EngineOrb />
</div>

<div style="opacity: 0.5;">
  <EngineOrb />
</div>

<div style="transform: scale(2) rotate(45deg);">
  <EngineOrb />
</div>`}</code
    ></pre>

<h2>Related</h2>

<ul>
    <li>
        <a href="/docs/aaengine/auto-button">Auto Button</a> - Button component featuring
        the EngineOrb
    </li>
    <li>
        <a href="/docs/components/loading">Loading</a> - Alternative loading indicator
    </li>
</ul>
