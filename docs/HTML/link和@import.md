# `link`和`@import`

1. `link`是`HTML`标签，`@import`是`css`提供的。
2. `link`同时加载内容和样式，`@import`引入的样式需要等待页面加载完成再加载。
3. `link`可以通过`js`操作`DOM`动态引入样式表改变样式，而`@import`则不可以。
4. `link`没有兼容问题，而`@import`不被`ie5`以下支持。
