# `div`居中

1. 水平居中：给`div`设置一个宽度，然后添加`margin: 0 auto;`属性。

```css
div {
  width: 200px;
  margin: 0 auto;
}
```

2. 水平居中：给`div`的父级元素添加`text-align: center;`属性。

```css
.container {
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 0;
}
.box {
  display: inline-block;
  width: 500px;
  height: 400px;
  background-color: pink;
}
```

3. 让绝对定位的`div`水平垂直居中。

```css
div {
  position: absolute;
  width: 300px;
  height: 300px;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: pink; /*方便看效果*/
}
```

4. 水平垂直居中一。

```css
/*确定容器的宽高，宽500 高300的层设置层的外边距*/
div {
  position: absolute; /*绝对定位*/
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  margin: -150px 0 0 -250px; /*外边距为自身宽高的一半*/
  background-color: pink; /*方便看效果*/
}
```

5. 水平垂直居中二。

```css
/*未知容器的宽高，利用`transform`属性*/
div {
  position: absolute; /*相对定位或绝对定位均可*/
  width: 500px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: pink; /*方便看效果*/
}
```

6. 水平垂直居中三。

```css
/*利用flex布局和align-items: center;justify-content: center;实现 实际使用时应考虑兼容性*/
.container {
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
}
.container div {
  width: 100px;
  height: 100px;
  background-color: pink; /*方便看效果*/
}
```

7. 水平垂直居中四。

```css
/*利用flex布局和align-items: center;和子元素margin: auto;实现 实际使用时应考虑兼容性*/
.container {
  display: flex;
  align-items: center; /*垂直居中*/
  /*justify-content: center; 水平居中*/
}
.container div {
  margin: auto; /*水平居中 */
  width: 100px;
  height: 100px;
  background-color: pink; /*方便看效果*/
}
```

8. 水平垂直居中五。

```css
/* 利用grid布局和place-items: center;实现 */
.container {
  display: grid;
  place-items: center;
}

.container div {
  background: pink; /*方便看效果*/
}
```

9. 水平垂直居中六。

```css
/* 利用grid布局和align-items: center;和子元素margin: auto;实现 */
.container {
  display: grid;
  align-items: center;
}

.container div {
  margin: auto;
  background: pink; /*方便看效果*/
}
```

10. 水平垂直居中七。

```css
/* 利用grid布局和align-items: center;justify-content: center;实现 */
.container {
  display: grid;
  align-items: center;
  justify-content: center;
}

.container div {
  background: pink; /*方便看效果*/
}
```

11. 水平垂直居中八。

```css
/*利用text-align:center和vertical-align:middle属性*/
.container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 0;
  white-space: nowrap;
  overflow: auto;
}

.container::after {
  content: "";
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.box {
  display: inline-block;
  width: 500px;
  height: 400px;
  background-color: pink;
  white-space: normal;
  vertical-align: middle;
}
```

总结：

一般常见的几种居中的方法有：

对于宽高固定的元素：

1. 可以利用`margin: 0 auto;`来实现元素的水平居中。
2. 利用绝对定位，设置四个方向的值都为`0`，并将`margin`设置为`auto`，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。
3. 利用绝对定位，先将元素的左上角通过`top: 50%;`和`left: 50%;`定位到页面的中心，然后再通过`margin负值`来调整元素的中心点到页面的中心。
4. 利用绝对定位，先将元素的左上角通过`top: 50%;`和`left: 50%;`定位到页面的中心，然后再通过`translate`来调整元素的中心点到页面的中心。
5. 使用`flex`布局，通过`align-items: center;`和`justify-content: center;`设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。

对于宽高不定的元素，上面的后两种方法，可以实现元素的垂直和水平的居中。
