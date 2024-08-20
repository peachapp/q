# 修改`chrome`记住密码后自动填充表单的黄色背景

`chrome`表单自动填充后，`input`文本框的背景会变成黄色，通过审查元素可以看到这是由于`chrome`会默认给自动填充的`input`表单加上`input:-webkit-autofill`私有属性，然后对其赋予以下样式：

```css
input:-webkit-autofill {
  background-color: rgb(250, 255, 189) !important;
  background-image: none !important;
  color: rgb(0, 0, 0) !important;
}
```

对`chrome`默认定义的`background-color`、`background-image`、`color`使用`important`是不能提高其优先级的，但是其他属性可使用。

使用足够大的纯色内阴影来覆盖`input`输入框的黄色背景，处理如下：

```css
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  -webkit-box-shadow: 000px 1000px white inset;
  border: 1px solid #ccc !important;
}
```

[《去掉 chrome 记住密码后的默认填充样式》](https://blog.csdn.net/zsl_955200/article/details/78276209)

[《修改谷歌浏览器 chrome 记住密码后自动填充表单的黄色背景》](https://blog.csdn.net/M_agician/article/details/73381706)
