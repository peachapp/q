# `vue`设置代理

如果前端应用和后端`API`服务器没有运行在同一个主机上，需要在开发环境下将`API`请求代理到`API`服务器。这个问题可以通过`vue.config.js`中的`devServer.proxy`选项来配置。

`devServer.proxy`可以是一个指向开发环境`API`服务器的字符串：

```js
module.exports = {
  devServer: {
    proxy: "http://localhost:4000",
  },
};
```

如果想要更多的代理控制行为，也可以使用一个`path: options`成对的对象。完整的选项可以查阅[http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware#proxycontext-config)。

```js
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "<url>",
        ws: true,
        changeOrigin: true,
      },
      "/foo": {
        target: "<other_url>",
      },
    },
  },
};
```

更多需查看`vue-config.js`配置参考。
