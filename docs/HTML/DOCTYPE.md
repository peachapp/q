# `DOCTYPE`

## 什么是`DOCTYPE`， 有何作用？

`DOCTYPE`是`HTML`的文档声明，通过它可以告诉浏览器，使用哪一个`HTML`版本标准解析文档。在浏览器发展的过程中，`HTML`出现过很多版本，不同的版本之间格式书写上略有差异。如果没有事先告诉浏览器，那么浏览器就不知道文档解析标准是什么？此时，大部分浏览器将开启最大兼容模式来解析网页，我们一般称为`怪异模式`，这不仅会降低解析效率，而且会在解析过程中产生一些难以预知的`bug`，所以文档声明是必须的。

## `HTML5`为什么只需要写`<!DOCTYPE html>`？

为什么`HTML5`只需要写一段：

```html
<!DOCTYPE html>
```

而`HTML4`却需要写很长的一段：

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```

其实主要是因为`HTML5`不基于`SGML`，所以在`HTML5`中，`<!DOCTYPE>`声明不需要引用`DTD`。\
因为`HTML4`基于`SGML`，所以在`HTML4`中，`<!DOCTYPE>`声明需要引用`DTD`。`DTD`规定了标记语言的规则，这样浏览器才能正确的呈现内容。
