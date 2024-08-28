---
category:
  - 微信小程序
tag:
  - 遇到过的问题
---

# `button`中嵌套`navigator`不能跳转

在小程序或类似的平台中会出现`button`中嵌套`navigator`不能跳转的问题，这通常是因为事件冒泡导致的问题。在小程序中，点击事件会一层层向上传递，如果`button`标签内部有点击事件，并且这个事件阻止了冒泡，那么外层的`navigator`点击事件就不会被触发。

解决办法：

1. 把`navigator`放在`button`外面。
2. 使用`catch`事件捕获而不是冒泡。在`button`标签中使用`catchtap`代替`bindtap`或`bindtouchstart`等，这样点击事件就不会冒泡到外层的元素。

```html
<button catchtap="buttonTap">
  <navigator url="/target/page" open-type="redirect">点击跳转</navigator>
</button>
```

3. 如果需要在`button`的点击事件中执行一些逻辑，并且之后还想继续执行跳转，可以在事件处理函数中手动调用跳转。

```html
<button bindtap="buttonTap">
  <navigator url="/target/page" open-type="redirect" hidden>
    点击跳转
  </navigator>
</button>
```

```js
buttonTap(e) {
  // 在这里执行逻辑
  // ...

  // 然后调用跳转
  wx.navigateTo({
    url: '/target/page'
  });
}
```
