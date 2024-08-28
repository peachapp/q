# `CSS3`的`all`属性

`all`属性实际上是所有`CSS`属性的缩写，表示所有的`CSS`属性都怎样怎样，但是不包括`unicode-bidi`和`direction`这两个`CSS`属性。支持三个`CSS`通用属性值：`initial`、`inherit`、`unset`。

- `initial`是初始值的意思，也就是该元素除了`unicode-bidi`和`direction`以外的`CSS`属性都使用属性的默认初始值。
- `inherit`是继承的意思，也就是该元素除了`unicode-bidi`和`direction`以外的`CSS`属性都继承父元素的属性值。
- `unset`是取消设置的意思，也就是该元素忽略浏览器或用户设置的`CSS`。如果是具有继承特性的`CSS`属性，如`color`，则使用继承值；如果是没有继承特性的`CSS`属性，如`background-color`，则使用初始值。

[《简单了解 CSS3 的 all 属性》](https://www.zhangxinxu.com/wordpress/2016/03/know-about-css3-all/)
