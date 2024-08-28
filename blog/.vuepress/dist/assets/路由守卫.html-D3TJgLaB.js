import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,o as t,f as c}from"./app-8HN3oAmX.js";const r={},i=c('<h1 id="路由守卫" tabindex="-1"><a class="header-anchor" href="#路由守卫"><span>路由守卫</span></a></h1><p>路由守卫就是路由跳转过程中的一些钩子函数，在路由跳转的时候，做一些判断或其它操作。类似于组件生命周期钩子函数。</p><p>全局路由守卫：</p><ol><li><code>beforeEach(to, from, next)</code>全局前置守卫，路由跳转前触发。</li><li><code>beforeResolve(to, from, next)</code>全局解析守卫，在所有组件内守卫和异步路由组件被解析之后触发。</li><li><code>afterEach(to, from)</code>全局后置守卫，路由跳转完成后触发。</li></ol><p>路由独享守卫：</p><p><code>beforeEnter(to, from, next)</code>路由对象单个路由配置，单个路由进入前触发。</p><p>组件路由守卫：</p><ol><li><code>beforeRouteEnter(to, from, next)</code>在组件生命周期<code>beforeCreate</code>阶段触发。</li><li><code>beforeRouteUpdate(to, from, next)</code>当前路由改变时触发。</li><li><code>beforeRouteLeave(to, from, next)</code>导航离开该组件的对应路由时触发。</li></ol><p>参数：</p><ul><li><code>to</code>即将要进入的目标路由对象。</li><li><code>from</code>即将要离开的路由对象。</li><li><code>next(Function)</code>是否可以进入某个具体路由，或者是某个具体路由的路径。</li></ul><p>完整的导航解析流程：</p><ol><li>触发进入其它路由。</li><li>调用要离开路由的组件守卫<code>beforeRouteLeave</code>。</li><li>调用全局的前置守卫<code>beforeEach</code>。</li><li>在重用的组件里调用<code>beforeRouteUpdate</code>。</li><li>在路由配置里的单条路由调用<code>beforeEnter</code>。</li><li>解析异步路由组件。</li><li>在将要进入的路由组件中调用<code>beforeRouteEnter</code>。</li><li>调用全局的解析守卫<code>beforeResolve</code>。</li><li>导航被确认。</li><li>调用全局的后置守卫<code>afterEach</code>。</li><li>触发<code>DOM</code>更新<code>mounted</code>。</li><li>执行<code>beforeRouteEnter</code>守卫中传给<code>next</code>的回调函数。</li></ol><p>使用场景：</p><ul><li>判断是否登录，如果是就<code>next</code>，否则就跳转到登录页面。</li><li>判断是否有权限，如果有就<code>next</code>，否则就跳转到无权限页面。</li></ul>',14),l=[i];function d(n,a){return t(),o("div",null,l)}const f=e(r,[["render",d],["__file","路由守卫.html.vue"]]),s=JSON.parse('{"path":"/VUE/%E8%B7%AF%E7%94%B1%E5%AE%88%E5%8D%AB.html","title":"路由守卫","lang":"zh-CN","frontmatter":{"description":"路由守卫 路由守卫就是路由跳转过程中的一些钩子函数，在路由跳转的时候，做一些判断或其它操作。类似于组件生命周期钩子函数。 全局路由守卫： beforeEach(to, from, next)全局前置守卫，路由跳转前触发。 beforeResolve(to, from, next)全局解析守卫，在所有组件内守卫和异步路由组件被解析之后触发。 afterE...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/VUE/%E8%B7%AF%E7%94%B1%E5%AE%88%E5%8D%AB.html"}],["meta",{"property":"og:site_name","content":"🍑的博客 ！"}],["meta",{"property":"og:title","content":"路由守卫"}],["meta",{"property":"og:description","content":"路由守卫 路由守卫就是路由跳转过程中的一些钩子函数，在路由跳转的时候，做一些判断或其它操作。类似于组件生命周期钩子函数。 全局路由守卫： beforeEach(to, from, next)全局前置守卫，路由跳转前触发。 beforeResolve(to, from, next)全局解析守卫，在所有组件内守卫和异步路由组件被解析之后触发。 afterE..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-20T06:06:03.000Z"}],["meta",{"property":"article:author","content":"🍑"}],["meta",{"property":"article:modified_time","content":"2024-08-20T06:06:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"路由守卫\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-20T06:06:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"🍑\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1723794615000,"updatedTime":1724133963000,"contributors":[{"name":"songzhichao","email":"caoxu@boyetrade.com","commits":1}]},"readingTime":{"minutes":1.53,"words":460},"filePathRelative":"VUE/路由守卫.md","localizedDate":"2024年8月16日","excerpt":"\\n<p>路由守卫就是路由跳转过程中的一些钩子函数，在路由跳转的时候，做一些判断或其它操作。类似于组件生命周期钩子函数。</p>\\n<p>全局路由守卫：</p>\\n<ol>\\n<li><code>beforeEach(to, from, next)</code>全局前置守卫，路由跳转前触发。</li>\\n<li><code>beforeResolve(to, from, next)</code>全局解析守卫，在所有组件内守卫和异步路由组件被解析之后触发。</li>\\n<li><code>afterEach(to, from)</code>全局后置守卫，路由跳转完成后触发。</li>\\n</ol>\\n<p>路由独享守卫：</p>","autoDesc":true}');export{f as comp,s as data};
