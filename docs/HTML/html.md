<!-----
lang: zh-CN
title: html 面试
description: html 面试题收录
----->

## 什么是 DOCTYPE， 有何作用？

`Doctype` 是 HTML5 的文档声明，通过它可以告诉浏览器，使用哪一个 HTML 版本标准解析文档。在浏览器发展的过程中，HTML 出现过很多版本，不同的版本之间格式书写上略有差异。如果没有事先告诉浏览器，那么浏览器就不知道文档解析标准是什么？此时，大部分浏览器将开启最大兼容模式来解析网页，我们一般称为 `怪异模式`，这不仅会降低解析效率，而且会在解析过程中产生一些难以预知的 `bug`，所以文档声明是必须的。

## 说说对 html 语义化的理解？

HTML 标签的语义化，简单来说，就是用正确的标签做正确的事情，给某块内容用上一个最恰当最合适的标签，使页面有良好的结构，页面元素有含义，无论是谁都能看懂这块内容是什么。

**语义化的优点如下：**

- 在没有 CSS 样式情况下也能够让页面呈现出清晰的结构
- 有利于 SEO 和搜索引擎建立良好的沟通，有助于爬虫抓取更多的有效信息，爬虫是依赖于标签来确定上下文和各个关键字的权重
- 方便团队开发和维护，语义化更具可读性，遵循 W3C 标准的团队都遵循这个标准，可以减少差异化

## src 和 href 的区别？

src 和 href 都是 HTML 中特定元素的属性，都可以用来引入外部的资源。两者区别如下：

- src：全称 source，它通常用于 img、video、audio、script 元素，通过 src 指向请求外部资源的来源地址，指向的内容会嵌入到文档中当前标签所在位置，在请求 src 资源时，它会将资源下载并应用到文档内，比如说：js 脚本、img 图片、frame 等元素。当浏览器解析到该元素时，会暂停其它资源下载，直到将该资源加载、编译、执行完毕。这也是为什么将 js 脚本放在底部而不是头部的原因。
- href：全称 hyper reference，意味着超链接，指向网络资源，当浏览器识别到它指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理，通常用于 a、link 元素。

## title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别？

- title 属性表示网页的标题，h1 元素则表示层次明确的页面内容标题，对页面信息的抓取也有很大的影响
- strong 是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：strong 会重读，而 b 是展示强调内容
- i 是 italic(斜体)的简写，是早期的斜体元素，表示内容展示为斜体，而 em 是 emphasize（强调）的简写，表示强调的文本

## link 和 @import？

1. link 是 `HTML` 标签，@import 是 `css` 提供的。
2. link 同时加载内容和样式，@import 引入的样式需要等待页面加载完成再加载。
3. link 可以引入除 css 外其他内容，例如`<link rel="icon" href="/favicon.ico">`，而 @import 只能引入 css。
4. link 可以通过 js 操作 DOM 动态引入样式表改变样式，而 @import 的则不可以。
5. link 没有兼容问题，而 @import 不被 ie5 以下支持。

## 什么是严格模式与混杂模式？

- 严格模式：是以浏览器支持的最高标准运行
- 混杂模式：页面以宽松向下兼容的方式显示，模拟老式浏览器的行为

## 前端页面有哪三层构成，分别是什么？

构成：`结构层`、`表示层`、`行为层`

- 结构层（structural layer）\
  结构层类似于盖房子需要打地基以及房子的悬梁框架，它是由 HTML 超文本标记语言来创建的，也就是页面中的各种标签，在结构层中保存了用户可以看到的所有内容，比如说：一段文字、一张图片、一段视频等等

- 表示层（presentation layer）\
  表示层是由 CSS 负责创建，它的作用是如何显示有关内容，学名：层叠样式表，也就相当于装修房子，看你要什么风格的，田园的、中式的、地中海的，总之 CSS 都能办妥

- 行为层（behaviorlayer）\
  行为层表示网页内容跟用户之间产生交互性，简单来说就是用户操作了网页，网页给用户一个反馈，这是 JavaScript 和 DOM 主宰的领域

## iframe 的作用以及优缺点？

iframe 也称作嵌入式框架，嵌入式框架和框架网页类似，它可以把一个网页的框架和内容嵌入到现有的网页中。

优点：

- 可以用来处理加载缓慢的内容，比如：广告

缺点：

- iframe 会阻塞主页面的 Onload 事件
- iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。但是可以通过 JS 动态给 ifame 添加 src 属性值来解决这个问题，当然也可以解决 iframe 会阻塞主页面的 Onload 事件的问题
- 会产生很多页面，不易管理
- 浏览器的后退按钮没有作用
- 无法被一些搜索引擎识别

## img 标签上的 title 与 alt？

- alt：全称 alternate，切换的意思，如果无法显示图像，浏览器将显示 alt 指定的内容
- title：当鼠标移动到元素上时显示 title 的内容

区别：

一般当鼠标滑动到元素身上的时候显示 title，而 alt 是 img 标签特有的属性，是图片内容的等价描述，用于图片无法加载时显示，这样用户还能看到关于丢失了什么东西的一些信息，相对来说比较友好。

## H5 和 HTML5 区别？

- H5 是一个产品名词，包含了最新的 HTML5、CSS3、ES6 等新技术来制作的应用
- HTML5 是一个技术名词，指的就是第五代 HTML

## 行内元素和块级元素分别有哪些？有何区别？怎样转换？

常见的块级元素：`p`、`div`、`form`、`ul`、`li`、`ol`、`table`、`h1`、`h2`、`h3`、`h4`、`h5`、`h6`、`dl`、`dt`、`dd`

常见的行级元素：`span`、`a`、`img`、`button`、`input`、`select`

块级元素：

- 总是在新行上开始，就是每个块级元素独占一行，默认从上到下排列
- 宽度缺少时是它的容器的 100%，除非设置一个宽度
- 高度、行高以及外边距和内边距都可以设置的
- 块级元素可以容纳其它行级元素和块级元素

行内元素：

- 和其它元素都会在一行显示
- 高度、行高以及外边距和内边距部分可以设置
- 宽度就是文字或者图片的宽度，不能改变
- 行级元素只能容纳文本或者其它行内元素

使用行内元素需要注意的是：

- 行内元素设置宽度 width 无效
- 行内元素设置 height 无效，但是可以通过 line-height 来设置
- 设置 margin 只有左右有效，上下无效
- 设置 padding 只有左右有效，上下无效

可以通过 display 属性对行内元素和块级元素进行切换：

display 属性值 inline，block，inline-block 分别将元素转换为行内元素、块级元素、行内块元素。

## label 的作用是什么？是怎么用的？

label 元素不会向用户呈现任何特殊效果，但是，它为鼠标用户改进了可用性，当我们在 label 元素内点击文本时就会触发此控件。也就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。最常用 label 的地方就是表单中的性别单选框了，当点击文字时也能够自动聚焦绑定的表单控件。

```html
<form>
  <label for="male">男</label>
  <input type="radio" name="sex" id="male" />
  <label for="female">女</label>
  <input type="radio" name="sex" id="female" />
</form>
```

## 对于 Web 标准以及 W3C 的理解？

Web 标准简单来说可以分为结构、表现、行为。其中结构是由 HTML 各种标签组成，简单来说就是 body 里面写入标签是为了页面的结构。表现指的是 CSS 层叠样式表，通过 CSS 可以让我们的页面结构标签更具美感。行为指的是页面和用户具有一定的交互，这部分主要由 JS 组成。

W3C，全称：world wide web consortium 是一个制定各种标准的非盈利性组织，也叫万维网联盟，标准包括 HTML、CSS、ECMAScript 等等，web 标准的制定有很多好处，比如说：

- 可以统一开发流程，统一使用标准化开发工具（VSCode、WebStorm、Sublime），方便多人协作
- 学习成本降低，只需要学习标准就行，否则就要学习各个浏览器厂商标准
- 跨平台，方便迁移都不同设备
- 降低代码维护成本

## Quirks（怪癖）模式是什么？它和 Standards（标准）有什么区别？

页面如果写了 DTD，就意味着这个页面采用对 CSS 支持更好的布局，而如果没有，则采用兼容之前的布局方式，这就是 Quirks 模式，有时候也叫怪癖模式、诡异模式、怪异模式。

区别：总体会有布局、样式解析、脚本执行三个方面区别，这里列举一些比较常见的区别：

- `盒模型`：在 W3C 标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，然而在 Quirks 模式下，IE 的宽度和高度还包含了 padding 和 border
- `设置行内元素的高宽`：在 Standards 模式下，给行内元素设置 width 和 height 都不会生效，而在 Quriks 模式下会生效
- `用margin：0 auto设置水平居中`：在 Standards 模式下，设置 margin：0 auto；可以使元素水平居中，但是在 Quriks 模式下失效
- `设置百分比高度`：在 Standards 模式下，元素的高度是由包含的内容决定的，如果父元素没有设置百分比的高度，子元素设置百分比的高度是无效的

## 知道什么是微格式吗？谈谈理解，在前端构建中应该考虑微格式吗？

所谓的微格式是建立在已有的、被广泛采用的标准基础之上的一组简单的、开放的数据格式。

具体表现是把语义嵌入到 HTML 中，以便有助于分离式开发，并通过制定一些简单的约定，来兼顾 HTML 文档的人机可读性，相当于对 web 网页进行语义注解。

采用微格式的 web 页面，在 HTML 文档中给一些标签增加一些属性，这些属性对信息的语义结构进行注解，有助于处理 HTML 文档的软件，更好的理解 HTML 文档。当爬取 web 内容时，能够更为准确地识别内容块的语义，微格式可以对网站进行 SEO 优化。

## HTML5 为什么只需要写`<!DOCTYPE html>`？

为什么 HTML5 只需要写一段：

```html
<!DOCTYPE html>
```

而 HTML4 却需要写很长的一段

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

其实主要是因为 HTML5 不基于 SGML，所以不需要引用 DTD。在 HTML4 中，<!DOCTYPE>声明引用 DTD，因为 HTML4 基于 SGML。DTD 规定了标记语言的规则，这样浏览器才能正确的呈现内容。

## HTML5 新增了哪些新特性？移除了哪些元素？

HTML5 主要是关于图像、位置、存储、多任务等功能的增加：

- 语义化标签，如：article、footer、header、nav 等
- 视频 video、音频 audio
- 画布 canvas
- 表单控件，calemdar、date、time、email
- 地理
- 本地离线存储，localStorage 长期存储数据，浏览器关闭后数据不丢失，sessionStorage 的数据在浏览器关闭后自动删除
- 拖拽释放

移除的元素：

- 纯表现的元素：basefont、font、s、strike、tt、u、big、center
- 对可选用性产生负面影响的元素：frame、frameset、noframes

## 怎么处理 HTML5 新标签兼容问题？

主要有两种方式：

实现标签被识别：通过`document.createElement(tagName)`方法可以让浏览器识别新的标签，浏览器支持新标签后。还可以为新标签添加 CSS 样式
用 JavaScript 解决：使用 HTML5 的 shim 框架，在`head`标签中调用以下代码：

```html
<!--[if lt IE 9]>
  <script>
    src = "http://html5shim.googlecode.com/svn/trunk/html5.js";
  </script>
<![endif]-->
```

## 如何实现在一张图片上的某个区域做到点击事件？

我们可以通过图片热区技术：

1. 插入一张图片，并设置好图像的有关参数，在`<img>`标记中设置参数 `usemap="#Map"`，以表示对图像地图的引用。
2. 用`<map>`标记设定图像地图的作用区域，并取名：Map；
3. 分别用`<area>`标记针对相应位置互粉出多个矩形作用区域，并设定好链接参数 `href`

例：

```html
<body>
  <img src="./image.jpg" alt="" usemap="#Map" />
  　　<map name="Map" id="Map">
    <area
      alt=""
      title=""
      href="#"
      shape="poly"
      coords="65,71,98,58,114,90,108,112,79,130,56,116,38,100,41,76,52,53,83,34,110,33,139,46,141,75,145,101,127,115,113,133,85,132,82,131,159,117"
    />
    <area
      alt=""
      title=""
      href="#"
      shape="poly"
      coords="28,22,57,20,36,39,27,61"
    />
  </map>
</body>
```

## a 元素除了用于导航外，还有什么作用？

href 属性中的 url 可以是浏览器支持的任何协议，所以 a 标签可以用来手机拨号`<a href="tel:110">110</a>`，也可以用来发送短信`<a href="sms:110">110</a>`，还有邮件等等。

当然，a 元素最常见的就是用来做`锚点`和 `下载文件`。

- 锚点可以在点击时快速定位到一个页面的某个位置
- 而下载的原理在于 a 标签所对应的资源浏览器无法解析，于是浏览器会选择将其下载下来。

## 你知道 SEO 中的 TDK 吗？

在 SEO 中，TDK 其实就是`title`、`description`、`keywords`这三个标签，title 表示标题标签，description 是描述标签，keywords 是关键词标签

## meta？

## 网页开发和小程序开发有什么区别？

**开发语言**

- 小程序的主要开发语言是 JavaScript
- 小程序的开发同普通的网页开发相比有很大的相似性

**逻辑层和渲染层（运行机制）**

- ​ 网页开发是单线程机制，既用于运行脚本，也用于渲染，不能同时干两件事情，渲染线程和脚本线程是互斥的（长时间的脚本运行可能会导致页面失去响应）\
  说明：网页开发者可以使用到各种浏览器暴露出来的 DOM API，进行 DOM 选中和操作。

- 小程序的逻辑层和渲染层是分开的，分别运行在不同的线程中\
  说明：小程序的逻辑层运行在 JSCore 中，并没有一个完整浏览器对象，因而缺少相关的 DOM API 和 BOM API。

这一区别导致了前端开发非常熟悉的一些库，例如 jQuery、 Zepto 等，在小程序中是无法运行的。

同时 JSCore 的环境与 NodeJS 环境也是不尽相同，所以一些 NPM 的包在小程序中也是无法运行的。

**开发环境**

- 网页开发者需要面对的环境是各式各样的浏览器，PC 端需要面对 IE、Chrome、QQ 浏览器等，在移动端需要面对 Safari、Chrome 以及 iOS、Android 系统中的各式 WebView。
- 小程序开发过程中需要面对的是两大操作系统 iOS 和 Android 的微信客户端，以及用于辅助开发的小程序开发者工具

**开发过程**

- 网页开发者在开发网页的时候，只需要使用到浏览器，并且搭配上一些辅助工具或者编辑器即可。
- 小程序的开发需要经过申请小程序帐号、安装小程序开发者工具、配置项目等等过程方可完成。

## 前端开发者必记单词

| **导航类**          | **页面结构布局**          | **功能 1**       | **功能 2**         | **功能 3**           |
| ------------------- | ------------------------- | ---------------- | ------------------ | -------------------- |
| 导航：nav           | 容器：container           | 标志：logo       | 注册：register     | 指南：guide          |
| 标题：title         | 页头：header              | 登录：login      | 注释：note         | 按钮：button         |
| 摘要：summary       | 内容：content             | 图标：icon       | 服务：service      | 下载：download       |
| 菜单：menu          | 页尾：footer              | 状态：status     | 新闻：news         | 标签页：tab          |
| 子菜单：submenu     | 侧栏：sidebar             | 热点：hot        | 投票：vote         | 当前的：current      |
| 主导航：mainnav     | 栏目：column              | 版权：copyright  | 面包屑：breadcrumb | 文章列表：list       |
| 子导航：subnav      | 页面主体：main            | 登陆条：loginbar | 功能区：shop       | 友情链接：friendlink |
| 顶导航：topnav      | 左右中：left right center | 小技巧：tips     | 合作伙伴：partner  |                      |
| 边导航：sidebar     | 控制整体布局宽度：wrapper | 提示信息：msg    | 广告：banner       |                      |
| 左导航：leftsidebar | 右导航：rightsidebar      | 滚动：scroll     | 搜索：search       |                      |

| **css 英文释译**  |                |                   |                  |                |
| ----------------- | -------------- | ----------------- | ---------------- | -------------- |
| 线：line          | 行：row        | 宽：width         | 高：height       | 外边界：margin |
| 内边界：padding   | 边框：border   | 行高：line-height | 背景：background | 颜色：color    |
| 顶部：top         | 标题：title    | 字体：font        | 身体：body       | 大小：size     |
| 列表：list        | 文本：text     | 样式：style       | 对齐：align      | 图像：image    |
| 修饰：decoration  | 资源：source   | 穿过：through     | 缩进：indent     | 斜体：italic   |
| 链接：link        | 加重：weight   | 加粗：bold        | 输入：input      | 主体：main     |
| 下面的：under     | 重复：repwat   | 填充：pading      | 位置：position   | 正常：normal   |
| 父级：parent      | 子级：children | 隐藏：hidden      | 显示：visible    | 溢出：overflow |
| 显示类型：display | 页眉：header   | 导航：nav         | 广告图片：banner |                |

| **其他**                  |                                |                         |                             |                              |
| ------------------------- | ------------------------------ | ----------------------- | --------------------------- | ---------------------------- |
| 浏览器（客户端）：broswer | 超文本标记语言：html           | 层叠样式表：css         | 前端脚本语言：javascript    | 标题： title                 |
| 身体：body                | 头：head                       | 盒子（类似收纳箱）：div | 无序列表：ul(UnorderedList) |                              |
| 可见度：visibility        | 表格：table                    | 表头：thead             | 表格内容：tbody             | 方法： method                |
| 合并行：rowspan           | 密码：password                 | 单选：radio             | 多选：checkbox              | 下拉菜单：select             |
| 选项：option              | 内边距：padding                | 外边距：margin          | 边线：border                | 直线：solid                  |
| 虚线： dashed             | 点线：dotted                   | 溢出：overflow          | 隐藏： hidden               | 有序列表：ol(OrderedList)    |
| 列表项：li(ListItem)      | 自定义列表：dl(DefinitionList) | 表单：form              | 行： tr(table row)          | 输入框：input                |
| 文本：text                | 合并：collapse                 | 定位：position          | 相对定位：relative          | 绝对定位：absolute           |
| 固定定位： fixed          | 静态定位：static               | 脚本： script           | 字符串：string              | 数字： number                |
| 布尔：boolean             | 未定义：undefined              | 空：null、none          | 函数： function             | 文档：document               |
| 获取： get                | 元素： element                 | 通过：by                | 标签名：tagName             | 窗口：window                 |
| 对象：object              | 数组：array                    | 定时器：setInterval     | 清除定时器：clearInterval   | 美元符号：$                  |
| 下一个：nexxt             | 前一个：prev(previous)         | 父母：parent            | 孩子： children             | 点击：click                  |
| 鼠标移开：mouseleave      | 鼠标进入：mouseenter           | 动画：animate           | 滑动：slide                 | 渐进：fade                   |
| 显示：show                | 隐藏：hide                     | 测试：test              | 阻止冒泡：stopPropagation   | 阻止默认行为：preventDefault |
| web 数据交互方式：ajax    | 类型：type                     | 统一资源定位符：url     | 数据：data                  | 数据类型：dataType           |
| 成功：success             | 失败：error                    | 成功：done              | 失败：fail                  | 计算：computed               |
| 监听：watch               | 过滤器：filter                 | 挂载、生成：mounted     | 定义变量：let、var          | 定义常量：const              |

| **常见命名**            |               |                   |                           |                    |
| ----------------------- | ------------- | ----------------- | ------------------------- | ------------------ |
| 主要的：master          | 模块：module  | 重置：reset       | 基本共用： base、common   | 布局、版面：layout |
| 主题：theme             | 专栏：column  | 文字： font       | 表单：form                | 补丁： mend        |
| 打印：print             | 混入： mixins | 组件： components | 静态资源： public、static | 路由：router       |
| 页面视图： pages、views | 配置：config  |                   |                           |                    |
