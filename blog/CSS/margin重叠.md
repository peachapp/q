# `margin`重叠问题

块级元素的上外边距（`margin-top`）与下外边距（`margin-bottom`）有时会合并为单个外边距，这样的现象称为`margin合并`，又称`margin重叠`。

产生折叠的必备条件：`margin`必须是邻接的！

根据`W3C规范`，两个`margin`是邻接的必须满足以下条件：

- 必须是处于常规文档流（`非float`和绝对定位）的块级盒子，并且处于同一个`BFC`中。
- 没有边框，没有空隙，也就是没有`border`和`padding`将它们分隔开。
- 都属于垂直方向上相邻的外边距，可以是下面任意一种情况：
  - 元素的`margin-bottom`与其下一个常规文档流的兄弟元素的`margin-top`。
  - 元素的`margin-top`与其第一个常规文档流的子元素的`margin-top`。
  - `height`为`auto`的元素的`margin-bottom`与其最后一个常规文档流的子元素的`margin-bottom`。
  - 高度为`0`并且最小高度也为`0`，不包含常规文档流的子元素，并且自身没有建立新的`BFC`的元素的 `margin-top`和`margin-bottom`。

`margin合并`的三种场景：

1. 相邻兄弟元素`margin合并`。解决办法：

   - 设置块级格式化上下文元素（`BFC`）。

2. 父级和第一个|最后一个子元素的`margin合并`。解决办法：

   - 对于`margin-top`合并，可以进行如下操作（满足一个条件即可）：
     - 父元素设置为块级格式化上下文元素。
     - 父元素设置`border-top`值。
     - 父元素设置`padding-top`值。
     - 父元素和第一个子元素之间添加行内元素进行分隔。
   - 对于`margin-bottom`合并，可以进行如下操作（满足一个条件即可）：
     - 父元素设置为块级格式化上下文元素。
     - 父元素设置`border-bottom`值。
     - 父元素设置`padding-bottom`值。
     - 父元素和最后一个子元素之间添加行内元素进行分隔。
     - 父元素设置`height`或`min-height`或`max-height`。

3. 空块级元素的`margin合并`。解决办法：
   - 设置垂直方向的`border`。
   - 设置垂直方向的`padding`。
   - 里面添加行内元素（直接`Space键空格`是没用的）。
   - 设置`height`或`min-height`。

总结：

`margin重叠`指的是在垂直方向上，两个相邻元素的`margin`发生重叠的情况。

一般来说可以分为四种情况：

1. 第一种是相邻兄弟元素的`marin-bottom`和`margin-top`发生重叠。这种情况下可以通过设置其中一个元素为`BFC`来解决。

2. 第二种是父元素的`margin-top`和子元素的`margin-top`发生重叠。它们发生重叠是因为它们是相邻的，所以可以通过这一点来解决这个问题。可以为父元素设置`border-top`、`padding-top`值来分隔它们，当然也可以将父元素设置为`BFC`来解决。

3. 第三种是高度为`auto`的父元素的`margin-bottom`和子元素的`margin-bottom`发生重叠。它们发生重叠一个是因为它们相邻，一个是因为父元素的高度不固定。所以可以为父元素设置`border-bottom`、`padding-bottom`来分隔它们，也可以为父元素设置一个高度，`max-height`和`min-height`也能解决这个问题。当然将父元素设置为`BFC`是最简单的方法。

4. 第四种情况，是没有内容的元素，自身的`margin-top`和`margin-bottom`发生重叠。可以通过为其设置`border`、`padding`或高度来解决这个问题。
