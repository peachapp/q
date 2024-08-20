# `nextTick`

`nextTick`是`vue`中的一个全局`API`，在`JS`的事件循环中它将回调函数放进微任务队列。`DOM`的更新在同步任务队列清空后，且在微任务队列中的所有任务执行之前发生，这意味着微任务队列执行时`dom`是已更新的，所以`nextTikc`可以在`dom`更新后进行一些操作。

`nextTick`的原理，用一句话总结就是『利用`Event Loop`事件线程去异步操作』。本质上就是注册异步任务来对任务进行处理。在`vue`的不同版本对这个异步任务的优雅降级不太一样。

使用场景：

1. 需要在`DOM`更新后执行操作：`vue`异步执行`DOM`更新。这意味着当修改了数据，`DOM`不会立即更新，而是等到下一次事件循环。`nextTick`允许在`DOM`更新后立即执行某些操作。例如，在数据更改后获取新的`DOM`元素尺寸或位置。
2. 确保视图与数据同步：在某些情况下，可能需要确保视图已经与底层数据完全同步。使用`nextTick`可以确保在继续执行代码之前，`DOM`已经根据最新的数据进行了更新。

使用方法：

<CodeGroup>
  <CodeGroupItem title="vue2">

```js
this.$nextTick(function () {
  // DOM 现在已经更新
});
```

  </CodeGroupItem>
  <CodeGroupItem title="vue3" active>

```js
import { nextTick } from "vue";
nextTick(() => {
  // DOM 现在已经更新
});
```

  </CodeGroupItem>
</CodeGroup>

源码：

```ts
export function nextTick(): Promise<void>;
export function nextTick<T>(
  this: T,
  cb: (this: T, ...args: any[]) => any
): void;
export function nextTick<T>(cb: (this: T, ...args: any[]) => any, ctx: T): void;
/**
 * @internal
 */
export function nextTick(cb?: (...args: any[]) => any, ctx?: object) {
  let _resolve;
  callbacks.push(() => {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e: any) {
        handleError(e, ctx, "nextTick");
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== "undefined") {
    return new Promise((resolve) => {
      _resolve = resolve;
    });
  }
}
```

https://zhuanlan.zhihu.com/p/396831673
