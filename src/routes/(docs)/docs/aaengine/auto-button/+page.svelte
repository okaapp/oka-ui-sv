<script lang="ts">
    import AutoButton from "$lib/components/aaengine-set/auto-buton/AutoButton.svelte";

    let isLoading1 = $state(false);
    let isLoading2 = $state(false);

    function handleClick1() {
        isLoading1 = true;
        setTimeout(() => {
            isLoading1 = false;
        }, 3000);
    }
</script>

<h1>Auto Button</h1>
<p>
    A specialized button component for the Appta Automation Engine. Features an
    animated orb and loading states designed for automated actions.
</p>

<h2>Preview</h2>

<div class="component-preview" style="flex-direction: column; gap: 16px;">
    <AutoButton
        label="Run Automation"
        onclick={handleClick1}
        isLoading={isLoading1}
    />
    <AutoButton label="Disabled State" disabled />
</div>

<h2>Usage</h2>

<pre><code
        >{`<script>
  import { AutoButton } from '@okaapp/oka-ui-sv';
  
  let isLoading = $state(false);
  
  function handleClick() {
    isLoading = true;
    // Perform automation task
    setTimeout(() => {
      isLoading = false;
    }, 2000);
  }
</script>

<AutoButton 
  label="Run Automation"
  onclick={handleClick}
  isLoading={isLoading}
/>`}</code
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
            <td><code>label</code></td>
            <td><span class="badge-inline">string</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Button label text (required)</td>
        </tr>
        <tr>
            <td><code>onclick</code></td>
            <td><span class="badge-inline">function</span></td>
            <td><span class="badge-inline">-</span></td>
            <td>Click event handler</td>
        </tr>
        <tr>
            <td><code>isLoading</code></td>
            <td><span class="badge-inline">boolean</span></td>
            <td><span class="badge-inline">false</span></td>
            <td>Whether the button is in loading state</td>
        </tr>
        <tr>
            <td><code>disabled</code></td>
            <td><span class="badge-inline">boolean</span></td>
            <td><span class="badge-inline">false</span></td>
            <td>Whether the button is disabled</td>
        </tr>
    </tbody>
</table>

<h2>Features</h2>

<ul>
    <li>
        <strong>Animated EngineOrb</strong> - Eye-catching liquid animation effect
    </li>
    <li>
        <strong>Loading State</strong> - Shows "Chờ chút nha..." (Wait a moment...)
        when loading
    </li>
    <li><strong>Branded Footer</strong> - "Powered by AA.Engine" subtitle</li>
    <li>
        <strong>Auto-disable</strong> - Automatically disabled during loading
    </li>
    <li><strong>Theme-aware</strong> - Uses theme accent colors</li>
</ul>

<h2>Examples</h2>

<h3>Loading State</h3>
<div class="component-demo" style="align-items: stretch;">
    <AutoButton
        label="Process Data"
        onclick={() => {
            isLoading2 = true;
            setTimeout(() => (isLoading2 = false), 3000);
        }}
        isLoading={isLoading2}
    />
    <pre><code
            >{`<script>
  let isLoading = $state(false);
  
  function processData() {
    isLoading = true;
    // Simulate async operation
    setTimeout(() => {
      isLoading = false;
    }, 3000);
  }
</script>

<AutoButton 
  label="Process Data"
  onclick={processData}
  isLoading={isLoading}
/>`}</code
        ></pre>
</div>

<h3>In a Form</h3>
<div class="component-demo" style="align-items: stretch; max-width: 500px;">
    <form style="display: flex; flex-direction: column; gap: 16px;">
        <div
            style="padding: 16px; background: var(--surface-secondary); border-radius: 8px;"
        >
            <p
                style="margin: 0; color: var(--content-primary); font-size: 14px;"
            >
                Configure your automation and click the button to run it.
            </p>
        </div>
        <AutoButton label="Execute Automation" />
    </form>
</div>

<h3>Multiple Actions</h3>
<div
    class="component-demo"
    style="flex-direction: column; align-items: stretch; max-width: 400px; gap: 12px;"
>
    <AutoButton label="Generate Report" />
    <AutoButton label="Analyze Data" />
    <AutoButton label="Send Notifications" />
</div>

<h2>Behavior</h2>

<h3>Loading State</h3>
<p>When <code>isLoading</code> is true:</p>
<ul>
    <li>
        The label changes to "Chờ chút nha..." (Vietnamese for "Wait a
        moment...")
    </li>
    <li>The button becomes disabled automatically</li>
    <li>The EngineOrb animation continues to indicate activity</li>
    <li>Click events are blocked</li>
</ul>

<h3>Disabled State</h3>
<p>When <code>disabled</code> is true:</p>
<ul>
    <li>The button has reduced opacity</li>
    <li>Click events are blocked</li>
    <li>The cursor changes to not-allowed</li>
    <li>Visual feedback indicates the button is not interactive</li>
</ul>

<h2>Use Cases</h2>
<ul>
    <li>Triggering automated workflows</li>
    <li>Running data processing tasks</li>
    <li>Initiating batch operations</li>
    <li>Executing smart actions in the Appta platform</li>
    <li>Any action that involves the AA Engine</li>
</ul>

<h2>Related</h2>
<ul>
    <li>
        <a href="/docs/aaengine/engine-orb">Engine Orb</a> - The animated orb component
        used in AutoButton
    </li>
    <li>
        <a href="/docs/components/button">Button</a> - Standard button component
    </li>
</ul>
