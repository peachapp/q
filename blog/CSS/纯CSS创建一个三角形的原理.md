# 纯`CSS`创建一个三角形的原理

采用的是相邻边框连接处的均分原理。

将元素的宽高都设为`0`，只设置`border`，把任意三条边隐藏掉（颜色设为`transparent`），剩下的就是一个三角形。

```html
<style>
  #demo {
    width: 0;
    height: 0;
    border-width: 20px;
    border-style: solid;
    border-color: transparent transparent red transparent;
  }
</style>

<div id="demo"></div>
```
