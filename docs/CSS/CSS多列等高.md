# `CSS`多列等高

`CSS`多列等高即需要每个列的高度能与最高的那个列等齐。

实现方法：

1. 利用`padding-bottom`|`margin-bottom`正负值相抵，不会影响页面布局的特性。父容器设置超出隐藏。（`overflow:hidden`），这样父容器的高度就还是它里面的列没有设定`padding-bottom`时的高度，当它里面的任一列高度增加了，则父容器的高度被撑到里面最高那列的高度，其他比这列矮的列会用它们的`padding-bottom`补偿这部分高度差。
2. 利用`table-cell`所有单元格高度都相等的特性，来实现多列等高。
3. 利用`flex`布局中项目`align-items`属性默认为`stretch`，如果项目未设置高度或设为`auto`，将占满整个容器高度的特性，来实现多列等高。

[《前端应该掌握的 CSS 实现多列等高布局》](https://juejin.im/post/5b0fb34151882515662238fd)

[《CSS：多列等高布局》](https://codepen.io/yangbo5207/post/equh)
