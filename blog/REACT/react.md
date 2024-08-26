<!-----
lang: zh-CN
title: react 面试
description: react 面试题收录
----->

# react

## 为什么函数式组件不能用 this

this 指的是组件的实例，函数式组件没有实例，所以不能用 this

## react 实现 keep-alive

react-keeper

## react 是 MVVM 吗

react 官方并不这么认为。

## 对 react 的理解

**思路：**

- 是什么？一句话直达本质
- 能干什么？用途和应用场景
- 如何干的？核心的工作原理
- 干的怎么样？优缺点

**react 是什么**

`react`是一个用于构建用户界面的`javascript`库。

**react 能干什么**

可以通过组件化的方式构建，构建快速响应的大型`web`应用程序。

**react 是如何干的**

1. 声明式

- 声明式 使用声明式编写用户界面，代码可行方便调试
- 声明式渲染和命令式渲染 \
  命令式渲染：命令我们的程序去做什么，程序就会跟着你的命令一步一步执行 \
  声明式渲染：我们只需要告诉程序我们想要什么效果，其他的交给程序来做

2. 组件化

- 组件化：把页面拆分成一个个组件，方便视图的拆分和复用，还可以做到高内聚和低耦合。

3. 一次学习，随处编写

- 可以使用 react 开发 Web、Android、IOS、VR 和命令行程序
- ReactNative 使用 React 来创建 Android 和 IOS 的原生应用
- React 360 是一个创建 3D 和 VR 用户交互的框架

**干的怎么样**

- 优点：
  1. 开发团队和社区强大
  2. 一次学习，随处编写
  3. API 比较简洁
- 缺点：
  - 没有官方系统解决方案，选型成本高
  - 过于灵活，不容易写出高质量的应用

**其他扩展**

- JSX 实现声明式
- 虚拟 DOM 可以实现跨平台
- React 使用的设计模式
- 自己 React 大型架构经验

## 为什么 React 会引入 JSX？

**思路**

- 解释概念
- 想实现什么目的？
- 有哪些可选方案，为什么这个方案最好
- JSX 的工作原理

**JSX 是什么**

- JSX 是一个`javascript`的语法扩展，JSX 可以很好的描述 UI 应该呈现出它应有交互的本质形式
- JSX 其实是`React.createElement()`的语法糖

**React 想实现什么目的**

- 需要实现声明式
- 代码结构需要非常清晰和简洁，可读性强
- 结构、样式和事件等能够实现高内聚低耦合，方便重用和组合
- 不想引入新的概念和语法，只写 JavaScript

**为什么 JSX 最好**

模板

- Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据
- 引入太多概念，比如 Angular 就引入了控制器、作用域、服务等概念

**JSX 工作原理**

AST 抽象语法树

- 抽象语法树是源代码语法结构的一种抽象表示，它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源码中的一种结构。

react17 有新的 jsx 转换：

- 旧的转换：`"runtime": "classic"`，需要引入 React
- 新的转换：`"runtime": "automatic"`, 会自动引入 jsx jsx()，不需要引入 React

## 小顶堆

## 函数组件和类组件的相同点和不同点？

组件：组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思。

**相同点：**

- 它们都可以接收属性并且返回 React 元素

**不同点：**

- 编程思想不同：类组件需要创建实例，是基于面向对象的方式编程。而函数式组件不需要创建实例，接收输入，返回输出，是基于函数式编程的思想写的
- 内存占用：类组件需要创建并保存实例，会占用一定的内存。函数组件不许需要创建实例，可以节约内存占用
- 捕获特性：函数组件具有值捕获特性
- 可测试性：函数式组件更方便编写单元测试
- 状态：类组件有自己的实例，可以定义状态，而且可以修改状态更新组件。函数式组件以前没有状态，现在可以使用 useState 使用状态
- 生命周期：类组件有自己完整的生命周期，可以在生命周期内编写逻辑，函数组件以前没有生命周期，现在可以使用 useEffect 实现类似生命周期的功能
- 逻辑复用：类组件可以通过继承实现逻辑的复用，但官方推荐组件优于继承，函数组件可以通过自定义 Hook 实现逻辑的复用
- 跳过更新：类组件可以通过`shouldComponentUpdate`和`PureComponent`来跳过更新，而函数式组件可以使用`React.memo`来跳过更新
- 发展前景：未来函数式组件将会成为主流，因为它可以更好的屏蔽 this 问题、规范和复用逻辑、更好的适合时间切片和并发渲染

**react 源码如何区分函数组件（functionComponent）和类组件 (classComponent)？**

## 值捕获特性

## 有状态组件和无状态组件，它们两个怎么区别？

有状态组件就是一个类，无状态组件是一个函数；

**区别**

- 是否拥有 state）有状态组件可以使用状态：state，无状态组件不能使用 state；只有继承 component 这个组件它才能拥有 state 进行一些数据的存储和管理，仍然可以拥有 props；
- （生命周期）如果是有状态组件的话那么你就会拥有生命周期函数，无状态组件就不用有生命周期函数，因为数据的更改都是通过状态进行更改。使用 props 进行组件间的通信进行传值，如果要更改某一些数据的话使用的是 state，既然数据可以发生变化那么它就会触发对应的生命周期函数；
- 有状态组件能使用 this，无状态组件不能使用 this；

只有在需要管理状态或者需要使用生命周期时使用有状态组件，否则使用无状态组件。

react16.8 新增了 hooks，函数组件也可以管理状态。

## 受控组件和非受控组件

React 中的组件根据是否受 React 控制可分为受控的和非受控的。

**受控组件**

1. 表单元素依赖于状态，表单元素需要默认值实时映射到状态的时候，就是受控组件，这个和双向绑定相似。
2. 受控组件，表单元素的修改会实时映射到状态值上，此时就可以对输入的内容进行校验。
3. 受控组件只有继承 React.Component 才会有状态。
4. 受控组件必须要在表单上使用 onChange 事件来绑定对应的事件，输入的值始终由 React 的 state 驱动。

受控组件更新 state 的流程：

1. 可以通过初始 state 中设置表单的默认值
2. 每当表单的值发生变化时，调用 onChange 事件处理器
3. 事件处理器通过事件对象 event 拿到改变后的状态，并更新组件的 state
4. 通过 setState 方法更新 state，就会触发视图的重新渲染，完成表单组件的更新

**非受控组件** 在底层实现时是在其内部维护了自己的状态 state，这样表现出用户输入任何值都能反应到元素上。

## react 高阶组件和普通组件的区别，适合在什么场景下用？

**高阶组件其实并不是组件，只是一个函数而已**。它接收一个组件作为参数，返回一个新的组件。我们可以在新的组件中做一些功能增加，渲染原有的组件。这样返回的组件增强了功能，但渲染与原有保持一致，没有破坏原有组件的逻辑。

因此在提取不同类别组件**相似的行为**时，高阶组件是非常合适的选择。举例说明的话，组件异步加载、异步加载 script 后显示组件、数据源绑定、拖拽排序。

- 高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧
- 高阶组件的参数为一个组件返回一个新的组件
- 组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件

## React 中很好用，但又不建议用的 context，它的作用和传递？

https://juejin.cn/post/6896353934525497357

## React 组件通信的方式

1. props \
   父组件向子组件传值：props \
   子组件向父组件传值：父组件向子组件通过事件形式传递 props，子组件通过 events 给父组件发送消息，实际上就是子组件把自己的数据发送到父组件 \
   兄弟组件间传值：通过父组件
2. context
3. 状态管理
4. EventEmitter

## 合成事件

**合成事件的背景：**

如果 DOM 上绑定了过多的事件处理函数，整个页面响应以及内存占用可能都会受到影响。React 为了避免这类 DOM 事件滥用，同时屏蔽底层不同浏览器之间的事件系统差异，实现了一个中间层——SyntheticEvent。

**合成事件原理：**

React 并不是将 click 事件绑在该 div 的真实 DOM 上，而是在 document 处监听所有支持的事件，当事件发生并冒泡至 document 处时，React 将事件内容封装并交由真正的处理函数运行。

**合成事件总结：**

- 合成事件的监听器是统一注册在 document 上的，且仅有冒泡阶段。所以原生事件的监听器响应总是比合成事件的监听器早
- 阻止原生事件的冒泡后，会阻止合成事件的监听器执行

https://juejin.cn/post/6844903988794671117

## virtual dom

**virtual dom 是什么**

- `React.createElement()`函数所返回的就是一个虚拟 DOM
- 虚拟 DOM 就是一个描述真实 DOM 的纯 JS 对象

**优点**

- 处理了浏览器兼容性问题，避免用户操作真实 DOM（又麻烦又容易出错）
- 内容经过了 XSS 处理，可以预防 XSS 攻击
- 容易实现跨平台开发 Android、IOS、VR 应用
- 更新的时候可以实现差异化更新，减少 DOM 的操作

**缺点**

- 虚拟 DOM 需要消耗额外的内存
- 首次渲染其实并不一定会更快

**virtual dom 渲染成真实 dom 后，占用内存会释放吗**

会的

虚拟 DOM（VDOM）它是真实 DOM 的内存表示，一种编程概念，一种模式。它会和真实的 DOM 同步，比如通过 ReactDOM 这种库，这个同步的过程叫做调和 (reconcilation)。

虚拟 DOM 更多是一种模式，不是一种特定的技术。

https://segmentfault.com/a/1190000019994425

## 虚拟 dom 一定更快吗？

1. 初次渲染的时候，其实并不快。
2. 在更新的时候，更新的元素内容比较少，它可以实现精准的定量更新，不需把全部的 DOM 元素删除重添加
3. 虚拟 DOM 的优势肯定不是更快，而是：跨平台、增量更新、处理兼容性问题。..

react 中涉及到虚拟 DOM 的代码主要分为以下三部分，其中核心是第二步的 domDiff 算法：

- 把 render 中的 JSX（或者 createElement 这个 API) 转化成虚拟 DOM
- 状态或属性改变后重新计算虚拟 DOM 并生成一个补丁对象 (domDiff)
- 通过这个补丁对象更新视图中的 DOM 节点

干前端的都知道 DOM 操作是性能杀手，因为操作 DOM 会引起页面的回流或者重绘。相比起来，通过多一些预先计算来减少 DOM 的操作要划算的多。

但是，“使用虚拟 DOM 会更快”这句话并不一定适用于所有场景。例如：一个页面就有一个按钮，点击一下，数字加一，那肯定是直接操作 DOM 更快。使用虚拟 DOM 无非白白增加了计算量和代码量。即使是复杂情况，浏览器也会对我们的 DOM 操作进行优化，大部分浏览器会根据我们操作的时间和次数进行批量处理，所以直接操作 DOM 也未必很慢。

那么为什么现在的框架都使用虚拟 DOM 呢？因为使用虚拟 DOM 可以提高代码的性能下限，并极大的优化大量操作 DOM 时产生的性能损耗。同时这些框架也保证了，即使在少数虚拟 DOM 不太给力的场景下，性能也在我们接受的范围内。

而且，我们之所以喜欢 react、vue 等使用了虚拟 DOM 框架，不光是因为他们快，还有很多其他更重要的原因。例如 react 对函数式编程的友好，vue 优秀的开发体验等。

## setState 过程

setState 之后发生了什么

**简单版本：**
React 利用状态队列机制实现了 setState 的“异步”更新，避免频繁的重复更新 state。

首先将新的 state 合并到状态更新队列中，然后根据更新队列和 shouldComponentUpdate 的状态来判断是否需要更新组件。

**复杂版本：**

- enqueueSetState 将 state 放入队列中，并调用 enqueueUpdate 处理要更新的 Component
- 如果组件当前正处于 update 事务中，则先将 Component 存入 dirtyComponent 中。否则调用 batchedUpdates 处理。
- batchedUpdates 发起一次 transaction.perform() 事务
- 开始执行事务初始化，运行，结束三个阶段
  - 初始化：事务初始化阶段没有注册方法，故无方法要执行
  - 运行：执行 setSate 时传入的 callback 方法
  - 结束：更新 isBatchingUpdates 为 false，并执行 FLUSH_BATCHED_UPDATES 这个 wrapper 中的 close 方法，FLUSH_BATCHED_UPDATES 在 close 阶段，会循环遍历所有的 dirtyComponents，调用 updateComponent 刷新组件，并执行它的 pendingCallbacks, 也就是 setState 中设置的 callback。

https://juejin.cn/post/6844903781813993486#heading-9

## setState 是同步还是异步

在 React 中，如果是由 React 引发的事件处理（比如通过 onClick 引发的事件处理），调用 setState 不会同步更新 this.state，除此之外的 setState 调用会同步执行 this.state 。所谓“除此之外”，指的是绕过 React 通过 addEventListener 直接添加的事件处理函数，还有通过 setTimeout/setInterval 产生的异步调用。

原因： 在 React 的 setState 函数实现中，会根据一个变量 isBatchingUpdates 判断是直接更新 this.state 还是放到队列中回头再说，而 isBatchingUpdates 默认是 false，也就表示 setState 会同步更新 this.state，但是，有一个函数 batchedUpdates，这个函数会把 isBatchingUpdates 修改为 true，而当 React 在调用事件处理函数之前就会调用这个 batchedUpdates，造成的后果，就是由 React 控制的事件处理过程 setState 不会同步更新 this.state。

注意： setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的 callback 拿到更新后的结果。

综上，setState 只在合成事件和 hook() 中是“异步”的，在 原生事件和 setTimeout 中都是同步的。

## 在 shouldComponentUpdate 或 componentWillUpdate 中使用 setState 会发生什么？

当调用 setState 的时候，实际上会将新的 state 合并到状态更新队列中，并对 partialState 以及 \_pendingStateQueue 更新队列进行合并操作。最终通过 enqueueUpdate 执行 state 更新。

如果在 shouldComponentUpdate 或 componentWillUpdate 中使用 setState，会使得 state 队列（\_pendingStateQueue）不为 null，从而调用 updateComponent 方法，updateComponent 中会继续调用 shouldComponentUpdate 和 componentWillUpdate，因此造成死循环。

## fiber

**Fiber 出现的背景**

首先要知道的是，JavaScript 引擎和页面渲染引擎两个线程是互斥的，当其中一个线程执行时，另一个线程只能挂起等待。

在这样的机制下，如果 JavaScript 线程长时间地占用了主线程，那么渲染层面的更新就不得不长时间地等待，界面长时间不更新，会导致页面响应度变差，用户可能会感觉到卡顿。

而这正是 React 15 的 Stack Reconciler 所面临的问题，即是 JavaScript 对主线程的超时占用问题。Stack Reconciler 是一个同步的递归过程，使用的是 JavaScript 引擎自身的函数调用栈，它会一直执行到栈空为止，所以当 React 在渲染组件时，从开始到渲染完成整个过程是一气呵成的。如果渲染的组件比较庞大，js 执行会占据主线程较长时间，会导致页面响应度变差。

而且所有的任务都是按照先后顺序，没有区分优先级，这样就会导致优先级比较高的任务无法被优先执行。

**Fiber 是什么**

Fiber 的中文翻译叫纤程，与进程、线程同为程序执行过程，Fiber 就是比线程还要纤细的一个过程。纤程意在对渲染过程实现进行更加精细的控制。

从架构角度来看，Fiber 是对 React 核心算法（即调和过程）的重写。

从编码角度来看，Fiber 是 React 内部所定义的一种数据结构，它是 Fiber 树结构的节点单位，也就是 React 16 新架构下的"虚拟 DOM"。

一个 fiber 就是一个 JavaScript 对象，Fiber 的数据结构如下：

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

**Fiber 如何解决问题的**

Fiber 把一个渲染任务分解为多个渲染任务，而不是一次性完成，把每一个分割得很细的任务视作一个"执行单元"，React 就会检查现在还剩多少时间，如果没有时间就将控制权让出去，故任务会被分散到多个帧里面，中间可以返回至主进程控制执行其他任务，最终实现更流畅的用户体验。

即是实现了"增量渲染"，实现了可中断与恢复，恢复后也可以复用之前的中间状态，并给不同的任务赋予不同的优先级，其中每个任务更新单元为 React Element 对应的 Fiber 节点。

**Fiber 实现原理**

实现的方式是 requestIdleCallback 这一 API，但 React 团队 polyfill 了这个 API，使其对比原生的浏览器兼容性更好且拓展了特性。

`requestIdleCallback`只有 Chrome 支持，react 为了兼容性，使用 MessageChannel + requestAnimationFrame 模拟了一个`requestIdleCallback`。

> window.requestIdleCallback() 方法将在浏览器的空闲时段内调用的函数排队。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间 timeout，则有可能为了在超时前执行函数而打乱执行顺序。

requestIdleCallback 回调的执行的前提条件是当前浏览器处于空闲状态。

即 requestIdleCallback 的作用是在浏览器一帧的剩余空闲时间内执行优先度相对较低的任务。首先 React 中任务切割为多个步骤，分批完成。在完成一部分任务之后，将控制权交回给浏览器，让浏览器有时间再进行页面的渲染。等浏览器忙完之后有剩余时间，再继续之前 React 未完成的任务，是一种合作式调度。

简而言之，由浏览器给我们分配执行时间片，我们要按照约定在这个时间内执行完毕，并将控制权还给浏览器。

React 16 的 Reconciler 基于 Fiber 节点实现，被称为 Fiber Reconciler。

作为静态的数据结构来说，每个 Fiber 节点对应一个 React element，保存了该组件的类型（函数组件 / 类组件 / 原生组件等等）、对应的 DOM 节点等信息。

作为动态的工作单元来说，每个 Fiber 节点保存了本次更新中该组件改变的状态、要执行的工作。

每个 Fiber 节点有个对应的 React element，多个 Fiber 节点是如何连接形成树呢？靠如下三个属性：

```
// 指向父级Fiber节点
this.return = null
// 指向子Fiber节点
this.child = null
// 指向右边第一个兄弟Fiber节点
this.sibling = null
```

https://zhuanlan.zhihu.com/p/57346388

## component，element，instance 区别和联系

一个元素 element 是一个普通对象 (plain object)，描述了对于一个 DOM 节点或者其他组件 component，你想让它在屏幕上呈现成什么样子。元素 element 可以在它的属性 props 中包含其他元素（用于形成元素树）。创建一个 React 元素 element 成本很低。元素 element 创建之后是不可变的。

一个组件 component 可以通过多种方式声明。可以是带有一个 render() 方法的类，简单点也可以定义为一个函数。这两种情况下，它都把属性 props 作为输入，把返回的一棵元素树作为输出。

一个实例 instance 是你在所写的组件类 component class 中使用关键字 this 所指向的东西（组件实例）。它用来存储本地状态和响应生命周期事件很有用。

函数式组件 (Functional component) 根本没有实例 instance。类组件 (Class component) 有实例 instance，但是永远也不需要直接创建一个组件的实例，因为 React 帮你做了这些。

## 错误处理

https://github.com/HuJiaoHJ/blog/issues/12

## key 如果不写，源码会自己加上去吗？

不会，如果不写，就是 undefined, 在 domDiff 的时候就会使用索引来对比

## 在 react 中如何避免不必要的 render

shouldComponentUpdate、memoization、PureComponent

Key useMemo

## PureComponent

PureComponent 纯组件 也继承自 React.Component，它内部封装了 shouldComponentUpdate

## shouldComponentUpdate

深比较的话性能比较差了

又想实现深比较的效果，又想性能好，就得靠 immuertablejs（以前）、immer（现在）

## 请说一下 react 中的渲染流程

思路：

- 宏观的设计理念
- 关键原理清晰描述，抽象和具象相结合
- 结合工程实践和工作成果

**设计理念**

- 跨平台渲染 --> 虚拟 DOM
- 快速响应 --> 异步可中断 + 增量更新

**性能瓶颈**

- js 任务执行时间过长
  - 浏览器刷新频率为 60Hz，大概 16.6 毫秒渲染一次，而 js 线程和渲染线程是互斥的，所以如果 js 线程执行任务时间超过 16.6md 的话，就会导致掉帧，导致卡顿，解决方案就是 react 利用空闲的时间进行更新，不影响渲染进行的渲染
  - 把一个耗时任务切分成一个个小任务，分布在每一帧里的方式就叫时间切片

**案例**

- concurrent-mode
- concurrent-mode-adoption

**react16+ 的渲染流程**

- scheduler：调度 选择高优先级的任务进入 reconciler
- reconciler：调和（是可中断的） 计算变更的内容
- react-dom：提交 把变更的内容渲染到页面上

**屏幕刷新率**

- 目前大多数设备的屏幕刷新频率为 60 次每秒
- 浏览器渲染动画或页面的每一帧的速率也需要跟设备屏幕的刷新率保持一致
- 页面是一帧一帧绘制出来的，当每秒绘制的帧数（FPS）达到 60 时，页面是流畅的，小于这个值时，用户会感觉到卡顿
- 每个帧的预算时间是 16.66 毫秒（1 秒 /60）
- 1s60 帧，所以每一帧的时间是 1000/60≈16ms，所以我们书写代码时力求不让一帧的工作量超过 16ms

**帧**

- 每个帧的开头包括样式计算、布局和绘制
- JavaScript 执行 javascript 引擎和页面渲染引擎在同一个渲染线程，GUI 渲染和 javascript 执行两者是互斥的
- 如果某个任务执行时间过长，浏览器会推迟渲染

**requestIdleCallback**

- 我们希望快速响应用户，让用户觉得够快，不能阻塞用户的交互
- requestIdleCallback 使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应
- 正常帧任务完成后没超过 16ms 说明时间有富余，此时就会执行`requestIdleCallback`里注册的任务

**同步写法，现在的官方版本，默认还是异步**

`ReactDOM.render(<App />,document.getElementById('root'))`

**异步写法**
`ReactDOM.unstable_createRoot(document.getElementById('root')).render(<App />)`

**如果申请的任务，执行时间特别长什么时候归还？**

这个是谁申请，谁决定什么时候归还（还钱），如果没归还，浏览器也没办法（合作式调度，君子协定）

什么时候归还？ 1. 任务完成了 2. 本帧没有剩余时间了

**异步的写法缺陷或限制**

异步写法反而把执行时间变长了（原来 50ms 就做完了，现在干 5ms 休息一下，时间就拉长了）

**如何确定一个任务的时长**

一帧 16.6ms，你的任务肯定不能超过 16.6ms，浏览器它自己的工作大概需要 10ms，所以留给你只有 5ms

**任务都分片了，每个任务都不是重新开始的，而是增量进行的**

**这种调度怎么兼容以前的生命周期**

为了异步操作让步，`componentWillMount` `componentWillUpdate` `componentWillReceiveProps`这三个生命周期被废弃了。

**fiber**

- 我们可以通过某些调度策略合理分配 CPU 资源，从而提高用户的响应速度
- 通过 fiber 架构，让自己的调和过程变成可被中断，适时地让出 CPU 执行权，可以让浏览器及时的响应用户的交互

fiber 是一个执行单元

- fiber 是一个执行单元，每次执行完一个执行单元，react 就会检查现在还剩多少时间，如果没有时间就将控制权让出去

**默认的同步渲染，使用 fiber 了吗**

默认的同步渲染，也使用了 fiber，只不过没有暂停

## 异步渲染和 fiber 之间的联系

每个 fiber 代表异步渲染的一个小任务

## 性能优化

https://github.com/brickspert/blog/issues/36

## React 本身的数据管理是什么样的？

react 是自上而下的单向组件数据流，容器组件 & 展示组件（也叫傻瓜组件 & 聪明组件）是最常用的 react 组件设计方案，容器组件负责处理复杂的业务逻辑以及数据，展示组件负责处理 UI 层，通常我们会将展示组件抽出来进行复用或者组件库的封装，容器组件自身通过 state 来管理状态，setState 更新状态，从而更新 UI，通过 props 将自身的 state 传递给展示组件实现通信。

https://www.pianshen.com/article/4135347812/

## 讲讲 mobx 的数据流是什么样的？

在控制流上，mobx 也应用的单向数据流模式。

mobx 的核心思想：状态变化引起的副作用应该被自动触发

在 mobx 中它的这句话包括了两方面的意思：

1. 应用逻辑只需要修改状态数据即可，mobx 会自动触发些缓存，渲染 UI 等这些业务经历的副作用，无需人工干预。
2. 副作用依赖哪些状态数据是被自动收集的，比如某个副作用依赖 A 和 B，那么如果状态 C 发生变化，这个副作用是不会被触发的，这是 mobx 最吸引人的特性之一，也是 mobx 能够轻易优化渲染性能的关键所在。

## 面试题

1.redux 中间件的原理是什么？

2.你会把数据统一放到 redux 中管理，还是共享数据放在 redux 中管理？
Immutable
3.componentWillReceiveProps 的调用时机

4.react 性能优化的最佳实践

5.虚拟 dom 是什么？为什么虚拟 dom 会提升代码性能？
js 对象
6.webpack 中，是借助 loader 完成的 jsx 代码的转化，还是 babel？
Babel-preset-react 7.调用 setState 后，发生了什么？

8.setState 是异步的，这个点你在什么时候遇到过坑？

9.refs 的作用是什么，你在什么业务场景下使用过 refs？
获取元素的尺寸。比如做放大镜
10.ref 是一个函数，有什么好处？
防止内存泄漏 11.高阶组件你是怎么理解的，它本质是一个什么东西？

12.受控组件与非受控组件的区别

13.函数组件和 hooks

14.this 指向问题你一般怎么解决

15.函数组件怎么做性能优化
React.memo 包装一下 相当于 PureComponent 16.哪个生命周期里发送 ajax?
componentDidMount
componentWillMount 在新版本 react 中已经被废弃了
ssr 项目时，componentWillMount 要做服务器端数据的获取，所以不能被占用
17.ssr 的原理是什么？
借助虚拟 dom 在服务器端执行 react 代码
18.redux-saga 的设计思想是什么？什么是 sideEffcts？

19.react、jQuery、Vue 是否有可能共存在一个项目中？
可以 20.组件是什么？类是什么？类被编译成什么？
//模块 webpack
//组件指的是页面的一部分
//类是一个构造函数 21.你是如何跟着社区成长的？
Twitter 22.如何避免 ajax 数据重新获取？
redux 状态管理
23.react-router4 的核心思想是什么？和 3 有什么区别？
路由 4 先进灵活
24.immutable.js 和 redux 的最佳实践？

25.reselect 是做什么使用的
计算属性
26.react-router 的基本原理，hashHistory，browserHistory
browserHistory 需要后端服务器配合，hashHistory 不需要 27.什么情况下使用异步组件
Reloadable 库 路由懒加载、按需加载
import ('./home/header').then
Require.ensure
28.xss 攻击在 react 中如何防范
`DangerouslySetInnerHTML={{_html:<script>alert(1)</script>'}}`
29.getDeivedStateFromProps,getSnapshotBeforeUpdate
