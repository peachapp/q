# `src`和`href`

`src`和`href`都是`HTML`中特定元素的属性，都可以用来引入外部的资源。两者区别如下：

- src：全称`source`，它通常用于`img`、`video`、`audio`、`script`元素，通过`src`指向外部资源的来源地址，指向的内容会嵌入到文档中当前标签所在位置。在请求`src`资源时，它会将资源下载并应用到文档内，比如说：`js脚本`、`img图片`、`iframe`等元素。当浏览器解析到该元素时，会暂停其它资源下载，直到将该资源加载、编译、执行完毕。这也是将`js脚本`放在底部而不是头部的原因。
- href：全称`hyper reference`，意味着超链接，指向网络资源，当浏览器识别到它指向的⽂件时，就会并⾏下载资源，不会停⽌对当前⽂档的处理，它通常用于`a`、`link`元素。
