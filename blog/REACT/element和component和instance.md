# `element`和`component`和`instance`

一个元素`element`是一个普通对象（`plain object`），描述了对于一个`DOM节点`或者其他组件`component`，你想让它在屏幕上呈现成什么样子。元素`element`可以在它的属性`props`中包含其他元素（用于形成元素树）。创建一个`react`元素`element`成本很低。元素`element`创建之后是不可变的。

一个组件`component`可以通过多种方式声明。可以是带有一个`render()`方法的类，简单点也可以定义为一个函数。这两种情况下，它都把属性`props`作为输入，把返回的一棵元素树作为输出。

一个实例`instance`是你在所写的组件类`component class`中使用关键字`this`所指向的东西（组件实例）。它用来存储本地状态和响应生命周期事件很有用。

函数组件（`Functional component`）根本没有实例`instance`。类组件（`Class component`）有实例`instance`，但是永远也不需要直接创建一个组件的实例，因为`react`帮你做了这些。
