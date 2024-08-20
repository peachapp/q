# `vue`自动配置路由

`vue`项目开发过程中页面太多，路由配置起来也是一件很麻烦的事，好在`webpack`提供了一个`require.context`接口，通过执行`require.context`函数可以获取一个特定的上下文，实现自动化导入模块。

1. 语法：`require.context('./dir', true, /\.js$/);`第一个参数表示相对的文件目录，第二个参数表示是否包括子目录中的文件（`true`，`false`），第三个参数表示引入的文件匹配的正则表达式。
2. 自动配置路由：修改`router`文件夹下的`index.js`文件即可。

```js
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const contexts = require.context("../pages", true, /\.vue$/); //通过正则获取匹配到的文件:第一个参数表示相对的文件目录，第二个参数表示是否包括子目录中的文件（true，false），如果有耳机目录既可以设置为true，第三个参数表示引入的文件匹配的正则表达式。

const routers = [];
contexts.keys().forEach((key) => {
  // 获取组件配置
  const componentConfig = contexts(key).default;
  // 剥去文件名开头的 `./` 和`.vue`结尾的扩展名
  const routePath = key.replace(/^\.\//, "").replace(/\.vue$/, "");
  // 全局注册组件
  const component = Vue.component(componentConfig.name, componentConfig);
  routers.push({
    path: componentConfig.name === "home" ? "/" : "/" + routePath,
    name: componentConfig.name,
    component,
  });
});

export default new Router({
  routes: [...routers],
});
```

3. 缺点：路由嵌套未解决，望有知道的大佬指点。
