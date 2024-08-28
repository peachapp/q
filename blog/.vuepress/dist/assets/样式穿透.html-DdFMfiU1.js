import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as i,f as t}from"./app-8HN3oAmX.js";const a={},n=t(`<h1 id="样式穿透" tabindex="-1"><a class="header-anchor" href="#样式穿透"><span>样式穿透</span></a></h1><p><code>scoped</code>属性看起来很好用，在<code>vue</code>项目中，当引入第三方组件库时（如使用<code>vue-awesome-swiper</code>实现移动端轮播），需要在局部组件中修改第三方组件库的样式，而又不想去除<code>scoped</code>属性造成组件之间的样式污染。这时可以通过特殊的方式穿透<code>scoped</code>。</p><ul><li><code>stylus</code>的样式穿透，使用<code>&gt;&gt;&gt;</code>。</li></ul><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">外层 </span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF;">&gt;&gt;&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> 第三方组件</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  样式</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>sass</code>和<code>less</code>的样式穿透，使用<code>/deep/</code>。</li></ul><div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">外层</span><span style="--shiki-light:#000000;--shiki-dark:#FFFFFF;"> /deep/</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> 第三方组件</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  样式</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),d=[n];function l(c,o){return i(),s("div",null,d)}const h=e(a,[["render",l],["__file","样式穿透.html.vue"]]),k=JSON.parse('{"path":"/VUE/%E6%A0%B7%E5%BC%8F%E7%A9%BF%E9%80%8F.html","title":"样式穿透","lang":"zh-CN","frontmatter":{"description":"样式穿透 scoped属性看起来很好用，在vue项目中，当引入第三方组件库时（如使用vue-awesome-swiper实现移动端轮播），需要在局部组件中修改第三方组件库的样式，而又不想去除scoped属性造成组件之间的样式污染。这时可以通过特殊的方式穿透scoped。 stylus的样式穿透，使用>>>。 sass和less的样式穿透，使用/deep/。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/VUE/%E6%A0%B7%E5%BC%8F%E7%A9%BF%E9%80%8F.html"}],["meta",{"property":"og:site_name","content":"🍑的博客 ！"}],["meta",{"property":"og:title","content":"样式穿透"}],["meta",{"property":"og:description","content":"样式穿透 scoped属性看起来很好用，在vue项目中，当引入第三方组件库时（如使用vue-awesome-swiper实现移动端轮播），需要在局部组件中修改第三方组件库的样式，而又不想去除scoped属性造成组件之间的样式污染。这时可以通过特殊的方式穿透scoped。 stylus的样式穿透，使用>>>。 sass和less的样式穿透，使用/deep/。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-20T06:06:03.000Z"}],["meta",{"property":"article:author","content":"🍑"}],["meta",{"property":"article:modified_time","content":"2024-08-20T06:06:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"样式穿透\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-20T06:06:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"🍑\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1723794615000,"updatedTime":1724133963000,"contributors":[{"name":"songzhichao","email":"caoxu@boyetrade.com","commits":1}]},"readingTime":{"minutes":0.45,"words":134},"filePathRelative":"VUE/样式穿透.md","localizedDate":"2024年8月16日","excerpt":"\\n<p><code>scoped</code>属性看起来很好用，在<code>vue</code>项目中，当引入第三方组件库时（如使用<code>vue-awesome-swiper</code>实现移动端轮播），需要在局部组件中修改第三方组件库的样式，而又不想去除<code>scoped</code>属性造成组件之间的样式污染。这时可以通过特殊的方式穿透<code>scoped</code>。</p>\\n<ul>\\n<li><code>stylus</code>的样式穿透，使用<code>&gt;&gt;&gt;</code>。</li>\\n</ul>\\n<div class=\\"language-css line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"css\\" data-title=\\"css\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">外层 </span><span style=\\"--shiki-light:#000000;--shiki-dark:#FFFFFF\\">&gt;&gt;&gt;</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> 第三方组件</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">  样式</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{h as comp,k as data};
