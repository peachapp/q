# `visibility`

## `visibility`

`visibility`属性规定元素是否可见。

> 提示：即使不可见的元素也会占据页面上的空间。可以使用`display`属性来创建不占据页面空间的不可见元素。

`visibility`有以下属性值：

1. `visible`默认值。元素是可见的。
2. `hidden`元素是不可见的。
3. `collapse`当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。被行或列占据的空间会留给其它内容使用。如果此值被用在其它元素上，会呈现为`hidden`。
4. `inherit`规定应该从父元素继承`visibility`属性的值。

## `collapse`属性值在不同浏览器下的区别

1. 对于一般的元素，它的表现跟`visibility: hidden;`是一样的。元素是不可见的，但此时仍占用页面空间。
2. 但如果这个元素是`table`相关的元素，例如`table行`、`table group`、`table列`、`table column group`，它的表现却跟`display: none;`一样，也就是说，它们占用的空间会释放。

在不同浏览器下的区别：

- 在谷歌浏览器里，使用`collapse`值和使用`hidden`值没有什么区别。
- 在火狐浏览器、Opera 和 IE11 里，使用`collapse`值的效果就如它的字面意思：`table`的行会消失，它的下面一行会补充它的位置。

[《CSS 里的 visibility 属性有个鲜为人知的属性值：collapse》](http://www.webhek.com/post/visibility-collapse.html)
