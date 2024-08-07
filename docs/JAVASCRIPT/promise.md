# `Promise`

## `Promise`

`Promise`是异步编程的一种解决方案，比传统的解决方案“回调函数和事件”更合理且更强大。它最早由社区提出并实现，`ES6`将其写进了语言标准，统一了用法，并原生提供了`Promise`对象。

特点：

1. 对象的状态不受外界影响（三种状态）

- `Pending`状态（进行中）
- `Fulfilled`状态（已成功）
- `Rejected`状态（已失败）

2. 一旦状态改变就不会再变（两种状态改变：成功或失败）。

- `Pending` --> `Fulfilled`
- `Pending` --> `Rejected`

用法：

`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。它们是两个函数，由 `JavaScript`引擎提供，不用自己部署。

`resolve`作用是将`Promise`对象状态由“未完成”变为“成功”，也就是`Pending` --> `Fulfilled`，在异步操作成功时调用，并将异步操作的结果作为参数传递出去；而`reject`函数则是将`Promise`对象状态由“未完成”变为“失败”，也就是`Pending` --> `Rejected`，在异步操作失败时调用，并将异步操作的结果作为参数传递出去。

`Promise`实例生成后，可用`then`方法分别指定两种状态回调参数。`then`方法可以接受两个回调函数作为参数：

1. `Promise`对象状态改为`Fulfilled`时调用（必选）。
2. `Promise`对象状态改为`Rejected`时调用（可选）。

优缺点：

| 优点     | 缺点                   |
| -------- | ---------------------- |
| 解决回调 | 无法监测进行状态       |
| 链式调用 | 新建立即执行且无法取消 |
| 减少嵌套 | 内部错误无法抛出       |

`Promise`是干什么的？

1. 主要用于异步计算。
2. 可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果。
3. 可以在对象之间传递和操作`Promise`，帮助我们处理队列。

## `Promise.all`和`Promise.allSettled`

- `Promise.all`需要所有`promise`都成功时才`resolve`或者有一个失败时即`reject`。
- `Promise.allSettled`方法返回一个在所有给定的`promise`都已经`fulfilled`或`rejected`后的`promise`，并带有一个对象数组，每个对象表示对应的`promise`结果。

## 解决`Promise.all`（只要失败一个就不会走`then`）

1. `Promise.allSettled`。
2. `try catch`包裹，如果成功，调用`resolve`，如果失败`catch`到错误，调用`Promise.resolve`。

## 如何让一个函数无论`promise`对象成功和失败都能被调用

1. 在`finally`中调用这个函数。
2. `resolve`和`reject`中分别调用这个函数。
