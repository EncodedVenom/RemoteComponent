import{_ as e,c as s,o as i,a1 as a}from"./chunks/framework.BtBsNfS7.js";const u=JSON.parse('{"title":"API","description":"","frontmatter":{},"headers":[],"relativePath":"api.md","filePath":"api.md"}'),t={name:"api.md"},n=a(`<h1 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h1><p>Before reading further, you should be familiar with normal components first. This extension does not change any functionality from the <a href="https://sleitnick.github.io/RbxUtil/api/Component/" target="_blank" rel="noreferrer">original module</a>.</p><p>This extension operates the same way <a href="https://sleitnick.github.io/Knit/docs/services#client-communication" target="_blank" rel="noreferrer">Knit does under the hood</a>.</p><h2 id="new-additions" tabindex="-1">New Additions <a class="header-anchor" href="#new-additions" aria-label="Permalink to &quot;New Additions&quot;">​</a></h2><h3 id="remotecomponent-remotenamespace" tabindex="-1">RemoteComponent.RemoteNamespace <a class="header-anchor" href="#remotecomponent-remotenamespace" aria-label="Permalink to &quot;RemoteComponent.RemoteNamespace&quot;">​</a></h3><p>Declares a namespace for which all remotes should be created under the target instance.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-rJz55" id="tab-_ENQcKH" checked><label for="tab-_ENQcKH">Component.lua</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Component.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RemoteNamespace</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Namespace&quot;</span></span></code></pre></div></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>RemoteNamespace is optional! If you do not define it, it will default to the component&#39;s tag.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Both the client and server namespace must be the same for each side to communicate! Be careful if you use this property!</p></div><h3 id="remotecomponent-client" tabindex="-1">RemoteComponent.Client <a class="header-anchor" href="#remotecomponent-client" aria-label="Permalink to &quot;RemoteComponent.Client&quot;">​</a></h3><p>Exposes methods to the client from a server component.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-vTL2A" id="tab-ykUgC7t" checked><label for="tab-ykUgC7t">ServerComponent.lua</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ServerComponent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Client</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    RemoteSignal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Knit.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">CreateSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This table works exactly the same as Knit services do.</p></div><p>You can also add functions like so:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Ksjs_" id="tab-0n7GJ-u" checked><label for="tab-0n7GJ-u">ServerComponent.lua</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ServerComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ExposedMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(player)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    -- TODO: Add return value</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div></div></div><h3 id="remotecomponent-server" tabindex="-1">RemoteComponent.Server <a class="header-anchor" href="#remotecomponent-server" aria-label="Permalink to &quot;RemoteComponent.Server&quot;">​</a></h3><p>Exposes server methods to the client. Automatically injected upon creation.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-a4JZ6" id="tab-4MrAkDB" checked><label for="tab-4MrAkDB">ClientComponent.lua</label></div><div class="blocks"><div class="language-lua vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ClientComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ExposedMethod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Call the exposed method above!</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Server</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">RemoteSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Fire</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">-- Fire the exposed RemoteSignal!</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end</span></span></code></pre></div></div></div><h2 id="lifecycle" tabindex="-1">Lifecycle <a class="header-anchor" href="#lifecycle" aria-label="Permalink to &quot;Lifecycle&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This section is not necessary to understand in order to use the module. This section is provided for those wanting to understand how this extension works under the hood.</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>The following are meant for internal use only.</p></div><h3 id="remotecomponentextension-starting" tabindex="-1">RemoteComponentExtension.Starting <a class="header-anchor" href="#remotecomponentextension-starting" aria-label="Permalink to &quot;RemoteComponentExtension.Starting&quot;">​</a></h3><p>Binds a component to a RemoteComponent on creation.</p><h3 id="remotecomponentextension-stopping" tabindex="-1">RemoteComponentExtension.Stopping <a class="header-anchor" href="#remotecomponentextension-stopping" aria-label="Permalink to &quot;RemoteComponentExtension.Stopping&quot;">​</a></h3><p>Destroys any remotes created on the target component.</p><h2 id="objects" tabindex="-1">Objects <a class="header-anchor" href="#objects" aria-label="Permalink to &quot;Objects&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This section is not necessary to understand in order to use the module. This section is provided for those wanting to understand how this extension works under the hood.</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>The following are exposed in the component. Do not try to modify them as it may result in undesired behavior.</p></div><h3 id="remotecomponent-clientcomm" tabindex="-1">RemoteComponent._clientComm <a class="header-anchor" href="#remotecomponent-clientcomm" aria-label="Permalink to &quot;RemoteComponent._clientComm&quot;">​</a></h3><p>A reference to <a href="https://sleitnick.github.io/RbxUtil/api/ClientComm" target="_blank" rel="noreferrer">The client&#39;s Comm instance</a>.</p><h3 id="remotecomponent-servercomm" tabindex="-1">RemoteComponent._serverComm <a class="header-anchor" href="#remotecomponent-servercomm" aria-label="Permalink to &quot;RemoteComponent._serverComm&quot;">​</a></h3><p>A reference to <a href="https://sleitnick.github.io/RbxUtil/api/ServerComm" target="_blank" rel="noreferrer">The server&#39;s Comm instance</a>.</p>`,32),o=[n];function l(p,r,h,c,d,k){return i(),s("div",null,o)}const g=e(t,[["render",l]]);export{u as __pageData,g as default};