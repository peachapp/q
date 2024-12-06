# web 应用中如何对静态资源加载失败的场景做降级处理

## 背景：

1. 图片
2. css 文件
3. JavaScript 文件
4. CDN
5. 字体文件
6. 服务端渲染失败（ssr）

## 解决方案：

### 图片加载失败的处理

1. 占位图，alt 来描述图片
2. 重试机制（404、无权限）
3. 上报

```html
<img src="image.jpg" alt="Example Image" onerror="handleImageError(this)" />

<script>
  function handleImageError(image) {
    image.onerror = null; // 防止死循环
    image.src = "placeholder.jpg"; // 使用占位图
  }
</script>
```

### css 文件加载失败的处理

资源没加载到

1. 关键性样式，通过内联样式
2. 备用样式
3. 上报

```html
<head>
  <style>
    /* 内联关键样式 */
    body {
      font-family: Arial, sans-serif;
    }
  </style>
  <link rel="stylesheet" href="styles.css" onerror="handleCssError()" />
</head>
<script>
  function handleCssError() {
    // 加载备用样式
    const fallbackCss = document.createElement("link");
    fallbackCss.rel = "stylesheet";
    fallbackCss.href = "fallback-styles.css";
    document.head.appendChild(fallbackCss);
  }
</script>
```

### JavaScript 文件加载失败的处理

网络异常，导致资源没加载

1. 内联脚本
2. 备用脚步处理
3. 上报

```html
<head>
  <script>
    // 内联关键脚本
    function basicFunctionality() {
      console.log("Basic functionality available.");
    }
    basicFunctionality();
  </script>
  <script src="main.js" onerror="handleJsError()"></script>
</head>
<script>
  function handleJsError() {
    // 加载备用脚步
    const fallbackScript = document.createElement("script");
    fallbackScript.src = "fallback-main.js";
    document.head.appendChild(fallbackScript);
  }
</script>
```

### CDN 加载失败的处理

1. 本地备份，如果 CDN 出错了，就使用本地备份
2. 动态切换，切到另一个有用的 cdn 服务

```html
<head>
  <script
    src="https://cdn.example.com/library.js"
    onerror="handleCdnError()"
  ></script>
</head>
<script>
  function handleCdnError() {
    // 加载本地备份
    const fallbackScript = document.createElement("script");
    fallbackScript.src = "local-library.js";
    document.head.appendChild(fallbackScript);

    // 或者动态切换到另一个CDN
    // const alternativeCdn = document.createElement("script");
    // alternativeCdn.src = "https://cdn.alternative.com/library.js";
    // document.head.appendChild(alternativeCdn);
  }
</script>
```

### 字体文件加载失败的处理

1. 使用降级字体 苹果电脑一般是 apple、Windows 电脑一般是微软雅黑
2. webfont 处理字体问题

```css
@font-face {
  font-family: "CustomFont";
  src: url("customfont.woff2") format("woff2");
  font-display: swap; /**使用swap策略 */
}
body {
  font-family: "CustomFont", Arial, sans-serif;
}
```

### 服务端渲染失败的处理

1. 降级的 html 用作渲染
2. 切换为客户端渲染（CSR）
