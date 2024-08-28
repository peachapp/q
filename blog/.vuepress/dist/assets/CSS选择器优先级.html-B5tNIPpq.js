import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,f as l}from"./app-8HN3oAmX.js";const a={},t=l(`<h1 id="css选择器优先级" tabindex="-1"><a class="header-anchor" href="#css选择器优先级"><span><code>CSS</code>选择器优先级</span></a></h1><p><code>css</code>权重指的是<code>css</code>选择器的优先级，优先级高的<code>css</code>样式会覆盖优先级低的<code>css</code>样式，优先级越高说明权重越高，反之亦然。</p><p>权重的四个特殊性等级定义：</p><ol><li>行内样式：<code>x,0,0,0</code>。</li><li><code>ID</code>选择器：<code>0,x,0,0</code>。</li><li>类选择器|属性选择器|伪类选择器：<code>0,0,x,0</code>。</li><li>元素和伪元素选择器：<code>0,0,0,x</code>。</li></ol><p>计算方法：</p><ol><li>每个等级的初始值为<code>0</code>。</li><li>每个等级的叠加为选择器出现的次数相加。</li><li>不可进位，比如<code>0,99,99,99</code>。</li><li>依次表示为：<code>0,0,0,0</code>。</li><li>每个等级计数之间没关联。</li><li>等级判断从左向右，如果某一位数值相同，则判断下一位数值。</li><li>如果两个优先级相同，则最后出现的优先级高，<code>!important</code>也适用。</li><li>通配符选择器的特殊性值为：<code>0,0,0,0</code>。</li><li>继承样式优先级最低，通配符样式优先级高于继承样式优先级。</li><li><code>!important</code>（权重），它没有特殊性值，但它的优先级是最高的，为了方便记忆，可以认为它的特殊性值为：<code>1,0,0,0,0</code>。</li></ol><p>计算实例：</p><ol><li><code>#demo a{color: orange;}/*特殊性值：0,1,0,1*/</code></li><li><code>div#demo a{color: red;}/*特殊性值：0,1,0,2*/</code></li></ol><p>注意：</p><ol><li>样式应用时，<code>css</code>会先查看规则的权重（<code>!important</code>），加了权重的优先级最高，当权重相同的时候，会比较规则的特殊性。</li><li>特殊性值越大的声明优先级越高。</li><li>相同特殊性值的声明，根据样式引入的顺序，后声明的规则优先级高（距离元素出现最近的）。</li><li>部分浏览器由于字节溢出问题出现的进位表现不做考虑。</li></ol><p>测试：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">&lt;!-- hello在页面上表现为红色，蓝色样式虽然是后声明的，但是红色样式选择器的优先级更高，所以表现为红色 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  .box</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">blue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">style</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;box&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;hello&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p><ol><li>常用选择器优先级：<code>行内 &gt; id &gt; class &gt; tag</code>。</li><li><code>!important</code>可以提升样式优先级，但不建议使用。如果<code>!important</code>被用于一个简写的样式属性，那么这条简写的样式属性所代表的子属性都会被应用上<code>!important</code>。 例如：<code>background: blue !important;</code>。</li><li>如果两条样式都使用<code>!important</code>，则权重值高的优先级更高。</li><li>在<code>css</code>样式表中，同一个<code>CSS</code>样式写了两次，后面的会覆盖前面的。</li><li>样式指向同一元素，权重规则生效，权重大的被应用。</li><li>样式指向同一元素，权重规则生效，权重相同时，就近原则生效，后面定义的被应用。</li><li>样式不指向同一元素时，权重规则失效，就近原则生效，离目标元素最近的样式被应用。</li></ol><p><a href="https://www.jianshu.com/p/1c4e639ff7d5" target="_blank" rel="noopener noreferrer">《CSS 优先级计算及应用》</a><br><a href="http://www.cnblogs.com/wangmeijian/p/4207433.html" target="_blank" rel="noopener noreferrer">《CSS 优先级计算规则》</a><br><a href="https://www.zhangxinxu.com/wordpress/2012/08/256-class-selector-beat-id-selector/" target="_blank" rel="noopener noreferrer">《有趣：256 个 class 选择器可以干掉 1 个 id 选择器》</a></p>`,15),n=[t];function o(c,d){return e(),s("div",null,n)}const h=i(a,[["render",o],["__file","CSS选择器优先级.html.vue"]]),k=JSON.parse('{"path":"/CSS/CSS%E9%80%89%E6%8B%A9%E5%99%A8%E4%BC%98%E5%85%88%E7%BA%A7.html","title":"CSS选择器优先级","lang":"zh-CN","frontmatter":{"description":"CSS选择器优先级 css权重指的是css选择器的优先级，优先级高的css样式会覆盖优先级低的css样式，优先级越高说明权重越高，反之亦然。 权重的四个特殊性等级定义： 行内样式：x,0,0,0。 ID选择器：0,x,0,0。 类选择器|属性选择器|伪类选择器：0,0,x,0。 元素和伪元素选择器：0,0,0,x。 计算方法： 每个等级的初始值为0。 ...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/CSS/CSS%E9%80%89%E6%8B%A9%E5%99%A8%E4%BC%98%E5%85%88%E7%BA%A7.html"}],["meta",{"property":"og:site_name","content":"🍑的博客 ！"}],["meta",{"property":"og:title","content":"CSS选择器优先级"}],["meta",{"property":"og:description","content":"CSS选择器优先级 css权重指的是css选择器的优先级，优先级高的css样式会覆盖优先级低的css样式，优先级越高说明权重越高，反之亦然。 权重的四个特殊性等级定义： 行内样式：x,0,0,0。 ID选择器：0,x,0,0。 类选择器|属性选择器|伪类选择器：0,0,x,0。 元素和伪元素选择器：0,0,0,x。 计算方法： 每个等级的初始值为0。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-28T11:38:23.000Z"}],["meta",{"property":"article:author","content":"🍑"}],["meta",{"property":"article:modified_time","content":"2024-08-28T11:38:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS选择器优先级\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-28T11:38:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"🍑\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1723630143000,"updatedTime":1724845103000,"contributors":[{"name":"songzhichao","email":"caoxu@boyetrade.com","commits":3}]},"readingTime":{"minutes":2.69,"words":807},"filePathRelative":"CSS/CSS选择器优先级.md","localizedDate":"2024年8月14日","excerpt":"\\n<p><code>css</code>权重指的是<code>css</code>选择器的优先级，优先级高的<code>css</code>样式会覆盖优先级低的<code>css</code>样式，优先级越高说明权重越高，反之亦然。</p>\\n<p>权重的四个特殊性等级定义：</p>\\n<ol>\\n<li>行内样式：<code>x,0,0,0</code>。</li>\\n<li><code>ID</code>选择器：<code>0,x,0,0</code>。</li>\\n<li>类选择器|属性选择器|伪类选择器：<code>0,0,x,0</code>。</li>\\n<li>元素和伪元素选择器：<code>0,0,0,x</code>。</li>\\n</ol>","autoDesc":true}');export{h as comp,k as data};
