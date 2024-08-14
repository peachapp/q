# `Flex box`（弹性盒布局模型）

`Flex`是`FlexibleBox`的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器都可以指定为`Flex`布局。行内元素也可以使用`Flex`布局。注意，设为`Flex`布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

采用`Flex`布局的元素，称为`Flex容器`（`flex container`），简称"容器"。它的所有子元素自动成为容器成员，称为`Flex项目`（`flex item`），简称"项目"。

容器默认存在两根轴：水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`），项目默认沿主轴排列。

以下六个属性设置在容器上：

1. `flex-direction`属性决定主轴的方向（即项目的排列方向）。
2. `flex-wrap`属性定义，如果一条轴线排不下，如何换行。
3. `flex-flow`属性是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`。
4. `justify-content`属性定义了项目在主轴上的对齐方式。
5. `align-items`属性定义项目在交叉轴上的对齐方式。
6. `align-content`属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

以下六个属性设置在项目上：

1. `order`属性定义项目的排列顺序。数值越小，排列越靠前，默认为`0`。
2. `flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间，也不放大。
3. `flex-shrink`属性定义了项目的缩小比例，默认为`1`，即如果空间不足，该项目将缩小。
4. `flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小。
5. `flex`属性是`flex-grow`属性，`flex-shrink`属性和`flex-basis`属性的简写，默认值为`0 1 auto`。
6. `align-self`属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

总结：

`flex`布局是`CSS3`新增的一种布局方式，我们可以通过将一个元素的`display`属性值设置为`flex`从而使它成为一个`Flex容器`，它的所有子元素都会成为它的项目。

一个容器默认有两条轴，一个是水平的主轴，一个是与主轴垂直的交叉轴。我们可以使用`flex-direction`来指定主轴的方向。

我们可以使用`justify-content`来指定元素在主轴上的排列方式，使用`align-items`来指定元素在交叉轴上的排列方式。还可以使用`flex-wrap`来规定当一行排列不下时的换行方式。

对于容器中的项目，我们可以使用`order`属性来指定项目的排列顺序。还可以使用`flex-grow`来指定当排列空间有剩余的时候，项目的放大比例。还可以使用`flex-shrink`来指定当排列空间不足时，项目的缩小比例。

[《Flex 布局教程：语法篇》](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[《Flex 布局教程：实例篇》](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
