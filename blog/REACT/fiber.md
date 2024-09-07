# `fiber`

## `fiber`出现的背景

首先要知道的是，`JavaScript`引擎和页面渲染引擎两个线程是互斥的，当其中一个线程执行时，另一个线程只能挂起等待。

在这样的机制下，如果`JavaScript`线程长时间地占用了主线程，那么渲染层面的更新就不得不长时间地等待，界面长时间不更新，会导致页面响应度变差，用户可能会感觉到卡顿。

而这正是`react 15`的`Stack Reconciler`所面临的问题，即是`JavaScript`对主线程的超时占用问题。`Stack Reconciler`是一个同步的递归过程，使用的是`JavaScript`引擎自身的函数调用栈，它会一直执行到栈空为止，所以当`react`在渲染组件时，从开始到渲染完成整个过程是一气呵成的。如果渲染的组件比较庞大，`js`执行会占据主线程较长时间，会导致页面响应度变差。

而且所有的任务都是按照先后顺序，没有区分优先级，这样就会导致优先级比较高的任务无法被优先执行。

## `fiber`是什么

`fiber`的中文翻译叫纤程，与进程、线程同为程序执行过程，`fiber`就是比线程还要纤细的一个过程。纤程意在对渲染过程实现进行更加精细的控制。

从架构角度来看，`fiber`是对`react`核心算法（即调和过程）的重写。

从编码角度来看，`fiber`是`react`内部所定义的一种数据结构，它是`fiber`树结构的节点单位，也就是`react 16`新架构下的"虚拟 DOM"。

一个`fiber`就是一个`JavaScript`对象，`fiber`的数据结构如下：

```ts
type Fiber = {
  // 用于标记fiber的WorkTag类型，主要表示当前fiber代表的组件类型如FunctionComponent、ClassComponent等
  tag: WorkTag;
  // ReactElement里面的key
  key: null | string;
  // ReactElement.type，调用`createElement`的第一个参数
  elementType: any;
  // The resolved function/class/ associated with this fiber.
  // 表示当前代表的节点类型
  type: any;
  // 表示当前FiberNode对应的element组件实例
  stateNode: any;

  // 指向他在Fiber节点树中的`parent`，用来在处理完这个节点之后向上返回
  return: Fiber | null;
  // 指向自己的第一个子节点
  child: Fiber | null;
  // 指向自己的兄弟结构，兄弟节点的return指向同一个父节点
  sibling: Fiber | null;
  index: number;

  ref: null | (((handle: mixed) => void) & { _stringRef: ?string }) | RefObject;

  // 当前处理过程中的组件props对象
  pendingProps: any;
  // 上一次渲染完成之后的props
  memoizedProps: any;

  // 该Fiber对应的组件产生的Update会存放在这个队列里面
  updateQueue: UpdateQueue<any> | null;

  // 上一次渲染的时候的state
  memoizedState: any;

  // 一个列表，存放这个Fiber依赖的context
  firstContextDependency: ContextDependency<mixed> | null;

  mode: TypeOfMode;

  // Effect
  // 用来记录Side Effect
  effectTag: SideEffectTag;

  // 单链表用来快速查找下一个side effect
  nextEffect: Fiber | null;

  // 子树中第一个side effect
  firstEffect: Fiber | null;
  // 子树中最后一个side effect
  lastEffect: Fiber | null;

  // 代表任务在未来的哪个时间点应该被完成，之后版本改名为 lanes
  expirationTime: ExpirationTime;

  // 快速确定子树中是否有不在等待的变化
  childExpirationTime: ExpirationTime;

  // fiber的版本池，即记录fiber更新过程，便于恢复
  alternate: Fiber | null;
};
```

## `fiber`是如何解决问题的

`fiber`把一个渲染任务分解为多个渲染任务，而不是一次性完成，把每一个分割得很细的任务视作一个"执行单元"，`react`就会检查现在还剩多少时间，如果没有时间就将控制权让出去，故任务会被分散到多个帧里面，中间可以返回至主进程控制执行其他任务，最终实现更流畅的用户体验。

即是实现了"增量渲染"，实现了可中断与恢复，恢复后也可以复用之前的中间状态，并给不同的任务赋予不同的优先级，其中每个任务更新单元为`React Element`对应的`fiber`节点。

## `fiber`实现原理

实现的方式是`requestIdleCallback`这一方法，但`react`团队`polyfill`了这个`API`，使其对比原生的浏览器兼容性更好且拓展了特性。

`requestIdleCallback`只有`Chrome`支持，`react`为了兼容性，使用`MessageChannel + requestAnimationFrame`模拟了一个`requestIdleCallback`。

> `window.requestIdleCallback()`方法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间`timeout`，则有可能为了在超时前执行函数而打乱执行顺序。

`requestIdleCallback`回调的执行的前提条件是当前浏览器处于空闲状态。

即`requestIdleCallback`的作用是在浏览器一帧的剩余空闲时间内执行优先度相对较低的任务。首先`react`中任务切割为多个步骤，分批完成。在完成一部分任务之后，将控制权交回给浏览器，让浏览器有时间再进行页面的渲染。等浏览器忙完之后有剩余时间，再继续之前`react`未完成的任务，是一种合作式调度。

简而言之，由浏览器给我们分配执行时间片，我们要按照约定在这个时间内执行完毕，并将控制权还给浏览器。

`react 16`的`Reconciler`基于`fiber`节点实现，被称为`Fiber Reconciler`。

作为静态的数据结构来说，每个`fiber`节点对应一个`React Element`，保存了该组件的类型（函数组件|类组件|原生组件等等）、对应的`DOM`节点等信息。

作为动态的工作单元来说，每个`fiber`节点保存了本次更新中该组件改变的状态、要执行的工作。

每个`fiber`节点有个对应的`React Element`，多个`fiber`节点是如何连接形成树呢？靠如下三个属性：

```ts
// 指向父级Fiber节点
this.return = null;
// 指向子Fiber节点
this.child = null;
// 指向右边第一个兄弟Fiber节点
this.sibling = null;
```

[参考文章](https://zhuanlan.zhihu.com/p/57346388)
