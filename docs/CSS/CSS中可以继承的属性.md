# `CSS`中可以继承的属性

每个`CSS`属性定义的概述都指出了这个属性是默认继承的，还是默认不继承的。这决定当没有为元素的属性指定值时该如何计算值。

当元素的一个继承属性没有指定值时，则取父元素的同属性的计算值。只有文档根元素取该属性的概述中给定的初始值（这里的意思应该是在该属性本身的定义中的默认值）。

当元素的一个非继承属性（在`Mozilla code`里有时称之为`reset property`）没有指定值时，则取属性的初始值`initial value`（该值在该属性的概述里被指定）。

有继承性的属性：

1. 字体系列属性：`font、font-family、font-weight、font-size、font-style、font-variant、font-stretch、font-size-adjust`
2. 文本系列属性：`text-indent、text-align、text-shadow、line-height、word-spacing、letter-spacing、text-transform、direction、color`
3. 表格布局属性：`caption-side border-collapse empty-cells`
4. 列表属性：`list-style-type、list-style-image、list-style-position、list-style`
5. 光标属性：`cursor`
6. 元素可见性：`visibility`
7. 还有一些不常用的：`speak，page`，设置嵌套引用的引号类型 `quotes` 等属性

注意：当一个属性不是继承属性时，可以使用 `inherit` 关键字指定一个属性应从父元素继承它的值，`inherit` 关键字用于显式地指定继承性，可用于任何继承性|非继承性属性。

总结：

每一个属性在定义中都给出了这个属性是否具有继承性，一个具有继承性的属性会在没有指定值的时候，使用父元素的同属性的值来作为自己的值。

一般具有继承性的属性有，字体相关的属性，`font-size` 和 `font-weight` 等。文本相关的属性，`color` 和 `text-align` 等。
表格的一些布局属性、列表属性如 `list-style` 等。还有光标属性 `cursor`、元素可见性 `visibility`。

当一个属性不是继承属性的时候，我们也可以通过将它的值设置为 `inherit` 来使它从父元素获取同名的属性值来继承。

[《继承属性》](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance)

[《CSS 有哪些属性可以继承？》](https://www.jianshu.com/p/34044e3c9317)
