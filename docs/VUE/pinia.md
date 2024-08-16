# `pinia`

## `pinia`的核心概念或者属性

`state`、`getters`、`actions`。

## 与`vuex`的区别

- 没有`mutation`，只有`action`。
- 完美支持`ts`。`vuex`支持`ts`还需要做一些额外的工作。
- 没有命名空间模块，`pinia`的`store`是扁平化结构，创建的多个`store`都是相互隔离的，没有嵌套关系。
- 不再需要注入、导入函数。
