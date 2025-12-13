<script lang="ts">
    import Dialog from "$lib/components/core/dialog/Dialog.svelte";
    import Button from "$lib/components/core/button/Button.svelte";
    import Input from "$lib/components/core/input/Input.svelte";

    let open1 = $state(false);
    let open2 = $state(false);
    let open3 = $state(false);
    let userName = $state("");
    let userEmail = $state("");
</script>

<h1>Dialog</h1>
<p>
    A modal dialog component for displaying content that requires user
    interaction. Built on Bits UI Dialog primitive with Svelte 5 snippets.
</p>

<h2>Preview</h2>

<div class="component-preview">
    <Dialog bind:open={open1} size="md">
        {#snippet trigger()}
            <Button variant="primary">Open Dialog</Button>
        {/snippet}

        {#snippet title()}
            Example Dialog
        {/snippet}

        {#snippet description()}
            <p style="margin: 0; color: var(--content-secondary);">
                This is a dialog with some content. You can put any content
                here.
            </p>
        {/snippet}

        {#snippet actionButtons()}
            <div class="button-group">
                <Button variant="secondary" onclick={() => (open1 = false)}>
                    Cancel
                </Button>
                <Button variant="primary" onclick={() => (open1 = false)}>
                    Confirm
                </Button>
            </div>
        {/snippet}
    </Dialog>
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { Dialog, Button } from '@okaapp/oka-ui-sv';
  
  let open = $state(false);
</script>

<Dialog bind:open size="md">
  {#snippet trigger()}
    <Button>Open Dialog</Button>
  {/snippet}
  
  {#snippet title()}
    My Dialog Title
  {/snippet}
  
  {#snippet description()}
    <p>Dialog content goes here</p>
  {/snippet}

  // main content of the dialog goes in here, form or anything...
  
  {#snippet actionButtons()}
    // if multiple buttons, have a div wrapper for spacing
    <Button onclick={() => open = false}>Close</Button>
  {/snippet}
</Dialog>`}</code
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
            <td><code>open</code></td>
            <td><span class="badge-inline">boolean</span></td>
            <td><span class="badge-inline">false</span></td>
            <td>Whether the dialog is open (bindable)</td>
        </tr>
        <tr>
            <td><code>trigger</code></td>
            <td><span class="badge-inline">Snippet</span></td>
            <td><span class="badge-inline">required</span></td>
            <td>Snippet for the trigger button</td>
        </tr>
        <tr>
            <td><code>title</code></td>
            <td><span class="badge-inline">Snippet</span></td>
            <td><span class="badge-inline">required</span></td>
            <td>Snippet for dialog title</td>
        </tr>
        <tr>
            <td><code>subtitle</code></td>
            <td><span class="badge-inline">Snippet</span></td>
            <td><span class="badge-inline">undefined</span></td>
            <td>Optional subtitle below title</td>
        </tr>
        <tr>
            <td><code>description</code></td>
            <td><span class="badge-inline">Snippet</span></td>
            <td><span class="badge-inline">undefined</span></td>
            <td>Optional description content</td>
        </tr>
        <tr>
            <td><code>actionButtons</code></td>
            <td><span class="badge-inline">Snippet</span></td>
            <td><span class="badge-inline">undefined</span></td>
            <td>Snippet for action buttons at bottom</td>
        </tr>
        <tr>
            <td><code>size</code></td>
            <td><span class="badge-inline">"sm" | "md" | "lg"</span></td>
            <td><span class="badge-inline">"md"</span></td>
            <td>Dialog width</td>
        </tr>
        <tr>
            <td><code>contentProps</code></td>
            <td><span class="badge-inline">Dialog.ContentProps</span></td>
            <td><span class="badge-inline">undefined</span></td>
            <td>Props passed to Bits UI Dialog.Content</td>
        </tr>
    </tbody>
</table>

<h2>Examples</h2>

<h3>Form Dialog</h3>
<div class="component-demo">
    <Dialog bind:open={open2} size="md">
        {#snippet trigger()}
            <Button variant="primary">Add User</Button>
        {/snippet}

        {#snippet title()}
            Add New User
        {/snippet}

        <form
            style="display: flex; flex-direction: column; gap: 16px;"
            onsubmit={(e) => {
                e.preventDefault();
                console.log("User:", userName, userEmail);
                open2 = false;
            }}
        >
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label
                    for="user-name"
                    style="color: var(--content-primary); font-weight: 500;"
                    >Name</label
                >
                <Input
                    id="user-name"
                    bind:value={userName}
                    placeholder="John Doe"
                    type="text"
                    autocomplete="off"
                />
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
                <label
                    for="user-email"
                    style="color: var(--content-primary); font-weight: 500;"
                    >Email</label
                >
                <Input
                    id="user-email"
                    bind:value={userEmail}
                    placeholder="john@example.com"
                    type="text"
                    autocomplete="off"
                />
            </div>
        </form>

        {#snippet actionButtons()}
            <div class="button-group">
                <Button variant="secondary" onclick={() => (open2 = false)}>
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    type="submit"
                    onclick={(e) => {
                        e.preventDefault();
                        console.log("User:", userName, userEmail);
                        open2 = false;
                    }}
                >
                    Add User
                </Button>
            </div>
        {/snippet}
    </Dialog>

    <pre><code
            >{`<script>
  let open = $state(false);
  let name = $state("");
  let email = $state("");
</script>

<Dialog bind:open size="md">
  {#snippet trigger()}
    <Button variant="primary">Add User</Button>
  {/snippet}
  
  {#snippet title()}
    Add New User
  {/snippet}
  
  <form>
    <div>
      <label>Name</label>
      <Input bind:value={name} placeholder="John Doe" />
    </div>
    <div>
      <label>Email</label>
      <Input bind:value={email} placeholder="john@example.com" />
    </div>
  </form>
  
  {#snippet actionButtons()}
    <div class="button-group">
        <Button variant="secondary" onclick={() => open = false}>
        Cancel
        </Button>
        <Button variant="primary" onclick={handleSubmit}>
        Add User
        </Button>
    </div>
  {/snippet}
</Dialog>`}</code
        ></pre>
</div>

<h3>Confirmation Dialog</h3>
<div class="component-demo">
    <Dialog bind:open={open3} size="sm">
        {#snippet trigger()}
            <Button variant="destructive">Delete Item</Button>
        {/snippet}

        {#snippet title()}
            Confirm Deletion
        {/snippet}

        {#snippet description()}
            <p style="margin: 0; color: var(--content-secondary);">
                Are you sure you want to delete this item? This action cannot be
                undone.
            </p>
        {/snippet}

        {#snippet actionButtons()}
            <div class="button-group">
                <Button variant="secondary" onclick={() => (open3 = false)}>
                    Cancel
                </Button>
                <Button
                    variant="destructive"
                    onclick={() => {
                        console.log("Item deleted");
                        open3 = false;
                    }}
                >
                    Delete
                </Button>
            </div>
        {/snippet}
    </Dialog>

    <pre><code
            >{`<Dialog bind:open size="sm">
  {#snippet trigger()}
    <Button variant="destructive">Delete Item</Button>
  {/snippet}
  
  {#snippet title()}
    Confirm Deletion
  {/snippet}
  
  {#snippet description()}
    <p>Are you sure? This action cannot be undone.</p>
  {/snippet}
  
  {#snippet actionButtons()}
        <div class="button-group">
            <Button variant="secondary" onclick={() => open = false}>
            Cancel
            </Button>
            <Button variant="destructive" onclick={handleDelete}>
            Delete
            </Button>
        </div>
  {/snippet}
</Dialog>`}</code
        ></pre>
</div>
