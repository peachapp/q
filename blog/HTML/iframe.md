# `iframe`

## `iframe`

`iframe`也称作嵌入式框架，嵌入式框架和框架网页类似，它可以把一个网页的框架和内容嵌入到现有的网页中。

优点：

- 可以用来处理加载缓慢的内容，比如：广告。

缺点：

- `iframe`会阻塞主页面的`onload`事件。
- `iframe`和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。但是可以通过`JS`动态给`ifame`添加`src`属性值来解决这个问题，同时也可以解决`iframe`会阻塞主页面`onload`事件的问题。
- 会产生很多页面，不易管理。
- 浏览器的后退按钮没有作用。
- 无法被一些搜索引擎识别。

## `iframe`父子页面通信

1. 使用`window.postMessage()`方法。`window.postMessage()`是一个安全的跨文档消息传递机制，可以不同域的页面之间进行异步通信。

```js
// 父页面发送消息给iframe：
var iframe = document.getElementById("myIframe");
iframe.contentWindow.postMessage("Hello, World!", "http://example.com");

// iframe 子页面接收消息：
window.addEventListener(
  "message",
  function (event) {
    if (event.origin !== "http://your-parent-page.com") return;
    console.log("Received message:", event.data);
  },
  false
);
```

> 请注意，跨域通信时需要确保安全性，例如使用`postMessage()`时提供正确的`origin`参数，以及对传递的数据进行适当的验证。

2. 通过修改`iframe`的`src`属性传递参数。如果需要传递的数据是字符串，并且不涉及到复杂的数据结构，可以通过修改`iframe`的`src`属性来传递参数。

```js
// 父页面：
var iframe = document.getElementById("myIframe");
iframe.src += "?param1=value1&param2=value2";

// iframe 子页面获取参数：
var params = {};
var parser = document.createElement("a");
parser.href = window.location.href;
var query = parser.search.substring(1);
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
  var pair = vars[i].split("=");
  params[pair[0]] = decodeURIComponent(pair[1]);
}
console.log(params);
```

3. 通过`iframe`的`contentWindow`属性访问子页面的全局对象。

```js
// 父页面可以直接访问iframe的window对象，并调用其方法：
var iframe = document.getElementById("myIframe");
iframe.contentWindow.someFunctionInIframe();

// iframe 子页面可以通过将自身的方法暴露为全局对象或者将方法绑定到window对象上来进行父页面的调用。
window.parent.someFunctionInParent();
```
