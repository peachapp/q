# `vue`生命周期和钩子函数

`vue`生命周期钩子是成对出现的：分别是创建前后、挂载前后、更新前后、销毁前后。

## `vue2`生命周期

1. `beforeCreate`（创建前）：创建组件实例前的钩子函数，此时`data`还没有挂载。
2. `created`（创建后）：组件实例创建完成之后的钩子函数，此时`data`已经挂载，在这个阶段开始有`$data`。
3. `beforeMount`（挂载前）：开始挂载编译生成的`HTML`到对应位置时触发的钩子函数。此时还未将编译出的`HTML`渲染到页面上。
4. `mounted`（挂载后）：将编译好的`HTML`挂载到页面后执行的钩子函数，在这个阶段开始有`$el`。
5. `beforeUpdate`（更新前）：数据更改，导致`DOM`更新之前。
6. `updated`（更新后）：数据更改，导致`DOM`更新之后，`updated`执行时，页面和`data`数据已经保持同步，都是最新的。
7. `beforeDestroy`（销毁前）：组件实例销毁之前执行的钩子函数。
8. `destroyed`（销毁后）：当执行`destroyed`函数时，组件已经被完全销毁，此时组件中所有`data`、`methods`、以及过滤器、指令等都已经不可用了。

## `vue3`生命周期

- `vue3`删除了`beforeCreate`和`created`，用`setup`代替。
- `vue3`删除了`beforeDestroy`，用`onBrforeUnmount`代替。
- `vue3`删除了`destroyed`，用`onUnmounted`代替。

1. `onBeforeMount`
2. `onMounted`
3. `onBeforeUpdate`
4. `onUpdated`
5. `onBrforeUnmount`
6. `onUnmounted`

## 钩子函数

- 八个生命周期钩子函数。
- `activated`（激活）和 `deactivated`（未激活）：这两个钩子一般配合`<keep-alive>`来使用。\
  通常一个组件是很大的，如果一直创建、销毁、创建、销毁。这样很不合理，而且很浪费性能，这时候就可以用`<keep-alive>`配合这两个钩子函数来控制组件的激活和不激活。在`vue3`，对应的是`onActivated`和`onDeactivated`。
- `errorCaptured`：当捕获一个来自子孙组件的错误时被调用。\
  当子孙组件报错的时候，父组件会触发这个钩子函数，并且会返回三个参数。第一个参数是：错误对象，第二个参数是：错误的组件实例（报错的子孙组件），第三个参数是：包含错误来源信息的字符串（报错的子孙组件的具体哪个地方报错）。在`vue3`，对应的是`onErrorCaptured`。
- `renderTracked`：在`vue3`，对应的是`onRenderTracked`。
- `renderTriggered`：在`vue3`，对应的是`onRenderTriggered`。
- `serverPrefetch`：在`vue3`，对应的是`onServerPrefetch`。

## 第一次或第`N`次加载组件触发的生命周期

- 第一次加载组件触发的生命周期：`beforeCreate`、`created`、`beforeMount`、`mounted`。
- 如果加入了`keep-alive`，第一次加载组件触发的生命周期：`beforeCreate`、`created`、`beforeMount`、`mounted`、`activated`。
- 如果加入了`keep-alive`，第二次或第`N`次加载组件触发的生命周期：`activated`。

## `vue`父子组件加载时生命周期执行顺序

父组件`beforeCreate` --> 父组件`created` --> 父组件`beforeMount` --> 子组件`beforeCreate` --> 子组件`created` --> 子组件`beforeMount` --> 子组件`mounted` -> 父组件`mounted`。
