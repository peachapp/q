import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as t,f as c}from"./app-C4tUi4gM.js";const m={},d=c('<h1 id="mobx" tabindex="-1"><a class="header-anchor" href="#mobx"><span><code>mobx</code></span></a></h1><h2 id="mobx的数据流是什么样的" tabindex="-1"><a class="header-anchor" href="#mobx的数据流是什么样的"><span><code>mobx</code>的数据流是什么样的</span></a></h2><p>在控制流上，<code>mobx</code>也应用的单向数据流模式。</p><p><code>mobx</code>的核心思想：状态变化引起的副作用应该被自动触发。</p><p>在<code>mobx</code>中它的这句话包括了两方面的意思：</p><ol><li>应用逻辑只需要修改状态数据即可，<code>mobx</code>会自动触发些缓存，渲染 UI 等这些业务经历的副作用，无需人工干预。</li><li>副作用依赖哪些状态数据是被自动收集的，比如某个副作用依赖<code>A</code>和<code>B</code>，那么如果状态<code>C</code>发生变化，这个副作用是不会被触发的，这是<code>mobx</code>最吸引人的特性之一，也是<code>mobx</code>能够轻易优化渲染性能的关键所在。</li></ol>',6),n=[d];function a(r,i){return t(),e("div",null,n)}const x=o(m,[["render",a],["__file","mobx.html.vue"]]),b=JSON.parse('{"path":"/REACT/mobx.html","title":"mobx","lang":"zh-CN","frontmatter":{"description":"mobx mobx的数据流是什么样的 在控制流上，mobx也应用的单向数据流模式。 mobx的核心思想：状态变化引起的副作用应该被自动触发。 在mobx中它的这句话包括了两方面的意思： 应用逻辑只需要修改状态数据即可，mobx会自动触发些缓存，渲染 UI 等这些业务经历的副作用，无需人工干预。 副作用依赖哪些状态数据是被自动收集的，比如某个副作用依赖A...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/REACT/mobx.html"}],["meta",{"property":"og:site_name","content":"🍑的博客 ！"}],["meta",{"property":"og:title","content":"mobx"}],["meta",{"property":"og:description","content":"mobx mobx的数据流是什么样的 在控制流上，mobx也应用的单向数据流模式。 mobx的核心思想：状态变化引起的副作用应该被自动触发。 在mobx中它的这句话包括了两方面的意思： 应用逻辑只需要修改状态数据即可，mobx会自动触发些缓存，渲染 UI 等这些业务经历的副作用，无需人工干预。 副作用依赖哪些状态数据是被自动收集的，比如某个副作用依赖A..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"🍑"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mobx\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"🍑\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"mobx的数据流是什么样的","slug":"mobx的数据流是什么样的","link":"#mobx的数据流是什么样的","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.66,"words":197},"filePathRelative":"REACT/mobx.md","excerpt":"\\n<h2><code>mobx</code>的数据流是什么样的</h2>\\n<p>在控制流上，<code>mobx</code>也应用的单向数据流模式。</p>\\n<p><code>mobx</code>的核心思想：状态变化引起的副作用应该被自动触发。</p>\\n<p>在<code>mobx</code>中它的这句话包括了两方面的意思：</p>\\n<ol>\\n<li>应用逻辑只需要修改状态数据即可，<code>mobx</code>会自动触发些缓存，渲染 UI 等这些业务经历的副作用，无需人工干预。</li>\\n<li>副作用依赖哪些状态数据是被自动收集的，比如某个副作用依赖<code>A</code>和<code>B</code>，那么如果状态<code>C</code>发生变化，这个副作用是不会被触发的，这是<code>mobx</code>最吸引人的特性之一，也是<code>mobx</code>能够轻易优化渲染性能的关键所在。</li>\\n</ol>","autoDesc":true}');export{x as comp,b as data};
