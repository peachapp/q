# 初始化`CSS`样式

## 初始化`CSS`样式的原因

- 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没初始化`CSS`样式往往会出现浏览器之间的页面显示差异。
- 当然，初始化样式会对`SEO`有一定的影响，但鱼和熊掌不可兼得，所以力求影响最小的情况下初始化`CSS`样式。

最简单的初始化样式代码（强烈不建议）：

```css
* {
  margin: 0;
  padding: 0;
}
```

淘宝的初始化样式代码：

```css
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
form,
fieldset,
legend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}
body,
button,
input,
select,
textarea {
  font: 12px/1.5tahoma, arial, \5b8b\4f53;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
}
address,
cite,
dfn,
em,
var {
  font-style: normal;
}
code,
kbd,
pre,
samp {
  font-family: couriernew, courier, monospace;
}
small {
  font-size: 12px;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
sup {
  vertical-align: text-top;
}
sub {
  vertical-align: text-bottom;
}
legend {
  color: #000;
}
fieldset,
img {
  border: 0;
}
button,
input,
select,
textarea {
  font-size: 100%;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

## 不建议使用通配符初始化`CSS`样式的原因

采用`*{margin:0;padding:0;}`这样写法的好处是写起来很简单，但是通配符需要把所有的标签都遍历一遍，当网站较大时，样式比较多，这样写就大大的加重了网站运行的负载，会使网站加载的时候需要很长一段时间，因此一般大型的网站都有分层次的一套初始化样式。

出于性能的考虑，并不是所有标签都会有`margin`和`padding`属性，因此对常见的具有默认`margin`和`padding`属性的元素初始化即可，并不需要使用`通配符*`来初始化。
