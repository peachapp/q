# `vue3`

`vue3`相对于`vue2`做的改动：

1. `createApp()`代替了`new Vue()`。
2. `v-model`代替了`v-model`和`.sync`。
3. 根元素可以有不止一个元素了。
4. 新增`Teleport`传送门。
5. `destroyed`改名为`onUnmounted`了（`before`当然也改了）。
6. `ref`属性支持函数了。

`vue3`相对于`vue2`做的优化：

1. 性能提升：打包大小减少`41%`，初次渲染快`55%`，更新快`133%`，内存使用减少`54%`。
2. 新推出的`Composition API`使组件更易维护，减少无用数据绑定，页面更流畅。
3. 更好的支持`TypeScript`，可以在创建命令里直接配置。

新特性：

1. `Composition API`（组合 API）。
2. `setup`组件选项。
3. 反应性变量`ref`。
4. `setup`内部注册生命周期。`Composition API`的生命周期钩子与`Options API`的生命周期钩子名称相同，但前缀为`on`，如`mounted`变成`onMounted`。这些方法接受一个回调，该回调将在组件调用生命周期钩子时执行。
5. `watch api`，接受三个参数：
   - 想要观察的响应式引用或`getter`函数。
   - 回调。
   - 可选配置选项。
6. `computed api`。
7. `Teleport`传送门。
