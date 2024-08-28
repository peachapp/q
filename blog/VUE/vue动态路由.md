# `vue`动态路由

动态路由主要通过两个方法实现：`router.addRoute()`和`router.removeRoute()`。

添加路由：

```js
router.addRoute({ path: "/about", component: About });
```

删除路由：

当路由被删除时，所有的别名和子路由也会被同时删除。

1. 通过添加一个名称冲突的路由。如果添加与现有路由名称相同的路由，会先删除路由，再添加路由：

```js
router.addRoute({ path: "/about", name: "about", component: About });
// 这将会删除之前已经添加的路由，因为他们具有相同的名称且名称必须是唯一的
router.addRoute({ path: "/other", name: "about", component: Other });
```

2. 通过调用`router.addRoute()`返回的回调。当路由没有名称时，这很有用。

```js
const removeRoute = router.addRoute(routeRecord);
removeRoute(); // 删除路由如果存在的话
```

3. 通过调用`router.removeRoute()`按名称删除路由。需要注意的是，如果想使用这个功能，但又想避免名称的冲突，可以在路由中使用`Symbol`作为名称。

```js
router.addRoute({ path: "/about", name: "about", component: About });
// 删除路由
router.removeRoute("about");
```
