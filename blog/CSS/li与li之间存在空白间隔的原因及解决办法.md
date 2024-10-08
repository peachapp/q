# `li`与`li`之间存在空白间隔的原因及解决办法

浏览器会把`inline`元素间的空白字符（空格、换行、`Tab`等）渲染成一个空格。而为了美观。通常是一个`li`放在一行，
这导致`li`换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。

解决办法：

1. 将`li`设置属性`float: left;`。不足：有些容器不能设置浮动，如左右切换的焦点图等。
2. 将所有`li`写在同一行。不足：代码不美观。
3. 将`ul`内的字符尺寸直接设为`0`，即`font-size: 0;`。不足：`ul`中的其他字符尺寸也被设为`0`，需要额外重新设定其他字符尺寸，且在`Safari`浏览器依然会存在空白间隔。
4. 消除`ul`的字符间隔`letter-spacing: -8px;`，不足：这也设置了`li`内的字符间隔，因此需要将`li`内的字符间隔设为默认`letter-spacing: normal;`。

[《li 与 li 之间有看不见的空白间隔是什么原因引起的？》](https://blog.csdn.net/sjinsa/article/details/70919546)
