# `BFC`

块级格式化上下文（`Block Formatting Context`，`BFC`）是`WEB`页面的可视化`CSS`渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。

通俗来讲：

- `BFC`是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，不会影响其它环境中的物品。
- 如果一个元素符合触发`BFC`的条件，则`BFC`中的元素布局不受外部影响。

创建`BFC`：

1. 根元素或包含根元素的元素。
2. 浮动元素`float ＝ left|right|inherit（≠none）`。
3. 绝对定位元素`position ＝ absolute|fixed`。
4. `display ＝ inline-block|flex|inline-flex|table-cell|table-caption`。
5. `overflow ＝ hidden|auto|scroll(≠visible)`。

总结：

`BFC`指的是块级格式化上下文，一个元素创建`BFC`之后，它内部元素产生的布局不会影响到外部元素，外部元素的布局也不会影响到`BFC`中的内部元素。一个`BFC`就像是一个隔离区域，和其他区域互不影响。

一般来说根元素是一个`BFC`区域。\
浮动和绝对定位的元素也会创建`BFC`。\
`display`属性的值为`inline-block`、`flex`这些时也会创建`BFC`。\
还有就是元素的`overflow`的值不为`visible`时都会创建`BFC`。

[《深入理解 BFC 和 MarginCollapse》](https://www.w3cplus.com/css/understanding-bfc-and-margin-collapse.html)

[《前端面试题-BFC（块格式化上下文）》](https://segmentfault.com/a/1190000013647777)
