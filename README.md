# OKA UI for Svelte

OKA Tech UI Svelte component library built for the Appta software platform, offering a collection of customizable, accessible, and themeable components.

## Installation

```bash
npm install @okaapp/oka-ui-sv
```

### Required Peer Dependencies

This library requires the following peer dependencies to be installed:

```bash
npm install svelte@^5.0.0 @sveltejs/kit@^2.22.0 bits-ui@^2.9.8 phosphor-svelte@^3.0.1
```

## Setup

### 1. Style Provider

All components must be wrapped in the `OKAStyleProvider` component for proper styling. Add it to your root layout file:

```svelte
<!-- src/routes/+layout.svelte -->
<script lang="ts">
    import { OKAStyleProvider } from "@okaapp/oka-ui-sv";
</script>

<OKAStyleProvider>
    <slot />
</OKAStyleProvider>
```

### 2. Theme Setup

To avoid Flash of Unstyled Content (FOUC), add the following script to your app's HTML file:

```html
<!-- src/app.html -->
<body>
    <div>%sveltekit.body%</div>
    <script>
        const savedTheme = localStorage.getItem('theme') || 'default-light';
        document.body.classList.add(savedTheme);
    </script>
</body>
```

## Available Themes

OKA UI comes with several built-in themes:

- Light themes:
  - `default-light`
  - `neutral-light`

- Dark themes:
  - `default-dark`
  - `neutral-dark`
  - `nord-dark`

- Fengshui themes:
  - `fengshui-kim` (Metal)
  - `fengshui-moc` (Wood)
  - `fengshui-thuy` (Water)
  - `fengshui-hoa` (Fire)
  - `fengshui-tho` (Earth)

## Components

### Core Components as of 0.1.0

- Avatar
- Badge
- Button
- Checkbox
- Dialog
- Input
- Loading
- Pagination
- PinInput
- Select (Single & Multi)
- Separator
- Sidebar
- Tooltips

### Usage Example

```svelte
<script>
    import { Button, Avatar, Badge } from "@okaapp/oka-ui-sv";
</script>

<Button variant="primary">Click me</Button>

<Avatar src="/path/to/image.jpg" alt="User avatar" size="md" />

<Badge color="success">Complete</Badge>
```

## Theme Switching

The library includes a `ThemeSwitcher` component for easy theme management:

```svelte
<script>
    import { ThemeSwitcher } from "@okaapp/oka-ui-sv";
</script>

<ThemeSwitcher />
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

MIT License - see LICENSE file for details.

## Acknowledgments

Built with:
- [Svelte](https://svelte.dev)
- [SvelteKit](https://kit.svelte.dev)
- [bits-ui](https://bits-ui.com)
- [phosphor-svelte](https://github.com/phosphor-icons/svelte)
