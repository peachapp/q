# `vue3`

`vue3`相对于`vue2`做的改动：

1. `createApp()`代替了`new Vue()`。
2. `v-model`代替了`v-model`和`.sync`。
3. 根元素可以有不止一个元素了。
4. 新增`Teleport`传送门。
5. `destroyed`改名为`onUnmounted`了（`before`当然也改了）。
6. `ref`属性支持函数了。
7. `vue3`引入`tree-shaking`，通过编译阶段的静态分析，找到没有引入的模块并打上标记，打包的时候无用代码丢弃。

`vue3`相对于`vue2`做的优化：

1. 性能提升：打包大小减少`41%`，初次渲染快`55%`，更新快`133%`，内存使用减少`54%`。
2. 新推出的`Composition API`使组件更易维护，减少无用数据绑定，页面更流畅。
3. 更好的支持`TypeScript`，可以在创建命令里直接配置。

## 新特性

[值得注意的新特性](https://v3-migration.vuejs.org/zh/)

1. [`Composition API`（组合 API）](https://cn.vuejs.org/guide/extras/composition-api-faq)。
2. `setup`组件选项。[单文件组件中的组合式 API 语法糖 (`<script setup>`)](https://cn.vuejs.org/api/sfc-script-setup)。
3. 反应性变量`ref`。
4. `setup`内部注册生命周期。`Composition API`的生命周期钩子与`Options API`的生命周期钩子名称相同，但前缀为`on`，如`mounted`变成`onMounted`。这些方法接受一个回调，该回调将在组件调用生命周期钩子时执行。
5. `watch api`，接受三个参数：
   - 想要观察的响应式引用或`getter`函数。
   - 回调。
   - 可选配置选项。
6. `computed api`。
7. [`Teleport`传送门组件](https://cn.vuejs.org/guide/built-ins/teleport)。
8. [`Fragments`片段](https://v3-migration.vuejs.org/zh/new/fragments.html)
9. [`Emits`组件选项](https://cn.vuejs.org/api/options-state#emits)
10. [来自`@vue/runtime-core`的`createRenderer API`](https://cn.vuejs.org/api/custom-renderer)用来创建自定义渲染函数。
11. [单文件组件中的状态驱动的 CSS 变量 (`<style>`中的`v-bind`)](https://cn.vuejs.org/api/sfc-css-features#v-bind-in-css)
12. [SFC `<style scoped>` 新增全局规则和针对插槽内容的规则](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md)
13. [Suspense](https://cn.vuejs.org/guide/built-ins/suspense)

[vue2 git 源码](https://github1s.com/vuejs/vue/blob/main)

[vue3 git 源码](https://github1s.com/vuejs/core/blob/main)

## vue3 跟 vue2 的区别

- **拆分模块**：vue3 更注重模块上的拆分，在 vue2 中无法单独使用部分模块，需要引入完整的 vue.js（例如只想使用响应式部分，但是需要引入完整的 vue.js）。vue3 中的模块之间耦合度低，模块可以独立使用。
- **重写 API**：vue2 中很多方法挂载到了实例中，导致没有使用也会被打包（还有很多组件也是一样）。vue3 通过构建工具`tree-shaking`机制实现按需引入，减少用户打包后体积。
- **扩展更方便**：vue3 允许自定义渲染器，扩展能力强。不会发生以前的事情：改写 vue 源码改造渲染方式。
- 在 vue2 的时候，使用`defineProperty`来进行数据的劫持，需要对属性进行重写添加`getter`及`setter`，性能差。
- 在 vue2 的时候，当新增属性和删除属性时无法监控变化，需要通过`$set`、`$delete`实现。
- 在 vue2 的时候，数组不采用`defineProperty`来进行劫持（浪费性能，对所有索引进行劫持会造成性能浪费），需要对数组单独进行处理。
- diff 算法也进行了重写。
- vue3 模板编译优化，采用了`PatchFlags`优化动态节点，采用`BlockTree`进行靶向更新等。
- 相比 vue2 来说，vue3 新增了很多新的特性。
