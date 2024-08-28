# `vue`路由原理

`vue-router`是`vue`项目的重要组成部分，用于构建单页应用。单页应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来。路由的本质就是建立`url`和页面之间的映射关系。

`hash`模式是`vue-router`的默认模式。`hash`指的是`url`锚点，当锚点发生变化的时候，浏览器只会修改访问历史记录，不会访问服务器重新获取页面。因此可以监听描点值的变化，根据描点值渲染指定`dom`。

`hash`监听方法：

```js
window.addEventListener("hashchange", () => {
  const hash = window.location.hash.substr(1);
  // 根据hash值渲染不同的dom
});
```

`H5`的`history`对象提供了`pushState`和`replaceState`两个方法，当调用这两个方法的时候，`url`会发生变化，浏览器访问历史也会发生变化，但是浏览器不会向后台发送请求。

```js
// 第一个参数：data对象，在监听变化的事件中能够获取到
// 第二个参数：title标题
// 第三个参数：跳转地址
history.pushState({}, "", "/a");
```

`history`监听方法：\
通过监听`popstate`事件监听`history`变化，也就是点击浏览器的前进或者后退功能时触发。

```js
window.addEventListener("popstate", () => {
  const path = window.location.pathname;
  // 根据path不同可渲染不同的dom
});
```

`vue`中路由实现原理：
`VueRouter`核心是，通过`Vue.use`注册插件，在插件的`install`方法中获取用户配置的`router`对象。当浏览器地址发生变化的时候，根据`router`对象匹配相应路由，获取组件，并将组件渲染到视图上。

`vue`中路由实现过程：

1. `url`改变。
2. 触发事件监听。
3. 改变`vue-router`中的`current`变量。
4. 监视`current`变量的监视者。
5. 获取新的组件。
6. `render`。

```js
// 存储全局使用的Vue对象
let _Vue = null;
class VueRouter {
  // vue.use要求plugin具备一个install方法
  static install(Vue) {
    // 判断插件是否已经安装过
    if (VueRouter.install.installed) {
      return;
    }
    VueRouter.install.installed = true;
    _Vue = Vue;

    // 将main文件中实例化Vue对象时传入的router对象添加到Vue的原型链上。
    _Vue.mixin({
      beforeCreate() {
        if (this.$options.router) {
          _Vue.prototype.$router = this.$options.router;
        }
      },
    });
  }

  constructor(options) {
    this.options = options;
    // 用于快速查找route
    this.routeMap = {};
    this.data = _Vue.observable({
      current: window.location.hash.substr(1),
    });
    this.init();
  }

  init() {
    this.createRouteMap();
    this.initComponents(_Vue);
    this.initEvent();
  }

  createRouteMap() {
    // 遍历所有的路由规则 吧路由规则解析成键值对的形式存储到routeMap中
    this.options.routes.forEach((route) => {
      this.routeMap[route.path] = route.component;
    });
  }

  initComponents(Vue) {
    // 注册router-link组件
    Vue.component("router-link", {
      props: {
        to: String,
      },
      methods: {
        clickHandler(e) {
          // 修改hash
          location.hash = this.to;
          // 修改current，触发视图更新
          this.$router.data.current = this.to;
          e.preventDefault();
        },
      },
      render(h) {
        return h(
          "a",
          {
            attrs: {
              href: this.to,
            },
            on: {
              click: this.clickHandler,
            },
          },
          [this.$slots.default]
        );
      },
    });
    const that = this;
    // 注册router-view插件
    Vue.component("router-view", {
      render(h) {
        const component = that.routeMap[that.data.current];
        return h(component);
      },
    });
  }

  initEvent() {
    // 在hash发生更改的时候，修改current属性，触发组件更新
    window.addEventListener("hashchange", () => {
      this.data.current = window.location.hash.substr(1);
    });
  }
}

export default VueRouter;
```
