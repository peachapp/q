# 使用同一个链接，实现 PC 打开是 web 应用，手机打开是 h5 应用

## 背景：

一个链接访问页面，想同时适配 PC、Mobile。

## 解决方案：

区分 PC、Mobile。

- 先识别端
- 端内容渲染器（内容加载器）

### 识别端

1. js 识别，`userAgent`

```js
console.log(navigator.userAgent);
// 判断
// 正则  正则一定要掌握 --> 元字符
function isMobile() {
  return /Mobi|Android/i.test(navigator.userAgent);
}
if (isMobile()) {
  window.location.href = "/mobile.html";
}
```

React：

```jsx
<DeviceProvider value={{ type: isMobile() }}></DeviceProvider>;

// 子组件使用
function Header() {
  const { type } = useContext(DeviceContext);
}
```

Vue：

```js
// 非常重要的api
provide("deviceType", isMobile());

// 子组件使用
const deviceType = inject("deviceType");
```

### 响应式来做

媒体查询，flex

### 框架内完成适配

React：

```jsx
import React from "react";
import { useMediaQuery } from "react-responsive";

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <div>
      {isDesktop && (
        <div>
          <h1>Desktop Web Application</h1>
          <p>This content is displayed on desktop devices.</p>
        </div>
      )}

      {isMobile && (
        <div>
          <h1>Mobile H5 Application</h1>
          <p>This content is displayed on mobile devices.</p>
        </div>
      )}
    </div>
  );
};
```
