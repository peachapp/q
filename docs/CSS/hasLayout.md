# `hasLayout`

`hasLayout`是`IE`特有的一个属性。很多`IE`下的`css bug`都与其息息相关。在`IE`中，一个元素要么自己对自身的内容进行计算大小和组织，要么依赖于父元素来计算尺寸和组织内容。当一个元素的`hasLayout`属性值为`true`时，它负责对自己和可能的子孙元素进行尺寸计算和定位。这意味着这个元素需要花更多的代价来维护自身和里面的内容，而不是依赖于祖先元素来完成这些工作。

[《CSS 基础篇--CSS 中 IE 浏览器的 hasLayout，IE 低版本的 bug 根源》](https://segmentfault.com/a/1190000010883974)

[《CSS 魔法堂：hasLayout 原来是这样的！》](https://segmentfault.com/a/1190000004632071)
