# 组件中的`key`

每个组件都有一个虚拟`DOM`元素，当组件被更新或删除时，`react`需要确定如何匹配新旧元素，以确保正确更新和渲染（`domDiff算法`）。这一过程需要使用`key`属性来帮助`react`进行唯一性标识。

优点：

1. 性能优化：`key`属性帮助`react`识别唯一的组件，从而可以更高效地更新和重渲染。
2. 列表操作：`key`属性使`react`能够准确处理列表的增加、更新和删除操作。
3. 组件重用：`key`属性有助于确保组件的唯一性，使组件能够被正确复用。

局限性：

1. 全局唯一性：`key`属性必须在整个组件树中具有唯一性，需要小心处理。
2. 不可变性：如果`key`属性发生变化，可能会导致`react`不正确地处理组件。
3. 不宜滥用：不应滥用`key`属性，应该只在需要时使用，以避免复杂性。

## `key`如果不写，源码会自己加上去吗

不会，如果不写，就是`undefined`, 在`domDiff`的时候就会使用索引来对比。
