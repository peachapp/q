# `H5`和`HTML5`

## `H5`和`HTML5`区别

- `H5`是一个产品名词，包含了最新的`HTML5`、`CSS3`、`ES6`等新技术来制作的应用。
- `HTML5`是一个技术名词，指的就是`第五代HTML`。

## `HTML5`新增和移除特性

`HTML5` 主要是关于图像、位置、存储、多任务等功能的增加：

- 语义化标签，如：`article`、`footer`、`header`、`nav`等。
- 视频`video`、音频`audio`。
- 画布`canvas`。
- 表单控件，`calemdar`、`date`、`time`、`email`。
- 地理。
- 本地离线存储，`localStorage`长期存储数据，浏览器关闭后数据不丢失；`sessionStorage`的数据在浏览器关闭后自动删除。
- 拖拽释放。

移除的元素：

- 纯表现的元素：`basefont`、`font`、`s`、`strike`、`tt`、`u`、`big`、`center`。
- 对可选用性产生负面影响的元素：`frame`、`frameset`、`noframes`。

## 怎么处理`HTML5`新标签兼容问题？

主要有两种方式：

1. 通过`document.createElement(tagName)`方法可以让浏览器识别新的标签，浏览器支持新标签后。还可以为新标签添加`CSS`样式。
2. 使用`HTML5`的`shim`框架，在`head`标签中调用以下代码：

```html
<!--[if lt IE 9]>
  <script>
    src = "http://html5shim.googlecode.com/svn/trunk/html5.js";
  </script>
<![endif]-->
```

3. 使用`Can I Use`等工具查询浏览器支持情况，定期查看各个浏览器对`HTML5`新特性的支持情况，可以帮助决定是否需要采取兼容性措施。
4. 提示用户升级浏览器。除了技术手段，可以在页面底部放置一个提示，告诉用户他们正在使用的浏览器版本过旧，建议他们升级到一个支持`HTML5`的现代浏览器。
