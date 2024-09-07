# `react`生命周期

## 生命周期

1. 初始化阶段：当组件实例被创建并挂载到`DOM`中时，会执行这些生命周期方法。

   - `constructor()`：构造函数，用于初始化组件的状态和绑定事件处理函数等。
   - `static getDerivedStateFromProps()`：该方法用于根据`props`的变化更新组件的状态。它接收两个参数：`props`和`state`，并返回一个新的`state`对象。在该方法中，应该避免使用`this`关键字，因为它不能访问组件的实例。
   - `render()`：`render`方法是`react`组件的核心方法，用于根据`props`和`state`生成虚拟`DOM`。
   - `componentDidMount()`：组件已经被插入到`DOM`中后调用，通常用于发送网络请求、获取数据等副作用操作。

2. 更新阶段：当组件的`props`或`state`发生变化时，会执行这些生命周期方法。

   - `static getDerivedStateFromProps()`：更新组件的状态，与初始化阶段（挂载阶段）相同。
   - `shouldComponentUpdate()`：该方法用于判断组件是否需要更新，返回一个布尔值。默认情况下，每次父组件更新都会导致子组件的更新，但是在性能要求较高的场景下，我们可以通过重写这个方法来避免无必要的更新。深比较的话性能比较差了。又想实现深比较的效果，又想性能好，就得靠`immuertablejs`（以前）、`immer`（现在）来实现。
   - `render()`：更新组件的虚拟`DOM`。
   - `getSnapshotBeforeUpdate()`：
   - `componentDidUpdate()`：组件更新完成后调用，通常用于处理更新后的`DOM`操作、网络请求等副作用操作。

3. 卸载阶段：当组件从`DOM`中卸载时，会执行这个生命周期方法。
   - `componentWillUnmount()`：组件即将被卸载时调用，用于清理组件并处理一些必要的操作，例如清除定时器、取消网络请求等。

> 注意：为了给异步操作让步，`componentWillMount` `componentWillUpdate` `componentWillReceiveProps`这三个生命周期被废弃了。

## 合理地管理组件生命周期

1. 避免在`render()`方法中进行副作用操作。\
   `render()`方法负责生成组件的虚拟`DOM`，并且应保持纯净，不应该包含任何副作用操作。副作用操作包括网络请求、事件绑定等。应该在`componentDidMount()`和`componentDidUpdate()`方法中执行这些操作。
2. 使用`shouldComponentUpdate()`优化性能。\
   在默认情况下，`react`会自动更新所有的子组件。但是在一些情况下，一些子组件并不需要被更新，这时我们可以重写`shouldComponentUpdate()`方法，根据确定是否需要更新组件。这样可以减少不必要的`DOM`操作，提高应用性能。
3. 合理使用`getDerivedStateFromProps()`方法。\
   在`react16.3`版本之后，新增了`getDerivedStateFromProps()`方法，用于更新组件状态。但是，由于该方法会在每次渲染时都被调用，频繁地在该方法中修改状态可能会导致性能问题。因此，应该尽量避免在该方法中进行复杂的操作。
4. 正确地处理异步操作。\
   在组件中经常会涉及到异步操作，例如网络请求、定时器等。在处理这些异步操作时，我们应该合理地使用`componentDidMount()`和`componentWillUnmount()`方法，确保在组件初始化时进行相关操作，并在组件卸载时及时进行清理工作，避免内存泄漏等问题。

## 在`shouldComponentUpdate`或`componentWillUpdate`中使用`setState`会发生什么？

当调用`setState`的时候，实际上会将新的`state`合并到状态更新队列中，并对`partialState`以及`_pendingStateQueue`更新队列进行合并操作。最终通过`enqueueUpdate`执行`state`更新。

如果在`shouldComponentUpdate`或`componentWillUpdate`中使用`setState`，会使得`state`队列（`_pendingStateQueue`）不为`null`，从而调用`updateComponent`方法，`updateComponent`中会继续调用`shouldComponentUpdate`和`componentWillUpdate`，因此造成死循环。
