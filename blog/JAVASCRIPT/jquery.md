# `jquery`

`JavaScript`是通过`<script></script>`标签插入到`HTML`页面，可由所有的现代浏览器执行的一种轻量级的编程语言。

`jquery`是一个`JavaScript`函数库。或者说是`JavaScript`中最流行的一种框架。

## `jquery`的文档就绪函数和`window.onload`的区别

1. `window.onload`必须等待网页资源（包括图片等）全部加载完成后，才能执行。\
   而文档就绪函数只需要等到网页`DOM`结构加载完成后，即可执行。
2. `window.onload`在一个页面中，只能写一次，写多次会被最后一次覆盖。\
   而文档就绪函数在一个页面中可以有`N`个。

## `jquery`常用方法

1. `$(selector).hide()`：隐藏被选元素。

```js
$("#myDiv").hide(); // 隐藏ID为myDiv的元素
```

2. `$(selector).show()`：显示被选元素。

```js
$("#myDiv").show(); // 显示ID为myDiv的元素
```

3. `$(selector).toggle()`：切换（在隐藏和显示之间）被选元素。

```js
$("#myDiv").toggle(); // 切换ID为myDiv的元素
```

4. `$(selector).text()`：获取或设置被选元素的文本内容。

```js
var text = $("#myDiv").text(); // 获取ID为myDiv的元素的文本内容
$("#myDiv").text("Hello World!"); // 设置ID为myDiv的元素的文本内容为"Hello World!"
```

5. `$(selector).html()`：获取或设置被选元素的内部 HTML。

```js
var html = $("#myDiv").html(); // 获取ID为myDiv的元素的内部HTML
$("#myDiv").html("<p>Hello World!</p>"); // 设置ID为myDiv的元素的内部HTML为一个段落
```

6. `$(selector).val()`：获取或设置被选元素的值。

```js
var value = $("#myInput").val(); // 获取ID为myInput的元素的值
$("#myInput").val("Hello World!"); // 设置ID为myInput的元素的值为"Hello World!"
```

7. `$(selector).css(property, value)`：为被选元素设置一个样式属性。

```js
$("#myDiv").css("color", "red"); // 设置ID为myDiv的元素的文本颜色为红色
```

8. `$(selector).addClass(class)`：为被选元素添加一个或多个类。

```js
$("#myDiv").addClass("myClass"); // 为ID为myDiv的元素添加类名为"myClass"的类
```

9. `$(selector).removeClass(class)`：从被选元素删除一个或多个类。

```js
$("#myDiv").removeClass("myClass"); // 从ID为myDiv的元素删除类名为"myClass"的类
```

10. `$(selector).toggleClass(class)`：对被选元素进行切换类操作。

```js
$("#myDiv").toggleClass("myClass"); // 切换ID为myDiv的元素的类名为"myClass"的类
```

11. `$(document).ready()`：在文档加载完成后执行一段代码。

```js
$(document).ready(function () {
  // 在这里写入需要在页面加载后执行的代码
});
```

12. `$(selector).click(function)`：为被选元素添加点击事件。

```js
$("#myButton").click(function () {
  alert("按钮被点击了！");
});
```

13. `$(selector).append(content)`：在被选元素内部的结尾插入内容。

```js
$("#myDiv").append("<p>Hello World!</p>"); // 在ID为myDiv的元素内部结尾插入一个段落
```

14. `$(selector).attr(attribute, value)`：获取或设置被选元素的属性值。

```js
var attr = $("#myImage").attr("src"); // 获取ID为myImage的元素的src属性值
$("#myImage").attr("src", "newImage.jpg"); // 设置ID为myImage的元素的src属性值为"newImage.jpg"
```
