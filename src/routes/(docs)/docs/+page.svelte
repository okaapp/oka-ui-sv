<script lang="ts">
    import Badge from "$lib/components/core/badge/Badge.svelte";
    import Button from "$lib/components/core/button/Button.svelte";
</script>

<div>
    <h1>OKA UI</h1>
    <p>
        A comprehensive Svelte component library for the Appta software
        platform. Built with accessibility, theming, and developer experience in
        mind.
    </p>

    <h2>Features</h2>
    <ul>
        <li>
            <strong>Built on Bits UI</strong> - Leveraging the power of headless
            components
        </li>
        <li>
            <strong>Svelte 5 Ready</strong> - Using the latest Svelte features and
            runes
        </li>
        <li>
            <strong>Fully Themed</strong> - Multiple built-in themes with CSS variables
        </li>
        <li>
            <strong>Accessible</strong> - ARIA compliant components following best
            practices
        </li>
        <li>
            <strong>TypeScript</strong> - Full type safety and intellisense support
        </li>
    </ul>

    <h2>Quick Example</h2>
    <pre><code
            >{`<script>
  import { Button, Badge, Input } from '@okaapp/oka-ui-sv';
</script>

<Button variant="primary" size="lg">
  Click me
</Button>

<Badge color="blue" variant="default">
  New Feature
</Badge>

<Input placeholder="Enter your name" />`}</code
        ></pre>

    <h2>Component Categories</h2>

    <div
        style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin: 32px 0;"
    >
        <div
            style="padding: 24px; background: var(--surface-secondary); border: 1px solid var(--stroke-light); border-radius: 8px;"
        >
            <h3 style="margin-top: 0;">Core Components</h3>
            <p style="font-size: 14px;">
                Essential UI building blocks including buttons, inputs, badges,
                and more.
            </p>
        </div>

        <div
            style="padding: 24px; background: var(--surface-secondary); border: 1px solid var(--stroke-light); border-radius: 8px;"
        >
            <h3 style="margin-top: 0;">Styling & Theming</h3>
            <p style="font-size: 14px;">
                Powerful theming system with multiple pre-built themes and CSS
                variables.
            </p>
        </div>

        <div
            style="padding: 24px; background: var(--surface-secondary); border: 1px solid var(--stroke-light); border-radius: 8px;"
        >
            <h3 style="margin-top: 0;">AA Engine</h3>
            <p style="font-size: 14px;">
                Specialized components for the Appta automation engine
                interface.
            </p>
        </div>
    </div>

    <h2>Ready to get started?</h2>
    <p>
        Check out the <a href="/docs/installation">installation guide</a> to add
        OKA UI to your project, or browse the component documentation to see what's
        available.
    </p>
</div>
