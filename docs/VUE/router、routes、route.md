# `router`、`routes`、`route`

- `router`：路由对象，（`new`出来的路由器对象），包含一些操作路由的功能函数，来实现编程式导航。一般指的是在任何组件内访问路由。如：路由编程式导航的`$router.push()`。`vue3`使用`useRouter`。
- `routes`：指创建`vue-router`路由实例的配置项。用来配置多个`route`路由对象。
- `route`：指路由对象，表示当前激活的路由的状态信息。一般用来获取页面信息.如：`this.$route`指的是当前路由对象，`vue3`使用`useRoute`。
