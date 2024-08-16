# `vue`部署应用包时的基本`URL`

解决打包后的页面空白的问题：

```js
// vue.config.js
module.exports = {
  publicPath: "./", // 部署应用包时的基本 URL
};
```

更多需查看`vue-config.js`配置参考。
