# `vue3`的`Composition API`

## `Composition API`是什么

`Composition API`是`vue3`中新增的一组`API`，它允许开发者使用函数式编程的方式来组织和复用组件逻辑。与`vue2`中的`Options API`（如`data`、`methods`、`computed`等选项）不同，`Composition API`提供了一种更加灵活和可组合的方式来编写组件逻辑。

## 为什么需要`Composition API`

1. 更好的代码组织：随着组件功能的增加，`Options API`可能会导致代码难以维护和理解。`Composition API`通过将逻辑拆分为多个可复用的函数，提高了代码的可读性和可维护性。
2. 逻辑复用：在`Options API`中，复用逻辑通常需要通过`mixins`或高阶组件实现，但这些方式可能导致命名冲突和关系不清晰（模版中的数据来源不清晰）。`Composition API`中的函数可以像普通`JavaScript`函数一样被复用，无需担心命名冲突。
3. 更好的`TypeScript`支持：`vue3`与`TypeScript`的集成更加紧密，而`Composition API`的函数式编程风格更适合 `TypeScript`的类型推断和静态检查。

## `Composition API`的核心概念

1. `reactive`和`ref`：这两个函数用于创建响应式数据。`reactive`用于创建响应式对象，而`ref`用于创建响应式引用。它们都是`vue3`响应式系统的核心。
   - `reactive`：返回一个响应式代理对象，该对象在被访问或修改时会触发相应的依赖更新。
   - `ref`：返回一个响应式引用对象，其内部值可以通过`.value`属性访问或修改。
2. `computed`：用于创建计算属性。计算属性是基于响应式数据派生出的新数据，当依赖的数据变化时，计算属性会自动更新。
3. `watch`和`watchEffect`：用于侦听响应式数据的变化，并在数据变化时执行相应的回调函数。
   - `watch`：需要显式指定侦听的数据源和回调函数，支持立即执行、深度侦听等选项。
   - `watchEffect`：自动侦听回调函数中使用的响应式数据，无需显式指定数据源。当回调函数中使用的数据变化时，`watchEffect`会自动重新执行回调函数。
4. `setup`函数：`Composition API`的入口函数，用于替代`vue2`中的`data`、`methods`、`computed`等选项。在`setup`函数中，开发者可以定义和导出组件所需的响应式数据、计算属性、方法等。

## 使用`Composition API`编写组件

```vue
<template>
  <div>
    <p>{{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const count = ref(0); // 定义响应式引用 count，初始值为 0
    const increment = () => {
      // 定义方法 increment，用于增加 count 的值
      count.value++; // 修改响应式引用的值时，需要使用 .value 属性
    };
    return {
      // 导出 count 和 increment，供模板中使用
      count,
      increment,
    };
  },
};
</script>
```
