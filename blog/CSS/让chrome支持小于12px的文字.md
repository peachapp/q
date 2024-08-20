# 让`chrome`支持小于`12px`的文字

在`chrome`浏览器设置字体大小为`12px`及以下时，显示都是一样的大小，都是默认`12px`。

解决办法：

1. 可以使用`Webkit`内核的`-webkit-text-size-adjust`私有`CSS`属性来解决，只要加了`-webkit-text-size-adjust: none;`字体大小就不受限制了。但是`chrome`更新到`27版本`之后就不可以用了。所以高版本`chrome`浏览器已经不再支持`-webkit-text-size-adjust`属性，所以要慎用。
2. 还可以使用`CSS3`的`transform`缩放属性`-webkit-transform: scale(0.5);`注意：`-webkit-transform: scale(0.75);`收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用`display: block/inline-block/...;`。
3. 还可以使用图片：内容固定不变情况下，将小于`12px`文字内容切出做图片，这样不影响兼容也不影响美观。

[《谷歌浏览器不支持 CSS 设置小于 12px 的文字怎么办？》](https://570109268.iteye.com/blog/2406562)
