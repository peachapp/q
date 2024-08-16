# `vuex`

## `vuex`简介

`vuex`是单向数据流还是双向数据流？

`vuex`是单向数据流，必须通过`vuex`提供的`Mutations`或者`Actions`修改，在组件中直接修改会报错。

`vuex`是一个专为`vue.js`应用程序开发的状态管理工具。它采用集中式存储，管理应用所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

`vuex`应用的核心就是`store`（仓库）。`store`基本上就是一个容器，它包含着应用中大部分的状态 (`State`)。

`vuex`中的状态和单纯的全局对象区别：

1. `vuex`的状态存储是响应式的。当`vue`组件从`store`中读取状态的时候，若`store`中的状态发生变化，那么相应的组件也会得到高效更新。
2. 不能直接改变`store`中的状态。改变`store`中的状态的唯一途径就是显式地提交 (`commit`) `mutation`。这样可以方便地跟踪每一个状态的变化，从而更好地了解我们的应用。

一句话介绍：

`vuex`实现了一个单向数据流，在全局拥有一个`State`存放数据，当组件要更改`State`中的数据时，必须通过`Mutation`进行修改，`Mutation`同时提供了订阅者模式供外部插件调用获取`State`数据的更新。而当所有异步操作（常见于调用后端接口异步获取更新数据）或批量的同步操作需要走`Action`，但`Action`也无法直接修改`State`，还是需要提交`Mutation`来修改`State`的数据。最后，根据`State`的变化，渲染到视图上。

## `vuex`的核心概念或者属性

`State`、`Getters`、`Mutations`、`Actions`、`Modules`。

## `State`：类似于组件中的`data`

`vuex`使用单一状态树，`State`是`vuex`的基本数据，用来存储变量。

## `Getters`：类似于组件中的`computed`

`Getters`从基本数据 (`State`) 派生的数据，相当于`State`的计算属性。

## `Mutations`：类似于组件中的`methods`

`Mutations`是提交更新数据的方法，必须是同步的（如果异步操作需要使用`action`）。每个`Mutation`都有一个字符串的事件类型 (`type`) 和一个回调函数 (`handler`)。回调函数就是实际进行状态更改的地方，并且它会接受`State`作为第一个参数，提交载荷作为第二个参数。

## `Actions`：用于提交`Mutations`

`Actions`和`Mutations`的功能大致相同，不同之处在于：

1. `Actions`提交的是`Mutations`，而不是直接变更状态。
2. `Actions`可以包含任意异步操作。

## `Modules`：把以上四个属性再细分，让仓库更好管理

模块化`vuex`，可以让每一个模块拥有自己的`State`、`Getters`、`Mutations`、`Actions`, 使得结构非常清晰，方便管理。

## 修改数据的方法

- `dispatch`：用于触发`actions`，它接收一个`action`的`type`和`payload`作为参数。\
  异步操作，写法：`this.$store.dispatch('action的type名',值)`。
- `commit`：用于触发`mutations`，它接收一个`mutation`的`type`和`payload`作为参数。\
  同步操作，写法：`this.$store.commit('mutation的type名',值)`。

## `Mutations`和`Actions`的区别

- `Mutations`：都是同步事务。
- `Actions`：提交的是`Mutations`，而不是直接更改状态，可以包含异步操作。

## `vuex`数据持久化

`vuex`是`vue`的状态管理器，存储的数据是响应式的。但是并不会保存起来，刷新之后就回到了初始状态（`vuex`本身不是持久化存储）。

1. 使用`cookie`或`localStorage`做持久化存储。具体做法是在`vuex`中数据改变的时候把数据拷贝一份保存到`cookie`或`localStorage`里面，刷新之后，如果`cookie`或`localStorage`里有保存的数据，取出来作为`store`中`state`的初始数据。
2. 使用`vue`插件`vuex-persist`或`vuex-persistedstate`或`vuex-plugin-persistedstate`实现数据、状态持久化。
