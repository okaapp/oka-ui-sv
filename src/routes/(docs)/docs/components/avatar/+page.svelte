<script lang="ts">
    import Avatar from "$lib/components/core/avatar/Avatar.svelte";
</script>

<h1>Avatar</h1>
<p>Display user profile pictures or initials in a circular container.</p>

<h2>Preview</h2>

<div class="component-preview">
    <Avatar src="/img/test_avatar.jpg" alt="User 1" />
    <Avatar src="" alt="User 2" iconFallback />
    <Avatar src="" alt="User 2" fallback="WR" />
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { Avatar } from '@okaapp/oka-ui-sv';
</script>

<Avatar src="/avatar.jpg" alt="John Doe" />`}</code
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
            <td><code>src</code></td>
            <td><span class="badge-inline">string</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Image source URL</td>
        </tr>
        <tr>
            <td><code>alt</code></td>
            <td><span class="badge-inline">string</span></td>
            <td><span class="badge-inline">""</span></td>
            <td>Alt text for the image</td>
        </tr>
        <tr>
            <td><code>delayMs</code></td>
            <td><span class="badge-inline">number</span></td>
            <td><span class="badge-inline">0</span></td>
            <td>Delay before showing the avatar</td>
        </tr>
    </tbody>
</table>

<h2>Examples</h2>

<h3>Different Sizes</h3>
<div class="component-preview">
    <Avatar
        src="/img/test_avatar.jpg"
        alt="Small"
        style="width: 32px; height: 32px;"
    />
    <Avatar
        src="/img/test_avatar.jpg"
        alt="Medium"
        style="width: 48px; height: 48px;"
    />
    <Avatar
        src="/img/test_avatar.jpg"
        alt="Large"
        style="width: 64px; height: 64px;"
    />
    <Avatar
        src="/img/test_avatar.jpg"
        alt="Extra Large"
        style="width: 96px; height: 96px;"
    />
</div>

<h3>Fallback Display</h3>
<p>
    When an image fails to load or no src is provided, you can make the avatar
    shows a fallback of text or smiley icon:
</p>
<div class="component-preview">
    <Avatar size="lg" src="" fallback="JD" />
    <Avatar size="lg" alt="User" iconFallback />
</div>

<h3>Avatar Group</h3>
<div class="component-preview">
    <div style="display: flex; margin-left: 16px;">
        <Avatar
            src="/img/test_avatar.jpg"
            size="xl"
            alt="User 1"
            style="margin-left: -16px; border: 2px solid var(--surface-primary);"
        />
        <Avatar
            src="/img/test_avatar2.jpg"
            size="xl"
            alt="User 2"
            style="margin-left: -16px; border: 2px solid var(--surface-primary);"
        />
        <Avatar
            src="/img/test_avatar3.PNG"
            size="xl"
            alt="User 3"
            style="margin-left: -16px; border: 2px solid var(--surface-primary);"
        />
        <Avatar
            src="/img/test_avatar4.JPG"
            size="xl"
            alt="User 4"
            style="margin-left: -16px; border: 2px solid var(--surface-primary);"
        />
    </div>
</div>
