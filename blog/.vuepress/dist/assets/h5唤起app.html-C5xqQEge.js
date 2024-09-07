import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as e,f as a}from"./app-C4tUi4gM.js";const n={},l=a(`<h1 id="h5唤起app" tabindex="-1"><a class="header-anchor" href="#h5唤起app"><span><code>h5</code>唤起<code>app</code></span></a></h1><h2 id="url-scheme" tabindex="-1"><a class="header-anchor" href="#url-scheme"><span><code>URL Scheme</code></span></a></h2><p>我们的手机上有许多私密信息，联系方式、照片、银行卡信息...我们不希望这些信息可以被手机应用随意获取到，信息泄露的危害甚大。所以，如何保证个人信息在设备所有者知情并允许的情况下被使用，是智能设备的核心安全问题。</p><p>对此，苹果使用了名为<code>沙盒</code>的机制：应用只能访问它声明可能访问的资源。但沙盒也阻碍了应用间合理的信息共享，某种程度上限制了应用的能力。</p><p>因此，我们急需要一个辅助工具来帮助我们实现应用通信，<code>URL Scheme</code>就是这个工具。</p><p><code>URL Scheme</code>是什么？</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">scheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:][</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">//authority][path][?query][#fragment]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们拿<code>https://www.baidu.com</code>来举例，<code>scheme</code>自然就是<code>https</code>了。</p><p>就像给服务器资源分配一个<code>URL</code>，以便我们去访问它一样，我们同样也可以给手机<code>APP</code>分配一个特殊格式的<code>URL</code>，用来访问这个<code>APP</code>或者这个<code>APP</code>中的某个功能(来实现通信)。<code>APP</code>得有一个标识，好让我们可以定位到它，它就是<code>URL</code>的<code>Scheme</code>部分。</p><p>常用<code>APP</code>的<code>URL Scheme</code>：</p><table><thead><tr><th>APP</th><th>微信</th><th>支付宝</th><th>淘宝</th><th>微博</th><th>QQ</th><th>知乎</th><th>短信</th></tr></thead><tbody><tr><td>URL Scheme</td><td>weixin://</td><td>alipay://</td><td>taobao://</td><td>sinaweibo://</td><td>mqq://</td><td>zhihu://</td><td>sms://</td></tr></tbody></table><p><code>URL Scheme</code>语法：</p><p>上面表格中都是最简单的用于打开<code>APP</code>的<code>URL Scheme</code>，下面才是我们常用的<code>URL Scheme</code>格式：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">     行为</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">应用的某个功能</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">            |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">scheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">//[path][?query]</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">   |</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">               |</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">应用标识</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">       功能需要的参数</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="intent" tabindex="-1"><a class="header-anchor" href="#intent"><span><code>Intent</code></span></a></h2><p>安卓的原生谷歌浏览器自从<code>chrome25</code>版本开始对于唤端功能做了一些变化，<code>URL Scheme</code>无法再启动<code>Android</code>应用。 例如，通过<code>iframe</code>指向<code>weixin://</code>，即使用户安装了微信也无法打开。所以，<code>APP</code>需要实现谷歌官方提供的<code>intent:</code>语法，或者实现让用户通过自定义手势来打开<code>APP</code>，当然这就是题外话了。</p><p><code>Intent</code>语法：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">intent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">   HOST</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">URI</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">path</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> // Optional host</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   #</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Intent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      package</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      action</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      category</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      component</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      scheme</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">string</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">   end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果用户未安装<code>APP</code>，则会跳转到系统默认商店。当然，如果你想要指定一个唤起失败的跳转地址，添加下面的字符串在<code>end;</code>前就可以了：</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;">S</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">browser_fallback_url</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">encoded_full_url</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">];</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例： 下面是打开<code>Zxing二维码扫描APP</code>的<code>intent</code>。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">intent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">   //scan/</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">   #</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">Intent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">      package</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">com</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">google</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">zxing</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">client</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">android</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">      scheme</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">zxing</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">   end</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开这个<code>APP</code>，可以通过如下的方式：</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;S.browser_fallback_url=http%3A%2F%2Fzxing.org;end&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  Take a QR code</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="universal-link" tabindex="-1"><a class="header-anchor" href="#universal-link"><span><code>Universal Link</code></span></a></h2><p><code>Universal Link</code>是什么？</p><p><code>Universal Link</code>是苹果在<code>WWDC2015</code>上为<code>iOS9</code>引入的新功能，通过传统的<code>HTTP</code>链接即可打开<code>APP</code>。如果用户未安装<code>APP</code>，则会跳转到该链接所对应的页面。</p><p>为什么要使用<code>Universal Link</code>？</p><p>传统的<code>Scheme</code>链接有以下几个痛点：</p><ul><li>在<code>ios</code>上会有确认弹窗提示用户是否打开，对于用户来说唤端，多出了一步操作。若用户未安装 <code>APP</code>，也会有一个提示窗，告知我们 “打不开该网页，因为网址无效”。</li><li>传统<code>Scheme</code>跳转无法得知唤端是否成功，<code>Universal Link</code>唤端失败可以直接打开此链接对应的页面。</li><li><code>Scheme</code>在微信、微博、QQ 浏览器、手百中都已经被禁止使用，使用<code>Universal Link</code>可以避开它们的屏蔽（ 截止到 18 年 8 月 21 日，微信和 QQ 浏览器已经禁止了<code>Universal Link</code>，其他主流<code>APP</code>未发现有禁止 ）。</li></ul><p>如何让<code>APP</code>支持<code>Universal Link</code>：</p><p>有大量的文章会详细的告诉我们如何配置，你也可以去看<a href="https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW2" target="_blank" rel="noopener noreferrer">官方文档</a>，我这里简单的写一个 12345。</p><ol><li>拥有一个支持<code>https</code>的域名。</li><li>在<a href="https://developer.apple.com/" target="_blank" rel="noopener noreferrer">开发者中心</a>，<code>Identifiers</code>下<code>AppIDs</code>找到自己的<code>App ID</code>，编辑打开<code>Associated Domains</code>服务。</li><li>打开工程配置中的<code>Associated Domains</code>，在其中的<code>Domains</code>中填入你想支持的域名，必须以<code>applinks:</code>为前缀。</li><li>配置<code>apple-app-site-association</code>文件，文件名必须为<code>apple-app-site-association</code>，<strong>不带任何后缀</strong>。</li><li>上传该文件到你的<code>HTTPS</code>服务器的根目录或者<code>.well-known</code>目录下。</li></ol><p><code>Universal Link</code>配置中的坑：</p><p>这里放一下我们在配置过程中遇到的坑，当然首先你在配置过程中必须得严格按照上面的要求去做。</p><ol><li>跨域问题。 <code>IOS 9.2</code>以后，必须要触发跨域才能支持<code>Universal Link</code>唤端。<br><code>IOS</code>那边有这样一个判断，如果你要打开的<code>Universal Link</code>和当前页面是同一域名，<code>ios</code>尊重用户最可能的意图，直接打开链接所对应的页面。如果不在同一域名下，则在你的<code>APP</code>中打开链接，也就是执行具体的唤端操作。</li><li><code>Universal Link</code>是空页面。 <code>Universal Link</code>本质上是个空页面，如果未安装<code>APP</code>，<code>Universal Link</code>被当做普通的页面链接，自然会跳到<code>404</code>页面，所以我们需要将它绑定到我们的中转页或者下载页。</li></ol><h2 id="如何调用三种唤端媒介" tabindex="-1"><a class="header-anchor" href="#如何调用三种唤端媒介"><span>如何调用三种唤端媒介</span></a></h2><p>通过前面的介绍，我们可以发现，无论是<code>URL Scheme</code>还是<code>Intent</code>或者<code>Universal Link</code>，它们都算是<code>URL</code>，只是<code>URL Scheme</code>和<code>Intent</code>算是特殊的<code>URL</code>。所以我们可以拿<code>URL</code>的方法来使用它们（<code>iframe</code>、<code>a标签</code>、<code>window.location</code>）。</p><h2 id="iframe" tabindex="-1"><a class="header-anchor" href="#iframe"><span><code>iframe</code></span></a></h2><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">iframe</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;sinaweibo://qrcode&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">iframe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在只有<code>URL Scheme</code>的日子里，<code>iframe</code>是使用最多的了。因为在未安装<code>app</code>的情况下，不会去跳转错误页面。但是<code>iframe</code>在各个系统以及各个应用中的兼容问题还是挺多的，不能全部使用<code>URL Scheme</code>。</p><h2 id="a标签" tabindex="-1"><a class="header-anchor" href="#a标签"><span><code>a标签</code></span></a></h2><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;end&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  扫一扫</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面我们提到<code>Intent</code>协议，官方给出的用例使用的就是使用的<code>a标签</code>，所以我们跟着一起用就可以了。</p><p>使用过程中，对于动态生成的<code>a标签</code>，使用<code>dispatch</code>来模拟触发点击事件，发现很多种<code>event</code>传递过去都无效；使用<code>click()</code>来模拟触发，部分场景下存在这样的情况，第一次点击过后，回到原先页面，再次点击，点击位置和页面所识别位置有不小的偏移，所以<code>Intent</code>协议从<code>a标签</code>换成了<code>window.location</code>。</p><h2 id="window-location" tabindex="-1"><a class="header-anchor" href="#window-location"><span><code>window.location</code></span></a></h2><p><code>URL Scheme</code>在<code>ios 9+</code>上诸如 safari、UC、QQ 浏览器中，<code>iframe</code>均无法成功唤起<code>APP</code>，只能通过<code>window.location</code>才能成功唤端。</p><p>当然，如果我们的<code>app</code>支持<code>Universal Link</code>，<code>ios 9+</code>就用不到<code>URL Scheme</code>了。而<code>Universal Link</code>在使用过程中，我发现在 qq 中，无论是<code>iframe</code>导航 还是<code>a标签</code>打开，又或者<code>window.location</code>都无法成功唤端，一开始我以为是 qq 和微信一样禁止了<code>Universal Link</code>唤端的功能，其实不然，百般试验下，通过<code>top.location</code>唤端成功了。</p><h2 id="判断唤端是否成功" tabindex="-1"><a class="header-anchor" href="#判断唤端是否成功"><span>判断唤端是否成功</span></a></h2><p>如果唤端失败（APP 未安装），我们总是要做一些处理的，可以是跳转下载页，可以是 ios 下跳转 App Store... 但是 Js 并不能提供给我们获取 APP 唤起状态的能力，<code>Android Intent</code>以及<code>Universal Link</code>倒是不用担心，它们俩的自身机制允许它们唤端失败后直接导航至相应的页面，但是<code>URL Scheme</code>并不具备这样的能力，所以我们只能通过一些很 hack 的方式来实现 APP 唤起检测功能。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// 一般情况下是 visibilitychange</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> visibilityChangeProperty</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> getVisibilityChangeProperty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> timer</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> hidden</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> isPageHidden</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">!</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">hidden</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    cb</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">timeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">visibilityChangeProperty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">  document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">visibilityChangeProperty</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    clearTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">timer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">addEventListener</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;pagehide&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, () </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  clearTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">timer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>APP 如果被唤起的话，页面就会进入后台运行，会触发页面的<code>visibilitychange</code>事件。如果触发了，则表明页面被成功唤起，及时调用<code>clearTimeout</code>，清除页面未隐藏时的失败函数（callback）回调。</p><p>当然这个事件是有兼容性的，具体的代码实现时做了事件是否需要添加前缀（比如<code>-webkit-</code>）的校验。如果都不兼容，我们将使用<code>pagehide</code>事件来做兜底处理。</p><h2 id="没有完美的方案" tabindex="-1"><a class="header-anchor" href="#没有完美的方案"><span>没有完美的方案</span></a></h2><p>透过上面的几个点，我们可以发现，无论是 唤端媒介 、 调用唤端媒介 还是 判断唤端结果 都没有一个十全十美的方法，我们在代码层上能做的只是在确保最常用的场景（比如 微信、微博、手百 等）唤端无误的情况下，最大化的兼容剩余的场景。</p><ul><li>微信、微博、手百、QQ 浏览器等。 这些应用能阻止唤端是因为它们直接屏蔽掉了 URL Scheme 。接下来可能就有看官疑惑了，微信中是可以打开大众点评的呀，微博里面可以打开优酷呀，那是如何实现的呢？ 它们都各自维护着一个白名单，如果你的域名在白名单内，那这个域名下所有的页面发起的 URL Scheme 就都会被允许。就像微信，如果你是腾讯的“家属”，你就可以加入白名单了，微信的白名单一般只包含着“家属”，除此外很难申请到白名单资质。但是微博之类的都是可以联系他们的渠道童鞋进行申请的，只是条件各不相同，比如微博的就是在你的 APP 中添加打开微博的入口，三个月内唤起超过 100w 次，就可以加入白名单了。</li><li>腾讯应用宝直接打开 APP 的某个功能。 刚刚我们说到，如果你不是微信的家属，那你是很难进入白名单的，所以在安卓中我们一般都是直接打开腾讯应用宝，ios 中 直接打开 App Store。点击腾讯应用宝中的“打开”按钮，可以直接唤起我们的 APP，但是无法打开 APP 中的某个功能（就是无法打开指定页面）。 腾讯应用宝对外开放了一个叫做 APP Link 的申请，只要你申请了 APP Link，就可以通过在打开应用宝的时候在应用宝地址后面添加上 &amp;android_schema={your_scheme} ，来打开指定的页面了。</li></ul><h2 id="开箱即用的callapp-lib" tabindex="-1"><a class="header-anchor" href="#开箱即用的callapp-lib"><span>开箱即用的<code>callapp-lib</code></span></a></h2><p><a href="https://github.com/suanmei/callapp-lib" target="_blank" rel="noopener noreferrer">使用文档</a></p><ol><li><code>npm包</code><a href="https://www.npmjs.com/package/callapp-lib" target="_blank" rel="noopener noreferrer">callapp-lib</a>。</li><li>也可以通过<code>script</code>直接加载<code>cdn</code>文件：<code>&lt;script src=&quot;https://unpkg.com/callapp-lib&quot;&gt;&lt;/script&gt;</code>。</li></ol>`,59),t=[l];function h(d,p){return e(),s("div",null,t)}const r=i(n,[["render",h],["__file","h5唤起app.html.vue"]]),o=JSON.parse('{"path":"/BUGS/h5%E5%94%A4%E8%B5%B7app.html","title":"h5唤起app","lang":"zh-CN","frontmatter":{"description":"h5唤起app URL Scheme 我们的手机上有许多私密信息，联系方式、照片、银行卡信息...我们不希望这些信息可以被手机应用随意获取到，信息泄露的危害甚大。所以，如何保证个人信息在设备所有者知情并允许的情况下被使用，是智能设备的核心安全问题。 对此，苹果使用了名为沙盒的机制：应用只能访问它声明可能访问的资源。但沙盒也阻碍了应用间合理的信息共享，某...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/BUGS/h5%E5%94%A4%E8%B5%B7app.html"}],["meta",{"property":"og:site_name","content":"🍑的博客 ！"}],["meta",{"property":"og:title","content":"h5唤起app"}],["meta",{"property":"og:description","content":"h5唤起app URL Scheme 我们的手机上有许多私密信息，联系方式、照片、银行卡信息...我们不希望这些信息可以被手机应用随意获取到，信息泄露的危害甚大。所以，如何保证个人信息在设备所有者知情并允许的情况下被使用，是智能设备的核心安全问题。 对此，苹果使用了名为沙盒的机制：应用只能访问它声明可能访问的资源。但沙盒也阻碍了应用间合理的信息共享，某..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"🍑"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"h5唤起app\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"🍑\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"URL Scheme","slug":"url-scheme","link":"#url-scheme","children":[]},{"level":2,"title":"Intent","slug":"intent","link":"#intent","children":[]},{"level":2,"title":"Universal Link","slug":"universal-link","link":"#universal-link","children":[]},{"level":2,"title":"如何调用三种唤端媒介","slug":"如何调用三种唤端媒介","link":"#如何调用三种唤端媒介","children":[]},{"level":2,"title":"iframe","slug":"iframe","link":"#iframe","children":[]},{"level":2,"title":"a标签","slug":"a标签","link":"#a标签","children":[]},{"level":2,"title":"window.location","slug":"window-location","link":"#window-location","children":[]},{"level":2,"title":"判断唤端是否成功","slug":"判断唤端是否成功","link":"#判断唤端是否成功","children":[]},{"level":2,"title":"没有完美的方案","slug":"没有完美的方案","link":"#没有完美的方案","children":[]},{"level":2,"title":"开箱即用的callapp-lib","slug":"开箱即用的callapp-lib","link":"#开箱即用的callapp-lib","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":8.72,"words":2615},"filePathRelative":"BUGS/h5唤起app.md","excerpt":"\\n<h2><code>URL Scheme</code></h2>\\n<p>我们的手机上有许多私密信息，联系方式、照片、银行卡信息...我们不希望这些信息可以被手机应用随意获取到，信息泄露的危害甚大。所以，如何保证个人信息在设备所有者知情并允许的情况下被使用，是智能设备的核心安全问题。</p>\\n<p>对此，苹果使用了名为<code>沙盒</code>的机制：应用只能访问它声明可能访问的资源。但沙盒也阻碍了应用间合理的信息共享，某种程度上限制了应用的能力。</p>\\n<p>因此，我们急需要一个辅助工具来帮助我们实现应用通信，<code>URL Scheme</code>就是这个工具。</p>\\n<p><code>URL Scheme</code>是什么？</p>","autoDesc":true}');export{r as comp,o as data};
