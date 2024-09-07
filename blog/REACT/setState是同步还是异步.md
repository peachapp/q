# `setState`是同步还是异步

在`React`中，如果是由`React`引发的事件处理（比如通过`onClick`引发的事件处理），调用`setState`不会同步更新`this.state`，除此之外的`setState`调用会同步更新`this.state`。所谓“除此之外”，指的是绕过`React`通过`addEventListener`直接添加的事件处理函数，还有通过`setTimeout/setInterval`产生的异步调用。

注意：`setState`的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数`setState(partialState, callback)`中的`callback`拿到更新后的结果。

综上，`setState`只在合成事件和`hook()`中是“异步”的，在原生事件和`setTimeout/setInterval`中都是同步的。
