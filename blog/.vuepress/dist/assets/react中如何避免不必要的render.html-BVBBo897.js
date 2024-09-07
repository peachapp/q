import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as t,f as c}from"./app-C4tUi4gM.js";const d={},n=c('<h1 id="react中如何避免不必要的render" tabindex="-1"><a class="header-anchor" href="#react中如何避免不必要的render"><span><code>react</code>中如何避免不必要的<code>render</code></span></a></h1><ol><li><code>shouldComponentUpdate</code>和<code>PureComponent</code>。在<code>react</code>类组件中，可以利用<code>shouldComponentUpdate</code>或者<code>PureComponent</code>来减少因父组件更新而触发子组件的<code>render</code>，从而达到目的。<code>shouldComponentUpdate</code>可以决定组件是否重新渲染，如果不希望组件重新渲染，返回<code>false</code>即可。</li><li>利用高阶组件。在函数组件中，并没有<code>shouldComponentUpdate</code>这个生命周期，可以利用高阶组件，封装一个类似<code>PureComponet</code>的功能。</li><li><code>React.memo</code>。<code>React.memo</code>是<code>React 16.6</code>新的一个<code>API</code>，用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与<code>PureComponent</code>十分类似，但不同的是，<code>React.memo</code>只能用于函数组件。</li><li>使用<code>react</code>的<code>useMemo</code>、<code>useCallback</code>钩子，只能用于函数组件。</li><li>给组件设置<code>key</code>。</li></ol>',2),r=[n];function a(p,l){return t(),o("div",null,r)}const s=e(d,[["render",a],["__file","react中如何避免不必要的render.html.vue"]]),u=JSON.parse('{"path":"/REACT/react%E4%B8%AD%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E4%B8%8D%E5%BF%85%E8%A6%81%E7%9A%84render.html","title":"react中如何避免不必要的render","lang":"zh-CN","frontmatter":{"description":"react中如何避免不必要的render shouldComponentUpdate和PureComponent。在react类组件中，可以利用shouldComponentUpdate或者PureComponent来减少因父组件更新而触发子组件的render，从而达到目的。shouldComponentUpdate可以决定组件是否重新渲染，如果不希望...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/REACT/react%E4%B8%AD%E5%A6%82%E4%BD%95%E9%81%BF%E5%85%8D%E4%B8%8D%E5%BF%85%E8%A6%81%E7%9A%84render.html"}],["meta",{"property":"og:site_name","content":"🍑的博客 ！"}],["meta",{"property":"og:title","content":"react中如何避免不必要的render"}],["meta",{"property":"og:description","content":"react中如何避免不必要的render shouldComponentUpdate和PureComponent。在react类组件中，可以利用shouldComponentUpdate或者PureComponent来减少因父组件更新而触发子组件的render，从而达到目的。shouldComponentUpdate可以决定组件是否重新渲染，如果不希望..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"🍑"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"react中如何避免不必要的render\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"🍑\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.68,"words":204},"filePathRelative":"REACT/react中如何避免不必要的render.md","excerpt":"\\n<ol>\\n<li><code>shouldComponentUpdate</code>和<code>PureComponent</code>。在<code>react</code>类组件中，可以利用<code>shouldComponentUpdate</code>或者<code>PureComponent</code>来减少因父组件更新而触发子组件的<code>render</code>，从而达到目的。<code>shouldComponentUpdate</code>可以决定组件是否重新渲染，如果不希望组件重新渲染，返回<code>false</code>即可。</li>\\n<li>利用高阶组件。在函数组件中，并没有<code>shouldComponentUpdate</code>这个生命周期，可以利用高阶组件，封装一个类似<code>PureComponet</code>的功能。</li>\\n<li><code>React.memo</code>。<code>React.memo</code>是<code>React 16.6</code>新的一个<code>API</code>，用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与<code>PureComponent</code>十分类似，但不同的是，<code>React.memo</code>只能用于函数组件。</li>\\n<li>使用<code>react</code>的<code>useMemo</code>、<code>useCallback</code>钩子，只能用于函数组件。</li>\\n<li>给组件设置<code>key</code>。</li>\\n</ol>","autoDesc":true}');export{s as comp,u as data};
