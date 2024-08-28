import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as s,f as e}from"./app-8HN3oAmX.js";const l={},t=e(`<h1 id="call和apply和bind" tabindex="-1"><a class="header-anchor" href="#call和apply和bind"><span><code>call</code>和<code>apply</code>和<code>bind</code></span></a></h1><h2 id="call和apply" tabindex="-1"><a class="header-anchor" href="#call和apply"><span><code>call</code>和<code>apply</code></span></a></h2><p><code>call</code>和<code>apply</code>最主要的作用，是改变<code>this</code>的指向。</p><p>共同点：都能够改变函数执行时的上下文，将一个对象的方法交给另一个对象来执行，并且是立即执行的。</p><p>区别：写法传参上存在区别。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">call</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">param1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">param2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[,…[,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">paramN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]]]])</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">Function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">apply</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">obj</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[,</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">argArray</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>call</code>：</p><ul><li>调用<code>call</code>的对象，必须是函数<code>Function</code>。</li><li><code>call</code>的第一个参数，是一个对象。<code>Function</code>的调用者，将会指向这个对象。如果不传，则默认为全局对象<code>window</code>。</li><li>第二个参数开始，可以接收任意个参数。每个参数会映射到相应位置的<code>Function</code>的参数上。但是如果将所有的参数作为数组传入，它们会作为一个整体映射到<code>Function</code>对应的第一个参数上，之后参数都为空。</li></ul><p><code>apply</code>：</p><ul><li>调用<code>apply</code>的对象，必须是函数<code>Function</code>。<code>apply</code>只接收两个参数。</li><li><code>apply</code>的第一个参数，是一个对象。<code>Function</code>的调用者，将会指向这个对象。如果不传，则默认为全局对象<code>window</code>（第一个参数的规则与<code>call</code>一致）。</li><li>第二个参数，必须是数组或者类数组，它们会被转换成类数组，传入<code>Function</code>中，并且会被映射到<code>Function</code>对应的参数上。这也是<code>call</code>和<code>apply</code>之间，很重要的一个区别。</li></ul><h2 id="bind" tabindex="-1"><a class="header-anchor" href="#bind"><span><code>bind</code></span></a></h2><p><code>bind()</code>方法会创建一个新函数。当这个新函数被调用时，<code>bind()</code>的第一个参数将作为它执行时的<code>this</code>，之后的一系列参数将会在传递的实参前传入作为它的参数。（来自于<code>MDN</code>)</p>`,12),n=[t];function p(d,c){return s(),a("div",null,n)}const r=i(l,[["render",p],["__file","call和apply和bind.html.vue"]]),k=JSON.parse('{"path":"/JAVASCRIPT/call%E5%92%8Capply%E5%92%8Cbind.html","title":"call和apply和bind","lang":"zh-CN","frontmatter":{"description":"call和apply和bind call和apply call和apply最主要的作用，是改变this的指向。 共同点：都能够改变函数执行时的上下文，将一个对象的方法交给另一个对象来执行，并且是立即执行的。 区别：写法传参上存在区别。 call： 调用call的对象，必须是函数Function。 call的第一个参数，是一个对象。Function的调用...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/JAVASCRIPT/call%E5%92%8Capply%E5%92%8Cbind.html"}],["meta",{"property":"og:site_name","content":"🍑的博客 ！"}],["meta",{"property":"og:title","content":"call和apply和bind"}],["meta",{"property":"og:description","content":"call和apply和bind call和apply call和apply最主要的作用，是改变this的指向。 共同点：都能够改变函数执行时的上下文，将一个对象的方法交给另一个对象来执行，并且是立即执行的。 区别：写法传参上存在区别。 call： 调用call的对象，必须是函数Function。 call的第一个参数，是一个对象。Function的调用..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-20T06:06:03.000Z"}],["meta",{"property":"article:author","content":"🍑"}],["meta",{"property":"article:modified_time","content":"2024-08-20T06:06:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"call和apply和bind\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-20T06:06:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"🍑\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"call和apply","slug":"call和apply","link":"#call和apply","children":[]},{"level":2,"title":"bind","slug":"bind","link":"#bind","children":[]}],"git":{"createdTime":1723009479000,"updatedTime":1724133963000,"contributors":[{"name":"songzhichao","email":"caoxu@boyetrade.com","commits":1}]},"readingTime":{"minutes":1.38,"words":414},"filePathRelative":"JAVASCRIPT/call和apply和bind.md","localizedDate":"2024年8月7日","excerpt":"\\n<h2><code>call</code>和<code>apply</code></h2>\\n<p><code>call</code>和<code>apply</code>最主要的作用，是改变<code>this</code>的指向。</p>\\n<p>共同点：都能够改变函数执行时的上下文，将一个对象的方法交给另一个对象来执行，并且是立即执行的。</p>\\n<p>区别：写法传参上存在区别。</p>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">Function</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">call</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">obj</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">,[</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">param1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">param2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[,…[,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">paramN</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">]]]])</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">Function</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">apply</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">obj</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">[,</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">argArray</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">])</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{r as comp,k as data};
